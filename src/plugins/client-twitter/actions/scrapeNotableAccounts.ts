import { Action, elizaLogger } from '@elizaos/core';
import { SearchMode, Tweet } from 'agent-twitter-client';

import { getBaseScrapeAction } from './bases/baseScrapeAction.ts';

const scrapeTweetsNotableAccountsAction: Action = {
  name: 'NOTABLE_ACCOUNTS_TWEET',
  similes: ['NOTABLE_ACCOUNTS_SCRAPE'],
  description:
    'Fetches the tweets for the notable accounts with advanced search and generates a tweet',
  ...getBaseScrapeAction(
    () => `Scraping tweets of the notable accounts with advanced search`,
    fetchTweets
  ),
};

async function fetchTweets(options: any): Promise<Tweet[]> {
  if (!options?.client) {
    elizaLogger.error('Client not found');
    return [];
  }

  const accounts = options.client.twitterConfig?.TWITTER_TARGET_USERS || [];
  elizaLogger.info('Fetching tweets from notable accounts');

  try {
    const oneDayAgoFormatted = getOneDayAgoFormatted();
    const accountsFilter = `(${accounts
      .map((account) => `from:${account}`)
      .join(', OR ')})`;

    const query = `-filter:replies lang:en since:${oneDayAgoFormatted} ${accountsFilter} `;

    const tweets = await options.client.twitterClient.fetchSearchTweets(
      query,
      30,
      SearchMode.Top
    );
    elizaLogger.info('Latest tweets for notable accounts fetched');
    return tweets.tweets;
  } catch (error) {
    elizaLogger.error('Error failed to fetch search top tweets:', error);
  }
}

function getOneDayAgoFormatted() {
  const oneDayAgoFormatted = new Date();
  oneDayAgoFormatted.setDate(oneDayAgoFormatted.getDate() - 1);
  const formatted = `${oneDayAgoFormatted.getFullYear()}-${
    oneDayAgoFormatted.getMonth() + 1
  }-${oneDayAgoFormatted.getDate()}`;
  return formatted;
}

export { scrapeTweetsNotableAccountsAction };
