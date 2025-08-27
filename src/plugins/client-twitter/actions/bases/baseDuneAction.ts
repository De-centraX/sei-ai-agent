import { IAgentRuntime, Memory, State } from '@elizaos/core';
import { DuneClient } from '@duneanalytics/client-sdk';

import { BaseDataAction } from './baseDataAction.ts';

export class BaseDuneAction {
  name: string;
  getPrompt: (apiData: string) => string;
  getData: (
    dune: DuneClient,
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
      dune: DuneClient,
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
    const client = new DuneClient(process.env.DUNE_API_KEY);
    const getData = this.getData.bind(this, client);
    const afterInitialTweet = this.afterInitialTweet?.bind(this);
    const getPrompt = this.getPrompt.bind(this);
    const name = this.name;

    const baseDataAction = new BaseDataAction(
      name,
      getPrompt,
      getData,
      afterInitialTweet
    );

    return baseDataAction.buildAction();
  }
}
