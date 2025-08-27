# Jelly Verse

# Gas compensation

In the jAsset protocol, maximizing liquidation throughput is crucial to promptly handle undercollateralized Vaults. Liquidators, who may also hold Stability Pool deposits, play a pivotal role by profiting from these liquidations.

However, substantial gas costs pose a challenge. High gas costs for public liquidation functions may deter liquidators, resulting in prolonged undercollateralized Vault states.

To incentivize timely liquidations, the protocol directly compensates liquidators for their gas costs, ensuring they can break even or profit even during periods of high gas prices. Gas compensation consists of both jUSD and collateral:

- **Collateral**: Taken from the liquidated Vault.
- **jUSD**: Provided from a Liquidation Reserve funded when a borrower first issues debt. Each liquidation transaction draws from this reserve to compensate the liquidator. If multiple Vaults are liquidated in a single transaction, contributions from each Vault accumulate towards the total compensation.

Gas compensation per liquidated Vault follows this formula: **5 jUSD + 0.5% of the Vault's collateral**.

#### **Gas Compensation Schedule**

- **Opening a Vault**: A borrower issues an additional 5 jUSD debt to a dedicated contract, the "gas pool," for gas compensation.
- **Closing an Active Vault**: Upon Vault closure, 5 jUSD is burned from the gas pool, and the corresponding debt on the Vault is canceled, refunding the gas compensation.

#### **Gas Compensation and Redemptions**

- **Redemptions**: When a Vault is redeemed, it's against the debt minus the initial 5 jUSD. This ensures that the gas compensation remains intact for liquidators.

# The Stability Pool

Any holder of jAssets can deposit them into the Stability Pool, designed to absorb debt from liquidations and reward depositors with the liquidated collateral, proportionate to their deposit size.

Given that liquidations occur at an ICR (Initial Collateralization Ratio) just below 110%—and typically above 100% even in extreme cases—depositors generally gain from liquidations. In such scenarios, the dollar value of the gained collateral exceeds the dollar value of the jAsset loss (assuming jAsset prices align with their oracles).

After one or more liquidations, a deposit remains as a **compounded deposit**—absorbing debt losses and receiving collateral gains.

#### **Mixed Liquidations: Offset and Redistribution**

When a Vault is liquidated into the Stability Pool:

- **Offset**: If the jAsset debt matches or exceeds the Stability Pool's holdings, the debt cancels out, and the corresponding jAssets are burned.
- **Pure Offset**: If the Stability Pool holds more jAssets than the Vault's debt, the entire debt cancels, and the Vault's collateral is shared among depositors.

In cases where the Stability Pool holds fewer jAssets than the Vault's debt, a fraction of the debt is offset using the Pool's jAssets, and a proportionate fraction of the Vault's collateral goes to Stability Providers. The remaining debt and collateral redistribute to active Vault—a **mixed offset and redistribution**.

#### **Redistributions: Separated by Collateral**

Redistributions occur per collateral token type:

- For instance, a Vault with 30% BTC and 70% USDT collateral redistributes 30% of its jAsset debts to other BTC Vault and 70% to USDT Vault.

If the last Vault of a collateral type is liquidated, its tokens are marked as unassigned in the Storage Pool. They can be claimed by any borrower using the `claimUnassignedAssets` function, transferring the collateral and jAsset debts to their Vault.

#### **Reserve Pool**

The Reserve Pool compensates Stability Pool providers if a Vault's collateral ratio drops below 100% due to rapid oracle price fluctuations. Funded by debt borrowing fees and governance token subsidies, its capacity dynamically adjusts based on the total supply of jUSD tokens issued.

The Reserve Pool aims to mitigate market volatility, safeguard Stability Pool providers, and bolster overall system confidence.

# Swap Pools

The jAsset protocol has integrated a Uniswap V2 fork as its decentralized exchange (DEX), incorporating dynamic features such as a balance fee and automatic jAsset debt repayment upon liquidity removal from pools.

#### **Balance Fee**

The balance fee is initially based on the static Uniswap swap fee but dynamically increases if a trade shifts the DEX price away from the Oracle price. This incentivizes users to avoid trading against the pegged price.

#### **Automatic Debt Repayment**

When a user withdraws liquidity from a pool, the protocol automatically attempts to repay any potential jAsset debts from the user's Vault. Only after settling these debts are the remaining tokens credited to the user's account. Liquidity pool tokens are non-transferable to enforce this restriction, aiming to reduce delta-neutral jAsset positions in balances.

#### **jAsset Minting**

New jAssets can only be minted by borrowers in conjunction with swap pools:

- **Long Position (Open Long Position):** Borrowers mint new jUSD and swap it into a jAsset via a liquidity pair (`SwapOperations.openLongPosition()`).
- **Short Position (Open Short Position):** Borrowers mint a jAsset and swap it for jUSD (`SwapOperations.openShortPosition()`).

After minting, a buyback through the pools is necessary to facilitate debt repayment.

Or neutral, by providing swap pool liquidity (Neutral Position): Borrowers mint a jAsset and jUSD in the current swap pool ratio and provide them directly as liquidity into the pool (`SwapOperations.addLiquidity()`).

# Protocol System Fees

The jAssets generate revenue from various operations within its protocol. Jelly Token (JLY) holders can stake their tokens to earn a share of these fees proportionate to their stake in the total JLY staked.

#### **Revenue Generation**

1. **Redemption Fee**

   The redemption fee is deducted from the total collateral withdrawn during a redemption, based on the current redemption rate. When a redemption occurs through `RedemptionManager.redeemCollateral`, the fee is transferred to the staking contract in all used collateral tokens.

2. **Issuance Fee**

   The issuance fee, charged in jUSD, is based on the amount of debt drawn by the user and added to their Vault's jUSD debt. For jUSD, the fee varies with the current borrowing rate, which is dynamic. Other jAssets have a static borrowing rate of 0.5%.

   When new jAssets are drawn via functions like `BorrowerOperations.openTrove`, `SwapOperations.addLiquidity`, `SwapOperations.openLongPosition`, or `SwapOperations.openShortPosition`, extra jUSD is minted, and an equivalent amount of debt is added to the user’s Vault. The fee is transferred to the Reserve Pool. Once the Reserve Pool reaches its maximum capacity, subsequent fees are directed to the staking contract.

3. **Balance Fee**

   The balance fee is paid in the incoming token of a pool swap. It consists of a static portion of 0.3% (swap fee) and a dynamic portion that can reach up to 5.0%. The dynamic component is calculated based on the deviation of the pool price from the Oracle price. A higher deviation results in a higher fee. 50% of this fee is allocated to the swap pool as a reward for liquidity providers, while the remaining 50% goes to the staking contract.

#### **Fee Schedule**

- **Redemption Fee:** Calculated based on `baseRate` in `TroveManager`. The `baseRate` adjusts with each redemption, and decays over time since the last fee event.
- **Issuance Fee:** Also based on `baseRate`, adjusting with each jUSD issuance and decaying over time.
- **Fee Limits:** `REDEMPTION_FEE_FLOOR` and `BORROWING_FEE_FLOOR` are set at 0.5%. The maximum borrowing fee (`MAX_BORROWING_FEE`) is capped at 5%, ensuring fees do not drop below this threshold during redemptions to prevent front-running.

#### **Fee Decay Implementation**

Time is measured in minutes (`block.timestamp`). The `baseRate` decay rate ensures fees reduce gradually over time. The decay parameter is set to reduce the fee by approximately 1% per hour, ensuring that after one week, the `baseRate` decays significantly from its initial value. This decay mechanism prevents the `baseRate` from being artificially maintained at high levels through frequent small transactions, safeguarding against manipulation.

# Governance

The protocol includes several critical management functions essential for integrating future collateral and jAsset tokens. These functions leverage the foundational `Ownable` concept, which transfers ownership to the governance contract upon deployment.

<table><thead><tr><th width="210">Contract</th><th>Function</th></tr></thead><tbody><tr><td>TokenManager</td><td><code>setEnableMinting(bool _enable)</code></td></tr><tr><td></td><td><code>addDebtToken(address _debtTokenAddress, bytes32 _oracleId)</code></td></tr><tr><td></td><td><code>addCollToken(address _tokenAddress, uint _supportedCollateralRatio, bytes32 _oracleId, bool _isGovToken)</code></td></tr><tr><td></td><td><code>setCollTokenSupportedCollateralRatio(address _collTokenAddress, uint _supportedCollateralRatio)</code></td></tr><tr><td></td><td><code>setStockExchange(address _debtTokenAddress, address _exchangeForStock, int _exchangeRate)</code></td></tr><tr><td></td><td><code>setNextStockSplitRelative(address _debtTokenAddress, int32 _relativeSplit)</code></td></tr><tr><td></td><td><code>setSymbolAndName(address _debtTokenAddress, string memory _symbol, string memory _name)</code></td></tr><tr><td>ReservePool</td><td><code>setRelativeStableCap(uint _relativeStableCap)</code></td></tr><tr><td></td><td><code>setGovReserveCap(uint _govReserveCap)</code></td></tr><tr><td>TroveManager</td><td><code>setEnableLiquidationAndRedeeming(bool _enable)</code></td></tr><tr><td>SwapOperations</td><td><code>createPair(address _plainSwapPair, address tokenA, address tokenB)</code></td></tr></tbody></table>

Additionally, the PriceFeed incorporates a fallback price storage mechanism to handle situations where the Pyth network becomes unavailable. These fallback prices can be updated using the `PriceFeed.setFallbackPrices()` function.

# Audits

## Solid Proof:

<https://github.com/solidproof/Projects/blob/main/2024/Jellyverse/SmartContract_Audit_Solidproof_jAssets.pdf>

## Alex The Entreprenerd (GalloDaSballo):

<https://github.com/gallodasballo/apollon-review>

# Governance

A truly decentralized Governance system

The Jellyverse Governance model aims to empower users to guide protocols within the Jellyverse ecosystem in the right direction. It also provides new projects with the option to integrate into Jellyverse. This approach offers several significant advantages, as Jellyverse is known for its sustainable, robust, and scalable system. This system allows for the equitable distribution of protocol revenues to stakers, making it a promising choice for projects looking to thrive.

When new projects decide to integrate into the ecosystem, certain adjustments may be necessary, particularly in areas like reward distribution. It's essential to note that governance authority is limited to configurable parameters exclusively.

## List of configurable parameters (tbd)

## Governance System Overview

A proposal is essentially a collection of transactions. Front-end providers can design user-friendly interfaces to simplify navigation and facilitate interaction with the governance system.

To establish a genuinely decentralized governance system, every address is eligible to function as both a Proposer and an Executor. To aid comprehension, these roles are clearly outlined in the documentation.

- Proposers schedule and cancel operations.
- Executors execute operations once the timelock has expired.&#x20;

This governance model will be seamlessly integrated using OpenZeppelin's smart contracts. In this framework, JLY tokens will serve as the default voting mechanism. This modular system will comprise the following components:

- JellyToken.sol
- JellyGovernance.sol
- JellyTimelock.sol
- JellyChest.sol

During deployment, initiators will configure parameters for the following variables:

- **Voting Delay (in blocks)** - The minimum number of blocks that must pass between the time a proposal is created and the time it can be voted on.
- **Voting Period (in blocks)** - The number of blocks that a proposal has to be voted on.
- **Proposal Threshold** - The minimum number of votes required for an account to create a proposal.
- **Quorum** - The minimum number of votes required for a proposal to pass.
- **MinDelay** - The minimum number of seconds that must pass before an operation can be performed. This can be zero.

## Timelock

The Timelock feature is not obligatory but rather optional, as the minimum delay for execution can be set to 0 or a minimal value. It introduces a time delay between the submission of a proposal and its execution, thereby providing an additional layer of security and allowing the community to opt-out if they disagree with the accepted proposal. Timelocked operations are uniquely identified by their hash and follow a predefined lifecycle:

## Proposal Lifecycle

Each proposal must adhere to a predefined lifecycle to guarantee that the Jellyverse community has adequate time to review and assess it. Once a proposal is approved, it becomes irreversible and cannot be halted. Throughout its lifecycle, a proposal can be in one of the following states:

<figure><img src="https://3029210178-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F7fJxjrk6a3wPtiSa5D2R%2Fuploads%2FSMmPu8o1i389oNm3mxDu%2FUntitled%20(1920%20x%20400%20px)%20(1).png?alt=media&#x26;token=ded3f956-616b-44cf-b00e-e2181e78b6c8" alt=""><figcaption><p>Jellyverse Proposal Lifecycle </p></figcaption></figure>

The proposal can be in one of the following states:

- **Pending** - The proposal has been created, but not yet voted on.
- **Active** - The proposal has been created and is being voted on.
- **Canceled** - The proposal has been created but was canceled before it was voted on.
- **Defeated** - The proposal has been created and voted on but did not pass.
- **Succeeded** - The proposal has been created, voted on, and passed.
- **Queued** - The proposal has been created, voted on, and passed, and is waiting to be executed.
- **Expired** - The proposal has been created, voted on, and passed, but has not been executed before the GRACE_PERIOD. Placeholder value.
- **Executed** - The proposal has been created, voted on, passed, and executed.

# Rewards

### Distribution Time

All rewards are collected from Tuesday to Tuesday and distributed every Thursday, except for the real yield.

### Types of Rewards

1. Inflationary (new created $JLY Tokens)
2. Real Yield (Collected from Protocol Fees and be various Tokens)
3. Partner Rewards (Token from other Projects like $SEI and $FXS)

### Inflationary

$JLY tokens are newly created and can be accessed via the [Claim Page](https://app.jellyverse.org/claim). \\

<figure><img src="https://3029210178-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F7fJxjrk6a3wPtiSa5D2R%2Fuploads%2F98m3hxVPoafac8o3xXqC%2Fimage.png?alt=media&#x26;token=45f95ee5-0181-435a-906e-6dee414f4da6" alt=""><figcaption></figcaption></figure>

### Claim Options

- Claim Now: Receive 50% of your rewards directly in your wallet; the remaining 50% are burned.
- Start boosting: Initiate a 30-day countdown to unlock the full amount of your rewards. During this phase, you can monitor a timer displaying the remaining days until you can claim your rewards. At any point, you may choose to "Claim now" your rewards by paying a prorated fee of 50% based on the remaining days. For example, if 21 days are left in your cooldown, you pay a 35% fee.

<figure><img src="https://3029210178-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F7fJxjrk6a3wPtiSa5D2R%2Fuploads%2F5Um4YZgiuIVuznUA1kPK%2Fimage.png?alt=media&#x26;token=24553958-6de8-4e04-ae26-e4a260823a43" alt=""><figcaption></figcaption></figure>

Note: You can initiate only one cooldown phase at a time. If you are currently in a cooldown phase and it overlaps with another reward distribution, the rewards will accumulate and will be claimable after the current cooldown ends. You can also opt to Claim now the remaining days to immediately end the cooldown phase and start a new one.

Each protocol component, like JellySwap and JellyStake, has its own separate cooldown.

### Real Yield

Real yield is generated from:

- Swap Fees on JellySwap: 50% of the fees collected from swaps are distributed to liquidity miners, and the remaining 50% are sent to the DAO address.
- Fees from Future protocols such as jAssets

### Partner Rewards

Partner Rewards coming from other Projects like Sei and Frax. Partner Rewards can be also accessed via the [Claim Page](https://app.jellyverse.org/claim). Partner Rewards dont have a cooldown phase and can be claimed directly.&#x20;

### Distribution

- For Liquidity Miners: Real yield is retained in LM tokens, which accumulate over time but are not available on the Claim Page.
- For the DAO: Real yield is planned to be distributed to stakers via a governance proposal. Until then, it accumulates in LM tokens at the DAO address.

# Reward Distributor

A flexible and truly decentralized reward distribution model

## Overview

As publicly well known, every execution on EVM requires gas fees to paid. Thus, an automated reward distribution is not efficient and has to be done periodically. Additionally, calculation and distribution has to be configurable to allow new projects to build on Jellyverse and verifiable. Reward distribution is one of the key elements of the Jellyverse ecosystem and consists out of two contracts:&#x20;

1. minter.sol
2. rewarddistributor.sol

These two contracts work together seamlessly to facilitate a straightforward weekly reward distribution process. In simple terms, any user can perform an off-chain calculation using a provided (or optional) snapshot to determine which addresses are eligible to receive rewards. This approach ensures flexibility, complete decentralization, and efficiency in the distribution process.&#x20;

### Minter.sol

This smart contract will inherit an ownable smart contract so it can be called by the **Governance** to update critical parameters.

<figure><img src="https://3029210178-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F7fJxjrk6a3wPtiSa5D2R%2Fuploads%2Fd7Srde9TfLNb61dmn6qy%2FUntitled%20design%20(1).jpg?alt=media&#x26;token=be540ebd-6ba4-4025-ac2d-0a62c363cd52" alt=""><figcaption><p>Overview of the minter contract</p></figcaption></figure>

## Reward Distributor

To optimize gas efficiency, the system adheres to a weekly cycle. Within this cycle, a snapshot is generated, rewards are computed, and subsequently made available for users to claim. Users can claim tokens for one snapshot at a time, but if they haven't claimed for an extended period, multiple claims are feasible. To facilitate this process, a multicall mechanism will be employed[^1].

From a technical standpoint, it's possible to select any snapshot and timeframe for reward distribution. However, in practice, the minting of JLY tokens is specified in the JLY contract and serves as a constraint on the reward distribution contract. Additionally, the community may reach a consensus on an unofficial, easily verifiable [voting cycle](#user-content-fn-2)[^2] occurring every X blocks.

<figure><img src="https://lh7-us.googleusercontent.com/Y5cSLTBi6t0Vv-4QZrvWOUsK-89nZPw8614rqo-eLq_hOo-Y13KkpTtG0fN1KI22_612_hVo19mjvh2LdZWKdwFwJZzaJVPCLzpYd0_NqpH9QS4JXY6zh9XKibO4LK3_bvHqcnvHIrFcmv5uWSg6iQ" alt=""><figcaption><p>Overview of the reward distribution</p></figcaption></figure>

The system may utilize the Blockscout API or similar services for snapshots; however, it is essential to enhance security by implementing an on-chain snapshot, possibly using cryo. This on-chain snapshot should precisely match the snapshot obtained from the Blockscout API.

Due to complexity related to voting power, which depends on lock-up time, it's crucial to perform a snapshot of the entire relevant state. Subsequently, Jellyverse outsources the off-chain script and constructs the Merkle-Patricia Tree from the given leaves. This enables anyone to verify that the same tree is generated using the same state (leaves).

For each snapshot, a JSON file is generated and named "\<blockNumber>\_snapshot.json." An off-chain TypeScript script will utilize the OpenZeppelin merkle-tree library to create a Merkle tree for that snapshot. Calculations for token claims for Liquidity Providers or Chest NFT holders should be based on a percentage of the weekly emission of JLY tokens. To optimize gas usage, these calculations are performed off-chain. If TypeScript is deemed unsuitable, the script can be written in Python, Rust, Go, or any suitable language. Each leaf of the tree should include the index in the tree, the beneficiary's address, and the number of JLY tokens owed to that address in that snapshot (scaled to 18 decimals).

The Merkle Tree will be uploaded to both IPFS and a GitHub repository. GitHub serves as a centralized location to store all snapshots and make access convenient. In addition its stored on IPFS to ensure decentralization.&#x20;

To manage claimed tokens and prevent double claiming, a bitmap known as "Claimed" is utilized. It is intended to implement this using OpenZeppelin's BitMaps contract for efficiency and reliability.

\
\
\\

\\

[^1]: deployed??
[^2]: voting cycle??

    not distribution cycle?

# Tokenomics

Overview

**Ticker**: $JLY&#x20;

**Token contract devnet:** 0x9e7A8e558Ce582511f4104465a886b7bEfBC146b&#x20;

**Token contract mainnet:** 0xDD7d5e4Ea2125d43C16eEd8f1FFeFffa2F4b4aF6

Coinmarketcap: <https://coinmarketcap.com/currencies/jellyverse/>

Coin Gecko: <https://www.coingecko.com/en/coins/jellyverse>

### JLY Token overview <a href="#jly-token-in-a-nutshell" id="jly-token-in-a-nutshell"></a>

JLY serves as the primary governance and utility token for the Jellyverse ecosystem. JLY Stakers enjoy the privilege of participating in critical decision-making processes and influencing key parameters across a multitude of protocols and decentralized applications (dApps) within Jellyverse. As a unique utility, a part of fees generated across all protocols will be distributed to JLY Stakers.

### Utility of JLY:&#x20;

- Governance&#x20;
- Revenue Share&#x20;
- Collateral for jAssets
- Liquidity Mining&#x20;
- Staking&#x20;

### Token Allocation <a href="#token-allocation" id="token-allocation"></a>

The total supply of JLY is fixed at 800 million JLY tokens. 70.08% of the total token supply is allocated to the community over time, while 29.92% of the tokens have been allocated for the initial development, long-term growth, and future success of Jellyverse.&#x20;

<figure><img src="https://3029210178-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F7fJxjrk6a3wPtiSa5D2R%2Fuploads%2FcOo0ImWAG1UsnpVFfz4y%2Fimage.png?alt=media&#x26;token=77cf5a5c-a4b2-4114-b339-74adcde90b4b" alt=""><figcaption></figcaption></figure>

### **Detailed Overview**

**Block Rewards (54.63%)**: The largest share of tokens of 437,383,634 tokens are allocated for community rewards through block rewards. This allocation serves as an incentive for all protocols within the Jellyverse, such as Jellyswap, Jellystake, and jAssets.

**Airdrop (11.25%)**: The second-largest allocation of 90,000,000 tokens is earmarked for airdrops. Airdrops are used to distribute tokens to new users and to enhance the adoption and decentralization of JLY.

**Investors and Partners**: Investors have been allocated 73,131,641 tokens (9.14%), and partners have received 54,554,000 tokens (6.82%). Investors provided the necessary capital for development, while partners contributed to development, marketing, and strategic partnerships to ensure the long-term growth of Jellyverse.&#x20;

**Jelly** **Labs (6.87%)**: The initial development entity, Jelly Labs, holds 55,000,000 JLY tokens.&#x20;

**Advisors (1.25%)**: Jelly Labs will reserve an allocation of 10,000,000 JLY tokens for advisors who are willing to become official Jellyverse ambassadors.&#x20;

**Marketing (3.13%)**: Jelly Labs is allocated 25,000,000 JLY tokens for marketing purposes.

**Team (2.7%)**: The team is allocated 21,594,391 tokens.

**Pool Party (Launch Event) (4.17%)**: To establish initial liquidity, 33,333,334 tokens will be made available during the Pool Party Event, with 50% distributed to participants and the other 50% locked as protocol-owned liquidity on Jellyswap.

**Vesting Period:** All tokens allocated to investors, partners, advisors, Jelly Labs, Team\*\* & marketing\* are vested for a 24-month period with a 6 month cliff. This means that the tokens will be gradually unlocked, to mitigate negativ price impact. \
\
Tokens in Vesting are also in Staking, with linear unvestings counting as half the duration. This means that positions with 24-month vesting and 6M cliff are equivalent to a 15-month position.\
\
\*For marketing, 10.000.000 JLY tokens will be excluded from the vesting period, to facilitate market making, community incentives & other marketing related expenses. \
\
\*\*The team allocation is fully restricted (100% nerf), with no votes or rewards.

### Block Emission and Reward Mechanics

Block rewards will be minted according to a predetermined inflation curve and distributed weekly. The calculation will be done off-chain, using chain data, and then confirmed through a governance proposal. It will determine the per protocol allocation, and then for each protocol the per user allocation. For the DEX each pool has its own percentage wise allocation, and the rewards for individual users are allocated pro rata based on the LP token holdings. For staking the rewards will be distributed pro rata based on voting power gained through staking.&#x20;

Initially, a share of \~656,567.55 JLY will be distributed per day, tapering off according to the factor $$e^{-0.0015n}$$. This share is determined by the initial allocation of rewards to the protocols, which will be published shortly before the TGE. Once Jellyverse is fully deployed, governance has full control over the emissions.&#x20;

The theoretical cap of 800,0000,000 JLY tokens is insured by capping the rewards at a maximum of \~54.7%, which equals 437,383,634:&#x20;

$$
T\_{Reward}= \sum\limits\_{n=1}^{i}656567.5476719800e^{-0.0015n}
$$

$$
\sum\limits\_{n = 1}^{\infty} 656567.5476719800e^{-0.0015n} = 4.37383\*10^8
$$

# Whitepaper

{% file src="<https://3029210178-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F7fJxjrk6a3wPtiSa5D2R%2Fuploads%2F26Q8FGn2xKLDeMwTexwW%2FWhite%20Paper%20FINAL.pdf?alt=media&token=30d3a59d-20d5-4916-904a-06493f9f4246>" %}

# Contract Addresses

**Below is a list of all deployed Jellyverse contracts and tokens. For more details, visit** [**seitrace.com**](https://seitrace.com) **and search by the contract addresses.**

| Token      | Contract Address                           |
| ---------- | ------------------------------------------ |
| JellyToken | 0xDD7d5e4Ea2125d43C16eEd8f1FFeFffa2F4b4aF6 |
| jUSD       | 0x4c6Dd2CA85Ca55C4607Cd66A7EBdD2C9b58112Cf |
| jAAPL      | 0x9A5eE1195e5d51e4897Bf22EF3A558319f3bc96f |
| jTSLA      | 0x412621a1ff7a11A794DE81085Dc3C16777a664e2 |
| jMSTR      | 0xcdF04434541559E3f8b7766335Af6EE055C13d1c |
| jNVDA      | 0x162Fd64F868E969555c3898ee7f63b297BBffcCD |
| jMETA      | 0x5A9acdafFC92356c350F7Ed149146DA9F83cF497 |
| jTRUMP     | 0x2c3388D849ddc1F6749a438E8f21803778178B14 |

| Contract Name               | Address                                    |
| --------------------------- | ------------------------------------------ |
| JellyToken                  | 0xDD7d5e4Ea2125d43C16eEd8f1FFeFffa2F4b4aF6 |
| JellyTokenDeployer          | 0x4a431bFAcaccf5361F7fD191839B1799e22978F2 |
| JellyTimelock               | 0xF45A5C823e2f1096412EAD5EC738d36EA0615130 |
| Chest                       | 0xD04750f365a06384e7FCFD0C911C2Ea9Db0978d7 |
| JellyGovernor               | 0xE401e19B5D6239d8cfb6b2Ed1A9Fc209242Ab9ae |
| RewardVesting               | 0x7d42a77a6c1aCccd9556834a8FDd61c7e387cD4A |
| LiquidityRewardDistribution | 0x966C3F49698644484369c318c2C699739C9D8b27 |
| RewardVesting               | 0x4fA3B89D9bE830d49FD84870842d3197724DD7Ba |
| StakingRewardDistribution   | 0x38ABf1e0716C54421dAC35E19c3a3187f5379466 |
| OfficialPoolsRegister       | 0x434440Da993A582118f8eE200e51268380511fEf |
| DailySnapshot               | 0x93F6348Ee1390620d42A85ca610D40AbD941727b |
| Minter                      | 0xA9Ba2FbefDf3d77373a3e97097d35C5808664659 |
| TeamDistribution            | 0xc3266A44c6c08c53EB75416dff4816f7a60AeaD8 |
| InvestorDistribution        | 0xF4493F502dafb568A89188Ec5bD411195fc8396A |

| Contract Name        | Contract Address                                                                                                                                   |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| BorrowerOps          | [0x465BFAd498168D60cb6Fa92FC3F0415277bfB8f4](https://seitrace.com/address/0x465BFAd498168D60cb6Fa92FC3F0415277bfB8f4?tab=contract&chain=pacific-1) |
| RedemptionOps        | [0x628F4a008e0af9425DAd6E5A5939f6526C8F8446](https://seitrace.com/address/0x628F4a008e0af9425DAd6E5A5939f6526C8F8446?tab=contract&chain=pacific-1) |
| LiquidationOps       | [0x1959E6eF3A84Ae7e24A7d45Fd9cA11642C710CE7](https://seitrace.com/address/0x1959E6eF3A84Ae7e24A7d45Fd9cA11642C710CE7?tab=contract&chain=pacific-1) |
| TroveManager         | [0x53AdC171D7C0FBFf4c8E59e61a7133430FEEE173](https://seitrace.com/address/0x53AdC171D7C0FBFf4c8E59e61a7133430FEEE173?tab=contract&chain=pacific-1) |
| SortedTroves         | [0x84506d94DA9b865c16B9c089868cD1e464333917](https://seitrace.com/address/0x84506d94DA9b865c16B9c089868cD1e464333917?tab=contract&chain=pacific-1) |
| HintHelpers          | [0xc27BE26608D1f83197ADc343368Cffad2680330a](https://seitrace.com/address/0xc27BE26608D1f83197ADc343368Cffad2680330a?tab=contract&chain=pacific-1) |
| StabilityPoolManager | [0xb4EC88DBD356DA876d404a3E026F967621aAC8E7](https://seitrace.com/address/0xb4EC88DBD356DA876d404a3E026F967621aAC8E7?chain=pacific-1)              |
| StoragePool          | [0x4c357dAF6C68376826f63D23D79334Ff0D651C59](https://seitrace.com/address/0x4c357dAF6C68376826f63D23D79334Ff0D651C59?tab=contract&chain=pacific-1) |
| ReservePool          | [0x22f1939Bb1f25706656BC0FC97D660B5A5b643eb](https://seitrace.com/address/0x22f1939Bb1f25706656BC0FC97D660B5A5b643eb?tab=contract&chain=pacific-1) |
| TokenManager         | [0x0afF8523b39701b413DFfDf7E0E986c9EBc08f62](https://seitrace.com/address/0x0afF8523b39701b413DFfDf7E0E986c9EBc08f62?tab=contract&chain=pacific-1) |
| PriceFeed            | [0xf67C6464F84306BB29A1aD000479D51b86b8882F](https://seitrace.com/address/0xf67C6464F84306BB29A1aD000479D51b86b8882F?tab=contract&chain=pacific-1) |
| SwapOps              | [0x64Da11e4436F107A2bFc4f19505c277728C0F3F0](https://seitrace.com/address/0x64Da11e4436F107A2bFc4f19505c277728C0F3F0?tab=contract&chain=pacific-1) |
| StakingOps           | [0xa924c3F11f8c76bD02dad60f3E81C3d349447A84](https://seitrace.com/address/0xa924c3F11f8c76bD02dad60f3E81C3d349447A84?tab=contract&chain=pacific-1) |
| CollSurplusPool      | [0x57B662e7757E726a056109e366C6DfABFD1D262c](https://seitrace.com/address/0x57B662e7757E726a056109e366C6DfABFD1D262c?tab=contract&chain=pacific-1) |
| AlternativePriceFeed | [0x292C6A9E316d0200af3De7bA0Cf855F15a9eF2Ef](https://seitrace.com/address/0x292C6A9E316d0200af3De7bA0Cf855F15a9eF2Ef?tab=contract&chain=pacific-1) |
| StakingVestingOps    | [0x559B8d5235487D481dccb7C569e28c21D5c41be1](https://seitrace.com/address/0x559B8d5235487D481dccb7C569e28c21D5c41be1?tab=contract&chain=pacific-1) |
| DnamicFee            | [0xCD6D7aE9c38f1dB6Ae980eb17abE3917735218c1](https://seitrace.com/address/0xCD6D7aE9c38f1dB6Ae980eb17abE3917735218c1?tab=contract&chain=pacific-1) |
| Oracle               | 0xd74919a85D00Df6381A9D6d17530FD6889493b0D                                                                                                         |
| Liquidator           | 0x38Aa3262278682f86ee794f7Df456AA6440baFAD                                                                                                         |
