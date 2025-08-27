import { Action, elizaLogger } from '@elizaos/core';
import { SearchMode, Tweet } from 'agent-twitter-client';

import { getBaseScrapeAction } from './bases/baseScrapeAction.ts';

const scrapeTweetsKeywordAction: Action = {
  name: 'SCRAPE_KEYWORD',
  similes: ['KEYWORD_SEARCH'],
  description:
    'Fetches the tweets for a keyword with advanced search and generates a tweet',
  ...getBaseScrapeAction(
    (_options: any) =>
      `Scraping tweets for a keyword with advanced search: ${_options?.keyword}`,
    fetchTweets
  ),
};

async function fetchTweets(options: any): Promise<Tweet[]> {
  if (!options?.client) {
    elizaLogger.error('Client not found');
    return [];
  }

  if (!options?.keyword) {
    elizaLogger.error('Keyword not found');
    return [];
  }

  try {
    const oneDayAgoFormatted = getOneDayAgoFormatted();
    const query = `${options.keyword} lang:en since:${oneDayAgoFormatted} -filter:replies`;

    const tweets = await options.client.twitterClient.fetchSearchTweets(
      query,
      30,
      SearchMode.Top
    );
    elizaLogger.info('Latest tweets fetched');
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

export { scrapeTweetsKeywordAction };
