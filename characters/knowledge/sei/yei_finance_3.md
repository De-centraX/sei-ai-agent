# Yei Finance

## Frequently Asked Questions

### **Q: Do I have to migrate?**

A: Migration is strongly recommended. As Sei transitions to an EVM-only architecture, USDC.n will have fewer use cases and reduced support across the ecosystem. Yei Finance will disable deposits and borrowing for USDC.n after **Sep 1, 2025**.

### **Q: Is USDC.n going away?**

A: Once Sei completes the SIP-3 transition, Cosmos-native assets will no longer be supported. For more details, see: [https://blog.sei.io/sip-3-update-sei-moves-toward-evm-only-architecture](https://blog.sei.io/sip-3-update-sei-moves-toward-evm-only-architecture/?utm_source=chatgpt.com).\\

---

## Summary

USDC is the official stablecoin standard on Sei.

Migrating ensures access to better DeFi opportunities, seamless cross-chain transfers, and long-term ecosystem support.

# USDT Migration Guide

USDT Migration on Sei: KavaUSDT to USDT0

## Overview

On Sei Mainnet, there are currently **two types of USDT**:

- **KavaUSDT**: Bridged via IBC from the Kava blockchain.
- **USDT0**: 1:1 backed by Ethereum-native USDT, bridged via LayerZero’s OFT standard.

Both are usable today, but **USDT0 is becoming the new standard** across the Sei DeFi ecosystem.

---

## Understanding the difference

| Feature              | USDT0                                                                                                                                                                                                  | KavaUSDT                                                                                       |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| Origin               | Ethereum-native USDT                                                                                                                                                                                   | Bridge from Kava                                                                               |
| Bridging Method      | LayerZero OFT (Omnichain Fungible Token)                                                                                                                                                               | IBC                                                                                            |
| Backing              | 1:1 backed by locked USDT on Ethereum                                                                                                                                                                  | Backed by KavaUSDT in a Kava smart contract                                                    |
| Cross-Chain Support  | Seamless via LayerZero                                                                                                                                                                                 | Limited to IBC-compatible chains                                                               |
| Ecosystem Preference | Preferred                                                                                                                                                                                              | Deprecated                                                                                     |
| Redeemability        | [Backed by USDT on Ethereum.](https://docs.usdt0.to/overview/how-usdt0-works) [Supported by native USDT on Tron, TON, Arbitrum, etc. ](https://docs.usdt0.to/overview/how-usdt0-works/the-legacy-mesh) | [Supported by native USDT on Kava.](https://help.app.kava.io/article/45-native-usdt-on-cosmos) |

---

## Why migrate to USDT0?

Protocols on Sei (including Yei Finance) are adopting **USDT0** as the primary stablecoin because of its:

- Direct backing by Ethereum USDT.
- Native compatibility with omnichain transfers (via LayerZero).
- Stronger oracle and tooling support.
- Simpler and safer app integrations.
- Future-proof ecosystem compatibility.

**USDT0** will be the default stablecoin on Sei, offering better native liquidity and security. As Sei transitions to EVM-only, **KavaUSDT will no longer be supported.**

---

## How to migrate?

You can migrate to USDT0 using the following three methods:

#### Method 1:&#x20;

- **Swap on YeiSwap.**
  - Visit [YeiSwap](https://swap.yei.finance/) to convert KavaUSDT into USDT0.

<figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FNnoQ5v2Eufl3BB8bC0YC%2Fimage.png?alt=media&#x26;token=c1f77a8e-9545-4d75-86e8-cd3229051752" alt="" width="563"><figcaption></figcaption></figure>

#### **Method 2:**

- **Use YeiBridge to migrate.**

  - Visit [YeiBridge](https://app.yei.finance/bridge/) to send your KavaUSDT to another chain (such as Avalanche, Arbitrum) as USDT.

  <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FVKpB4qlz1EbkTPPTj3cW%2Fimage.png?alt=media&#x26;token=8095efa7-b15e-4703-80ab-1f4d74067476" alt="" width="509"><figcaption></figcaption></figure>

  - Bridge the USDT back to Sei as USDT0.

  <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FONmvXq0sjKLfl9MAdckV%2Fimage.png?alt=media&#x26;token=3fb2e52c-5665-4994-9a86-e54b3355c828" alt="" width="521"><figcaption></figcaption></figure>

  {% hint style="warning" %}
  Make sure you have enough assets (such as AVAX or ETH) on the destination chain to cover transaction fees.
  {% endhint %}

**Method 3:**

{% hint style="success" %}
This method is better for large amounts and offers zero slippage from Sei to Kava EVM (as of July 24, 2025).
\
It leverages Kava but requires additional setup, such as configuring a Keplr wallet.
{% endhint %}

- **Use Kava Bridge to bridge out.**

  - Visit [Kava Bridge](https://app.kava.io/transfer), and bridge KavaUSDT from Sei to Kava EVM.

  <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2F81k3VnQ925gvygmxbrO7%2Fimage.png?alt=media&#x26;token=d3103320-d336-47df-b155-50fef87e85cb" alt="" width="493"><figcaption></figcaption></figure>

  - Wait for the bridge process to complete.

  <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2Fo1mDa7KaILMfGpwVCPJv%2Fimage.png?alt=media&#x26;token=02e8c5b4-f7d0-445f-94e4-9d241b99220d" alt="" width="443"><figcaption></figcaption></figure>

  - Check your destination wallet to ensure the USDT has arrived.

  <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FIFuPKn5PMwbABpTjWa2p%2Fimage.png?alt=media&#x26;token=b5df09c7-fbd9-4115-8731-195968c798a2" alt="" width="330"><figcaption></figcaption></figure>

  - Transfer USDT to a CEX (e.g., Binance, Bybit, etc.).

---

## Frequently Asked Questions

### **Q: Do I have to migrate?**

A: Migration is strongly recommended. As Sei transitions to an EVM-only architecture, KavaUSDT will have fewer use cases and reduced support across the ecosystem. Additionally, Yei will cease supporting deposits and borrowing for KavaUSDT after **Jul 10, 2025**.

### **Q: Is KavaUSDT going away?**

A: Once Sei completes the SIP-3 transition, Cosmos-native assets will no longer be supported. For more details, see: [https://blog.sei.io/sip-3-update-sei-moves-toward-evm-only-architecture](https://blog.sei.io/sip-3-update-sei-moves-toward-evm-only-architecture/?utm_source=chatgpt.com).

---

## Summary

USDT0 is the official stablecoin standard on Sei.

Migrating ensures access to better DeFi opportunities, cross-chain compatibility, and ecosystem-wide support.

For the best experience and compatibility, use USDT0 going forward.

# Asset Guide - USDC

Guide to USDC on Sei

## **What is USDC?**

USDC is a fully backed stablecoin pegged 1:1 to the US Dollar, issued by [Circle](https://x.com/circle). It's widely used in DeFi and digital payments for stable, fast transactions.

### Where do I get **USDC?**

You can get USDC from:

- **On-chain swaps** via Sei-based DEXs like [**_YeiSwap_**](https://swap.yei.finance/)_._
- **Centralized Exchanges** like _Binance, Coinbase, Kraken, OKX._

---

{% hint style="info" %}
The following are available as of Jul 27, 2025
{% endhint %}

## Get USDC to Sei

**Bridge USDC to Sei via YeiBridge.**

- Go to [YeiBridge](https://app.yei.finance/bridge).
- Connect your wallet and select the source chain.&#x20;
- Choose SEI EVM as the destination and enter the amount you wish to bridge.

<figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FPUKu9z0IAuqNDCpfNHhg%2Fimage.png?alt=media&#x26;token=28aa71a2-cbb1-441d-9372-59065e609c49" alt="" width="507"><figcaption></figcaption></figure>

- Sign the transaction.
- Verify the transaction is complete.

<figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FH9S3nrH2VOkmR3jImPNZ%2Fimage.png?alt=media&#x26;token=c14f9133-363f-4de3-9f79-38ebb5016884" alt="" width="558"><figcaption></figcaption></figure>

---

## Supply USDC on Yei

**Deposit USDC.**

- Navigate to the [**Yei Finance page**](https://app.yei.finance/).
- Locate USDC, and click **"Supply"**.
- Enter the amount and confirm the transaction.

<figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2F5SXeFycBRefkZDcfbeb0%2Fimage%20(2).png?alt=media&#x26;token=04c5d067-b7c1-4e7d-a19e-0bedd8e9728b" alt="" width="563"><figcaption></figcaption></figure>

**That's it! 🎉** You are now utilizing your USDC to earn rewards and Yei points.

---

## Bridge Out of Sei

**Bridge USDC out of Sei via Yei Bridge.**

- Navigate to the [YeiBridge page](https://binance.yei.finance/bridge/) and connect your wallet.
- Select **Sei** as the source chain and choose your **destination chain.**

<figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FN9vdu3aNhRTy1BD7UOxH%2Fimage.png?alt=media&#x26;token=4c22b9df-5647-42a2-bdcc-9c64eb8c8631" alt="" width="563"><figcaption></figcaption></figure>

- Enter the amount of USDC to bridge.

<figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2Fk3uOaYBf5sdzb5CQult6%2Fimage.png?alt=media&#x26;token=a2f23848-1c59-49ca-ac53-600052a4ea57" alt="" width="563"><figcaption></figcaption></figure>

- Confirm and approve the transaction in your wallet.
- Wait for the transfer to complete and verify the funds in your destination wallet.

# Asset Guide - USDT

Guide to USDT on Sei

## **What is USDT?**

USDT0 is the official USDT token on Sei, fully backed 1:1 by Ethereum's native USDT and bridged via LayerZero’s OFT (Omnichain Fungible Token) standard. It enables secure, scalable, and omnichain-compatible transfers while serving as the default stablecoin for lending, swapping, and incentives across the Sei DeFi ecosystem.

### **Where do I get USDT?**

You can get USDT from:

- **On-chain swaps** via Sei-based DEXs like [Symphony](https://symphony.finance/).
- **Centralized exchanges** (CEXs) → Acquire USDT and bridge it to Sei.
- **Bridging** from Ethereum and other chains using [Yei bridge](https://app.yei.finance/bridge/) or LayerZero-enabled bridges like [Legacy Mesh](https://usdt0.to/transfer).

---

{% hint style="info" %}
The following are available as of April 20, 2025
{% endhint %}

## Get USDT on Sei

### **Method 1: Swap for USDT on Sei**

1. **Swap via** [**Symphony**](https://symph.ag/?tokenIn=0x3894085ef7ff0f0aedf52e2a2704928d1ec074f1&tokenOut=0x9151434b16b9763660705744891fa906f660ecc5)**.**

   - Navigate to [**Symphony**](https://symph.ag/?tokenIn=0x3894085ef7ff0f0aedf52e2a2704928d1ec074f1&tokenOut=0x9151434b16b9763660705744891fa906f660ecc5).
   - Swap any asset for USDT.

   <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FruftxkEoMDyf9uHXbIS4%2Fimage.png?alt=media&#x26;token=dbe0a7d4-6eaa-4a89-922e-ced1ae8a7db5" alt="" width="563"><figcaption></figcaption></figure>

   - Approve the transaction.

### **Method 2: Bridge USDT to Sei**

1. **Acquire USDT.**
   - Get USDT from a CEX or swap on a DEX.
2. **Bridge USDT to Sei.**

   - Option 1: Use Yei Bridge. (currently supports Ethereum and Arbitrum only)

     - Navigate to the [Yei Bridge page](https://app.yei.finance/bridge/).
     - Select your **source chain** and **Sei** as the destination.

     <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2F18VSGUPtFaHF1rJWO3k0%2Fimage.png?alt=media&#x26;token=e10e9ec2-93c5-452d-9e7f-eaf0d5cad842" alt="" width="563"><figcaption></figcaption></figure>

     - Approve the transaction.

   - Option 2: Use Legacy Mesh.

     - Navigate to [Legacy Mesh](https://usdt0.to/transfer).
     - Select your **source chain** and **Sei** as the destination.

     <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FGxI5HIfyoJJPls7m3mKp%2Fimage.png?alt=media&#x26;token=77d26926-1d84-4bcf-9952-e605dbf6cf4c" alt="" width="455"><figcaption></figcaption></figure>

     - Review the bridge information.
     - Approve the transaction.

---

## Supply USDT on Yei

1. **Deposit USDT.**

   - Navigate to the [Yei Finance dashboard](https://app.yei.finance/dashboard/).
   - Locate USDT and click **"Supply"**.

   <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2Fokb8dFHii2oAOfuSvyej%2Fimage.png?alt=media&#x26;token=ef99d4e3-684a-4236-a5d0-8d654903a2aa" alt="" width="395"><figcaption></figcaption></figure>

   - Enter the amount and confirm the transaction.

🎉 That’s it! You are now utilizing your USDT to earn rewards and Yei points.

---

## Bridge USDT out of Sei

### **Method: Bridge out of Sei**

1. **Cross-chain via bridge.**

   - Option 1: Use Yei Bridge. (currently supports Ethereum and Arbitrum only)

     - Navigate to the [Yei Bridge page](https://app.yei.finance/bridge/).
     - Select **Sei** as the source chain and choose your destination chain.

     <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FIAOd8iOsy2d6NVd7oMAD%2Fimage.png?alt=media&#x26;token=279f9ad7-b620-4d8b-85da-cda45c65bb9e" alt="" width="563"><figcaption></figcaption></figure>

     - Approve the transaction.

   - Option 2: Use Legacy Mesh.

     - Navigate to [Legacy Mesh](https://usdt0.to/transfer).
     - Select Sei as the source chain and choose your destination chain.

     <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2F3NvFUd134s6lTuntD23R%2Fimage.png?alt=media&#x26;token=79d6c752-3a85-4a6d-aee1-c512816f5bea" alt="" width="458"><figcaption></figcaption></figure>

     - Review the bridge information.
     - Approve the transaction.

{% hint style="info" %}
For large transfers, start with a small test transaction to ensure a smooth process. Once comfortable, gradually increase the amount. Performing multiple test transactions is recommended to understand how the bridge operates.
{% endhint %}

# Asset Guide – sfastUSD

Guide to sfastUSD on Sei

## What is sfastUSD?

sfastUSD is a staked version of fastUSD, created through the [Elixir platform](https://www.elixir.xyz/fastusd-staking). It allows users to earn rewards while maintaining liquidity on the Sei network, and can be used across DeFi protocols like Yei Finance.

### Where do I get sfastUSD?

You can get sfastUSD from:

- Swapping SEI or USDC for fastUSD and staking it on Elixir.
- Bridging deUSD from Ethereum via Elixir and staking it to receive sfastUSD.

---

{% hint style="info" %}
The following methods are available as of Apr 27, 2025.
{% endhint %}

## Get sfastUSD on Sei

### Method 1: Swap for sfastUSD on Sei

1. **Swap vis Symphony.**

   - Navigate to [Symphony](https://symph.ag/?tokenIn=0x3894085ef7ff0f0aedf52e2a2704928d1ec074f1&tokenOut=0x160345fc359604fc6e70e3c5facbde5f7a9342d8).
   - Swap any asset for sfastUSD.

   <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FM4fs2HknFy0QJH16cKVq%2Fimage.png?alt=media&#x26;token=35b91e5f-a300-4768-9f83-774f406f22f8" alt="" width="563"><figcaption></figcaption></figure>

   - Approve the transaction.

### Method 2: Get deUSD on Elixir and bridge to Sei

1. **Get deUSD on Elixir.**

   - Visit the [Elixir platform](https://www.elixir.xyz/deusd/staking/ethereum).
   - Swap USDC for deUSD.

   <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FuaS9Wl7JvgaMXlZ6uz0h%2Fimage%20(67).png?alt=media&#x26;token=9b475bb5-85cf-436b-822c-02fd4a02de12" alt="" width="563"><figcaption></figcaption></figure>

2. **Bridge to Sei.**

   - Navigate to the [Elixir Bridge](https://bridge.elixir.xyz/) page.
   - Choose deUSD and bridge it to Sei (it becomes fastUSD on Sei).

   <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FN8y1ycLGyPZj9yBMhplj%2Fimage%20(68).png?alt=media&#x26;token=33f494f8-d8e5-494c-90df-745ddb953713" alt="" width="496"><figcaption></figcaption></figure>

   - Approve the transaction.

3. **Stake fastUSD for sfastUSD.**

   - Navigate to the [Elixir page](https://www.elixir.xyz/fastusd-staking).
   - Click on "Stake fastUSD."

   <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FkgTaZNzehDH56u18ZZz9%2Fimage%20(76).png?alt=media&#x26;token=98ddf855-37b4-4f90-a23e-c40cc723217e" alt="" width="563"><figcaption></figcaption></figure>

   - Confirm the transaction.

<figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2Fd2OWnzxXsqHzBfa9n4uK%2Fimage%20(72).png?alt=media&#x26;token=b5829a73-c2f6-45f4-ad10-8da0f26a0b48" alt="" width="502"><figcaption></figcaption></figure>

---

## Supply sfastUSD on Yei

1. **Deposit sfastUSD.**
   - Navigate to the [Yei Finance page](https://app.yei.finance/).
   - Locate sfastUSD and click "Supply."
   - Enter the amount and confirm the transaction.

<figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FphkIfUaY1zTb5VRrv3YZ%2Fimage%20(74).png?alt=media&#x26;token=fe3e1886-f42a-4d54-8a60-fb6fd1ab6aed" alt="" width="460"><figcaption></figcaption></figure>

**That’s it! 🎉** You are now utilizing your sfastUSD to earn rewards and Yei points.
