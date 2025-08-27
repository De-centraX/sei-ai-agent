# Yei Finance

# Mechanism

# Yei Points

How do Yei points work on Yei Finance?

#### Why Join Yei’s Points Program?

Earn points for your lending and borrowing activities in addition to Yei’s $SEI incentives. Go to your [dashboard](https://app.yei.finance/points/) to keep track of your points and progress.

#### How to Earn Points?

1. **Lending**:
   - Add supported assets on Yei.
   - Earn **1 point per dollar** worth of assets lent per day.
2. **Borrowing**:
   - Borrow supported assets on Yei.
   - Earn **4 points per dollar** worth of assets borrowed per day.
3. **Referrals**:
   - Share your referral link with friends.
   - Earn extra points by referring users:
     - **Direct Referral (A):** Earn 10% of the points earned by user A.
     - **Second-Level Referral (B):** Earn 5% of the points earned by user B, who is referred by user A.
     - **Third-Level Referral (C):** Earn 2.5% of the points earned by user C, who is referred by user B.
     - **Fourth-Level Referral (D):** Earn 1.25% of the points earned by user D, who is referred by user C.

#### Example Scenarios

- **Lending**: If Yeida deposits 100 $SEI on Yei for a day, with $SEI priced at $0.80, he earns 80 points (100 \* 0.8 \* 1 = 80). If Yeida deposits and holds 50 $SEI for 2 days, he also earns 80 points (50 \* 0.8 \* 2 = 80). Points accumulate based on the amount and duration of deposits.
- **Borrowing**: If Yeida borrows $100 worth of assets from Yei, such as 100 $USDC for one day, he earns 400 points (100 \* 4 = 400). If Yeida borrows and holds $50 $USDC for two days, he earns 400 points (50 \* 4 \* 2 = 400). Points accumulate based on the amount and duration of borrowed assets.
- **Referrals:** If Yeida refers a friend (A) who earns 1000 points, Yeida will earn 100 points (10% of 1000 points). If A refers another user (B) who earns 500 points, Yeida will earn an additional 25 points (5% of 500 points). If B refers two users (C1 and C2), and C1 earns 400 points while C2 earns 300 points, Yeida will earn 10 points (2.5% of 400 points) from C1 and 7.5 points (2.5% of 300 points) from C2. Points can be earned from referrals down to four levels deep!

# Fees Structure

Fees are essential to maintain and secure the protocol:

- ~~Borrowing Fee: 0.2%, applied to each loan.~~ _(Temporarily waived. May be introduced in future updates.)_
- Interest Rate Spread: 20% of the borrow rate, serving as revenue for the protocol.
- Liquidation Fee: 20% of the liquidation penalty, rewarding liquidators for maintaining protocol security.
- Flash Loan Fee: 0.1%, fostering the protocol’s growth and ensuring operational stability.

_For the latest fees, please refer to our Asset Info page._

# Oracles and Data Feeds

### **Overview**

Yei Finance employs a comprehensive price module system that integrates multiple oracle providers. API3 serves as the primary oracle, while Pyth and Redstone act as backup solutions. Oracles are fundamental to decentralized finance, supplying critical real-world data like asset market prices to the blockchain. Accurate and reliable data feeds are essential for fair collateral valuation, effective loan management, and timely liquidations.

### **Multi-Oracle Strategy**

To minimize the risk of price manipulation in lending protocols, we implement a multi-oracle integration strategy. By leveraging multiple oracle sources, we ensure the continuity and reliability of price feeds while effectively preventing anomalies.

We choose API3 as our primary oracle for providing the main data source, while additional oracles offer supplementary validation.

---

### **Oracle Providers**

#### **API3**

API3 is a top-tier oracle service offering decentralized APIs (dAPIs) that source data directly from providers, eliminating third-party intermediaries. This direct approach enhances the reliability and transparency of data feeds, contributing to the overall safety of the DeFi ecosystem.

#### **Pyth Network**

Pyth Network is an oracle protocol that bridges market data providers with applications across various blockchains. With contributions from over 100 first-party publishers, including major exchanges and market makers, Pyth offers reliable market data. It secures over 350 protocols across more than 55 blockchains.

#### **Redstone**

Redstone provides a modular oracle service, delivering frequent, reliable, and diverse data feeds. Yei Finance utilizes Redstone’s Classic model, which pushes data into on-chain storage via a relayer under specified conditions, such as heartbeat intervals and deviation thresholds. RedStone USDT and USDC push feeds are used as primary oracle for these assets.

# Dynamic Interest Rate Model

Yei Finance features dynamic interest rate model in its DeFi lending protocol, adjusting in response to fluctuations in asset supply and demand. This responsive mechanism maintains liquidity balance, with interest rates escalating with increased borrowing demand and diminishing as it wanes.

#### **Components of Interest Rates**

- **Minimum Rate:** The interest rate when asset utilization is at 0%.
- **Vertex Rate:** The rate at which utilization is equal to the vertex utilization, where the rate curve changes slope.
- **Vertex Utilization:** The specific utilization percentage at which the shift in rate slope occurs.
- **Maximum Rate:** The interest rate applied when asset utilization reaches 100%.

#### **Interest Rate Formula**

The interest rate calculation depends on the current asset utilization relative to the vertex point:

<figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FKyJYuaEdWKxZTgYVhjJ1%2F%E6%88%AA%E5%9C%96%202024-05-15%20%E4%B8%8B%E5%8D%886.02.11.png?alt=media&#x26;token=7a8f19cf-b528-4d32-8fae-48a764506ae5" alt=""><figcaption></figcaption></figure>

# Risks

At Yei Finance, while we strive to offer robust financial tools and returns, it's crucial to acknowledge and understand the inherent risks associated with using our lending protocol:

- **Market Risks:** The crypto market is volatile; significant price fluctuations can affect the value of collateral and the stability of your investments.
- **Liquidity Risks:** There might be instances when liquidity is low, and you are unable to withdraw your assets immediately, particularly when the pool's utilization is high.
- **Liquidation Risks:** If the market value of your collateral falls below the required threshold (Health Factor below 1), your assets may be liquidated to cover the loan, potentially leading to losses.
- **Smart Contract Risks:** While our platform is built on thoroughly audited smart contracts, there is always a risk of undiscovered vulnerabilities.
- **Regulatory Risks:** Changes in cryptocurrency regulations could affect the operations of DeFi platforms, including Yei Finance.

While Yei Finance strives to minimize risks, no platform is entirely risk-free. Key concerns include potential smart contract bugs and the risk of collateral liquidation. Our commitment to transparency, open-source code, and comprehensive audits are central to our risk mitigation strategy.

# YeiSwap

{% content-ref url="yeiswap/swaps" %}
[swaps](/yei-docs/products/yeiswap/swaps)
{% endcontent-ref %}

# Swaps

## Swap on Yei

YeiSwap lets you exchange one token for another directly within the Yei ecosystem. Trades are matched based on available liquidity in the pool, enabling fast and permissionless swaps.

### Mechanism

YeiSwap is a decentralized exchange (DEX) that integrates Yei’s native interest-bearing tokens.

- Users swap tokens as usual, with no change in experience.
- Liquidity providers (LPs) earn both **trading fees** and **lending yields**, boosting capital efficiency.

---

## Token Swap

<figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FxkyHxQk6LavRKcclrill%2Fimage.png?alt=media&#x26;token=4f36697e-8e6f-490b-a3bb-6ad614aa122d" alt="" width="563"><figcaption></figcaption></figure>

### Important Concepts

- **Price Impact**: Change in market price caused by your trade. Larger trades experience higher impact.
- **Slippage**: Difference between expected and actual price due to market changes. Set a slippage tolerance to manage this.

### How to Swap

Follow these steps to complete a swap on Yei:

- **Select Tokens:** Choose the token to swap from and to.
- **Set Slippage:** Adjust your slippage tolerance.

<figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FoK8sHy3GPt29xpYqNh3y%2Fimage.png?alt=media&#x26;token=2ab10667-ba7f-4444-875f-485c7e6faea2" alt="" width="257"><figcaption></figcaption></figure>

- **Review Price Impact:** Higher impact = worse rates.
- **Approve Token:** Required only on the first swap for each token.
- **Sign and Confirm:** Approve the transaction in your wallet.

---

## **Security**

View our [audit report here](/security/audits#yei-swap).

# Liquidity Provision

## Liquidity Provision

Liquidity provision on YeiSwap helps power the DEX by enabling token swaps and allows providers to earn yield from multiple sources. You are a liquidity provider (LP) when you deposit supported token pairs or yTokens into liquidity pools.

<figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FRvS87Do6rGxhu0VmQ46x%2Fimage.png?alt=media&#x26;token=68b89e82-c7b7-4368-ac75-30b2d1d869bc" alt="" width="563"><figcaption></figcaption></figure>

### Providing Liquidity

Deposit token pairs via the **Pools** tab to power swaps and earn rewards.

<figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FjHYE6q7JVbFiC0c4lBFD%2Fimage.png?alt=media&#x26;token=d8b8cfbc-0277-46ad-8b14-fdd4dbc7e356" alt="" width="563"><figcaption></figcaption></figure>

#### yToken Pools

You can deposit yTokens directly into YeiSwap pools. For example, if you supplied SEI on YeiLend and received aYeiSEI, you can then stake the token in the pool to earn dual rewards.

<figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FRl7RmsJ24uPcR55yX0VE%2Fimage.png?alt=media&#x26;token=b0f9f071-f8e8-4004-9902-1c2f22996401" alt="" width="563"><figcaption></figcaption></figure>

#### Dual Yield for LPs

Liquidity providers on YeiSwap earn **dual rewards**:

- **Lending Yields**: From the interest earned on the underlying yToken.
- **Trading Fees**: From swap activity in the pool.

<figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FwkcNO95EbdONn7NTWtxQ%2Fimage.png?alt=media&#x26;token=66b5fc64-7c00-4658-ab6c-48c44975c84f" alt="" width="272"><figcaption></figcaption></figure>

Both lending yields and trading fees are automatically accrued and claimable upon withdrawal. In addition, extra **incentives are airdropped weekly** every **Wednesday at 09:00 UTC**.

{% hint style="info" %}
Providing liquidity involves risks like impermanent loss. Understand the trade-offs before participating.
{% endhint %}

## Track Your Position

View your details in the **Portfolio** tab:

<figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2F8645WIoiUnvupIclbnXV%2Fimage.png?alt=media&#x26;token=74b774e6-f501-4934-ac5e-19d9dc4ecaae" alt="" width="563"><figcaption></figcaption></figure>

- Position size
- Pending yield
- APR
- Price range

# Asset Guides

{% content-ref url="asset-guides/asset-guide-usdc" %}
[asset-guide-usdc](/yei-docs/guides/asset-guides/asset-guide-usdc)
{% endcontent-ref %}

{% content-ref url="asset-guides/asset-guide-usdt" %}
[asset-guide-usdt](/yei-docs/guides/asset-guides/asset-guide-usdt)
{% endcontent-ref %}

{% content-ref url="asset-guides/asset-guide-sfastusd" %}
[asset-guide-sfastusd](/yei-docs/guides/asset-guides/asset-guide-sfastusd)
{% endcontent-ref %}

{% content-ref url="asset-guides/asset-guide-sei" %}
[asset-guide-sei](/yei-docs/guides/asset-guides/asset-guide-sei)
{% endcontent-ref %}

{% content-ref url="asset-guides/asset-guide-isei" %}
[asset-guide-isei](/yei-docs/guides/asset-guides/asset-guide-isei)
{% endcontent-ref %}

{% content-ref url="asset-guides/asset-guide-weth" %}
[asset-guide-weth](/yei-docs/guides/asset-guides/asset-guide-weth)
{% endcontent-ref %}

{% content-ref url="asset-guides/asset-guide-wsteth" %}
[asset-guide-wsteth](/yei-docs/guides/asset-guides/asset-guide-wsteth)
{% endcontent-ref %}

{% content-ref url="asset-guides/asset-guide-wbtc" %}
[asset-guide-wbtc](/yei-docs/guides/asset-guides/asset-guide-wbtc)
{% endcontent-ref %}

{% content-ref url="asset-guides/asset-guide-solvbtc" %}
[asset-guide-solvbtc](/yei-docs/guides/asset-guides/asset-guide-solvbtc)
{% endcontent-ref %}

{% content-ref url="asset-guides/asset-guide-xsolvbtc" %}
[asset-guide-xsolvbtc](/yei-docs/guides/asset-guides/asset-guide-xsolvbtc)
{% endcontent-ref %}

# USDC Migration Guide

USDC Migration on Sei: USDC.n to USDC

## Overview

On Sei Mainnet, there are currently **two types of USDC**:

- **USDC.n**: The IBC-enabled version of USDC, issued by Circle on the Noble chain and bridged to Cosmos-based chains like Sei.
- **USDC**: Native USDC on Sei is the official version of USDC directly issued by Circle to Sei via CCTP

Both are usable today, but **USDC is becoming the new standard** across the Sei DeFi ecosystem.

---

## Understanding the difference

| Feature              | USDC                                         | USDC.n                       |
| -------------------- | -------------------------------------------- | ---------------------------- |
| Origin               | Native USDC on Sei                           | Bridge from Noble            |
| Bridging Method      | Circle CCTP                                  | IBC                          |
| Cross-Chain Support  | Native CCTP support (Ethereum, Solana, etc.) | Limited to Cosmos IBC chains |
| Ecosystem Preference | Preferred                                    | Deprecated                   |

---

## Why migrate to USDC?

Protocols on Sei (including Yei Finance) are adopting **USDC** as the primary stablecoin for the following reasons:

- USDC is issued directly by Circle, ensuring official backing and credibility.
- USDC supports native cross-chain transfers via Circle’s CCTP.
- It has stronger oracle, analytics, and developer tooling support.
- Integrating USDC into DeFi protocols is simpler and safer.

**USDC** will be the default stablecoin on Sei, offering better native liquidity and security. As Sei transitions to EVM-only, **USDC.n will no longer be supported.**

---

## How to migrate?

You can migrate to native USDC using the following three methods:

<details>

<summary><strong>Method 1 – YeiBridge</strong><br><sub><strong>Suitable for most users. Convenient and secure, but users should watch for bridge caps and fees.</strong></sub></summary>

{% hint style="info" %}
YeiBridge also integrates with the third-party bridge Stargate. Be sure to check caps and fees before bridging.
{% endhint %}

- **Use YeiBridge to migrate.**

  - Visit [YeiBridge](https://app.yei.finance/bridge/) to send your USDC.n to another chain (such as Avalanche, Arbitrum) as USDC.

  <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FynUMpqk6Lita3xmPY1jn%2Fimage.png?alt=media&#x26;token=5bd443d7-9461-4a98-90a5-45ea4e6e15d6" alt="" width="563"><figcaption></figcaption></figure>

  - Then bridge the USDC back to Sei as native USDC.

  <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2Fp1qqytO2v4F6ggvWgT6i%2Fimage.png?alt=media&#x26;token=b6ebc24d-a36a-4a28-88c9-a60877ac316f" alt="" width="563"><figcaption></figcaption></figure>

  - If you don’t see native USDC in your wallet, you can add the Sei USDC token address [here](https://app.yei.finance/reserve-overview/?underlyingAsset=0xe15fc38f6d8c56af07bbcbe3baf5708a2bf42392&marketName=sei_mainnet_1) and click “**Add token to wallet**,” then select USDC.

    <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FkL2lSOYeUqFIE95XD1rh%2Fimage.png?alt=media&#x26;token=9ad502d4-63b3-4c91-9e62-b56bf9c0798e" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
Make sure you have enough assets (such as AVAX or ETH) on the destination chain to cover transaction fees to bridge back.&#x20;
{% endhint %}

</details>

<details>

<summary><strong>Method 2 – CCTP via Skip:Go Bridge</strong><br><sub><strong>Suitable for large transfers to avoid slippage, but requires more steps and may take longer.</strong></sub></summary>

{% hint style="info" %}
This method is better for large amounts, offering zero slippage from Sei back to Noble (as of July 24, 2025).\
It leverages CCTP but requires additional setup, such as configuring a Keplr wallet.
{% endhint %}

- **Use CCTP via Skip:Go Bridge to migrate.**

  - **Transfer USDC onto your Keplr wallet.**

    - **Option 1:** Send USDC.n from your **Sei EVM wallet** to your **Keplr wallet.**

      - Go to <https://app.sei.io/> and link your Cosmos wallet to retrieve your EVM address.

      <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2Fwkt0ZDBrAhuDI1hm3TDU%2Fimage.png?alt=media&#x26;token=5ff2524e-ccdb-481c-863c-c401e45657c4" alt="" width="563"><figcaption></figcaption></figure>

      <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2Fqd4ox5TLHdn61j7gsfAT%2Fimage.png?alt=media&#x26;token=8b011a68-41f5-4c1b-a8a1-d128cca959a7" alt="" width="563"><figcaption></figcaption></figure>

      <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FrJ4BMB1oJJqaA78QylcE%2Fimage.png?alt=media&#x26;token=565ac9b0-b846-41b7-959e-8971c82160af" alt="" width="563"><figcaption></figcaption></figure>

    - **Option 2: Import the private key from your Sei EVM wallet into Keplr wallet.**

  - **Navigate to Skip:Go Bridge.**

    - Visit [Skip:Go Bridge](https://go.skip.build/), and bridge USDC.n from Sei-EVM to your desired EVM chain. Make sure the bridge cross through Noble before confirming the transaction to avoid slippage.

    <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FwwO7yBqv8mG9m3h2Mq2Q%2Fimage.png?alt=media&#x26;token=be086ee8-6c7b-456b-b4bf-d353461eaaeb" alt="" width="416"><figcaption></figcaption></figure>

    <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FlTzKxZ5xkFnlNVJSoPRv%2Fimage.png?alt=media&#x26;token=787dc22d-a396-4c07-a4c8-25d99f76c3de" alt="" width="369"><figcaption></figcaption></figure>

    - Wait for the bridge to complete and confirm USDC in your wallet.

  - Bridge native USDC back.&#x20;

    - Visit [YeiBridge](https://app.yei.finance/bridge/)to bridge native USDC back to Sei.

    <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2F6SocIJ2CSEUqGxR1jK5Q%2Fimage.png?alt=media&#x26;token=21643c35-6a74-4970-adf4-cea2fd867e40" alt="" width="524"><figcaption></figcaption></figure>

{% hint style="warning" %}
Make sure you have enough assets (such as AVAX or ETH) on the destination chain to cover transaction fees to bridge back.&#x20;
{% endhint %}

</details>

<details>

<summary><strong>Method 3 - YeiSwap</strong><br><sub><strong>Fastest method. Ideal for smaller amounts. Be aware of potential slippage.</strong></sub></summary>

{% hint style="info" %}
Make sure to have Sei token in your wallet to pay for the transaction.
{% endhint %}

- **Swap on YeiSwap.**
  - Visit [YeiSwap](https://swap.yei.finance/) to convert assets into USDC directly on Sei.

<figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2Fm8IA5z1KJNjOEtsRvRuu%2Fimage.png?alt=media&#x26;token=2aab7073-70fc-4ba0-a0ed-04877f42167f" alt="" width="523"><figcaption></figcaption></figure>

</details>

For details about native USDC, please refer to our asset guide: [Asset Guide - USDC](/yei-docs/guides/asset-guides/asset-guide-usdc)

---
