import { Plugin } from '@elizaos/core';

import { TwitterClientInterface } from './client.ts';

import { scrapeTweetsKeywordAction } from './actions/scrapeKeyword.ts';
import { scrapeTweetsNotableAccountsAction } from './actions/scrapeNotableAccounts.ts';

export const twitterPlugin: Plugin = {
  name: 'twitter',
  description: 'Twitter client',
  clients: [TwitterClientInterface],
  actions: [scrapeTweetsKeywordAction, scrapeTweetsNotableAccountsAction],
};
