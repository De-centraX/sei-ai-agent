# Welcome to Kame

This is the user handbook of Kame, the On-chain Trading protocol designed for fast and efficient DeFi on Sei.&#x20;

[\](https://docs.velora.xyz/intro-to-velora/velora-overview)

# Intro to Kame Aggregator

Kame Aggregator is a DeFi Protocol that aggregates liquidity sources into one comprehensive interface and API.

For any trade, Kame checks the rates on all supported liquidity sources on Sei Network and implements further optimization to get the best rate possible. It abstracts most of the swap complexity to make trades convenient and accessible for end-users in 1 click.

### Kame - Decentralized Exchange Aggregation build on Sei

Kame Aggregator scours all liquidity sources on Sei Ecosystem to secure the best exchange rates for users.

#### 🏆 Find the Best Rate:&#x20;

Kame searches for liquidity sources and compares available rates across pairs, calculating trade sizes across the entire Sei ecosystem

#### 🎯 Optimize Order Execution:&#x20;

After aggregating data from liquidity sources, Kame helps users split transactions across different liquidity sources to minimize price slippage and optimize the amount received by users

#### 🗺️ MultiPath:&#x20;

Beyond DEX liquidity, Kame integrates various types of liquidity including lending protocols, liquid staking protocols, launchpads, and private market makers

#### ⛽ Gas Optimization:&#x20;

Kame implements solutions to minimize gas usage

#### 🔓 Streamlined Allow Transaction:&#x20;

Give permission for Kame Contract, you can trade through any DEX without need to grant access for each DEX

&#x20;\\

# Overview

The Kame.ag Developer Documentation offers in-depth guidance for integrating and utilizing kame.ag’s DEX Aggregators services built on the Sei blockchain. Developers will find detailed instructions for working with the kame.ag SDK their DeFi applications. To stay up to date with the latest features, updates, and announcements, developers are encouraged to join the kame.ag Dev Update channel on&#x20;

Telegram: <https://t.me/kameagg>

## Kame Aggregator SDK

{% embed url="<https://www.npmjs.com/package/@kame-ag/aggregator-sdk>" %}

# Aggregator SDK

An Kame Aggregator SDK is a software development kit that allows developers to interact with Kame.ag protocols using the Typescript/Javascript programming language.

## Feature <a href="#features" id="features"></a>

- Retrive tokens and token prices
- Get quote and quote for swap

# Getting Started

#### 🚀 Getting Started with `@kame-ag/aggregator-sdk`

## **Installation**

Begin by installing the SDK via npm:

```bash
npm install @kame-ag/aggregator-sdk
```

Or, if you're using Yarn:

```bash
yarn add @kame-ag/aggregator-sdk
```

## **Importing the SDK**

In your JavaScript or TypeScript project, import the SDK:

```javascript
import { Api, FetchProviderConnector } from '@kame-ag/aggregator-sdk';
```

Or, if you're using CJS module

```javascript
const { Api, FetchProviderConnector } = require('@kame-ag/aggregator-sdk');
```

## **Initializing the Aggregator**

Create an instance of the aggregator with the necessary configuration:

```javascript
const aggregatorAPI = new Api({ httpConnector: new FetchProviderConnector() });
```

_Note: Replace the comment with actual configuration parameters as required by the SDK._

---

For more detailed information, including advanced configurations and additional functionalities, please refer to the official documentation or the SDK's repository.

If you have specific questions or need further assistance, feel free to ask!

# Get Swap Quote

Gets a quote for token swapping and their data to swap.

### Example Usage

```typescript
import { Token, Address } from '@kame-ag/sdk-core';
import { createWalletClient, custom } from 'viem';
import { sei } from 'viem/chains';

const privateKey = generatePrivateKey();
const account = privateKeyToAccount(privateKey);
const params: GetSwapParametersParams = {
  origin: new Address(account.address),
  fromToken: new Token(1, '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', 18),
  amount: '1000',
  toToken: new Token(1, '0x3894085ef7ff0f0aedf52e2a2704928d1ec074f1', 18),
  tradeConfig: {
    recipient: new Address(account.address), //optional
    slippage: 100, //100 = 1%
  },
};

const result = await aggregatorAPI.getSwap(params);

const walletClient = createWalletClient({
  chain: sei,
});

const hash = await walletClient.sendTransaction({
  account,
  to: result.tx.to as `0x${string}`,
  data: result.tx.data as `0x${string}`,
  value: BigInt(result.tx.value),
});
```

# Get Quote

Gets a quote for token swapping with specified parameters.

### Example Usage

```typescript
import { Token } from '@kame-ag/sdk-core';

const aggregatorAPI = new Api(config);

const params: GetQuoteParametersParams = {
  fromToken: new Token(1, '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', 18),
  amount: '1000',
  toToken: new Token(1, '0x3894085ef7ff0f0aedf52e2a2704928d1ec074f1', 18),
};

const result = await aggregatorAPI.getQuote(params);
```

# Retrieve token

Retrieves token information from the API based on the provided parameters.

### Example Usage

```typescript
const aggregatorAPI = new Api(config);

// Get all tokens
const allTokens = await aggregatorAPI.getTokens();

// Get specific tokens by IDs
const specificTokens = await aggregatorAPI.getTokens({
  ids: ['0x123...', '0x456...'],
});

// Search tokens with pagination
const searchedTokens = await aggregatorAPI.getTokens({
  pattern: 'USD',
  count: 10,
  cursor: 'next_page_cursor',
});
```

# Token Prices

### Example Usage

```typescript
const aggregatorAPI = new Api(config);

// Get prices for specific tokens
const prices = await aggregatorAPI.getPrices({
  ids: ['0x123...', '0x456...'],
});

// Get prices without parameters
const allPrices = await aggregatorAPI.getPrices();
```

# Fee

There are no protocol fees for using the Kame Aggregator or the Kame UI. However, UI providers might set their own fees. If these fees are applied, Kame will take 20% of what integrators charge.

# Widget - Iframe

### Example Widget Iframe Url:&#x20;

<pre><code><strong>https://kame.ag/widget?hideLogo=1&#x26;hideRoute=1&#x26;customPairSource=[{"0x9151434b16b9763660705744891fa906f660ecc5-0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee":["dragon_swap_v1","sailor","yaka_finance"]}]&#x26;colorPalette=[{"orange":"88f8ff"}]
</strong></code></pre>

### Customize

| Name                 | Value (default)                                   | Description                                                                                                                                                                                                      |
| -------------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **coinIn**           | 0x9151434b16b9763660705744891fa906f660ecc5(USDT0) | Default coinIn                                                                                                                                                                                                   |
| **coinOut**          | 0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee(SEI)   | Default coinOut                                                                                                                                                                                                  |
| **hideSource**       | 1 (0)                                             | Toggle display of setting select source want                                                                                                                                                                     |
| **hideLogo**         | 1 (0)                                             | Toggle display of logo of Kame on widget override                                                                                                                                                                |
| **hideRoute**        | 1 (0)                                             | Toggle display of route that swap will go through in swap info                                                                                                                                                   |
| **ref**              | string (undefinded)                               | Refferal code content                                                                                                                                                                                            |
| **customPairSource** | (\[key: string]: string\[])\[] (undefinded)       | Config to limited the liquidity source can be use for specific token pair of swap. EX: \[{"0x9151434b16b9763660705744891fa906f660ecc5-0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee":\["dragon_swap_v1","sailor"]}] |
| **colorPalette**     | (\[key: string]: string\[])\[] (undefinded)       | Config to change the specific color of widget's color palette. Ex: \[{"txt_cl1":"1e1e1e"}]                                                                                                                       |

<details>

<summary>Liquidity source:</summary>

- dragon_swap_v1
- donkey_swap
- yaka_finance
- jellyverse_weighted
- jellyverse_composable_stable
- sailor
- jellyverse_gyro_eclp
- dragon_swap_v2
- yaka_finance_v3
- oku_finance
- carbon_defi
- oxium
- yei_finance

</details>

<details>

<summary>Color Palette:</summary>

- txt_cl1: d9d9d9
- txt_cl2: fafafa
- body_bg: 060707
- primary-color: 212020
- dark: 080404
- dark1: 242121
- dark2: 27360d
- dark3: 141414
- dark4: 262626
- dark5: 2d2c2c
- dark6: 292d32
- dark7: 2e2e2e
- dark8: 0c0a07
- dark9: 121111
- dark10: 202121
- dark11: 474747
- dark12: 1c1c1c
- dark13: 1a1a1a
- dark14: 414141
- dark15: 242424
- dark16: 1a1512
- dark17: 333333
- gray: bfbfbf
- gray1: 595959
- gray2: 1e1e1e
- gray3: 8c8c8c
- gray4: 434343
- gray5: 475165
- gray6: 999999
- orange: e85a00
- orange1: ee6320
- orange2: f86102
- orange3: d3531a
- orange4: ff4b00
- orange5: ff9f2e
- white: ffffff
- white1: fff3ec
- misty_rose: ffe7e7
- anti_flash_white: f0f0f0
- beer: f99723
- sunset_orange: ffa940
- sunset_orange1: ffd591
- chinese_black: 171514
- chinese_black1: 101010
- onyx: 383838
- polar_green: 73d13d
- dust_red: ff4d4f
- dust_red1: ff7875
- black_olive: 3a3635
- black: 131414
- black1: 1f2734
- yellow: fff7b2
- yellow1: ffb830
- cyan: c1f8ff
- cyan1: 88f8ff
- red: dc3545
- rgb_white: ffffff1a
- rgb_white1: ffffff0d
- rgb_white2: d9d9d91a
- rgb_white3: f0f0f014
- rgb_white4: ffffff33
- rgb_white5: ffe7e74d
- rgb_white6: fff3ec4d
- rgb_gray: 29292980
- rgb_gray1: 36363680
- rgb_black: 00000024
- rgb_green: 27ae601a
- rgb_orange: ffa9401a
- rgb_orange1: ffd5910d
- rgb_orange2: f861024d
- rgb_orange3: e85a001a
- rgb_orange4: f997231a
- rgb_red: ff4d4f1a
- rgb_yellow: fffad026

</details>

# Brandkit
