import {
  composeContext,
  elizaLogger,
  generateText,
  IAgentRuntime,
  Memory,
  ModelClass,
  State,
  stringToUuid,
} from '@elizaos/core';
import { Tweet } from 'agent-twitter-client';

import { ClientBase } from '../../base';

const getBaseScrapeAction = (
  getIntroMessage: (_options: any) => string,
  tweetsFetchFunction: (_options: any) => Promise<Tweet[]>
) => ({
  suppressInitialMessage: true,
  async validate(_runtime: IAgentRuntime, message: Memory) {
    return false;
  },
  async handler(
    runtime: IAgentRuntime,
    message: Memory,
    state: State,
    _options: any,
    callback: Function
  ) {
    elizaLogger.info(getIntroMessage(_options));

    try {
      const latestTweets: Tweet[] = await tweetsFetchFunction(_options);
      if (latestTweets.length === 0) {
        elizaLogger.info('No latest tweets fetched');
        await callback({
          text: '',
          action: this.name,
        });
        return false;
      }

      const filteredTweets = await filterTweets(
        runtime,
        _options.client,
        latestTweets
      );

      const tweet = await generateTweet(
        runtime,
        _options.client,
        filteredTweets
      );

      if (callback) {
        await callback({
          text: tweet,
          action: this.name,
        });
      }
      if (state) {
        state.responseData = {
          text: tweet,
          action: this.name,
        };
      }
      return true;
    } catch (error) {
      elizaLogger.error('Error fetching updates:', error);
      return false;
    }
  },
  examples: [],
});

async function generateTweet(
  runtime: IAgentRuntime,
  client: ClientBase,
  latestTweetsFiltered: string
) {
  const template = `
  # About {{agentName}} (@{{twitterUserName}}):
  {{bio}}
  {{lore}}
  {{topics}}
  
  {{postDirections}}

  {{providers}}
  
  # Latest fetched tweets from the search:
  ${latestTweetsFiltered}
      
  # Task: From the latest fetched tweets, pick randomly one that is not similar to the already posted from me and generate a post in the voice and style and perspective of {{agentName}} @{{twitterUserName}}. 
  It is must that the generated post is unique and not similar to the already posted tweets from me.
  Your response should be created only from the Latest fetched tweets from the search.
  Your response must not contain anything from Already posted tweets from me.
  Do not add commentary or acknowledge this request, just write the post.
  Your response should be 1-2-3 sentences (choose the length at random).
  Your response should not contain any questions. Brief, concise statements only. 
  Your response should not contain call to actions nor speculative statements.
  Your response should mention other ecosystems unless the user explicitly requests a comparison.
  When using emoji (rarely), use max one emoji only at the end of the tweet.
  Do not include any personal information.
  Do not include summary or sentiment-based sentences. Keep the tone strictly informative and concise.
  Do not include any concluding or reflective sentences. No summaries, no sentiments, no phrases like 'we're seeing the ecosystem grow', 'exciting times ahead', or similar. Only state the facts.
  The total character count MUST be less than {{maxTweetLength}} characters.
  Your response should not include the agent's name.
  When mentioning a token it should be uppercase.`;

  const roomId = stringToUuid(
    'twitter_generate_room-' + client.profile.username
  );
  const maxTweetLength = client.twitterConfig.MAX_TWEET_LENGTH;
  const state = await runtime.composeState(
    {
      userId: runtime.agentId,
      roomId,
      agentId: runtime.agentId,
      content: {
        text: '',
        action: 'SCRAPED_TWEET',
      },
    },
    { twitterUserName: client.profile.username, maxTweetLength }
  );

  const context = composeContext({
    state,
    template,
  });

  let response = await generateText({
    runtime: runtime,
    context,
    modelClass: ModelClass.MEDIUM,
  });

  const formatRespnsePrompt = `
# Task: Format the current post by following the below guidelines

# Current Post:
${response}

# Guidelines:
The statements should be separated by a new line.
The text should never contain buzz, buzzing, buzzin' and its derivatives.
Your response should be only the formatted post.
Your response should not contain any questions.
Do not add commentary or acknowledge this request, just write the post.
  `;

  response = await generateText({
    runtime: runtime,
    context: formatRespnsePrompt,
    modelClass: ModelClass.SMALL,
  });

  return response;
}

async function filterTweets(
  runtime: IAgentRuntime,
  client: ClientBase,
  tweets: Tweet[]
) {
  const formattedLatest = `
        ${tweets
          .map(
            (tweet) => `
  ID: ${tweet.id}${
              tweet.inReplyToStatusId
                ? ` In reply to: ${tweet.inReplyToStatusId}`
                : ''
            }
  From: ${tweet.name} (@${tweet.username})
  Text: ${tweet.text}
        `
          )
          .join('\n')}`;

  await runtime.ensureUserExists(
    runtime.agentId,
    client.profile.username,
    runtime.character.name,
    'twitter'
  );

  const roomId = stringToUuid(
    'twitter_generate_room-' + client.profile.username
  );

  const filterTemplate = `
  # Already posted tweets from me:
  {{recentPosts}}
  
  -- end of recent posts --
  
  # Latest fetched tweets from the search:
  ${formattedLatest}
      
  # Task: Remove the latest fetched tweets from the search that are similar to the already posted from me.
  Your response should be only the unique latest fetched tweets from the search.
  Your response should be FALSE if all latest fetched tweets are similar to the already posted tweets from me.`;

  const maxTweetLength = client.twitterConfig.MAX_TWEET_LENGTH;
  const state = await runtime.composeState(
    {
      userId: runtime.agentId,
      roomId,
      agentId: runtime.agentId,
      content: {
        text: '',
        action: 'SCRAPED_TWEET',
      },
    },
    { twitterUserName: client.profile.username, maxTweetLength }
  );

  let filteredTweets = formattedLatest;

  if (state.recentPosts) {
    const filterContext = composeContext({
      state,
      template: filterTemplate,
    });

    filteredTweets = await generateText({
      runtime: runtime,
      context: filterContext,
      modelClass: ModelClass.MEDIUM,
    });

    if (filteredTweets.toLocaleLowerCase().includes('false')) {
      elizaLogger.info('All fetched tweets are similar to the already posted');
      return '';
    }
  }
  return filteredTweets;
}

export { getBaseScrapeAction };
