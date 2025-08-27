# Overview

Welcome to Yei Finance, a pioneering decentralized, non-custodial money market protocol on the Sei network, crafted to offer flexible and innovative financial solutions. Our protocol engages users in the following ways:

- **Deposit Assets:** Suppliers enhance market liquidity by depositing assets, earning passive income as their cryptocurrencies yield returns.
- **Borrow Assets:** Borrowers access funds through two main frameworks: traditional overcollateralized loans and undercollateralized loans via our flash loan feature, each adhering to stringent risk parameters.
- **Manage Risks:** We equip our users with advanced tools and comprehensive information designed to manage and mitigate financial risks effectively.

Yei Finance is committed to enhancing transparency and empowering our users by leveraging cutting-edge blockchain technology. This ensures that our financial services are secure, efficient, and widely accessible. Our platform accommodates a broad spectrum of assets, ranging from LRTs and LSTs to all major cryptocurrencies, and is designed to seamlessly adapt and incorporate new asset classes as the network grows. We cater to a diverse audience, including blockchain aficionados and financial investors, who are in search of innovative and strategic investment opportunities within the rapidly growing cryptocurrency market.

# YeiLend

{% content-ref url="yeilend/supply" %}
[supply](/yei-docs/products/yeilend/supply)
{% endcontent-ref %}

{% content-ref url="yeilend/borrow" %}
[borrow](/yei-docs/products/yeilend/borrow)
{% endcontent-ref %}

{% content-ref url="yeilend/withdraw" %}
[withdraw](/yei-docs/products/yeilend/withdraw)
{% endcontent-ref %}

{% content-ref url="yeilend/repay" %}
[repay](/yei-docs/products/yeilend/repay)
{% endcontent-ref %}

{% content-ref url="yeilend/bridge" %}
[bridge](/yei-docs/products/yeilend/bridge)
{% endcontent-ref %}

{% content-ref url="yeilend/high-efficiency-mode-e-mode" %}
[high-efficiency-mode-e-mode](/yei-docs/products/yeilend/high-efficiency-mode-e-mode)
{% endcontent-ref %}

{% content-ref url="yeilend/isolation-mode" %}
[isolation-mode](/yei-docs/products/yeilend/isolation-mode)
{% endcontent-ref %}

{% content-ref url="yeilend/liquidations" %}
[liquidations](/yei-docs/products/yeilend/liquidations)
{% endcontent-ref %}

{% content-ref url="yeilend/mechanism" %}
[mechanism](/yei-docs/products/yeilend/mechanism)
{% endcontent-ref %}

# Supply

At Yei Finance, depositing assets into our lending pool allows you to earn interest. Simultaneously, these assets act as collateral, enabling the borrowing of additional assets.

### **How to Supply Assets?**

To start supplying assets at Yei Finance, first access the dashboard where you can manage your assets and monitor your earnings. Follow these straightforward steps:

1. **Access the Dashboard:** Visit the Yei Finance platform and navigate to the dashboard. This is your hub for asset management and tracking returns.

   <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FOdr9s7Asa695wMIkhZfD%2F%E6%88%AA%E5%9C%96%202024-06-25%20%E6%99%9A%E4%B8%8A9.42.34.png?alt=media&#x26;token=46fe505d-275c-4126-ac4e-5199cf25cd00" alt=""><figcaption></figcaption></figure>

2. **View Available Markets:** On the left side of the dashboard, check the "Assets To Supply" list to see which markets are available.
3. **Select the Asset:** Choose the asset you wish to supply as collateral, and click “Supply”.
4. **Specify the Amount:** You can enter the amount manually or use the max option to select the amount you wish to deposit.

   <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2Fp0S2yweO3pzz1nAmItzZ%2F%E6%88%AA%E5%9C%96%202024-06-25%20%E6%99%9A%E4%B8%8A9.45.59.png?alt=media&#x26;token=1cecd54f-14c2-4d82-92ce-7aeea325084a" alt=""><figcaption></figcaption></figure>

5. **Review Terms:** Before finalizing, review the Annual Percentage Yield (APY), Gas Fee, and Health Factor associated with the asset.
6. **Confirm Transaction:** Click the "Supply Asset" button to complete the supply process.

   <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2F7UR2iggLYMaNV9rJaRcD%2F%E6%88%AA%E5%9C%96%202024-06-25%20%E6%99%9A%E4%B8%8A9.51.47.png?alt=media&#x26;token=4d007501-a8dc-41ed-a458-58403ae8ff5e" alt=""><figcaption></figcaption></figure>

#### **Supply Caps**

Supply caps define the maximum amount of an asset which can be supplied to the protocol. Supply caps can be used to limit the protocol’s exposure to riskier assets and protect against infinite minting exploits. A supply cap is an optional parameter, and the value will depend on on-chain liquidity of the asset and total volume of collateral assets in the pool.

# Borrow

By depositing supported tokens as collateral at Yei Finance, you gain the ability to borrow various assets. The terms of borrowing, such as the Loan-to-Value (LTV) ratio, conform to predefined risk parameters, with interest accruing according to these terms.

### **How to Borrow?**

#### **Preparing to Borrow**

To enable borrowing, first deposit assets as collateral. The maximum amount you can borrow depends on:

- The value of your deposited assets.
- The type of assets you have deposited.
- The liquidity available in the assets you wish to borrow.

#### **Borrowing Procedure**

To borrow assets from Yei Finance, follow these straightforward steps:

1. **Access the Dashboard:** Begin by navigating to the Yei Finance dashboard as you would for other transactions.
2. **Select the Asset:** Go to the “Assets to Borrow” section, find the asset you wish to borrow, and click the “Borrow” button.
3. **Specify the Amount:** Enter the desired borrowing amount manually or use the 'max' option to select the highest permissible amount based on your collateral.

   <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FpnhP5DSpTgD0V3eHxMqZ%2F%E6%88%AA%E5%9C%96%202024-06-25%20%E6%99%9A%E4%B8%8A9.48.35.png?alt=media&#x26;token=71c48079-aa2d-403a-b14e-54f2e2be3acb" alt=""><figcaption></figcaption></figure>

4. **Review Terms:** Carefully review all associated terms, including any warnings, the Gas Fee, and your Health Factor.
5. **Acknowledge Risks:** If presented, tick the box to acknowledge the risks involved in borrowing.

   <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FqvgkySw4HFmTBt6U1c1s%2F%E6%88%AA%E5%9C%96%202024-06-25%20%E6%99%9A%E4%B8%8A9.48.44.png?alt=media&#x26;token=d8183858-2a5e-43a2-aa51-7c0c872a6463" alt=""><figcaption></figcaption></figure>

6. **Confirm Transaction:** Click the "Borrow Asset" button to finalize the borrowing process.

   <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FyjwetjniMdeNLtgmrR09%2F%E6%88%AA%E5%9C%96%202024-06-25%20%E6%99%9A%E4%B8%8A9.49.06.png?alt=media&#x26;token=05fc0b1d-6eb7-4f91-bda6-5574412d379b" alt=""><figcaption></figcaption></figure>

#### **Potential Risks of Borrowing**

Borrowing carries inherent risks, especially if market conditions fluctuate significantly:

- **Risk of Liquidation:** If your Health Factor falls below 1, the protocol may initiate liquidation of your collateral to cover the debt, which could lead to substantial losses.

#### **Borrow Caps**

Borrow caps define the maximum amount of an asset which can be borrowed. Borrow caps can be used to prevent traditional and flash borrowing of an asset which may experience a price exploit and lead to protocol insolvency. A borrow cap is an optional parameter, and the value will depend on-chain liquidity of the asset and total volume of borrowed assets in the pool.

# Withdraw

Follow these steps to smoothly process your fund withdrawals:

1. **Access the Dashboard** as above.
2. **Select the Asset:View “Your Supplies”, and choose the asset you wish to Withdraw,** and click “**Withdraw**”.
3. **Specify the Amount:** You can enter the amount manually or use the max option to select the amount you wish to withdraw.

   <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FhKpD3FIuP8ei5OtPVf7V%2F%E6%88%AA%E5%9C%96%202024-06-25%20%E6%99%9A%E4%B8%8A9.56.23.png?alt=media&#x26;token=db3675ec-3b63-4234-a4e8-529fd3e08403" alt=""><figcaption></figcaption></figure>

4. **Review Terms:** Before finalizing, review the Remaining supply, Gas Fee, and Health Factor associated with the asset.

   <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FycGG6tu4fVScwVx24FR8%2F%E6%88%AA%E5%9C%96%202024-06-25%20%E6%99%9A%E4%B8%8A9.56.30.png?alt=media&#x26;token=d83c6e92-74fa-4283-ad2e-007df09788b2" alt=""><figcaption></figcaption></figure>

5. **Confirm Transaction:** Click the "Withdraw Asset" button to complete the supply process.

   <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FEVBk1xsNJMpPsrXFmg7c%2F%E6%88%AA%E5%9C%96%202024-06-25%20%E6%99%9A%E4%B8%8A9.56.54.png?alt=media&#x26;token=e64487ce-0771-4fe3-b5b3-f27b127a9622" alt=""><figcaption></figcaption></figure>

**Note:** Be mindful that withdrawals can impact your Health Factor and might increase the risk of liquidation.

#### **Liquidity Considerations**

Ensure there is sufficient liquidity within Yei Finance that isn't currently being borrowed. If liquidity is insufficient, you may have to wait until more funds become available or until other borrowers repay their loans.

#### **Potential Risks**

In extreme market conditions, such as when the pool's utilization hits 100%, you may find yourself unable to withdraw your deposits immediately.

# Repay

Repaying your borrowed assets is crucial for maintaining a healthy financial status within Yei Finance. Here’s how to do it:

1. **Access the Dashboard:** Similar to other transactions, start by accessing your Yei Finance dashboard.
2. **Select the Asset:** Navigate to the “Your Borrows” section, select the asset you want to repay, and click “Repay.”
3. **Specify the Amount:** Enter the amount you want to repay, either by typing it manually or selecting the 'max' option to repay the total due.

   <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FykNJrZQj6WYyp0cNslQm%2F%E6%88%AA%E5%9C%96%202024-06-25%20%E6%99%9A%E4%B8%8A9.57.07.png?alt=media&#x26;token=0e953d4c-c387-4efe-8d79-1b482c755158" alt=""><figcaption></figcaption></figure>

4. **Review Terms:** Check the remaining debt, the Gas Fee, and the Health Factor before proceeding.
5. **Confirm Transaction:** Click the "Repay Asset" button to complete the repayment.

   <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2F34gVPzEjvysj7p6BGkTe%2F%E6%88%AA%E5%9C%96%202024-06-25%20%E6%99%9A%E4%B8%8A9.57.40.png?alt=media&#x26;token=55578366-4c4d-42cc-988b-a6e05d6a15cc" alt=""><figcaption></figcaption></figure>

# Bridge

## Yei Bridge

Yei Bridge integrates Stargate and Circle's CCTP bridge, providing users with a seamless cross-chain experience. It enables users to securely and efficiently transfer assets across chains.

## CCTP

### What is CCTP?

CCTP is a protocol developed by Circle that facilitates the seamless transfer of USDC across different blockchains, specifically integrating with the Noble blockchain. For more information, check <https://developers.circle.com/stablecoins/docs/cctp-getting-started>

### How does it work?

For more information, check [https://developers.circle.com/stablecoins/docs/cctp-getting-started](https://developers.circle.com/stablecoins/docs/cctp-getting-started%E2%80%9D)

### What assets does it support?

<table><thead><tr><th width="122">Chain</th><th>Token</th><th width="263">Address</th><th width="137">Source</th><th>Bridge Average Time</th></tr></thead><tbody><tr><td><strong>Ethereum</strong></td><td>USDC</td><td>0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48</td><td><a href="https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48">Etherscan</a></td><td>~23 min</td></tr><tr><td><strong>Avalanche</strong></td><td>USDC</td><td>0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E</td><td><a href="https://snowtrace.io/token/0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e">Snowtrace</a></td><td>~3 min</td></tr><tr><td><strong>Arbitrum</strong></td><td>USDC</td><td>0xaf88d065e77c8cc2239327c5edb3a432268e5831</td><td><a href="https://arbiscan.io/token/0xaf88d065e77c8cc2239327c5edb3a432268e5831">Arbiscan</a></td><td>~23 min</td></tr><tr><td><strong>Polygon</strong></td><td>USDC</td><td>0x3c499c542cef5e3811e1192ce70d8cc03d5c3359</td><td><a href="https://polygonscan.com/token/0x3c499c542cef5e3811e1192ce70d8cc03d5c3359">Polygonscan</a></td><td>~3 min</td></tr><tr><td><strong>Base</strong></td><td>USDC</td><td>0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913</td><td><a href="https://basescan.org/token/0x833589fcd6edb6e08f4c7c32d4f71b54bda02913">Basescan</a></td><td>~32 min</td></tr><tr><td><strong>Optimism</strong></td><td>USDC</td><td>0x0b2c639c533813f4aa9d7837caf62653d097ff85</td><td><a href="https://optimistic.etherscan.io/token/0x0b2c639c533813f4aa9d7837caf62653d097ff85">OP Mainnet</a></td><td>~28 min</td></tr><tr><td><strong>SEI</strong></td><td>USDC</td><td>sei18z2qshhhlu8s4m049c4zwpyj350vqa83xj8664</td><td><a href="https://seitrace.com/address/0x3894085ef7ff0f0aedf52e2a2704928d1ec074f1?chain=pacific-1">Seitrace</a></td><td>~3 min</td></tr></tbody></table>

## Stargate

### What is Stargate?

Stargate is a fully composable liquidity transport protocol designed to facilitate the transfer of assets across different blockchains, specifically integrating with various DeFi applications. For more information, check <https://stargateprotocol.gitbook.io/stargate/v/v2-user-docs/faq>

### How does it work?

For more information, check <https://stargateprotocol.gitbook.io/stargate/v/v2-user-docs/faq>

### What assets does it support?

#### Ethereum <a href="#ethereum" id="ethereum"></a>

<table><thead><tr><th>Token</th><th width="259">Address</th><th>Source</th><th>Bridge Average Time</th></tr></thead><tbody><tr><td>USDT</td><td>0xdAC17F958D2ee523a2206206994597C13D831ec7</td><td><a href="https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7">Etherscan</a></td><td>~20 min</td></tr><tr><td>FRAX</td><td>0x853d955aCEf822Db058eb8505911ED77F175b99e</td><td><a href="https://etherscan.io/address/0x853d955aCEf822Db058eb8505911ED77F175b99e">Etherscan</a></td><td>~16 min</td></tr><tr><td>sFRAX</td><td>0xA663B02CF0a4b149d2aD41910CB81e23e1c41c32</td><td><a href="https://etherscan.io/token/0xA663B02CF0a4b149d2aD41910CB81e23e1c41c32">Etherscan</a></td><td>~20 min</td></tr><tr><td>sfrxETH</td><td>0xA663B02CF0a4b149d2aD41910CB81e23e1c41c32</td><td><a href="https://etherscan.io/token/0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32">Etherscan</a></td><td>~20 min</td></tr><tr><td>FXS</td><td>0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0</td><td><a href="https://etherscan.io/token/0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0">Etherscan</a></td><td>~15 min</td></tr></tbody></table>

#### **Avalanche**

<table><thead><tr><th>Token</th><th width="259">Address</th><th>Source</th><th>Bridge Average Time</th></tr></thead><tbody><tr><td>USDT</td><td>0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7</td><td><a href="https://snowtrace.io/token/0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7?chainid=43114">Snowtrace</a></td><td>~1 min</td></tr><tr><td>FRAX</td><td>0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64</td><td><a href="https://snowtrace.io/token/0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64?chainid=43114">Snowtrace</a></td><td>~16 min</td></tr><tr><td>FXS</td><td>0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454</td><td><a href="https://snowtrace.io/token/0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454?chainid=43114">Snowtrace</a></td><td>~16 min</td></tr></tbody></table>

#### Arbitrum

<table><thead><tr><th>Token</th><th width="260">Address</th><th>Source</th><th>Bridge Average Time</th></tr></thead><tbody><tr><td>USDT</td><td>0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9</td><td><a href="https://arbiscan.io/token/0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9">Arbiscan</a></td><td>~17 min</td></tr><tr><td>FRAX</td><td>0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F</td><td><a href="https://arbiscan.io/token/0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F">Arbiscan</a></td><td>~17 min</td></tr><tr><td>FXS</td><td>0x9d2f299715d94d8a7e6f5eaa8e654e8c74a988a7</td><td><a href="https://arbiscan.io/token/0x9d2f299715d94d8a7e6f5eaa8e654e8c74a988a7">Arbiscan</a></td><td>~17 min</td></tr></tbody></table>

#### Polygon

<table><thead><tr><th>Token</th><th width="261">Address</th><th>Source</th><th>Bridge Average Time</th></tr></thead><tbody><tr><td>USDT</td><td>0xc2132d05d31c914a87c6611c10748aeb04b58e8f</td><td><a href="https://polygonscan.com/token/0xc2132d05d31c914a87c6611c10748aeb04b58e8f">Polygonscan</a></td><td>~2 min</td></tr></tbody></table>

#### Base

<table><thead><tr><th>Token</th><th width="261">Address</th><th>Source</th><th>Bridge Average Time</th></tr></thead><tbody><tr><td>FRAX</td><td>0x909DBdE1eBE906Af95660033e478D59EFe831fED</td><td><a href="https://basescan.org/token/0x909dbde1ebe906af95660033e478d59efe831fed">Basescan</a></td><td>~18 min</td></tr><tr><td>FXS</td><td>0x23432452B720C80553458496D4D9d7C5003280d0</td><td><a href="https://basescan.org/token/0x23432452b720c80553458496d4d9d7c5003280d0">Basescan</a></td><td>~18 min</td></tr><tr><td>sFRAX</td><td>0xe4796cCB6bB5DE2290C417Ac337F2b66CA2E770E</td><td><a href="https://basescan.org/token/0xe4796ccb6bb5de2290c417ac337f2b66ca2e770e">Basescan</a></td><td>~18 min</td></tr><tr><td>sfrxETH</td><td>0x1f55a02A049033E3419a8E2975cF3F572F4e6E9A</td><td><a href="https://basescan.org/token/0x1f55a02a049033e3419a8e2975cf3f572f4e6e9a">basescan</a></td><td>~18 min</td></tr></tbody></table>

#### Optimism

<table><thead><tr><th>Token</th><th width="261">Address</th><th>Source</th><th>Bridge Average Time</th></tr></thead><tbody><tr><td>USDT</td><td>0x94b008aA00579c1307B0EF2c499aD98a8ce58e58</td><td><a href="https://optimistic.etherscan.io/token/0x94b008aa00579c1307b0ef2c499ad98a8ce58e58">OP Mainnet</a></td><td>~30 min</td></tr></tbody></table>

#### Fraxtal

<table><thead><tr><th>Token</th><th width="262">Address</th><th>Source</th><th>Bridge Average Time</th></tr></thead><tbody><tr><td>FRAX</td><td>0xFc00000000000000000000000000000000000001</td><td><a href="https://fraxscan.com/token/0xfc00000000000000000000000000000000000001">Fraxscan</a></td><td>~50 min</td></tr><tr><td>FXS</td><td>0xFc00000000000000000000000000000000000002</td><td><a href="https://fraxscan.com/token/0xfc00000000000000000000000000000000000002">Fraxscan</a></td><td>~50 min</td></tr><tr><td>FPI</td><td>0xFc00000000000000000000000000000000000003</td><td><a href="https://fraxscan.com/token/0xfc00000000000000000000000000000000000003">Fraxscan</a></td><td>~50 min</td></tr><tr><td>sFRAX</td><td>0xfc00000000000000000000000000000000000008</td><td><a href="https://fraxscan.com/token/0xfc00000000000000000000000000000000000008">Fraxscan</a></td><td>~50 min</td></tr><tr><td>sfrxETH</td><td>0xFC00000000000000000000000000000000000005</td><td><a href="https://fraxscan.com/token/0xfc00000000000000000000000000000000000005">Fraxscan</a></td><td>~50 min</td></tr></tbody></table>

#### Sei

<table><thead><tr><th>Token</th><th width="265">Address</th><th>Source</th><th>Bridge Average Time</th></tr></thead><tbody><tr><td>USDT</td><td>0x3894085Ef7Ff0f0aeDf52E2A2704928d1Ec074F1</td><td><a href="https://seitrace.com/address/0x3894085ef7ff0f0aedf52e2a2704928d1ec074f1?chain=pacific-1">Seitrace</a></td><td>~3 min</td></tr><tr><td>WETH</td><td>0x160345fC359604fC6e70E3c5fAcbdE5F7A9342d8</td><td><a href="https://seitrace.com/address/0x160345fc359604fc6e70e3c5facbde5f7a9342d8">Seitrace</a></td><td>~3 min</td></tr><tr><td>FRAX</td><td>0x80Eede496655FB9047dd39d9f418d5483ED600df</td><td><a href="https://seitrace.com/address/0x80eede496655fb9047dd39d9f418d5483ed600df?chain=pacific-1">Seitrace</a></td><td>~3 min</td></tr><tr><td>sFRAX</td><td>0x5Bff88cA1442c2496f7E475E9e7786383Bc070c0</td><td><a href="https://seitrace.com/address/0x5bff88ca1442c2496f7e475e9e7786383bc070c0?chain=pacific-1">Seitrace</a></td><td>~3 min</td></tr><tr><td>frxETH</td><td>0x43eDD7f3831b08FE70B7555ddD373C8bF65a9050</td><td><a href="https://seitrace.com/address/0x43edd7f3831b08fe70b7555ddd373c8bf65a9050">Seitrace</a></td><td>~3 min</td></tr><tr><td>sfrxETH</td><td>0x3Ec3849C33291a9eF4c5dB86De593EB4A37fDe45</td><td><a href="https://seitrace.com/address/0x3ec3849c33291a9ef4c5db86de593eb4a37fde45">Seitrace</a></td><td>~3 min</td></tr><tr><td>FXS</td><td>0x64445f0aecC51E94aD52d8AC56b7190e764E561a</td><td><a href="https://seitrace.com/token/0x64445f0aecC51E94aD52d8AC56b7190e764E561a?chain=pacific-1">Seitrace</a></td><td>~3 min</td></tr></tbody></table>

# High Efficiency Mode (E-mode)

### Overview

The High Efficiency Mode (E-mode) is designed to maximize capital efficiency by allowing users to leverage assets with correlated prices as collateral. This feature is particularly beneficial when dealing with assets like stablecoins, which maintain a consistent value relative to a specific reference, such as the USD.

### E-mode Asset Categories

Yei Finance supports two primary asset categories under E-mode:

1. **Stablecoins**: Examples include USDC and USDT, which are pegged to the USD and exhibit correlated price movements. Utilizing stablecoin E-mode, users can supply stablecoins and enjoy higher collateralization power when borrowing other stablecoins.
2. **SEI-related Assets**: This category includes assets such as WSEI and SEI. In SEI E-mode, users can supply these assets and benefit from a higher borrowing Loan-to-Value (LTV) ratio of up to 75%, thereby enhancing borrowing capacity.

### Borrowing Rules in E-mode

- **Category Restriction**: Only assets within the same category can be borrowed in E-mode. For instance, if a user supplies stablecoins in E-mode, they can only borrow other stablecoins.
- **Collateral Usage**: E-mode does not restrict the usage of other assets as collateral. Assets outside of the E-mode category can still be supplied as collateral, adhering to normal LTV and liquidation parameters.

### **How to Enter E-mode**

1. **Enable E-mode:** From the dashboard, find “Your borrows” and click “Enable E-mode.”

   <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2Fbxo0A1Z73GHjtQ9prv4F%2F%25E6%2588%25AA%25E5%259C%2596_2024-05-12_%25E6%2599%259A%25E4%25B8%258A9.14.42.png?alt=media&#x26;token=0d08a973-8df5-4d1b-802b-bb1d36e7b430" alt=""><figcaption></figcaption></figure>

2. **Follow Instructions:** After checking the warning and Gas Fee, click “Enable E-mode” to activate enhanced borrowing capabilities.

   <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FwcQImjIaYf8k2YCVgEnJ%2F%25E6%2588%25AA%25E5%259C%2596_2024-05-12_%25E6%2599%259A%25E4%25B8%258A9.16.13.png?alt=media&#x26;token=f5087817-ad33-46fe-b56f-42940030fcd5" alt=""><figcaption></figcaption></figure>

### **How to Exit E-mode**

1. **Disable E-mode:** Select “stablecoins” icon under “Your Borrows” and click “Disable E-mode”.

   <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FYpshk9jsRskgcRBCVQgx%2F%25E6%2588%25AA%25E5%259C%2596_2024-05-12_%25E6%2599%259A%25E4%25B8%258A9.17.26.png?alt=media&#x26;token=163c6fa0-aef6-4dea-8a8d-cafdb5ed6c87" alt=""><figcaption></figcaption></figure>

2. After checking the Health factor, Maximum loan to value and Gas Fee, click “Disable E-mode” to deactivate E-mode.

### How to Switch Asset Category Under E-mode

1. **Switch E-mode Category**: Select the E-mode icon and choose "Switch E-mode Category" to switch between SEI-related E-mode and Stablecoin E-mode.

<figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2F9OJlUXepfGI9WWYJeV3r%2Fimage.png?alt=media&#x26;token=704f3444-401b-40e5-a87a-d70c970a3d3e" alt=""><figcaption></figcaption></figure>

2. **Confirm Assets Under E-mode**: Before switching to another asset category, ensure that you have repaid any outstanding debt under the current asset category.

<figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2Fg9JOKJ37qZOVHwHUahT6%2Fimage.png?alt=media&#x26;token=daf67ca5-e72d-4d66-b568-ca0d626b903e" alt=""><figcaption></figcaption></figure>

# Isolation Mode

Isolation mode allows for the creation of isolated pools, each with distinct asset collections that have tailored risk management settings. This structure not only facilitates targeted risk management but also confines potential disruptions to individual markets, protecting the overall protocol's liquidity.

#### **Entering Isolation Mode**

Isolation mode is accessible for specific assets approved by Yei Governance. Here’s how to enter:

1. **Select an Isolated Asset:** From the dashboard, choose an isolated asset to supply.

   <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2FXiF1GkXieEPAwvsmysDf%2F%25E6%2588%25AA%25E5%259C%2596_2024-05-12_%25E6%2599%259A%25E4%25B8%258A8.58.49.png?alt=media&#x26;token=13371511-827f-4a67-bea6-1ad809e62474" alt=""><figcaption></figcaption></figure>

2. **Notification:** A prompt will inform you that you are entering isolation mode.

   <figure><img src="https://2983504023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj0nufC5pf4ZbVoZ4vP67%2Fuploads%2F05CmxdI9IQRq8jbP0zDi%2F%25E6%2588%25AA%25E5%259C%2596_2024-05-12_%25E6%2599%259A%25E4%25B8%258A9.04.59.png?alt=media&#x26;token=ae35fc25-b3f5-4a8c-9276-14a2b6c01f6c" alt=""><figcaption></figcaption></figure>

3. **Supply Assets:** Supply the chosen isolated asset into the pool.
4. **Borrow Assets:** Once in isolation mode, borrow stablecoins designated for this mode by Yei Governance.

#### **Exiting Isolation Mode**

To exit isolation mode:

1. **Disable Isolated Asset:** In the “Your supplies” section, toggle the slider to disable the asset.
2. **Confirm:** Click “Disable Asset as collateral” and confirm the Gas Fee to exit isolation mode.

#### **Impact on Borrowing Power**

In isolation mode, your borrowing options are limited to stablecoins. This mode imposes a specific debt ceiling per asset, which is displayed on each asset’s reserve page.

# Liquidations

### **Liquidation Process**

Liquidation is a critical safety mechanism within Yei Finance, triggered when the market value of collateral drops below a certain threshold. This process helps maintain the stability and security of the liquidity pool by ensuring that loans are repaid even in adverse market conditions.

#### **Liquidation Threshold**

The liquidation threshold is a key indicator that determines when a loan becomes undercollateralized. For example, if the liquidation threshold is set at 95%, any position whose value exceeds 95% of its collateral's worth is at risk of being liquidated.

#### **Understanding the Health Factor**

The Health Factor (HF) is a crucial metric used to assess the risk of liquidation:

$$
HealthFactor = \frac{CollateralValue \times LiquidationThreshold}{BorrowedValue}
$$

A Health Factor below 1 indicates a heightened risk of liquidation, prompting the protocol to potentially liquidate the collateral to cover the outstanding debt.

#### **Liquidation Scenarios**

**Scenario 1:**

Bob deposits 1000 SEI and borrows 600 SEI worth of USDC. If his Health Factor drops below 1, his position becomes eligible for liquidation. A liquidator can repay 50% of the borrowed amount (300 SEI worth of USDC) and claim a 5% bonus, resulting in the acquisition of 315 SEI.

**Scenario 2:**

In another scenario, Bob deposits 500 SEI and an equivalent value of iSEI, then borrows 500 SEI worth of USDC. If his position becomes eligible for liquidation, a liquidator repays 250 SEI worth of USDC and opts to claim iSEI due to its higher liquidation bonus of 15%, receiving a total of 287.5 SEI worth of iSEI.

#### **Role of Liquidation Bots**

Liquidation within Yei Finance is permissionless, allowing anyone to participate as a liquidator if the process is deemed profitable. This openness ensures that the protocol remains robust and reactive to market dynamics. Initially, the Yei team will deploy dedicated liquidation bots to facilitate efficient protocol operations.

#### **Liquidation Penalty**

The liquidation penalty, which varies by collateral type, encourages liquidators to help maintain the protocol's financial stability.

| Assets | Liquidation Penalty |
| ------ | ------------------- |
| SEI    | 8.5%                |
| USDT   | 6.5%                |
| iSEI   | 6.5%                |
| WETH   | 8.5%                |
| WBTC   | 8.5%                |
