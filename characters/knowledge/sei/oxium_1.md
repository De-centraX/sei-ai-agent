# What is Oxium?

Oxium is an order book DEX that allows liquidity providers to post arbitrary smart contracts (hooks) as offers. This enables features such as re-staking of liquidity held on other protocols, liquidity amplification and liquidity provision via custom strategies.

## Unlock your liquidity​

Oxium's order book DEX lists promises instead of locked commitments (liquidity is not locked on Oxium). It can be employed elsewhere until the offer is matched. For example, you can provide liquidity (LP) on another exchange and use this LPed liquidity on Oxium at the same time to trade or run strategies. This way, you can earn from up to any sources of yields, spread and rewards.

# Smart offers

The main difference between Oxium and other DEXs is the ability to attach code to offers (check out Smart Offers for more information). This translates into several disruptive mechanisms:

- **Reactive liquidity**\
  The liquidity on offer on Oxium **is not locked in a pool**. As long as an offer posted on Oxium is not taken, it can generate yield elsewhere on the chain - Aave, Compound or Morpho are great examples of protocols where you could leave your liquidity to grow, waiting to be sourced.
- **Last look** \
  Since an offer contains code, **defensive mechanisms can be baked in** to cancel a promise previously made:
  - For instance, if the market conditions are not anymore satisfactory at the time the offer is taken VS when it was posted
  - Code can cover any unwanted case scenarios (ex: high volatility), and therefore can mitigate/solve problems of slippage and arbitrage
  - Code helps make zero-latency trading decisions, with as much information as available on-chain at the time the trade occurs
- **Persistence** \
  Through the executed code, the **offer can automatically repost itself** on the order book. For someone who is posting offers (we call them Makers, or Market Makers), this is very handy because they can immediately update the amount of tokens they are offering after some of it has been taken. People that take offers are called Takers.

Smart contracts can be attached to offers, which gives the Maker total freedom in setting his sourcing trade parameters.

**Other powerful applications of smart offers**[**​**](https://docs.mangrove.exchange/#powerful-applications-of-smart-offers)**:**

- **Bounty:** every single failed offer is compensated with a bounty; Keeper bots can make money, and Takers don't lose any.
- **Permissionless:** everyone can interact with the core protocol without having to ask permission nor risking to be censored.
- **Non-custodial:** Oxium users retain full control over their funds - the exchange does not hold custody of their assets.

# Bounty

What if everyone makes empty promises, and the offers in the book are all meant to fail? This is where Makers **must leave a native token provision (the bounty)** in their offer. Nothing prevents them from posting offers that will always fail. So, to ensure that the offers displayed on the book are credible, it must be costly for Makers to post orders that are not meant to go through. And in that case scenario, the bounty is then given to the Taker as compensation.&#x20;

At first, **this might appear to favor Makers**. However, with advanced market-making features that allow them to accept or cancel offers, **Makers can mitigate their risk** and offer better prices. Ultimately, both Makers and Takers benefit: the risk of offer failure is essential for the effectiveness of smart offers.

Let's spend more time understanding [Makers](/oxium-1/start-here/what-is-oxium/makers-takers-keepers/makers), [Takers](/oxium-1/start-here/what-is-oxium/makers-takers-keepers/takers), and [Keepers ](/oxium-1/start-here/what-is-oxium/makers-takers-keepers/keepers)(yes, that last one is a new term), shall we?

# Makers, Takers, Keepers

In the Oxium ecosystem, three key participants interact to facilitate a dynamic and decentralized trading environment: [Makers](/oxium-1/start-here/what-is-oxium/makers-takers-keepers/makers), [Takers](/oxium-1/start-here/what-is-oxium/makers-takers-keepers/takers), and [Keepers](/oxium-1/start-here/what-is-oxium/makers-takers-keepers/keepers). Together, they form the backbone of the Oxium ecosystem, each playing a unique yet interconnected role in ensuring a seamless and effective trading experience.

Here is a simplified three-step diagram of Oxium unlocked assets and offer-is-code approach. It also introduces the three main actors on Oxium DEX.

# Makers

Makers are participants or entities within the Oxium ecosystem who are responsible for creating and listing offers on the platform. They can specify the conditions of their offers, such as the type and quantity of assets to be exchanged, the price, and any other relevant terms. For example, they promise to give a Taker some apples 🍎 if he gives them oranges 🍊 in return.

By initiating these offers, Makers enable transactions to occur within the Oxium Protocol, contributing to a vibrant market.

# Takers

**Takers** respond to the offers set up by [Makers](/oxium-1/start-here/what-is-oxium/makers-takers-keepers/makers). They critically assess these offers, considering factors like asset types, quantities, and prices.

The role of Takers is crucial in completing transactions within the Oxium marketplace. When a Taker agrees to the terms of an offer, they effectively seals the deal proposed by the Maker, leading to the execution of the trade.

Takers provide the necessary demand and liquidity in the marketplace, ensuring that the offers created by Makers are fulfilled. Their actions complete the cycle of trading activity within the Oxium ecosystem, making it a dynamic and interactive platform for exchanges.

Takers have the ability to buy or sell assets on Oxium, using either market or limit orders, akin to a traditional orderbook. They can execute these offers through general orders or choose to clean them individually.

This interaction between Takers and Makers completes the trading cycle in the Oxium ecosystem, enhancing its interactivity and liquidity.

The workflow for Takers involves executing the logic of all relevant smart offers upon an order's placement. Successful orders are removed from the book, and the process continues until the Taker's order is completely filled. If a Maker withdraws their offer and fails to match the liquidity, the Taker is compensated with a penalty (bounty), and Oxium proceeds to the next offer. This ensures that Takers are appropriately remunerated and that the order book remains efficient.

# Keepers

Keepers functioning as automated bots that ensure the order book remains relevant and efficient. As market conditions evolve, the order book may become congested with outdated or irrelevant orders. Keepers play a pivotal role in addressing this by continuously monitoring the order book.

Their primary responsibility is to identify offers that are failing. Once a failing offer is detected, Keepers targets them to clean them off the book. This action involves setting a gas price in such a way that the offer’s bounty offsets the gas expenditure. Essentially, Keepers act as the custodians of the Oxium ecosystem, maintaining its integrity and smooth operation.

In addition to managing failing offers, Keepers are tasked with keeping the gas price up to date. This is crucial for determining the compensation for [Takers ](/oxium-1/start-here/what-is-oxium/makers-takers-keepers/takers)who remove a failing offer from the list. By doing so, Keepers ensure that Takers are appropriately remunerated for their role in sustaining the efficiency and cleanliness of the order book.

Through these functions, Keepers play an indispensable role in the maintenance and operational effectiveness of the Oxium ecosystem, safeguarding its functionality and reliability.

# Why Oxium?

## **Deploy Your Own Composable Strategy**

Oxium empowers liquidity providers with unparalleled flexibility, enabling them to customize and control their strategies:

- **Customizable Offer Management**: Liquidity providers can incorporate defensive code within their offers, post unprovisioned offers, and redisplay liquidity seamlessly after their offers are taken, ensuring optimized participation in the market.
- **Full Control Over Strategy Parameters**: Oxium gives you the freedom to set precise parameters for your strategy, allowing you to align your liquidity provision with your specific risk and reward preferences.
- **Amplified Liquidity**: Maximize your trading potential by leveraging your liquidity across multiple pairs simultaneously. For example, you can place offers on both the WETH/USDC and WBTC/USDC pairs using the same USDC liquidity, efficiently broadening your market presence.
- **Multi-Liquidity Sourcing**: Your smart offers on Oxium can source liquidity from external sources, dynamically offering it to the taker. This capability enables profitable arbitrage opportunities, as your offer can bridge liquidity from various sources in real time.

## **Explore Yield Opportunities on the Earn Page**

The [**Earn** ](/oxium-1/dapp-guide/earn)page on Oxium’s DApp lets you explore and manage yield-generating positions within available vaults, built on Oxium's. This feature not only allows liquidity providers to earn rewards but also enables **vault managers** to design and implement innovative DeFi strategies. By harnessing Oxium’s unique liquidity provisioning, vault managers can create dynamic, adaptable strategies that respond to market conditions in real time, opening up new avenues for yield generation.&#x20;

# Who is the Oxium dApp for?

The Oxium **DApp** is designed for DeFi users seeking flexible, efficient, and innovative ways to manage liquidity and execute trades. It’s particularly suited for:

- **Liquidity Providers**: Those who want to earn yield by placing offers in multiple markets without locking up their assets. Oxium’s unique approach allows liquidity providers to source funds dynamically, maximizing capital efficiency and unlocking additional earning opportunities.
- **Traders**: From beginners to experienced DeFi traders, Oxium offers advanced trading features, including limit and amplified orders, with real-time order book data, market depth, and price charts. Traders can benefit from customized order options, like setting specific prices and durations for limit orders.
- **Yield Farmers**: For DeFi users aiming to maximize their rewards, Oxium’s unique approach to liquidity provisioning offers a powerful advantage. By allowing assets to remain unlocked, Oxium enables yield farmers to participate in multiple opportunities simultaneously, effectively compounding their earning potential across various protocols. With the flexibility to dynamically source liquidity, farmers can respond to market conditions, moving their funds to the most profitable yield-generating options without being restricted by asset lock-up.
- **Developers and Integrators**: Oxium’s protocol is designed as a foundational layer for developers and projects that want to bring decentralized trading and liquidity management capabilities to their platforms. By leveraging Oxium’s flexible, modular infrastructure, developers can integrate novel liquidity strategies, such as the amplified order feature, allowing assets to be used in multiple orders at once. This enables new and innovative DeFi applications that extend beyond traditional models, paving the way for composable and efficient decentralized financial solutions. As highlighted in our recent article, Oxium is redefining the potential of liquidity in DeFi, offering developers a toolkit for the next generation of financial applications.

In summary, Oxium is ideal for anyone in the DeFi space looking for innovative, flexible tools to optimize liquidity and trading strategies across multiple markets.

# FAQ

<details>

<summary>Why do my transactions keep failing?​</summary>

Here are a few reasons as to why your transactions are failing on Oxium exchange:

- The amount of gas or slippage you selected is too low - we encourage you to tweak those values and find out what works best for your trades.
- The density for your Limit order is too low - if you're trying to place a Limit order with a small amount, your order will fail and will not be executed. Oxium requires that you provide a token amount greater than the amount of gas the triggered offer requires to be executed (called density).
- You can check the minimum volume required to post a limit order [here](/oxium-1/dapp-guide/trade/how-to-make-an-order/limit-order).

</details>

<details>

<summary>The approval amount for my limit orders seems odd - what is going on?​</summary>

**TL;DR**

- A rule of thumb for limit orders to avoid order failure due to lack of approval is to make sure you approve at least double the amount you target (or infinite approval).
- The easy way to do this is to use the "Use default" option on your wallet when executing an approval.

**Let's now clarify the difference between the "Max" and "Use default" approval values offered by your wallet.**

- "Max" will give you the maximum amount available in your wallet.
- If you have ticked the "allow infinite approval" on Oxium app, "Use default" will give you an "infinite approval" amount.
- If you have unticked the "allow infinite approval" on Oxium app, "Use default" will give you the maximum amount available in your wallet based on what you've keyed in. That amount differs **whether you are executing a market order or a limit order**.

**Example (no infinite approval)**

- Market order: if you want to buy some WETH with let's say 20 USDC, "Use default" will set the approval amount at _20 + slippage_. For a 2% slippage, the amount to approve would be 20.4 USDC.
- Limit order: if you want to buy some WETH for 20 USDC of worth with a limit order (ex: Good til time), "Use default" will set the approval amount at _40 (20 \* 2)_.
  - If you have multiple open limit orders for the same token, the approvals then need to compound.
  - Example: if you create another Good til time limit order for 20 USDC of worth, the approval amount will be 40 (previous limit order) + 40 (new limit order) = 80 USDC.

</details>

<details>

<summary>Where is my transaction history?​</summary>

Which order type are you trying to execute? There are subtle differences between the various limit orders available on our Trade page. They might appear/be processed differently. We encourage you to first read the [More on order types](/oxium-1/dapp-guide/trade/how-to-make-an-order/more-on-order-types) section.

</details>

<details>

<summary>Who pays the gas on Oxium?​</summary>

If the offer succeeds, the gas costs for the execution of the trade are paid by the offer taker. If the offer fails the taker is compensated for these gas costs.

</details>

<details>

<summary>What happens when an offer fails?​</summary>

Offers in the order book may fail when taken, either because the maker consciously chose to renege on the offer to trade, or because the maker contract reverted for other reasons. In that case, the taker has wasted some gas and will be compensated using the offer provision (in native token) that the maker has deposited in Oxium.

</details>

<details>

<summary>Are Oxium market orders the same as traditional market orders?​</summary>

Oxium's market orders are DeFi market orders - which are different from market orders in TradFi:

In TradFi, a market order is an order to buy or sell immediately at the best available price.

In DeFi, where transactions can be [front-run](https://www.investopedia.com/terms/f/frontrunning.asp) or [sandwiched](https://coinmarketcap.com/alexandria/article/what-are-sandwich-attacks-in-defi-and-how-can-you-avoid-them), adversaries may manipulate the best available price and thus extract value from a market order as there is no limit on the price. TradFi market orders are therefore unsafe for fully on-chain DEX'es like Oxium.

To protect the user, Oxium's market order therefore corresponds to a [**limit order**](https://www.investopedia.com/terms/l/limitorder.asp) in TradFi: An order to buy or sell at or below a given price. More precisely, Oxium ensures that the **average** price of the offers matched with the order does not exceed the specified price.

TL;DR: Oxium market order = TradFi limit order.

</details>

# Glossary

#### Amplified Liquidity​ <a href="#amplified-liquidity" id="amplified-liquidity"></a>

An offer on Oxium that is undercollateralized.

#### Base / Quote​ <a href="#base--quote" id="base--quote"></a>

Base token is the traded asset, quoted in Quote token.

#### **Bounty**

A portion of an offer provision that is sent to the taker to compensate a failure to deliver.

#### Cleaning Bot​ <a href="#cleaning-bot" id="cleaning-bot"></a>

An off-chain bot that keeps the order books clean by sniping failing offers.

#### Density​ <a href="#density" id="density"></a>

The ratio of tokens promised by an offer over the gas it requires to be executed.

#### Dual offer​ <a href="#dual-offer" id="dual-offer"></a>

An offer that is posted as a consequence of previous offer being taken.

#### gasLimit <a href="#gaslimit" id="gaslimit"></a>

The maximum gas requirement the taker will tolerate for an offer.

#### gasprice <a href="#gasprice" id="gasprice"></a>

An estimate of the price of a gas unit in native token amount.

#### gasreq

An upper bound of the gas units that an offer requires when called by Oxium.

#### Gives&#x20;

The volume of tokens an offer promises in exchange of the full volume of required (or wanted) tokens.

#### Hook

Internal functions in the building blocks of the Strat Lib, which may be overridden to change the default behavior of an offer logic.

#### Inbound​ <a href="#inbound" id="inbound"></a>

The token type that an offer taker must send.

#### Keeper Bot​ <a href="#keeper-bot" id="keeper-bot"></a>

An off-chain bot that helps keep Oxium functioning optimally.

#### Last Look​ <a href="#last-look" id="last-look"></a>

Feature of an offer logic that verifies whether trade execution should be cancelled.

#### Maker Contract​ <a href="#maker-contract" id="maker-contract"></a>

A maker contract is a smart contract that is bound to a smart offer posted on Oxium.

#### Maker Partial Fill​ <a href="#maker-partial-fill" id="maker-partial-fill"></a>

When an incoming order partially takes the volume given by an offer.

#### makerExecute​ <a href="#makerexecute" id="makerexecute"></a>

Callback function of an offer logic that is called by Oxium prior to trade settlement.

#### makerPosthook​ <a href="#makerposthook" id="makerposthook"></a>

The callback function of an offer logic that is called by Oxium immediately after trade settlement.

#### Offer ID​ <a href="#offer-id" id="offer-id"></a>

The identifier of an offer in a given offer list.

#### Offer List​ <a href="#offer-list" id="offer-list"></a>

A list of offers on the same token pair, ranked from best price to worst price.

#### Offer Logic​ <a href="#offer-logic" id="offer-logic"></a>

The part of a maker contract that is executed as a consequence of a call by Oxium when processing a market order.

#### Offer Owner​ <a href="#offer-owner" id="offer-owner"></a>

An account that is allowed to post, update or retract a specific offer posted by a maker contract.

#### On-the-fly Offer​ <a href="#on-the-fly-offer" id="on-the-fly-offer"></a>

An offer posted by an EOA, in contrast with a smart offer, which is posted by a smart contract.

#### Outbound​ <a href="#outbound" id="outbound"></a>

The token type that an offer taker will receive.

#### Price

Amount of quote tokens per base token that an offer demands or a taker is willing to pay

#### Provision&#x20;

An amount of native tokens that is attached to a live offer on Oxium and that is used to compensate a fail-to-deliver.

#### Ratio

The ratio 'wants/gives' between the amount an offer 'gives' and the amount it 'wants'.

#### Reactive Liquidity​ <a href="#reactive-liquidity" id="reactive-liquidity"></a>

Liquidity providers can post offers that are not fully provisioned. It is enough that their code brings the promised liquidity at match-time. In the meantime, it can be put to work.

#### Renege​ <a href="#renege" id="renege"></a>

Makers can renege on the offer to trade by incorporating defensive code in the maker contract (e.g., because the market conditions changed).

#### Reserve identifier​ <a href="#reserve-identifier" id="reserve-identifier"></a>

An immutable address identifying the fund owner when using a router

#### Router

A smart contract building block provided by the Strat Lib that is used by an offer logic to manage liquidity in a modular fashion.

#### Smart Offer​ <a href="#smart-offer" id="smart-offer"></a>

An offer that is bound to a smart contract, as opposed to an on-the-fly offer.

#### Taker Fee​ <a href="#taker-fee" id="taker-fee"></a>

A portion of the tokens promised to the taker that are sent to the Oxium protocol's vault.

#### Tick​ <a href="#tick" id="tick"></a>

A 'price point' corresponding to the ratio 1.0001^tick

#### tickSpacing​ <a href="#tickspacing" id="tickspacing"></a>

Controls the granularity of available price points in an offer list.

#### Wants​ <a href="#wants" id="wants"></a>

The volume of tokens an offer wants in exchange of the full volume of promised (or given) tokens.

# Swap

With Oxium’s swap page, you can swap tokens quickly and seamlessly. This feature allows you to execute market orders with ease, ensuring that you get the best available price without the hassle of complicated configurations.

#### **Step 1: Connect Your Wallet**

Click the **"Connect Wallet"** button at the bottom of the swap interface. This will open a pop-up for selecting and authorizing your wallet, allowing it to interact with Oxium’s DApp on the chosen network.

**Disconnecting Your Wallet**: To disconnect your wallet, click on your wallet address in the top right corner. This will bring up a small pop-up with options to **Copy Address** and **Disconnect**. Click **Disconnect** to securely log out your wallet from the DApp.

<figure><img src="https://2719346828-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fpeljr67Or3TDyhxkyIv3%2Fuploads%2FdDcP0EmtfFitU9bmphQ4%2FCapture%20d%E2%80%99e%CC%81cran%202025-05-20%20a%CC%80%2013.44.56.png?alt=media&#x26;token=1176c3fb-09f8-45d1-bfd4-074ad240c626" alt=""><figcaption></figcaption></figure>

#### **Step 2: Select Tokens for Swapping**

- With your wallet connected and network set, proceed with choosing the tokens for the swap.
- **Sell** and **Buy Sections**: The swap interface is divided into two main sections:
  - **Sell**: The token you’re offering in the swap.
  - **Buy**: The token you’ll receive in exchange.

1. **Token Selection**: Click the dropdown next to each token icon to select the token type. The available options may vary depending on the selected network.
2. **Enter Amount**:
   - **Sell Amount**: Enter the amount of the token you want to swap in the **Sell** field. An equivalent USD value is displayed below for reference.
   - **Buy Amount**: After entering the sell amount, the buy amount will auto-calculate based on the current market rate.

If you wish to reverse the **Sell** and **Buy** tokens, you can click **Swap Direction** button (↔) between the Sell and Buy sections to reverse the tokens and quickly switch the trade direction. This will instantly switch the tokens, making the **Buy** token the **Sell** token, and vice versa, without needing to re-enter amounts.

**Note**: If the swap amount exceeds your balance, an **"Insufficient Balance"** message will appear. Make sure you have enough tokens to proceed.

#### **Step 3: Set Slippage Tolerance**

This controls the maximum price variation you’re willing to accept for the trade.

- **Available Options**: Choose from 0.1%, 0.5%, 1%, or set a **custom percentage**.
- **Use Case**: A lower tolerance limits price variation but may cause failed transactions if prices move. Higher tolerance increases the success rate but allows for more price fluctuation.

<figure><img src="https://2719346828-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fpeljr67Or3TDyhxkyIv3%2Fuploads%2Fz0IroFO16lYrMzZDxuaI%2FSlippage.png?alt=media&#x26;token=5c57e561-05ab-4095-9835-ccb7ec31a6ab" alt=""><figcaption></figcaption></figure>

<figure><img src="https://2719346828-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fpeljr67Or3TDyhxkyIv3%2Fuploads%2FXumIkFSRFycsuENUr82a%2Fcustom_slippage.png?alt=media&#x26;token=3e4f7b22-f876-4013-ac79-27e8e17752b5" alt=""><figcaption></figcaption></figure>

#### **Step 4: Confirm Swap Details**

- Double-check all details, including token selections, amounts, and slippage tolerance.

#### **Step 5: Execute the Swap**

1. **Swap Button**: When ready, click the **"Swap"** button.
2. **Wallet Confirmation**: Approve the transaction in your connected wallet, including any gas fees required by the network.

#### **Additional Interface Elements**

**Network and Account Information**: Located in the top right corner, this area shows both your network and wallet address. You can switch networks or wallet anytime by using these buttons.
