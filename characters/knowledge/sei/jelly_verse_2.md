# Jelly Verse

# 80/20 Pools

Impermanent Loss Dynamics of 80/20 Pools

**Understanding 80/20 Pools**

The design of AMM pools allows for various weightings of assets. One such configuration is the 80/20 pool. These weightings can influence the potential gains or losses a liquidity provider might face, especially concerning impermanent loss.

**Scenario Recap:**

- **Starting Configuration:**
  - ETH priced at $1,500. For this pool, we have 1 ETH amounting to $1,500.
  - JLY priced at $0.5, thus, 12000 JLY tokens equate to $6,000.
  - The total liquidity provided is $7,500, dominated mainly by JLY due to the 80/20 weighting.
- **Price Evolution:**
  - Assuming a similar price trajectory as the 50/50 scenario: JLY’s price surges, and ETH also increases but at a different rate.
  - The greater weightage of JLY means that any significant price movement of JLY will have a greater impact on the value of the pool compared to ETH.

**Impact on Impermanent Loss:**

- **Invariant Mechanics:**
  - Just as with 50/50 pools, the key concept is the invariant. This mathematical constant defines the product of the quantities of tokens in the pool.
  - Due to the asymmetrical weights, the impact of price changes on the pool’s value and hence the impermanent loss will be different.
- **Comparative Analysis:**
  - With the 80/20 weighting favoring JLY, the impermanent loss when JLY price surges will be less severe than in a 50/50 pool.
  - To be specific, the losses are cut nearly in half with a factor of 0.5825. In high-value pools, even this fractional advantage can amount to significant savings.

**Conclusion:**

The design of 80/20 pools inherently gives more weightage to one asset, making the pool less susceptible to impermanent loss from that particular asset's price movements. If an LP anticipates more favorable price movements in one asset over another, an 80/20 pool can offer a strategic advantage over a 50/50 pool.

However, it's crucial to understand that the impermanent nature of the loss remains. Price reversals or movements that bring asset values closer to their original state can still neutralize the loss. This phenomenon holds true regardless of the pool's weighting. Thus, while 80/20 pools can offer a shield against impermanent loss, understanding the assets and market dynamics remains pivotal for liquidity providers.

# Multitoken Pools

Impermanent Loss Dynamics of Multitoken Pools

**Unique Offering of JellySwap:**

JellySwap’s ability to support multiple tokens within a single pool sets it apart from traditional AMMs. This adds layers of complexity but also presents unique opportunities for liquidity providers.

**The Dynamics of a Multi-Token Pool:**

Multi-token pools contain more than two tokens, and in the context of this example, we’re examining a pool with both stable and volatile assets. The pool consists of USDC, wBTC, JLY, and wETH.

**Diving Into the Example:**

- **Initial Assumptions:** We begin with an even distribution of $10,000 across the four tokens.
- **Price Movements:** Over time, USDC retains its pegged value, JLY sees a 15% uptick, wBTC drops by 4%, while WETH rises by 50%.
- **Impermanent Loss Dynamics:** The inclusion of USDC, a stablecoin, makes the pool susceptible to impermanent loss. This is because while the value of USDC remains constant, the other assets in the pool are experiencing fluctuations. As a result, the relative proportions of the assets in the pool will change, leading to impermanent loss.

**Understanding the Strategy for Liquidity Providers:**

Liquidity providers in such pools are essentially betting on the expected volatility of the included assets. By choosing to join such pools:

1. **Volatility Farming:** The LPs are capitalizing on the frequent price fluctuations to earn swap fees. More volatility typically translates to more swaps and hence, more fees.
2. **Impermanent Loss Management:** They understand the inherent impermanent loss, especially due to the presence of a stablecoin. But, as long as the volatile assets return to their initial prices or move in a manner that balances the overall pool value, the impermanent loss will revert.
3. **Portfolio Diversification:** Being part of such a pool allows LPs to diversify their holdings and reduce exposure to any single asset.

**The End Goal for LPs:**

For liquidity providers in a multi-token pool, the strategy often revolves around maximizing swap fee returns while managing and understanding the impermanent loss risks. The perfect scenario is a pool where the overall value sees a lot of fluctuations (leading to swaps and fees) but ends up where it started, thus nullifying any impermanent loss.

In conclusion, while multi-token pools offer new avenues for liquidity providers, they also necessitate a deeper understanding of the assets involved and the overall market dynamics. Balancing between swap fee returns and potential impermanent loss becomes the key to success in these pools.

# Preminted JPT

Preminted JPT in JellySwap: A Simplified Look

**Understanding Preminted JPT:** JellySwap pools have evolved and a new concept called "Preminted JPT" has emerged. Why? Well, as more complex pool setups (like nested pools) became popular, there was a need for easier transitions from a token in a pool directly to its JPT (JellySwap Pool Token). Normally, this transition is called a "join", and it can be complex and costly in gas when part of a multi-hop batch swap.

**What Does preminted JPT Do?**

- When the pool is created, it mints the maximum amount of JPT possible (2\*\*(111)) right away.
- This JPT is then treated as a regular token within the pool.
- However, the pool's calculations act as if this JPT isn't there, making the total JPT supply not that meaningful.
- Instead, what matters is the "virtual supply" – which is the JPT amount actually held by users outside the Vault.

**What's the Benefit?**

- With pools having Preminted JPTs, like the Composable Stable Pools, users can directly swap from a token in the pool to its JPT.
- Before Preminted JPT, this kind of swap needed a separate "join" process.

---

In simpler terms: Preminted JPT is like a pre-loaded gift card for JellySwap pools. Instead of minting new JPT tokens every time a user adds liquidity to a pool, the maximum JPT balance is minted upfront, making entrances into the pool cheaper.

# Relayers

**What is a Relayer?** A relayer acts like a trusted middleman in the JellySwap ecosystem. By granting permission to a relayer, users can let it execute certain tasks (like swaps, joins, or exits) on their behalf. However, this isn't as risky as it sounds, because there are multiple layers of security in place.

**Key Points about Relayers:**

1. **Two-Tier Authorization**: For a relayer to function, both the user and the protocol have to authorize it.
2. **Freedom in Design**: There's no fixed blueprint for creating a relayer. If you're planning to craft one, decide if it will be standalone or part of the Batch Relayer.
3. **User-Level Authorization**: Users can choose to give a one-time approval via signature or a persistent one via transaction.
4. **Protocol-Level Authorization**: Here, the protocol's authorizing body (like the Jellyverse DAO) dictates what actions the relayer can execute and on which contracts.
5. **Batch Relayer**: This special relayer allows multiple actions to be linked and executed together, offering a smoother user experience.

**Why Use Relayers?**

1. **Efficiency**: Users can execute complex operations with just a single transaction.
2. **Flexibility**: Relayers can adapt to various tasks, from simple swaps to intricate migrations across pools.
3. **Safety**: Even though relayers can act on a user's behalf, built-in authorizations ensure misuse is avoided.

**A Practical Use Case: Pool Migration** JellySwap aims to provide liquidity providers (LPs) with optimal capital efficiency. Thus, it introduced the ability to move from an older pool to a more capital-efficient one. Instead of manually going through a series of steps to migrate between pools, a relayer can combine them all into one smooth transaction.

In essence, relayers in the JellySwap environment make processes more streamlined, efficient, and user-friendly while ensuring security remains paramount.

# Smart Order Router (SOR)

Imagine having a personal assistant that goes shopping for you, comparing prices at different stores to get you the best deal. That's essentially what the **Smart Order Router** does for token swaps on JellySwap.

**How does it work?**

1. **Optimal Price Search**: Whenever you want to swap tokens, the SOR looks at all the available JellySwap pools to find the best price for you.
2. **Single or Multiple Pools**: Sometimes, the best price might be in a single pool. Other times, it could involve routing your swap through multiple pools to get the most value.
3. **Automatic Decision**: The SOR makes these decisions automatically. It's like having GPS for your swaps, finding the best route every time.

# JellyStake

Overview

## What is JellyStake?

JellyStake serves as a crucial bridge within the Jellyverse ecosystem, enabling both users and participants to **engage in decentralized decision-making** (governance) while simultaneously creating a foundation for the overall economic structure of Jellyverse. With JellyStake, stakers have the opportunity to earn a **share of protocol revenues** generated across the entire spectrum of protocols within the Jellyverse economy.

## Revenue collection and distribution inside Jellyverse

In order to uphold the decentralization of voting authority, foster a sustainable economy, and motivate users to collectively engage in DAO management, the a part of all earnings generated throughout the entire ecosystem will be allocated to JLY stakers. This approach is essential to ensure that holding JLY tokens and actively participating in governance remains attractive<mark style="color:yellow;">.</mark>&#x20;

Those users who actively contribute value to the ecosystem by supplying liquidity to various protocols like JellySwap, jAssets and others will receive JLY tokens as a reward.&#x20;

In a second step JLY can subsequently be utilized within the Staking protocol to help shape the DAO's future and earn a portion of the protocol fees among the whole ecosystem. Consequently, early contributors will receive more rewards, compensating the additional risk they undertake.

JellyStake lays the foundation for a resilient ecosystem, offering contributors a lasting financial incentive to engage for the long run and benefit from the growing trading volumes within the ecosystem, rather than relying on speculative activities in the open market.

-> Read more in Tokenomics (soon)

## Governance&#x20;

Jellyverse's governance relies on the JLY token. This structure is vital for a decentralized organization such as Jellyverse, to make sure that individual users' interests match the DAO's goals. Using a different token instead of the native protocol token, might lead to decisions that prioritize that token's economy over the overall health of the Jellyverse economy.

-> Dive deeper into Jellyverse governance system.

# Staking Chests

### What are Staking Chests?

Jellyverse introduces an exciting innovation in staking. Unlike traditional systems that limit users to a single staking position, here users can create multiple positions, each beautifully represented as staking chests. Each of these chests grants users the flexibility to deposit, withdraw, or lock a distinct amount of JLY tokens.&#x20;

From a technical standpoint, staking positions are embodied as NFTs (Non-Fungible Tokens). These NFTs store critical parameters such as staking balance, timestamps, freezing periods, and other elements pertinent to staking, directly on the blockchain.

Think of it like a receipt for entering the staking process. They empower users to easily manage their staking positions, which becomes especially valuable when users want to lock in a specific portion of their JLY holdings to enhance their voting influence and annual percentage rate (APR).

### **Frozen chests**

To enter staking, a minimum of 1000 $JLY must be deposited and frozen for a minimum of 7 days and a maximum of 3 years.

A frozen chest allows users who want to commit to a longterm participation in voting and governance process of Jellyverse to obtain boosted voting power and annual percentage yield (APR). The frozen chest allows (or disallows) the following actions:&#x20;

- Add JLY without affecting the remaining freezing period
- JLY cannot be removed.&#x20;
- Offers boosted voting power and APR

The remaining freezing time is considered at its nominal value, resulting in a diminishing voting power and a reduction in APR boost as time progresses. To put it simply, users with the longest remaining freezing time will receive the most substantial incentive boost when they choose to re-freeze their assets.

### Valuation of remaining freezing time

As previously mentioned users receive a higher boost in APR and voting power if they decide to freeze their position for longer periods.

# Voting power

## What are "votes"?

Unlike the widely known vote-escrow model, which enables users to acquire veTKN for every TKN staked, Jellyverse's system directly links voting power to each chest. Therefore, each chest displays the number of votes a user can allocate to a proposal.

This approach removes the need to issue a secondary token, allows to reward long term commitment (higher freezing period) with more voting power and to value the remaining freezing period as its face value.

Users can increase their voting power by extending their freezing period or adding more JLY to the chest.&#x20;

# jAssets by BLKSWN

The jAsset protocol is a community project that has not yet been confirmed by the Jellyverse DAO.&#x20;

## Overview

jAssets is a collateralized debt platform. Users can lock up collateral (specific ERC20 tokens, selected by the governance) and issue jAssets (jUSD, jAAPL, jTSLA, etc.) to their own address and subsequently transfer those tokens to any other address. The individual collateralized debt positions are called Vaults.

The jAssets are economically geared towards maintaining their underlying oracle value (peg) due to the following properties:

1. The system is designed to always be over-collateralized - that means the dollar value of the locked collateral exceeds the dollar value of the issued jAssets.
2. The jUSD is fully redeemable - users can swap $x worth of jUSD for $x worth of collateral tokens (minus fees) directly with the system at any time.

After opening a Vault, users may issue ("borrow") tokens such that the collateralization ratio of their Vault remains above their individual minimum collateral ratio (IMCR). The IMCR is calculated based on the Vault's collateral but will be at least 110%.

The tokens are freely exchangeable - anyone with an EVM address can send or receive jAsset tokens, whether they have an open Vault or not. The tokens are burned upon repayment of a Vault's debt.

The jAsset system uses price feeds from the decentralized [pyth.network](http://pyth.network/) oracle provider. When a Vault falls below its IMCR, it is considered under-collateralized and is vulnerable to liquidation.

# Liquidation and the Stability Pool

jAssets utilize a two-step liquidation mechanism in the following order of priority:

1. Offset under-collateralized Vaults against the Stability Pool containing jAsset tokens.
2. Redistribute under-collateralized Vaults to other borrowers if the Stability Pool is emptied.

The jAsset protocol primarily uses the jAsset tokens in its Stability Pool to absorb the under-collateralized debt, i.e., to repay the liquidated borrower's liability.

Any user may deposit jAsset tokens into the Stability Pool. This allows them to earn the collateral from the liquidated Vault. When a liquidation occurs, the liquidated debt is canceled with the same amount and type of jAsset from the Pool (which is burned as a result), and the liquidated collateral is proportionally distributed to depositors.

Stability Pool depositors can expect to earn net gains from liquidations, as in most cases, the value of the liquidated collateral will be greater than the value of the canceled debt (since a liquidated Vault will likely have an ICR just slightly below 110%).

If the liquidated debt is higher than the amount of available jAssets in the Stability Pool, the system tries to cancel as much debt as possible with the tokens in the Stability Pool and then redistributes the remaining liquidated collateral and debt across all active Vaults.

Anyone may call the public `batchLiquidateTroves()` function with a custom list of under-collateralized Vault addresses to attempt to liquidate.

# Liquidation Logic

The precise behavior of liquidations depends on the initial collateralization ratio (ICR) of the Vault being liquidated and global system conditions: the total collateralization ratio (TCR) of the system, the size of the Stability Pool, etc.

<table><thead><tr><th width="198">ICR > TCR</th><th>Not liquidatable.</th></tr></thead><tbody><tr><td>ICR &#x3C; IMCR</td><td>Try to offset through the stability pools and redistribute anything remaining.</td></tr><tr><td>ICR ≥ IMCR</td><td>Normal Mode: Not liquidatable. Recovery Mode: Try to offset through the stability pools and redistribute anything remaining, but only a fraction (IMCR * debt's USD value) of the Vault's collateral, the rest will be transferred into the CollSurplusPool, from where it is claimable by the Vault owner.</td></tr></tbody></table>

Stability Pool depositors gain collateral tokens over time as liquidated debt is canceled with their deposit. When they withdraw all or part of their deposited jAssets or top up their deposit, the system sends them their accumulated collateral gains.

Similarly, a Vault's accumulated gains from liquidations are automatically applied to the Vault when the owner performs any operation - e.g., adding/withdrawing collateral or issuing/repaying jAssets.

# Recovery Mode

Recovery Mode kicks in when the total collateralization ratio (TCR) of the system falls below 130%.

During Recovery Mode, liquidation conditions are relaxed, and the system blocks borrower transactions that would further decrease the TCR. New debt may only be issued by adjusting existing Vaults in a way that improves their ICR or by opening a new Vault with an ICR of ≥130%. In general, if an existing Vault's adjustment reduces its ICR, the transaction is only executed if the resulting TCR is above 130%.

Recovery Mode is structured to incentivize borrowers to behave in ways that promptly raise the TCR back above 130% and to incentivize debt holders to replenish the Stability Pool.

Economically, Recovery Mode is designed to encourage collateral top-ups and debt repayments. It also acts as a self-negating deterrent: the possibility of it occurring actually guides the system away from ever reaching it.

# jUSD Redemption

Any jUSD holder (whether or not they have an active Vault) may redeem their jUSD directly with the system. Their jUSD is exchanged for collateral at face value: redeeming x jUSD tokens returns $x worth of collateral tokens (minus a redemption fee). Redemptions are only enabled for jUSD Token, no other jAsset.

When jUSD is redeemed for collateral, the system cancels the jUSD with debt from Vaults, and the collateral is drawn from their Vaults.

If the Vault uses different collateral tokens, they will be used equally based on their current $ valuation. This means that the ratio between them does not change. Only collateral tokens that aren’t minted by the protocol (≠ jAssets) are used for redemption.

In order to fulfill the redemption request, Vaults are redeemed from in ascending order of their last active collateralization ratio (LACR). The LACR is the Vault's ICR at the time of the last operation by the Vault owner.

**Redemptions create a price floor**

Economically, the redemption mechanism creates a hard price floor for jUSD, ensuring that the market price stays at or near $1 USD.

Redemptions are blocked when TCR < 110%. At that TCR, redemptions would likely be unprofitable, as jUSD is probably trading above $1 if the system has crashed that badly. However, it could be a way for an attacker with a lot of jUSD to lower the TCR even further.

# Expected User Behaviors

Generally, borrowers call functions that trigger Vault operations on their own Vault. Stability Pool users (who may or may not also be borrowers) call functions that trigger Stability Pool operations, such as depositing or withdrawing tokens to/from the Stability Pool.

Anyone may call the public liquidation functions and attempt to liquidate one or several Vaults.

JUSD token holders may also redeem their tokens and swap an amount of tokens 1-for-1 in value (minus fees) with Collateral.

Swap Pool Liquidity providers either mint new jAssets out of their Vault or deposit them directly from their balance.

#### DEX vs Oracle Price

<table><thead><tr><th width="220">Price Difference</th><th>Options</th></tr></thead><tbody><tr><td><p></p><p>110% Premium</p></td><td>Short opening + Vault Liquidation: <br>1. $1100 collateral Vault, <br>2. $1000 short position (asset minting + DEX sell), <br>3. > $1100 stable return. <br><br>Trove is not relevant anymore, can get liquidated. Profit: difference between 1 and 3 (112% premium would result in a 2% profit).</td></tr><tr><td>≤ 110%</td><td>All Vaults are collateralized by a minimum of 110%, as a result, lenders are willing to pay up to 110% to rebuy their debts to withdraw their collateral.</td></tr><tr><td>Stablecoin &#x3C; 100%</td><td>Redemption: users can use their stablecoins to repay debts of other lenders and gain the collateral as reward with a valuation of $1 per coin.</td></tr></tbody></table>

# Core Smart Contracts

`BorrowerOperations.sol` - contains the basic operations by which borrowers interact with their Vault: Vault creation, collateral top-up / withdrawal, debt repayment. It also sends issuance fees to the governance contract. BorrowerOperations functions call in to TroveManager, telling it to update Vault state, where necessary. They also call in to the various Pools, telling them to move Tokens between Pools or between Pool <> user, where necessary.

`TroveManager.sol` - contains the state of each Vault- i.e. a record of the Vault's collateral and debt. Also contains the Vault's stake and rewards related to the redistribution. It does not hold value (tokens). TroveManager functions call in to the various Pools to tell them to move tokens between Pools, where necessary.

`LiquidationOperations.sol` - no state or token holder, works with the TroveManager and StabilityPoolManager to liquidate Vaults if necessary.

`StabilityPool.sol` - contains functionality for Stability Pool operations: making deposits, and withdrawing compounded deposits and accumulated collateral gains. Holds the jAsset deposits, and the collateral gains for depositors, from liquidations. There is one StabilityPool for each jAsset Token.

`StabilityPoolManager.sol` - keeps track of all Stability Pool’s and acts as a distributor between them and the LiquidationOperations.

`ReservePool.sol` - holds jUSD and JLY as reserve compensation. Gets filled by the BorrowerOperations and provides tokens while a under-collaterlized liquidation.

`CollSurplusPool.sol` - holds the collateral surplus from Vaults that have been liquidated in Recovery Mode. Sends the surplus back to the owning borrower while claiming.

`RedemptionOperations.sol` - uses the state of the TroveManager and SortedTroves to execute redemptions. It burns jUSD (debt) and uses collateral from the StoragePool to payout the redeemer. Redemption fees get transfered to the governance contract.

`SortedTroves.sol` - a doubly linked list that stores addresses of Vault owners, sorted by their LACR. It inserts and re-inserts Vaults at the correct position, based on their ICR once a Vault owner updates their Vault.

`HintHelpers.sol` - helper contract, containing the read-only functionality for calculation of accurate hints to be supplied to Vault operations, required to (re-)insert the Vault into the SortedList.

`DebtToken.sol` - the jAsset token contract, which implements the ERC20 fungible token standard in conjunction with EIP-2612 and a mechanism that blocks (accidental) transfers to addresses like the StabilityPool and address(0) that are not supposed to receive funds through direct transfers. The contract mints, burns and transfers jAsset tokens.

`TokenManager.sol` - contains a list of debt (DebtToken) and collateral (ERC20) tokens which are available to the system. It allows the goverance to introduce the tokens to the system.

`StoragePool.sol` - holds the total collateral balance and records the total debt of the Vaults. It seperates the assets between:

Active **a**ssets of healthy Vaults.

Default assets of liquidated Vaults that are pending redistribution to active Vaults. If a Vault has pending debt “rewards”, then they will be applied to the Vault when it next undergoes a borrower operation, a redemption, or a liquidation.

A jUSD gasCompensation as liquidation reserve. jUSD is stored when a Vault is opened, and released a Vault is liquidated or closed.

Unassigned \*\*\*\*assets from a redistribution which liquidated the last vault of a collateral type. Those can be claim by anyone.

`SwapPair.sol` - swap pool contract. Holds the liquidity of a swap pair. It also calculates the dynamic swap fee based on the reserve (pool price) and oracle difference.

`SwapOps.sol` - manages SwapPairs and acts as a routing provider between them. It provides the borrower with the interface for debt creation, which is powered by the BorrowerOperations.

`PriceFeed.sol` - contains functionality for obtaining the current oracle price, which the system uses for calculating collateralization ratios.

# PriceFeed and Oracle

The jAsset protocol utilizes [Pyth Network](http://pyth.network/) as its decentralized oracle provider. The current prices are fetched from Pyth by the client and then passed to the contract mutations, which update the oracles via a Pyth interface. Consequently, the user pays the gas fee for the oracle update.

After updating the oracles, the PriceFeed assembles a price memory cache. This cache contains the prices of all relevant tokens and is used during execution. This schema optimizes gas consumption by ensuring that each price is requested from Pyth storage no more than once per execution.

If the last update of a token price is older than 5 minutes, the price feed is marked as untrusted. In this state, minting new debts is disabled, and only functions that increase the Total Collateral Ratio (TCR) and thus reduce system risk are permitted. Additionally, there is a fallback to a secondary price feed, which is directly written to the protocol by governance. This secondary feed is intended to cover pre-market and post-market hours, during which [Pyth Network](http://pyth.network/) may not yet provide prices, but trading on NASDAQ has already started.

# Contract Ownership and Function Permissions

All core smart contracts in the jAssets protocol inherit from the OpenZeppelin `Ownable.sol` contract template. As a result, each contract has a single owning address, which is the deploying address. Contract ownership is renounced either upon deployment or immediately after its address setter has been called, connecting it to the rest of the core jAsset system. In some cases, ownership is transferred to the Jellyverse Governance contract for future adjustments. For more details, refer to the Governance section.

Several public and external functions include modifiers such as `requireCallerIsTroveManager`, `requireCallerIsStoragePool`, etc., ensuring that they can only be called by the respective permitted contract.

# Keeping a sorted list of Vaults ordered by LACR

The jAsset protocol utilizes a specific data structure known as a sorted doubly-linked list of Vaults, which remains ordered by the last active individual collateralization ratio (LACR). The LACR is calculated as the collateral amount in USD divided by the debt amount in USD at the time of the last update by the borrower.

This ordered list is crucial for efficient gas usage during redemption sequences, as it allows Vaultsto be targeted in ascending order of their individual collateralization ratios (ICR).

The implementation of this sorted doubly-linked list can be found in SortedTroves.sol.

Each node in this list corresponds to an active Vault in the system, identified by the owner's address. The list supports positional hints for efficient O(1) insertion, which is further detailed in the HintHelper section.

Additionally, each node stores the LACR of the Vault at the time it was inserted into the list.

The decision to sort Vaults by LACR rather than ICR is based on the fact that each Vault can hold varying proportions of different collateral tokens. Changes in token prices affect individual collateralization ratios differently, making it impractical to maintain a sorted list based solely on ICR.

Nodes are re-inserted into the sorted list only when a Vault operation occurs—such as adding or removing collateral or debt from the position.

# Supplying Hints to Vault operations

All Vault operations that modify the collateralization ratio require insertion or reinsertion into the `SortedTroves` list. To optimize gas costs and computational complexity during insertion, two hints can be provided.

A hint is the address of a Vault that is close to the correct insert position in the sorted list. Vault operations use two hint arguments: `_lowerHint`, which refers to `nextId`, and `_upperHint`, which refers to `prevId`—the two adjacent nodes that are (or would become) neighbors of the Vault being operated on. This approach ensures resilience against changes in neighboring Vaults before the transaction is processed.

The effectiveness of a hint significantly reduces gas costs by minimizing the list traversal required. The `SortedList:findInsertPosition(...)` function, called during Vault operations, first checks if `_prevId` is valid (with a larger LACR than the Vault being inserted) and descends the list from there. If unsuccessful, it checks `_nextId` (with a smaller LACR) and ascends from there.

To generate useful hints, the `HintHelpers::getApproxHint(...)` function randomly selects Vaults and returns one closest to the target position for insertion. Mathematically, with `numTrials = k * sqrt(n)`, where `n` is the list size, the function's gas cost is typically `O(sqrt(n))` when `k >= 10`. This function also accepts a random seed `_inputRandomSeed` to potentially yield different results across calls, improving approximation accuracy over successive attempts.

#### Vault **Operation without a Hint**

1. User initiates a Vault operation in their browser.
2. The operation is called with `_lowerHint = _upperHint = userAddress`.
3. Gas cost worst-case scenario: `O(n)`, where `n` is the size of the `SortedTroves` list.

#### Vault **Operation with Hints**

1. User initiates a Vault operation in their browser.
2. The frontend calculates a new collateralization ratio locally based on collateral and/or debt changes.
3. Calls `HintHelpers::getApproxHint(...)` with the calculated ratio, receiving a Vault address close to the correct insertion position.
4. Calls `SortedTroves::findInsertPosition(...)` with the approximate hint (`_prevId` and `_nextId`) and the new ratio.
5. Passes the exact neighbors (`_nextId` as `_lowerHint` and `_prevId` as `_upperHint`) to the Vault operation.
6. Gas cost: Steps 2-4 are gas-free, and step 5 is `O(1)`.

Using hints makes Vault operations cheaper for users, albeit with a slightly longer completion time due to the need to await results from JSON-RPC requests to Infura, unless the frontend operator runs a full node.
