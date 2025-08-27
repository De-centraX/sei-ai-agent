# Jelly Verse

# Overview

A short overview

## What is Jellyverse?&#x20;

Jellyverse is an entire universe built and governed by its community, the Jellyverse DAO. Jellyverse aims to pave the way for the next generation of DeFi, often referred to as DeFi 3.0. This vision revolves around establishing a sustainable and yield-driven ecosystem, where users can access various protocols, each of which serves a robust use case and incorporates real-world assets. The time has come to harness the remarkable mechanics of the DeFi industry by merging them with tokens that people genuinely desire to use! \\

{% embed url="<https://www.youtube.com/watch?v=cFsQetDvB2Q>" %}

#### Utility set inside of Jellyverse

- Trade (JellySwap)&#x20;
- Take loans (jAssets)&#x20;
- Leverage (jAssets)&#x20;
- more in future

## Jelly Token

JLY serves as the primary governance and utility token for the Jellyverse ecosystem. JLY Stakers enjoy the privilege of participating in critical decision-making processes and influencing key parameters across a multitude of protocols and decentralized applications (dApps) within the Jellyverse platform. As a unique utility fees generated across all protocols will be distributed to JLY Stakers.

#### Utility of JLY:&#x20;

- Governance&#x20;
- Revenue Share
- Liquidity Mining&#x20;
- Staking&#x20;
- Collateral&#x20;

## JellySwap

Acts like gravity inside of Jellyverse. JellySwap is a decentralized exchange, offering highest security, flexibility and unleashing a whole new way to interact with tokens available on SEI.

JellySwap is introducing WeightedPools, decentralized indices, optimized math for stable coin swaps, pools with up to 8 tokens, managed pools, custom pools and more!&#x20;

A decentralized exchange to serve Liquidity Providers, Traders and Developers.

→[ Learn more about JellySwap](/englisch/protocol-library/jellyswap)

## JellyStake

Introducing a staking solution that paves a sustainable path into the future, which includes the innovation of Staking-NFTs to streamline the user experience and create new ways of interaction!

→ [Learn more about JellyStake](/englisch/protocol-library/jellystake)

## jAssets

The jAsset system is an economic system that enables trading of decentralized assets (referred to as jAssets). The system is being developed with the goal of combining the trade of decentralized assets with the benefits of blockchain technology. The focus is on ensuring that the synthetic assets follow the price development of real assets (as oracles) in traditional markets, thus enabling users to anticipate their price movements. Due to the potentially very volatile oracle prices, the emphasis is on the security of the system to avoid underinsurance. The system is based on Liquity, a lending protocol that has already established itself on numerous EVMs. This has been extended to include a multi-collateral and debt mechanism, allowing users to use multiple ERC20 standard tokens as collateral. There is still only one vault (margin account) per address, summarizing the collateral ratio across all used tokens.

# How to Connect to SEI

Connecting to SEI

For connecting to the SEI Blockchain, we will have to differentiate between 2 Layers within SEI.&#x20;

1. **CosmWasm Layer (V1)**&#x20;

A set of these wallets can be used for SEI native Layer.

[Compass](https://compasswallet.io/download)

[Finwallet](https://finwallet.com/download)

Seif (not yet released)

and more..

Once downloaded, the native SEI wallets will already have SEI Network auto-selected.

2. **EVM Layer (V2)**

For SEI V2, any EVM compatable wallet can be used, such as:

[Metamask](https://metamask.io/download/)

[Rabby](https://rabby.io/)&#x20;

[Trust Wallet](https://trustwallet.com/download)

and many more...

Once downloaded, the SEI EVM RPC data needs to be manually added to the Wallet to connect to SEI's EVM Layer.

Network Name: Sei Testnet Network&#x20;

Network URL: <https://evm-rpc.arctic-1.seinetwork.io&#x20>;

Chain ID: 713715&#x20;

Currency symbol: SEI&#x20;

Block explorer URL: <https://seitrace.com/>

# How to get SEI Devnet Funds

Receive Testnet Funds

To receive SEI and start your journey on the SEI Devnet, you can use a Faucet and claim 2 SEI per day. You can choose either of the 2 Faucets:

[SEI.io Faucet](https://atlantic-2.app.sei.io/faucet)

[FaucetMe Faucet](https://sei.faucetme.pro/)

To claim from the Faucets, you must verify and connect your Discord account.

# How to make your first Swap

First Swap

After[ connecting your EVM wallet to Sei](/englisch/overview/how-to-connect-to-sei) and [receiving your Devnet funds](/englisch/overview/how-to-get-sei-devnet-funds) you can now visit the [Jellyverse dApp](https://jelly-verse-sei.vercel.app/jellyswap) and make your first swap.

First off, connect your wallet with the site by clicking "Connect Wallet" (as shown in the picture).

<figure><img src="https://3029210178-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F7fJxjrk6a3wPtiSa5D2R%2Fuploads%2FCBQenUFUIf3ymxC2KapT%2FUntitled_Artwork%2082%20copy.png?alt=media&#x26;token=00e848c7-2389-4d4d-9136-68426790a12f" alt=""><figcaption><p>Connect your Wallet</p></figcaption></figure>

After that, visit the Swap page by clicking "Swap".

<figure><img src="https://3029210178-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F7fJxjrk6a3wPtiSa5D2R%2Fuploads%2FAUewxa38lrgDi17GLHDV%2FUntitled_Artwork%2082.png?alt=media&#x26;token=85ab1cc5-0cac-48d1-b02a-488a6c17d1ce" alt=""><figcaption><p>Navigate to "Swap"</p></figcaption></figure>

Now select the Asset you want to swap into the desired Asset and select its amount (e.g. SEI -> JLY).

<figure><img src="https://3029210178-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F7fJxjrk6a3wPtiSa5D2R%2Fuploads%2FsQUsIHW0xKNvbbtnhsBy%2FScreenshot%202024-04-10%20at%2013.45.59.png?alt=media&#x26;token=b08cd754-75b1-49aa-831e-4b1ae95e3c7d" alt=""><figcaption><p>Select Assets to Swap and Amount</p></figcaption></figure>

Click on Preview and then on "Swap" to get redirected to your Wallet in which you can now approve the transaction and the swap will be executed.

# JellySwap

A decentralized portfolio manager

## What is JellySwap?

JellySwap is a fork of Balancer V2, a leading automated market maker (AMM) developed by Balancer Labs and deployed on the Ethereum network in February 2020.

JellySwap operates as a dynamic, self-balancing portfolio manager, offering a unique twist on the traditional index fund model. Rather than paying fees to a portfolio manager for rebalancing, JellySwap collects fees from traders who balance the portfolio through arbitrage opportunities.

JellySwap is built on an N-dimensional surface that outlines the cost function for exchanging any pair of tokens in a JellySwap pool. This results in a new and innovative pool architecture, allowing for the creation of pools with varying weights, such as 70-30 pools and even pools with up to 8 tokens.

{% embed url="<https://www.youtube.com/watch?v=8MvHjiql284>" %}
JellySwap Explained
{% endembed %}

## The problem to be solved

While the DeFi industry has made impressive advancements in digital token interaction, it has neglected to focus on real-world assets into its offerings. As a result, the DeFi landscape is littered with applications for redundant or purely speculative tokens.

To take the DeFi industry to new heights, it is crucial to combine real-world price feeds of any kind with advanced decentralized finance applications. This is where JellySwap comes into play, offering users to build self-rebalancing portfolios. Users can now hold on to time-proven portfolios while lending its liquidity to a decentralized exchange and earn fees instead of paying for management services in the traditional market.&#x20;

# Liquidity Management

Vaults

At the heart of JellySwap is the Vault, a smart contract that manages the tokens in each JellySwap pool. It handles important tasks like swaps, joins, and exits, making it a central part of the JellySwap system.

The vault separates the responsibility for keeping track of tokens from the pool's operational logic. This separation simplifies the complexity of the pool contracts. Instead of burdening the pools with active asset management, they can focus on performing accurate calculations for swaps, joins, and exits.

This approach not only brings together different pool designs but also makes the Vault neutral, not favoring any specific pool's calculations. This flexibility allows the Vault to adapt to various systems that meet certain requirements.&#x20;

Creative thinkers who come up with new swapping methods can easily integrate their custom pools into JellySwap's existing liquidity system. This saves them the effort of building an entire decentralized exchange from scratch.

# Swaps

Interaction with the vault

[When building the Vault for JellySwap, the focus was on hitting two main goals:](#user-content-fn-1)[^1]

1. **Lower Gas Usage:** The Vault is designed so its operations use very little gas. This makes using it both cost-effective and efficient.
2. **Adaptive Design:** The Vault can handle many different trading situations - from a simple one-token exchange to more complex paths and combinations within a swap ([SOR](/englisch/protocol-library/jellyswap/smart-order-router-sor)).

**What Kinds of Swaps does JellySwap's Vault Offer?**

1. **Single Swaps:** Just as the name implies, this is about swapping two tokens using one pool. The big plus here is its high gas efficiency.
2. **Batch Swaps:** These are meant for more intricate trading setups. Users can perform multi-hop swaps, which use several paths and pools at once. It always searches for the best prices from all the pools registered in the Vault, ensuring users get the best exchange rate possible.

> In short: JellySwap offers a cost-effective and flexible platform for token swaps, capable of handling both simple and complex swapping needs.

[^1]: sounds a bit low as an introduction sentence

# Pools

Overview

JellySwap, built upon Balancer's architecture, creates a highly diverse platform that provides a wide range of pool types with distinct logic, curves, parameters, and more. Below, you'll find a comprehensive list of JellySwap's various pool types. All pool types have been available since the platform's launch, although it's worth noting that not all of them may be supported by the front-end immediately.&#x20;

### **Pool Types**&#x20;

1. [**Weighted Pools**](/englisch/protocol-library/jellyswap/pools/weighted-pools)**:** These are the primary pools that you'll encounter on our DEX. They can be further categorized into:
   - Classic pools: Pools with up to 3 tokens
   - Portfolio Pools: Pools with more than 3 tokens
2. **Composable** [**Stable Pools**](/englisch/protocol-library/jellyswap/pools/stable-pools)**:** Also known simply as the "stable pool".
3. Boosted Pools
4. Liquidity Bootstrapping Pools (LBPs)
5. Managed Pools
6. Protocol Pools

# Weighted Pools

A Flexible AMM Solution

**Overview**

Weighted Pools are a sophisticated iteration of the traditional *`x*y = k`\* AMM model first popularized by Uniswap V1. They utilize Weighted Math, making them ideal for a broad spectrum of scenarios, even those involving tokens without any inherent price correlation, like USDC/dETH. In a deviation from typical AMMs that rigidly offer 50/50 weightings, JellySwap's Weighted Pools grant users the flexibility to create pools with multiple tokens and personalized weightings, including configurations such as 80/20 or 60/20/20.

**Key Benefits**

- **Custom Exposure**: Weighted Pools empower users with the option to determine their exposure levels to distinct assets, without compromising on their liquidity provision capabilities. The weight accorded to a token in a pool conversely determines the volatile loss it could suffer in the event of a price fluctuation.
- **Tackling Impermanent Loss**: Impermanent Loss represents the value differential between simply holding a collection of assets versus offering liquidity for those assets.

  Pools that emphasize one token substantially over another could significantly reduce but also increase impermanent loss, depending on what direction the higher weighted token moves. This however, adds other side effects as well; highly asymmetrical pools can lead to increased slippage during swaps, given the liquidity discrepancy on one side. The 80/20 pool configuration is often seen as a balanced approach, striking the right balance between liquidity provision and impermanent loss limitation.

# Stable Pools

Harnessing Stability and Efficiency

**1. Overview**

Stable Pools cater to assets that either maintain consistent near-parity swaps or adhere to a predefined exchange rate. Drawing inspiration from StableSwap (popularized by Curve), these pools employ Stable Math, enabling sizeable swaps with minimal price impact. This design exponentially boosts capital efficiency for swaps involving similar or correlated assets.

**2. Ideal Asset Classes**

- **Pegged Tokens**: These are tokens that consistently swap near 1:1 ratios, commonly observed among stablecoins like DAI, USDC, and USDT or synthetic assets such as sBTC and wBTC.
- **Correlated Tokens**: Tokens that maintain a near 1:1 swap with a gradually fluctuating exchange rate, like iSEI and SEI.

**3. Stable Swaps Within JellySwap**

A unique advantage of JellySwap's Stable Pools is their integration into the broader JellySwap ecosystem. Arbitrage opportunities arise when tokens pair with distinct stablecoins across varying pools. By capitalizing on JellySwap's Batch Swaps, users can merge these swaps into a single, gas-efficient transaction.

# Composable Stable Pools

The Essence of "Composability"

Composability in pools implies the pool's ability to facilitate swaps to and from its LP token. When the LP token integrates into other pools ("nesting"), it streamlines Batch Swaps, fostering seamless transitions from nested to external pool tokens.

_Illustration_: Consider a Composable Stable Pool consisting of DAI, USDC, and USDT. By pairing its LP token (JPT) with SEI in a Weighted Pool, the nested structure merges liquidity into popular combinations, providing unparalleled depth and pricing advantages on JellySwap.

**Pre-minting Mechanism**

To enhance efficiency, these pools preemptively mint an infinite supply of their LP tokens during creation. This setup minimizes gas expenses, pivoting from the conventional mint/burn approach to a more efficient transfer system during joins and exits.

# Setting up a Pool Configuration

Crafting the Optimal Liquidity Strategy

**1. Overview**

JellySwap's flexibility offers users and projects an array of choices when creating a new pool. This guide explains the considerations surrounding pool types, token composition, fee structuring, and more to amplify liquidity and transaction volume.

**2. Deciding on Pool Types**

The selection boils down to some elementary factors, predominantly the anticipated price fluctuations of the tokens involved:

- **Weighted Pools**: Ideal for non-stable assets, facilitating broader liquidity across multiple tokens.
- **Composable Stable Pools**: Suited for stable assets or those with a predetermined exchange rate (e.g., stSEI/SEI).

The JellySwap dApp features an interface for creating weighted pools.&#x20;

**3. Token Composition in Weighted Pools**

One pitfall when initializing weighted pools concerns token alignment. Imagine creating a 33/33/33 weighted pool of JLY / ETH / USDC. While the intent might be simplifying JLY conversions, this configuration adversely impacts slippage and overall platform liquidity. A better pairing is the alignment of JLY with a ETH/USDC pool JPT (JellySwap Pool Token). This alignment ensures efficient swap paths from ETH->JLY and USDC->JLY with marginal gas outlays.

Typically, weighted pools are best confined to two tokens, paired with a fundamental routing JellySwap pool, such as JLY-USD or (JLY-USD/ETH). Pools with over two tokens gain traction in stable or managed pools, where the intent leans towards an ETF-like structure.

**4. Setting the Right Fees**

Formulating swap fees for a fresh pool requires pivotal decisions:

- **Fee Stability**: Will the fee remain constant or undergo modifications?
- **Fee Control**: Who's entrusted with fee updates? Choices include:
  - Jellyverse governance
  - A dedicated address or contract
- **Fee Quantum**: What should be the swap fee?

As for determining the fee magnitude, stable assets typically command lower fees (e.g., 0.1%), whereas non-stable pairs lean towards higher fees (e.g., 0.3%).

# Impermanent Loss

Understanding the Nuances

At its core, Impermanent Loss, sometimes referred to as Divergent Loss, describes the potential cost or opportunity cost of adding liquidity to an Automated Market Maker (AMM) pool compared to simply holding the individual tokens.

**1. Causes and Dynamics**

This form of loss is caused by a difference in the price performance of two assets within the pool. It is important to understand the nuances here:

- **No Divergence**: If both assets in the pool amplify their value by, say, 20%, the impermanent loss remains non-existent.
- **Divergence**: However, if one asset skyrockets by 20% while the other remains static, a divergence has happend. This differential leads to impermanent loss in the pool position.

**2. Reversion Possibilities**

The name "impermanent" implies that the situation isn't static. The loss can potentially revert:

- **Convergence**: If the previously static token also experiences a 20% hike, or both tokens align their price movement to the initial pooled ratio, the impermanent loss vanishes.

**3. Impermanent Loss in Action: An descriptive Scenario**

Let's look at a simple case to get to the nuances of it:

_Assume you have two assets, A and B, in a pool. You initiate with equal values of both. If Asset A's value_ hikes _by 20% and Asset B remains unchanged, you experience impermanent loss. However, if subsequently, Asset B also sees a 20% appreciation, or both A and B adjust their price trajectories to return to the original pooled proportion, the impermanent loss_ vanishe&#x73;_._\
\
$$IL = PoolValue/HodlValue - 1$$

# 50/50 Pools

Delving Deeper into Impermanent Loss: The Dynamics of 50/50 Pools

One common scenario in AMMs (Automated Market Makers) is a 50/50 pool, where the liquidity of both assets is kept equal. Let's delve into a scenario with JLY and BTC to understand this.

**Scenario:**

- **Starting Point:**
  - JLY is priced at $0.5. We have 8000 JLY (valued at $4,000).
  - BTC is priced at $25000. Thus, 0.16 BTC tokens equal $4,000.
  - Both assets are added to the pool, totalling $8,000, for which we receive pool tokens.
- **Price Evolution:**
  - After some time, JLY’s price surges to $1 (a 100% gain), while BTC moves to $30,000 (a 20% gain).
  - This unequal price movement introduces the phenomenon of impermanent loss. Even though we are still in profit in USD terms, we haven't maximized our potential gains due to the liquidity mechanism.
- **Impermanent Loss Mechanics:**
  - The key lies in the invariant, a mathematical constant in AMMs. It defines the product of the quantities of the tokens in the pool and must remain constant.
  - Given the price changes, the new quantities of JLY and BTC in the pool will be different from our initial quantities. This deviation is what constitutes the impermanent loss.

**Comparative Analysis:**

- **Initial liquidity:** $8,000
- **Value by holding (HODLing) both assets:** $12,800
- **Value as a liquidity provider:** $12,393.52. However, with an additional 5% annual yield, it increases to $13,137.13.

From the above, if we had simply held the tokens (HODL), our total would be $12,800. As a liquidity provider, even after the yield, our value is slightly above the HODL amount.

**Impermanent Loss Reversibility:**

Let's analyse a case where the prices of JLY and BTC continue to shift:

- JLY drops to $0.75 while BTC surges to $37,500. Despite the disparity, this represents a 50% gain for both assets compared to our original liquidity.
- Since the invariant ratio mirrors the price action ratio, there is no impermanent loss.
- The token balances remain consistent with our initial liquidity, indicating the impermanent loss has been neutralized. Moreover, if the pool attracted significant trades, we would have earned swap fees, augmenting our profits.

**Conclusion:**

The nature of impermanent loss means it can potentially be "erased" with the right price movements. It's a dance of asset prices where the final positions can restore initial Balance. As prices moves, impermanent loss can both appear and vanish.

The central strategy for a liquidity provider revolves around understanding these dynamics. The volatility of assets can be both a risk and an opportunity. While impermanent loss poses potential reductions in gains, the swap fees from large trading volumes might compensate or even outweigh these losses. It's a balancing act of assessing impermanent loss against the benefits of "volatility farming."
