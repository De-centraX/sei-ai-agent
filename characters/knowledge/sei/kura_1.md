# Welcome to Kura

## Introduction

Welcome to Kura, a decentralized spot DEX built on Sei, designed to unify performance, decentralization, and usability into a seamless onchain experience.

> Powered by a ve/x(3,3) token model, Kura combines familiar DeFi mechanics with a clean, reimagined interface tailored for Sei. Whether you are a liquidity provider, active voter, or passive staker, Kura offers an intuitive way to earn, trade, and participate without the usual complexity.

## Getting Started

Kura's engine is built for speed and capital efficiency, enabling seamless trades with predictable execution and intuitive controls.

<table data-view="cards"><thead><tr><th align="center"></th><th data-type="content-ref"></th><th data-hidden data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td align="center"><strong>Key Differentiator</strong></td><td><a href="what-is-x-3-3">what-is-x-3-3</a></td><td><a href="what-is-x-3-3">what-is-x-3-3</a></td><td><a href="https://2291520555-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FEM9y4hG53kstwFptnd9e%2Fuploads%2FqU2PEbuysZK6RoKlsO3g%2Fdocs-icon1.png?alt=media&#x26;token=135d6797-609e-4f18-95b2-c8170163d1b9">docs-icon1.png</a></td></tr><tr><td align="center"><strong>Token Architecture</strong></td><td><a href="tokenomics">tokenomics</a></td><td><a href="tokenomics">tokenomics</a></td><td><a href="https://2291520555-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FEM9y4hG53kstwFptnd9e%2Fuploads%2FPwyBOOc4VR4CpwtmFJf2%2Fdocs-icon2.png?alt=media&#x26;token=24b4a142-60c9-4c81-b5a3-1fe6b8e4c972">docs-icon2.png</a></td></tr><tr><td align="center"><strong>Guides</strong></td><td><a href="how-to-guide">how-to-guide</a></td><td><a href="how-to-guide">how-to-guide</a></td><td><a href="https://2291520555-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FEM9y4hG53kstwFptnd9e%2Fuploads%2FmLrbjREdFcOW6nQIARpP%2Fdocs-icon3.png?alt=media&#x26;token=00d39c3a-3c7e-4eb8-9d47-2e99bf407e81">docs-icon3.png</a></td></tr></tbody></table>

# Swap & Market Structure

# Swap

## Swap Flow

1. Choose token pair.
2. Enter the amount to swap.
3. Review price impact, slippage, and minimum received.
4. Confirm and execute the trade.

## Swap Parameters

- **Max Slippage** — Set your tolerance. The swap reverts if exceeded.
- **Transaction Deadline** — Define a deadline (up to 72 hours). Pending swaps past this point are canceled.
- **Price Impact** — Preview how your trade may shift the pool’s market price.
- **Minimum Received** — Your swap fails if slippage causes a worse rate than expected.

# Liquidity Models

Kura supports multiple AMM curves to accommodate different market needs — from passive LPs to active range managers.

- **CLMM (Concentrated Liquidity)** : Offers the highest capital efficiency with customizable price ranges.
- **CPMM (Constant Product Market Maker) and StableSwap** : Available for simplicity or stable-asset pairs when appropriate.

Kura is optimized for CLMM strategies by default, giving LPs fine-grained control over where and how capital is deployed.

# Supported Pools

## Pool Type

- **CLMM (Concentrated Liquidity)**
  - **Volatile** : High-volatility asset pairs (10 ticks and above; ranges from Blue Chip to Degen pairs).
  - **Stable** : Low-volatility asset pairs (5 ticks or below; ranges from Deep Stable to Stable pairs).
- **Basic**
  - **Volatile** : High-volatility asset pairs (calculated using the CPMM model).
  - **Stable** : Low-volatility asset pairs (calculated using the StableSwap model).

## Rewards Type

- Gauge Pool : LPs earn token emissions and liquidity incentives.
- Gaugeless Pool : LPs earn accrued trading fees.

# Liquidity Provision

Add liquidity to earn token emissions and LP incentives. Choose a pool, set your price range, and deploy capital all within one streamlined interface.

## Pool Actions

- **Add Liquidity** : Supply token pairs to a pool and start earning.
- **Create Pool** : Launch a new trading pair by setting an initial price and providing seed liquidity. Use with caution, new pools may be thin and volatile.

## Liquidity Parameters

- **Set Price Range** : Define the upper and lower bounds for your position. Use quick presets or interactive chart tools.
- **Tick Interval** : Choose how tightly your liquidity is concentrated; tighter ranges offer higher capital efficiency but also carry more risk.
- **Epoch Rewards** : In fee-only pools (no active gauge), LPs receive 90% of swap fees. No emissions are distributed. Gauge Pools distribute emission rewards in the form of xKURA.&#x20;

# Positions

Track and manage your active liquidity positions and rewards, view earnings, APRs, and real-time fee accruals in one place.&#x20;

Accessible anytime on **My Page**.

## Position Overview

- View all active LP positions, including current APR and unclaimed rewards.
- In basic gaugeless pools, trading fees are automatically accrued to your position.

## Wallet State Messages

- **Wallet Disconnected** : Connect wallet to view your positions.
- **No Positions** : You have not provided liquidity yet. Add tokens to start earning.
- **No Swap Activity** : Swapping is paused for this epoch. Rewards may be delayed.

# What is x(3,3)?

# Why Kura Uses x(3,3)

The ve(3,3) model combined token locking with anti-dilution rewards to encourage alignment and long-term commitment.

While influential, it faced key limitations:

- **Rigid Lockups** : Up to 4 years, limiting participation and capital inflow.
- **No Exit Path** : Disengaged users remained locked, resulting in 'dead' governance power.
- **Inflexible Voting** : Static incentives and fixed locks often lead to poor governance dynamics.

Kura replaces this with x(3,3), a more dynamic system designed for permissionless, incentive-aligned participation.\\

## Built for Flexibility & Alignment

Kura’s x(3,3) system preserves the core strengths of ve(3,3), voting power, anti-dilution, and emissions control, but fixes its biggest issues:

- **No Permanent Lockups**

  Users can exit at any time; no need to commit for years.

- **Exit on Your Terms**

  Leave immediately with a 50% penalty, or vest gradually over 15 to 180 days to minimize or avoid it.

This structure ensures:

- **Active users are rewarded**, while passive or early exiters are penalized, redistributing value to long-term participants.
- **Users retain liquidity** while still earning rewards and participating in governance, making the system more capital-efficient.
- **Governance remains dynamic,** as voting power can be adjusted at any time, ensuring that no deadweight or stagnant influence persists.

| Feature          |    ve(3,3)    |     x(3,3) (Kura)     |
| ---------------- | :-----------: | :-------------------: |
| Lock Duration    | Up to 4 years | Optional (0–180 days) |
| Exit Flexibility |     None      |  Vested or Immediate  |
| Tradability      |      No       |     Yes (via k33)     |
| Auto-Compounding |      No       |          Yes          |

# Tokens, Exit, and Rewards

## Token Mechanics

- **$KURA** : The base token, used across the platform.
- **xKURA** : Non-transferable voting token obtained by locking $KURA.
- **K33** : Liquid auto-compounding version of xKURA, votes and earns rewards passively.

Kura’s incentive layers are built around three tokens — each serving a distinct role in participation, yield, and flexibility.

## Exit Schedule

- **Minimum Vesting** : 15 days (cancelable within the first 14 days)
- **Full Unlock** : After 6 months, all tokens unlock with no penalty.
- **Early Exit** : Instant exit incurs a 50% penalty, redistributed to xKURA stakers.

## K33 Benefits

- Fully liquid and tradable.
- Votes automatically on your behalf.
- Compounds protocol rewards weekly, no manual claims needed.

## Token Comparison

<table><thead><tr><th width="154.08984375">Feature</th><th width="191.3828125" align="center">$KURA</th><th width="209.63671875" align="center">xKURA</th><th align="center">K33</th></tr></thead><tbody><tr><td>Tradable</td><td align="center">Yes</td><td align="center">No</td><td align="center">Yes</td></tr><tr><td>Voting</td><td align="center">No</td><td align="center">Yes (Manual)</td><td align="center">Yes (Auto)</td></tr><tr><td>Rewards</td><td align="center">No</td><td align="center">Yes (Manual Claim)</td><td align="center">Yes (Auto-compounded)</td></tr><tr><td>Exit Penalty</td><td align="center">No</td><td align="center">Up to 50%</td><td align="center">No</td></tr><tr><td>Best For</td><td align="center">Traders</td><td align="center">Active governance voters</td><td align="center">Passive income participants</td></tr></tbody></table>

# Voting & Incentives

# Voting

Kura’s incentive system is governed by the x(3,3) model, a flexible emission architecture powered by both locked and liquid voting tokens.

Users who participate in governance help direct emissions toward preferred liquidity pools, aligning incentives across LPs, voters, and protocols.

## Voting Tokens

- **xKURA** : Non-transferable token obtained by locking $KURA; grants manual voting rights.
- **K33** : A liquid, auto-compounding derivative of xKURA that votes automatically based on a reward-maximizing strategy.

## How Voting Works

1. **Lock $KURA** to mint xKURA (1:1 ratio).
2. **Mint K33** from xKURA (optional).
3. **Vote with xKURA** or **K33** to direct weekly emissions to chosen pools.
4. **Earn rewards** via emissions, trading fees, and PvP rebases.

{% hint style="success" %}
**Note:**&#x20;

K33 automatically allocates its vote toward the optimal pools, while xKURA holders retain full manual control.
{% endhint %}

## Why It Matters

Voting ensures that token emissions are driven by real user preferences, not protocol assumptions. Whether you’re a passive holder or an active voter, Kura gives you tools to influence the network and earn in the process.

# Rewards System

Kura distributes rewards through protocol fees, emissions, and strategic bribes — all auto-compounded through K33 for passive earners.

## Reward Sources

- **Fees** : Derived from the trading fees paid by traders.
- **Incentives** : Additional bribes for xKURA/K33 holders who vote or liquidity providers
- **PvP Rebases** : Earn rewards from other users’ early exits (penalties redistributed)
- **xKURA Emissions** : Emitted by the protocol, directed to pools according to xKURA vote share

## Custom Incentives

- **LP Incentives** : Add bribes to pools to attract liquidity.
  - CLMM
    - Current Cycle : Release begins immediately, pro-rata to the remaining time in the epoch.
    - Next Cycle : Released linearly over 7 days after epoch flip.
  - Basic : Released linearly over 7 days regardless of epoch.
- **Voting Incentives** : Offer bribes to voters, distributed at each epoch reset.

# Tokenomics

Kura distributes emissions through a vote-directed gauge system, enabling token holders to influence where rewards are allocated.

## Breakdown

- **Initial Supply** : 3M
  - Released and distributed according to the Initial Token Supply & Distribution.
- **Max Supply** : 10M
  - Released gradually over 7 years as defined in Emission Mechanics.
    - Emissions decrease slightly with each epoch, gradually approaching zero over time.
- **Total Token Supply & Distribution**

<table><thead><tr><th width="337.296875">Token Distribution</th><th align="center">% of Supply</th><th align="center">Amount</th></tr></thead><tbody><tr><td>Community Incentives</td><td align="center">66.74%</td><td align="center">6,674,000</td></tr><tr><td>Marketing &#x26; Ecosystem</td><td align="center">17.96%</td><td align="center">1,796,000</td></tr><tr><td>Liquidity &#x26; Reserve: Liquidity</td><td align="center">1.8%</td><td align="center">180,000</td></tr><tr><td>Liquidity &#x26; Reserve: Reserves</td><td align="center">3%</td><td align="center">300,000</td></tr><tr><td>Liquidity &#x26; Reserve: Triggered Release</td><td align="center">3%</td><td align="center">300,000</td></tr><tr><td>Liquidity &#x26; Reserve: Treasury</td><td align="center">4.5%</td><td align="center">450,000</td></tr><tr><td>Liquidity &#x26; Reserve: Team</td><td align="center">3%</td><td align="center">300,000</td></tr></tbody></table>

- **Token Emissions**

## Initial Token Supply & Distribution

<table><thead><tr><th width="285.3671875">Token Distribution</th><th width="248.49609375" align="center">% of Supply</th><th align="center">Amount</th></tr></thead><tbody><tr><td>Community Incentives</td><td align="center">35.8%</td><td align="center">1,074,000</td></tr><tr><td>Marketing &#x26; Ecosystem</td><td align="center">13.2%</td><td align="center">396,000</td></tr><tr><td>Liquidity</td><td align="center">6%</td><td align="center">180,000</td></tr><tr><td>Reserves</td><td align="center">10%</td><td align="center">300,000</td></tr><tr><td>Triggered Release</td><td align="center">10%</td><td align="center">300,000</td></tr><tr><td>Treasury</td><td align="center">15%</td><td align="center">450,000</td></tr><tr><td>Team</td><td align="center">10%</td><td align="center">300,000</td></tr></tbody></table>

- All allocations are in xKURA, except Liquidity, Triggered Release, and Reserves.
- Team & Treasury have a 3-month lockup and 4-year vesting.

## Triggered Release

- A fixed amount of KURA is pre-supplied to the SEI-KURA pool. Upon reaching a predefined exchange rate, the tokens are converted to SEI, and the corresponding liquidity is removed.
- Accordingly, distribution occurs only upon reaching specific milestones.

## Emission Mechanics

- **Epoch Timing** : New emission cycles begin every Thursday at 15:00 UTC
- **Vote-Based Allocation** : Emissions are directed by xKURA voters
- **Decay Schedule** : Emission rate decreases gradually over time to manage supply inflation
- **Allocation** : 100% of new emissions are allocated to liquidity providers
- **Emission Variability** : Emissions may vary by ±20% per epoch, depending on market dynamics.

{% hint style="success" %}
This mechanism ensures that only actively supported pools receive sustained incentives.
{% endhint %}

# Official Links & Token Addresses

## Social Media

- Kura Official X (formerly Twitter) : <https://x.com/Kura_Dex>&#x20;
- Kura Official Discord (Support Tickets ONLY) : <https://discord.gg/rRMxyqpfhv>
- Kura Official Telegram : <https://t.me/kura_swap>
- Kura Official Medium: <https://kura-swap.medium.com/>

## Token Addresses&#x20;

You can check the token addresses on the explorer. <https://seitrace.com/>\\

- $KURA\
  0x4b416A45e1f26a53D2ee82a50a4C7D7bE9EdA9E4\\

- xKURA\
  0x0422dddD70A324f21C142143035328F3b2c92f0D\\

- K33\
  0x8A200a13c1321fdc7F6c7AFba1494E1949426eFD

## Factory Contracts

- V2 Factory: 0xAEbdA18889D6412E237e465cA25F5F346672A2eC
- V3 Factory: 0xd0c54c480fD00DDa4DF1BbE041A6881f2F09111e

# Disclaimers & Legal Disclosures

In addition to contract-level risks, users should be aware of the broader risks associated with using Kura. We strongly recommend reviewing all official documentation and risk disclosures before interacting with the protocol.

Please note that Kura does not control, guarantee, or make any representations about the monetary value of the $KURA token. The value of $KURA or any related token, such as xKURA or k33, may fluctuate significantly due to market conditions and other external factors. Holding or using these tokens does not entitle users to any guaranteed returns, yields, or protocol-derived benefits.

Use of Kura does not constitute an investment contract or create any obligation or expectation of future performance or profit. The protocol is entirely non-custodial and decentralized.

We urge users to conduct their research, understand the mechanisms and risks involved, and make fully informed decisions before participating in any part of the Kura ecosystem. Carefully assess your risk tolerance and only interact with the protocol if you fully understand the potential implications.

# Security

## Open Source Acknowledgment

Kura is built on the x(3,3) model, a mechanism first introduced by Shadow Exchange on the Sonic as an evolution of the ve(3,3) design pioneered by Andre Cronje. We forked Shadow Exchange’s audited and open-sourced contracts, adapting them to serve as the foundation for Kura on Sei Network. By building on proven and transparent infrastructure, we carry forward the spirit of collaborative DeFi innovation.
