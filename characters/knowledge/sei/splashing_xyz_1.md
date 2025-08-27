# Splashing: Liquid Staking on SEI EVM

Welcome to the official documentation for Splashing, a liquid staking protocol built on the SEI network. Splashing makes staking SEI tokens simple, flexible, and efficient, allowing you to earn rewards while keeping your assets liquid for use in DeFi. Our innovative buffer pool mechanism enables instant unstaking, bypassing the SEI network's 21-day lock period.

<figure><img src="https://2818732251-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FniaC1zjJFz2QDJGHFkFf%2Fuploads%2Fscp0RXCVTMj4B0bE8v7v%2Ftwitter.png?alt=media&#x26;token=9c413cac-a33d-49e4-9c32-1dea6730a1d1" alt=""><figcaption></figcaption></figure>

# What is Splashing?

Splashing is a liquid staking platform that lets you stake SEI tokens and receive spSEI (liquid staking SEI) tokens in return. These spSEI tokens represent your staked position and can be used across DeFi protocols—like DEXs, lending platforms, or liquidity pools—while still earning staking rewards. Splashing optimizes capital efficiency, ensures seamless reward compounding, and provides instant liquidity through its unique buffer pool system.

# Why Choose Splashing?

- **Instant Unstaking**: Access your funds immediately with our buffer pool, avoiding the 21-day unstaking period on SEI.
- **Liquid Staking**: Use spSEI in DeFi to trade, lend, or provide liquidity while earning staking rewards.
- **Automatic Reward Compounding**: Staking rewards are reinvested automatically, increasing the value of your spSEI over time.
- **Optimized Validator Distribution**: Splashing intelligently allocates stakes to validators for security and efficiency.
- **Low Fees**: Enjoy a transparent, tiered fee structure designed to maximize your returns.
- **DeFi Utility**: Use spSEI across lending platforms, DEXs, and yield farming to maximize capital efficiency.

# Introduction

Liquid staking with Splashing revolutionizes how you interact with the SEI network's staking ecosystem. By staking your SEI tokens, you receive spSEI, a liquid token that unlocks the flexibility to participate in DeFi while earning staking rewards. Our innovative buffer pool mechanism ensures you can access your funds instantly, bypassing the SEI network's standard 21-day unstaking period.

#### What is Liquid Staking?

Liquid staking allows you to stake your SEI tokens in a proof-of-stake network like SEI while receiving a liquid token (spSEI) in return. Unlike traditional staking, where assets are locked, liquid staking lets you use spSEI in DeFi protocols, such as trading, lending, or providing liquidity, without sacrificing staking rewards. This maximizes capital efficiency and flexibility.

#### Why Liquid Staking?

Liquid staking with Splashing offers several advantages:

- **Flexibility**: Use spSEI in DeFi while still earning staking rewards.
- **Instant Liquidity**: Access your funds immediately with our buffer pool, avoiding SEI's 21-day lock period.
- **Compounding Returns**: Staking rewards are automatically reinvested, increasing your spSEI's value over time.
- **DeFi Integration**: Seamlessly integrate spSEI with SEI's DeFi ecosystem for additional yield opportunities.

# What is spSEI?

spSEI is minted by Splashing's protocol when users stake SEI. It acts as a tradable receipt representing the user's staked SEI plus accrued rewards within Splashing's pool. The value of spSEI continuously appreciates against SEI due to an automatic compounding mechanism of staking rewards. At the same time, spSEI maintains full utility as liquid collateral or a trading asset throughout the SEI DeFi ecosystem.

# System Overview

<figure><img src="https://2818732251-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FniaC1zjJFz2QDJGHFkFf%2Fuploads%2FWwlRZkMTJJuOCE9CURVA%2Fimage%20(8).png?alt=media&#x26;token=294c0201-482a-4303-a0f1-76144c262dfd" alt=""><figcaption></figcaption></figure>

The Splashing SEI Staking system is a liquid staking protocol that allows users to stake SEI tokens and receive stSEI (staked SEI) tokens in return. The system implements advanced mechanisms for buffer management and validator priority to ensure optimal capital efficiency and risk management.

#### Key Mechanisms

- **Buffer Management**: Dynamic liquidity pool for instant unstaking
- **Validator Priority**: Intelligent capital allocation across validators
- **Reward Reinvestment**: Automatic reward compounding
- **Fee Optimization**: Tiered fee structure for economic efficiency

# Reward Bearing

<figure><img src="https://2818732251-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FniaC1zjJFz2QDJGHFkFf%2Fuploads%2FJkFENOb8hxfzgdAbTF8A%2Fimage%20(9).png?alt=media&#x26;token=c5703300-014b-4056-8cac-f0f54b92d6f1" alt=""><figcaption></figcaption></figure>

The reward-bearing mechanism of spSEI:

- **Exchange Ratio**: The value of spSEI is determined by the exchange ratio, which is calculated as (Staked Sei + Buffer Sei + Pending Sei) divided by the Total spSEI.
- **Staked Sei**: The portion of SEI that is actively staked with validators to earn rewards.
- **Buffer Sei**: The liquid SEI held in the buffer pool, enabling instant withdrawals.
- **Pending Sei**: SEI that is in transition, such as being processed for staking or withdrawal.
- **Auto Compound Reward**: All staking rewards are automatically compounded back into the pool, increasing the total SEI assets (the numerator), which in turn raises the exchange ratio.

**Key Points:**

- By simply holding spSEI, users benefit from auto-compounding—rewards are automatically reinvested, and the exchange ratio increases over time.
- As the exchange ratio grows, each spSEI represents more SEI, so all holders share the rewards proportionally.
- This makes spSEI a true reward-bearing asset: you earn yield automatically just by holding it, with no need for manual claiming or restaking.

# Buffer Pool Mechanism

<figure><img src="https://2818732251-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FniaC1zjJFz2QDJGHFkFf%2Fuploads%2F5DYQewAAvKzjP9Sv9SX9%2Fimage%20(11).png?alt=media&#x26;token=93c44cba-46cc-40a7-b9d4-5a2000875f9c" alt=""><figcaption></figcaption></figure>

How Splashing Staking manages SEI deposits and withdrawals:

- **Deposit Flow**: When a user sends SEI, the protocol’s dynamic distributor automatically allocates part of the funds to the buffer pool (for instant liquidity) and the rest to native staking (to earn rewards).
- **Instant Unstake**: Users can request instant withdrawals from the buffer. The fee for instant unstaking is calculated based on the current buffer liquidity tier:
- **Lower buffer liquidity = higher fee**
- **Higher buffer liquidity = lower fee**

This tiered fee structure incentivizes users to keep the buffer well-funded.

**Key Point:**

The instant unstake fee is dynamic and depends on the buffer’s current liquidity tier. The less liquidity in the buffer, the higher the fee—encouraging users to maintain a healthy buffer for everyone’s benefit.![](<https://2818732251-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FniaC1zjJFz2QDJGHFkFf%2Fuploads%2F6iX2U798YoiQrGekKiJ9%2Fimage%20(11).png?alt=media&token=eb829064-f591-4670-9043-ecef28051071>)

# Staking System

Our allocation algorithm is designed to maximize user returns. By continuously analyzing validator performance and reputation, the system dynamically distributes stakes to achieve the highest possible yield for users.

The staking system uses algorithms to select the most optimal and reputable validators for delegation. It dynamically allocates staking amounts across different validators to ensure both stable and fair returns for users. This approach maximizes yield while maintaining security and decentralization.

# FAQ

#### What is Splashing?

Splashing is a liquid-staking protocol built on SEI EVM. You stake SEI to help secure and govern the network and receive **spSEI** in return. spSEI can be used as liquid collateral across DeFi to earn extra yield.

#### How do I get staking rewards?

**spSEI** is a yield-bearing token. As validator rewards accrue, the exchange rate `spSEI → SEI` rises continuously. Simply holding spSEI means your position grows automatically, reflecting the staking rewards you’ve earned.

#### How long does unstaking take?

You have two options here:

- **Regular unstaking**: 21-day unbonding period.
- **Instant unstaking**: withdraw immediately by paying a fee.

#### What are the platform fees?

- **Staking-rewards fee**: 95% of the rewards are distributed to all stakers, while 5% of protocol-generated rewards go to the platform as an operational fee.
- **Instant-unstaking fee**: A dynamic, tiered liquidity fee calculated based on the current buffer liquidity. 95% of the collected fee is distributed to all stakers, while 5% goes to the platform as an operational cost.

#### How does instant unstaking work?

The protocol maintains a liquid SEI buffer for instant unstaking (bypassing the 21-day wait). The instant withdrawal fee is automatically reinvested into the staking system, increasing the exchange ratio and proportionally benefiting all stakers based on their stake amount.

# How to Stake

### Stake SEI to Receive spSEI:

#### Step 1: Connect your Wallet

Visit <https://splashing.xyz> and connect any EVM wallet that holds your SEI tokens. (If this is your first time interacting with the SEI network, go to <https://chainlist.org/?search=sei&testnets=false> to add the Sei Network to your wallet.)

<figure><img src="https://2818732251-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FniaC1zjJFz2QDJGHFkFf%2Fuploads%2FzUZTwoUKe0P1U86QqY0W%2Fimage%20(3).png?alt=media&#x26;token=de5569c5-e0fe-4426-ae1a-3b8b490c661b" alt=""><figcaption></figcaption></figure>

#### Step 2: Enter the amount you wish to stake

You can interact using the percentage buttons (50%, 75%, Max) or simply enter the specific amount you wish to stake. Please be careful with the amount you enter. If it exceeds what you have in your wallet or is below 0.1, your staking attempt will fail. Once you've confirmed your staking amount, simply press the "Stake" button.

<figure><img src="https://2818732251-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FniaC1zjJFz2QDJGHFkFf%2Fuploads%2F04eHZZYnGCtGWsg8yF5I%2Fimage%20(4).png?alt=media&#x26;token=faec515a-adfa-47f6-99f7-7bb3ede127da" alt=""><figcaption></figcaption></figure>

#### Step 3: Approve your transaction

After you see the pop-up window, a confirmation request will appear in your wallet.

<figure><img src="https://2818732251-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FniaC1zjJFz2QDJGHFkFf%2Fuploads%2FIideqM20WfKpUc1QeQ8c%2Fimage%20(5).png?alt=media&#x26;token=b0a6ba78-1c3e-4ebd-9e49-0272b81d43ee" alt=""><figcaption></figcaption></figure>

Click “Confirm” in your wallet to proceed further.

<figure><img src="https://2818732251-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FniaC1zjJFz2QDJGHFkFf%2Fuploads%2FQoB7c2m7M6areeevOVny%2Fimage%20(6).png?alt=media&#x26;token=829ea7bd-cccf-464c-a970-f5a161d8cdd3" alt=""><figcaption></figcaption></figure>

Once the transaction has been confirmed on the network, you will receive a confirmation pop-up window showing your transaction details. You can view the detailed transaction information by clicking "View in Explorer," which will direct you to the Sei blockchain explorer.

<figure><img src="https://2818732251-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FniaC1zjJFz2QDJGHFkFf%2Fuploads%2FyFWLpDprqXduJkjlfE4l%2Fimage%20(7).png?alt=media&#x26;token=20920336-35a3-4193-a11d-fa5deb139305" alt=""><figcaption></figcaption></figure>

You may also click on "View DeFi Opportunities." This will direct you to our DeFi page where you can explore all yield opportunities available for your spSEI tokens.

# How to Withdraw

# Contract Address

<table><thead><tr><th width="162.171875">Contract</th><th>Address</th></tr></thead><tbody><tr><td>Staking</td><td>0x151669B501b561a52ad95574603AD52546F46Bf4</td></tr><tr><td>SpSei</td><td>0xC257361320F4514D91c05F461006CE6a0300E2d2</td></tr></tbody></table>

# Interface

**Staking**

```jsx

// stake sei and get spSei
// input isDonation = false
function stake(bool isDonation) public payable

// burn spSei and start unbonding sei
function unstake(uint256 amount) public

// check your current claimable balance for unstake
mapping(address => uint256) public claimableBalance

// claim sei when unbonding is finished
function claim() public whenNotPaused

// burn spSei and retrieve sei immediately
function instantUnstake(uint256 amount) public whenNotPaused

// calcualte the buffer fee for instantUnstake
// return (success, fee)
// success: true if the buffer has enough liquidity
// fee: fee will be deducted when unstake
function getFeeWithBuffer(uint256 withdrawAmount) public view returns (bool, uint256)

// exchangeRatio = totalSei / spSei
// display in 18 decimals
function getExchangeRatio() public view returns (uint256)

```

# PeckShield

{% file src="<https://2818732251-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FniaC1zjJFz2QDJGHFkFf%2Fuploads%2FAWE0jZ4hBKIuXyRpFtSk%2FPeckShield-Audit-Report-SplashingStake-v1.0.pdf?alt=media&token=426f0f76-e914-45c9-b900-e3dffbff7678>" %}

# Logo

## Brand Kit

{% file src="<https://2818732251-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FniaC1zjJFz2QDJGHFkFf%2Fuploads%2FZwnNQRNuVJPQT3TLXUG9%2FSplashing_BrandKit.zip?alt=media&token=20ccd110-67c6-4966-a67b-ea7747cdf434>" %}

## Splashing Logo

### Classic

<figure><img src="https://2818732251-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FniaC1zjJFz2QDJGHFkFf%2Fuploads%2FWBhpogZaTG45SDEtCDuW%2Flogo.png?alt=media&#x26;token=45fd06a5-1616-42be-8cc7-7c8a31e569ea" alt=""><figcaption></figcaption></figure>

### Yellow

<figure><img src="https://2818732251-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FniaC1zjJFz2QDJGHFkFf%2Fuploads%2FSNvxsVGB17l5pGtdphui%2Flogo_yellow.png?alt=media&#x26;token=d23deccb-77d1-4fee-859a-60a497316459" alt=""><figcaption></figcaption></figure>

### Green

<figure><img src="https://2818732251-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FniaC1zjJFz2QDJGHFkFf%2Fuploads%2FGEOULJyIRmHQ77spTxK3%2Flogo_green.png?alt=media&#x26;token=eacc61af-e471-495f-857e-5493924bbe39" alt=""><figcaption></figcaption></figure>

## spSEI

<figure><img src="https://2818732251-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FniaC1zjJFz2QDJGHFkFf%2Fuploads%2FLaLZ03yJEwFAOP30eSiI%2FspSEI.png?alt=media&#x26;token=b5bbcfb0-7308-4212-b6ca-6e882653b876" alt=""><figcaption></figcaption></figure>
