import type { Content, HandlerCallback, IAgentRuntime } from '@elizaos/core';
import type { ClientBase } from './base.ts';

import { Tweet } from 'agent-twitter-client';
import {
  elizaLogger,
  getEmbeddingZeroVector,
  UUID,
  stringToUuid,
} from '@elizaos/core';

import { createTweetObject } from './utils.ts';

export class TwitterBasePostActionClient {
  client: ClientBase;
  runtime: IAgentRuntime;
  twitterUsername: string;
  isDryRun: boolean;
  name: string;
  action: string;

  constructor(
    client: ClientBase,
    runtime: IAgentRuntime,
    name: string,
    action: string
  ) {
    this.client = client;
    this.runtime = runtime;
    this.twitterUsername = this.client.twitterConfig.TWITTER_USERNAME;
    this.isDryRun = this.client.twitterConfig.TWITTER_DRY_RUN;
    this.name = name;
    this.action = action;
  }

  static fromName(
    client: ClientBase,
    runtime: IAgentRuntime,
    name: string,
    action: string
  ) {
    return new TwitterBasePostActionClient(client, runtime, name, action);
  }

  async start() {
    if (this.client.twitterConfig.ENABLE_TWITTER_POST_GENERATION) {
      elizaLogger.info(`Starting ${this.name} posting job`);
      await this.startPostingLoop(true);
    }
  }

  private async startPostingLoop(initial: boolean) {
    const lastPost = await this.runtime.cacheManager.get<{
      timestamp: number;
    }>(`twitter/${this.twitterUsername}/last${this.action}`);

    const now = Date.now();
    const lastPostTimestamp = lastPost?.timestamp ?? 0;

    // Calculate time until next day (midnight)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    // Time until midnight
    let timeUntilNextDay = tomorrow.getTime() - now;

    // Add random offset between 0-24 hours
    const randomOffsetMs = Math.random() * 24 * 60 * 60 * 1000;
    const delay = randomOffsetMs + (initial ? 0 : timeUntilNextDay);

    // If it's been more than 24 hours since last post, post now
    if (
      !lastPost ||
      (now - lastPostTimestamp > 24 * 60 * 60 * 1000 && !initial)
    ) {
      await this.postNewTweet();
    }

    const hours = Math.floor(delay / (1000 * 60 * 60));
    const minutes = Math.floor((delay % (1000 * 60 * 60)) / (1000 * 60));
    elizaLogger.info(
      `Next ${this.name} post in ${hours} hours and ${minutes} minutes`
    );
    setTimeout(() => this.startPostingLoop(false), delay);
  }

  private async postNewTweet() {
    elizaLogger.info(`Getting ${this.name} post data for posting`);
    try {
      await this.runtime.ensureUserExists(
        this.runtime.agentId,
        this.client.profile.username,
        this.runtime.character.name,
        'twitter'
      );

      elizaLogger.info(`Fetching ${this.name} post data`);

      const action = this.runtime.actions.find((a) => a.name === this.action);

      if (!action) {
        elizaLogger.error('No action found for:', this.action);
        return;
      }

      const callback: HandlerCallback = async (response: Content) => {
        await this.generateTweetContent(
          response.text,
          response.roomId as `${string}-${string}-${string}-${string}-${string}`
        );
        return [];
      };

      await action.handler(
        this.runtime,
        null,
        null,
        {
          client: this.client,
        },
        callback
      );
    } catch (error) {
      console.error(`Error generating new post for ${this.name}:`, error);
    }
  }

  async generateTweetContent(
    rawTweet: string,
    roomId: `${string}-${string}-${string}-${string}-${string}`
  ) {
    const removeQuotes = (str: string) =>
      str.replace(/^['"]([^'"]*)['"](.*?)$/gm, '$1$2');
    const fixNewLines = (str: string) =>
      str
        .replaceAll(/\\n/g, '\n')
        .replaceAll(/[.,][^\S\r\n]+/g, (match) => match[0] + ' ');
    const fixSentenceSpacing = (str: string) =>
      str.replace(/([.!?])([A-Z])/g, '$1 $2');
    const fixDoubleSpaces = (str: string) => str.replace(/  /g, ' ');
    const fixBolding = (str: string) => str.replace(/\*\*/g, '');

    // Final cleaning
    let tweetTextForPosting = fixBolding(
      fixDoubleSpaces(fixNewLines(fixSentenceSpacing(rawTweet)))
    ).trim();
    if (tweetTextForPosting.includes('"')) {
      tweetTextForPosting = removeQuotes(tweetTextForPosting).trim();
    }

    if (this.isDryRun) {
      elizaLogger.info(
        `Dry run: would have posted tweet from ${this.name} job: ${tweetTextForPosting}`
      );
      return;
    }

    try {
      elizaLogger.info(
        `Posting new tweet for ${this.name}:\n ${tweetTextForPosting}`
      );
      await this.postTweet(
        this.runtime,
        this.client,
        tweetTextForPosting,
        roomId,
        rawTweet,
        this.twitterUsername
      );
    } catch (error) {
      elizaLogger.error('Error sending tweet:', error);
    }
  }

  async postTweet(
    runtime: IAgentRuntime,
    client: ClientBase,
    tweetTextForPosting: string,
    roomId: UUID,
    rawTweetContent: string,
    twitterUsername: string
  ) {
    try {
      elizaLogger.info(`Posting new tweet:\n`);

      let result = await this.sendStandardTweet(
        client,
        tweetTextForPosting,
        undefined
      );

      const tweet = createTweetObject(result, client, twitterUsername);

      await this.processAndCacheTweet(
        runtime,
        client,
        tweet,
        roomId,
        rawTweetContent
      );
    } catch (error) {
      elizaLogger.error('Error sending tweet:', error);
    }
  }

  async sendStandardTweet(
    client: ClientBase,
    content: string,
    tweetId?: string
  ) {
    try {
      const standardTweetResult = await client.requestQueue.add(
        async () => await client.twitterClient.sendTweet(content, tweetId)
      );
      const body = await standardTweetResult.json();
      if (!body?.data?.create_tweet?.tweet_results?.result) {
        elizaLogger.error('Error sending tweet; Bad response:', body);
        return;
      }
      return body.data.create_tweet.tweet_results.result;
    } catch (error) {
      elizaLogger.error('Error sending standard Tweet:', error);
      throw error;
    }
  }

  async processAndCacheTweet(
    runtime: IAgentRuntime,
    client: ClientBase,
    tweet: Tweet,
    roomId: UUID,
    rawTweetContent: string
  ) {
    // Cache the last post details
    await this.runtime.cacheManager.set(
      `twitter/${this.twitterUsername}/last${this.action}`,
      { id: tweet.id, timestamp: Date.now() }
    );

    // Cache the tweet
    await client.cacheTweet(tweet);

    // Log the posted tweet
    elizaLogger.info(`Tweet posted:\n ${tweet.permanentUrl}`);

    // Ensure the room and participant exist
    await runtime.ensureRoomExists(roomId);
    await runtime.ensureParticipantInRoom(runtime.agentId, roomId);

    // Create a memory for the tweet
    await runtime.messageManager.createMemory({
      id: stringToUuid(tweet.id + '-' + runtime.agentId),
      userId: runtime.agentId,
      agentId: runtime.agentId,
      content: {
        text: rawTweetContent.trim(),
        url: tweet.permanentUrl,
        source: 'twitter',
      },
      roomId,
      embedding: getEmbeddingZeroVector(),
      createdAt: tweet.timestamp,
    });
  }
}
