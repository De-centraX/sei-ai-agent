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

import { ClientBase } from '../../base';

export class BaseDataAction {
  name: string;
  getPrompt: (apiData: string) => string;
  getData: (
    runtime: IAgentRuntime,
    message: Memory,
    _options: any
  ) => Promise<string>;
  afterInitialTweet:
    | undefined
    | ((runtime: IAgentRuntime, tweet: string) => Promise<string>);

  constructor(
    name: string,
    getPrompt: (apiData: string) => string,
    getData: (
      runtime: IAgentRuntime,
      message: Memory,
      _options: any
    ) => Promise<string>,
    afterInitialTweet?: (
      runtime: IAgentRuntime,
      tweet: string
    ) => Promise<string>
  ) {
    this.name = name;
    this.getPrompt = getPrompt;
    this.getData = getData;

    if (afterInitialTweet) {
      this.afterInitialTweet = afterInitialTweet;
    }
  }

  buildAction() {
    const name = this.name;
    const generateTweet = this.generateTweet.bind(this);
    const getData: (
      runtime: IAgentRuntime,
      message: Memory,
      _options: any
    ) => string = this.getData.bind(this);
    const afterInitialTweet = this.afterInitialTweet?.bind(this);

    return {
      name,
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
        elizaLogger.info('Fetching data, Action:', name);

        try {
          const data = await getData(runtime, message, _options);

          const roomId = stringToUuid(
            'twitter_generate_room-' +
              _options.client.profile.username +
              '-' +
              name
          );

          let tweet = await generateTweet(
            runtime,
            _options.client,
            data,
            roomId
          );

          if (afterInitialTweet) {
            tweet = await afterInitialTweet(runtime, tweet);
          }

          if (callback) {
            await callback({
              text: tweet,
              action: name,
              roomId,
            });
          }
          if (state) {
            state.responseData = {
              text: tweet,
              action: name,
              roomId,
            };
          }
          return true;
        } catch (error) {
          console.log(error);
          elizaLogger.error(`(${name}) Error fetching data:`, error);
          return false;
        }
      },
      examples: [],
    };
  }

  async generateTweet(
    runtime: IAgentRuntime,
    client: ClientBase,
    apiData: string,
    roomId: `${string}-${string}-${string}-${string}-${string}`
  ) {
    const maxTweetLength = client.twitterConfig.MAX_TWEET_LENGTH;
    const state = await runtime.composeState(
      {
        userId: runtime.agentId,
        roomId,
        agentId: runtime.agentId,
        content: {
          text: '',
          action: `${this.name}_TWEET`,
        },
      },
      { twitterUserName: client.profile.username, maxTweetLength }
    );

    const template = this.getPrompt(apiData);

    const context = composeContext({
      state,
      template,
    });

    let response = await generateText({
      runtime: runtime,
      context,
      modelClass: ModelClass.LARGE,
    });

    const formatRespnsePrompt = `
{{postDirections}}

# Task: Format the current post by following the below guidelines.
# Task 2: Make sure that the post is following every direction from Post Directions

# Current Post:
${response}

# Guidelines:
The text should never contain buzz, buzzing, buzzin' and its derivatives.
Your response should be only the formatted post.
Your response should not contain any questions.
Do not add commentary or acknowledge this request, just write the post.
  `;

    const formatContext = composeContext({
      state,
      template: formatRespnsePrompt,
    });

    response = await generateText({
      runtime: runtime,
      context: formatContext,
      modelClass: ModelClass.MEDIUM,
    });

    return response;
  }
}
