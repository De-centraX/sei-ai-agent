# Oxium

# Trade

The **Trade** page in Oxium’s DApp provides a streamlined interface for trading tokens using three types of orders: **market** and **limit**. This page also includes real-time order books, trade history, and charting tools for tracking price movements and depth, enabling users to make informed trading decisions.

## **Types of Orders on** Oxium **DEX**

On Oxium DEX, there are three types of orders available:

1. **Market Order**: This type allows you to buy or sell a token at the current market price. Market orders are executed immediately, providing a quick and efficient trading option.
2. **Limit Order**: With a limit order, you set a specific buy or sell price for a token. The order will only execute when the market reaches the designated price, allowing you to control the trade’s entry or exit point based on your target price.

> **Note**: Before placing your first order, you will need to **approve** Oxium to spend tokens on your behalf. This one-time authorization allows Oxium to execute trades using your specified funds.

---

## **Accessing the Trade Page**

In the Oxium DApp sidebar, click the **"Trade"** icon (two candlestick icons). This will open the trading interface, showing market information, order types, and trading options.

### **Market Data Overview**

- **Price**: Displays the current price of the selected pair.
- **24h Change**: Shows the price change percentage over the last 24 hours.
- **24h High/Low**: Indicates the highest and lowest prices within the past 24 hours.
- **24h Volume**: Shows the total trading volume for the pair in the past 24 hours.

### **Charting Options**

- **Depth Chart**: This chart visually represents the buy and sell orders on the order book, giving insights into market depth and potential liquidity at different price points.
- **Price Chart**: The price chart (often integrated with TradingView) provides price movements over time. You can add indicators, adjust timeframes, and customize views to analyze historical trends and price action for the trading pair.

## Fees[​](https://docs.mangrove.exchange/general/web-app/trade/#fees) <a href="#fees" id="fees"></a>

Makers on Oxium have no fees to pay, all fees are paid by the takers! Below is a table of the fees on different markets available on Oxium.

# How to make an order

Due to the way Oxium works, there is a minimum volume that you need to be aware of when you are placing your order.

## How to make an Order

In the following pages you can see the way to make various types of orders on Oxium:

| Type         | Description                                                                                 |
| ------------ | ------------------------------------------------------------------------------------------- |
| Market Order | Buy or sell a token at the current market price, executed immediately                       |
| Limit Order  | Set a specific buy/sell price for a token, executed only when the market reaches that price |

# Market Order

A **Market Order** is the simplest and quickest way to trade on Oxium. It allows you to buy or sell a token at the current market price and is executed immediately.

**Step 1: Access the Trade Page**

In the Oxium DApp sidebar, click the **Trade** icon (two candlestick icons) to open the trading interface.

<figure><img src="https://2719346828-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fpeljr67Or3TDyhxkyIv3%2Fuploads%2FH6UpldxEuTDap8o0tHBd%2FSEI_DOC%20(1).png?alt=media&#x26;token=f6db60d0-5ac0-4222-a6da-626432e66785" alt=""><figcaption></figcaption></figure>

**Step 2: Select Trading Pair**

Choose the trading pair you wish to trade (e.g., **WSEI/USDC**) from the dropdown at the top of the page.

<figure><img src="https://2719346828-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fpeljr67Or3TDyhxkyIv3%2Fuploads%2FmmGiFt0nsa3B5X39adus%2FCapture%20d%E2%80%99e%CC%81cran%202025-05-21%20a%CC%80%2010.46.12.png?alt=media&#x26;token=cd1a9abd-f975-42fd-8528-b96e72682471" alt=""><figcaption></figcaption></figure>

**Step 3: Enter Trade Details**

- **Send Amount**: Input the amount of the token you want to buy or sell. Use shortcuts like **25%**, **50%**, **75%**, or **Max** to quickly select a portion of your balance.
- **Receive Amount**: This will auto-calculate based on the current market price.

<figure><img src="https://2719346828-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fpeljr67Or3TDyhxkyIv3%2Fuploads%2Flas4RpuHFbYTP8ONHfih%2FCapture%20d%E2%80%99e%CC%81cran%202025-05-20%20a%CC%80%2014.35.19.png?alt=media&#x26;token=0b782cb1-33d4-4184-a3f6-214bd73896e4" alt=""><figcaption></figcaption></figure>

**Step 4: Set Slippage Tolerance**

Define an acceptable slippage tolerance (e.g., 0.5%) to manage potential price variations during execution.

**Step 5: Review Fees**

The system displays the transaction fee for the market order.

**Step 6: Place the Market Order**

- Click **Buy** or **Sell** to execute the market order instantly.
- **Confirm the transaction** in your wallet.

Your order will execute at the best available price, and your tokens will be transferred immediately upon confirmation.

# Limit Order

A **Limit Order** allows you to specify a price at which you want to buy or sell a token. The order will only execute if the market reaches your specified price, giving you more control over the trade.

**Step 1: Access the Trade Page**

In the Oxium DApp sidebar, click the **Trade** icon to open the trading interface.

**Step 2: Select Trading Pair**

Choose the trading pair you wish to trade from the dropdown at the top (e.g., **WETH/USDC**).

**Step 4: Choose Order Type**

Select Buy or Sell, then select **Limit** under the **Buy** or **Sell** tab on the right side of the interface.

**Step 5: Enter Trade Details**

- **Set Limit Price**: Enter the specific price at which you want to buy or sell the token.
- **Send Amount**: Input the amount of the token you want to trade. You can use shortcuts like **25%**, **50%**, **75%**, or **Max** based on your wallet balance.
- **Total**: This field shows the total amount in the quote currency (e.g., USDC) calculated from the limit price and amount entered.
- [**Minimum Volume**](/oxium-1/dapp-guide/trade/minimum-volume): The minimum required trade volume will be displayed.

**Step 6: Liquidity Sourcing**

Leave this as **Wallet** if you want this limit order to execute only from your wallet funds. Look at Amplified Orders' page if you want to surce liquidity from elsewhere.

<figure><img src="https://2719346828-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fpeljr67Or3TDyhxkyIv3%2Fuploads%2FJpGLKddMjs8XU1lcERDz%2FCapture%20d%E2%80%99e%CC%81cran%202025-05-20%20a%CC%80%2014.52.38.png?alt=media&#x26;token=ef8cc246-cd2d-4126-a0d4-35df927dcdaf" alt=""><figcaption></figcaption></figure>

**Step 7:** [**Set Time in Force**](/oxium-1/dapp-guide/trade/how-to-make-an-order/more-on-order-types)

- **GTC (Good Till Canceled)**: The order remains open until it is either fully executed or canceled by the user.
- **PO (Post Only)**: The order will only be added to the order book and will not match with an existing order immediately. This is ideal for users who want to avoid immediate execution and instead provide liquidity to the book.
- **IOC (Immediate or Cancel)**: The order will attempt to execute immediately for as much volume as possible. Any portion that cannot be filled instantly will be canceled.
- **FOK (Fill or Kill)**: The order will only execute if it can be filled completely at the specified price. If the full volume cannot be matched, the entire order is canceled.

Additionally, you can specify a **Time in Force duration** to further customize the order’s validity:

- After choosing your preferred **Time in Force** option, set a specific time duration in **days**, **hours**, or **minutes**. This allows you to specify, for example, "28 Days" or "6 Hours" for your order to remain active within those parameters.

**Step 8: Place the Limit Order**

- Click **Buy** or **Sell** to place the limit order.
- **Confirm the transaction** in your wallet to finalize the order.

Your limit order will now appear in **Open Orders** and will only execute if the market reaches your specified price.[\
](https://docs.mangrove.exchange/general/web-app/trade/how-to-make-an-order/minimum-volume)

# More on order types

This section provides an overview of the various order types available on Oxium:

- Market order
- Immediate or Cancel (IOC)
- Good 'til time (GTT)
- Fill or kill (FOK)

### Market order[​](https://docs.mangrove.exchange/general/web-app/trade/more-on-order-types#market-order) <a href="#market-order" id="market-order"></a>

A market order is an order type used to buy or sell at the current market price.

- It is executed immediately, prioritizing speed over the specified price.
- The execution price of a market order may vary due to market fluctuations and order book liquidity.
- Unlike limit orders, market orders do not have a specific price parameter and **are subject to slippage**, where the executed price may differ from the expected price.

Example

You place an market order to buy 1 WETH, with a 3% slippage (i.e. you are willing to accept up to 3% of price slippage on your order). Your order could either be executed:

- In full at 1,800 USDC (desired price).
- In full at a price between 1,800 USDC and 1,854 USDC (with a slippage of 3%).
- Partially, depending on the liquidity available on the offer on the order book.
  - Ex: 0.5 WETH at 1,800 USDC + 0.25 WETH at 1,818 USDC (1% slippage) + 0.25 WETH at 1,854 USDC (3% slippage)

### Immediate or Cancel (IOC)[​](https://docs.mangrove.exchange/general/web-app/trade/more-on-order-types#immediate-or-cancel-ioc) <a href="#immediate-or-cancel-ioc" id="immediate-or-cancel-ioc"></a>

While it may seem similar to a market order, there is a fundamental difference.

- With an IOC order, you set a specific limit price at which you want the order to be executed.
- The order will either be immediately filled at that exact price, fully or partially, or canceled entirely. It's about ensuring that your order is executed at your desired price, or not executed at all.
- The IOC order **does not allow for slippage**, meaning it won't be filled at a different price than what you specified (unlike a market order).

Example

You place an IOC order to buy 1 WETH at a max price limit of 1,800 USDC. Your order could either be:

- Fully taken immediately, i.e. you get your 1 WETH at the desired price.
- Partially taken immediately, i.e. you get 0.8 WETH at the desired price, and the rest is "canceled" (there is no resting order asking for the remainder).
- Canceled if there is no match on the order book.

### Good 'til time (GTT)[​](https://docs.mangrove.exchange/general/web-app/trade/more-on-order-types#good-til-time-gtt) <a href="#good-til-time-gtt" id="good-til-time-gtt"></a>

It allows you to set an expiry date for your limit order (ex: active for 3 days, then canceled if not filled). A GTT order that was created, but that has not yet been filled will always show as "Filled" in the UI - it is a normal behavior.\\

Let us explain:

- When placing a GTT order, Oxium will attempt to fill it entirely at the desired price.
- **Instant order** = the first execution of the order:
  - If it is a match and the fill is in full, it will be recorded in the UI as is.
  - If it can't be matched just yet, a fill at quantity "0" will be recorded in the UI for the instant order, and a **resting order** will be created.
- More on the fill at quantity "0":
  - That allows you to track in the UI that the order was successfully executed, even if no actual quantity was **yet** bought or sold.
  - It is crucial - without this, there would be no visual trace of what happened to the order you just placed (if not taken).
  - Your resting order is then waiting to be filled. There could potentially be multiple fills for that same order. Typically, there will be one fill for the initial order (0 or any other amount taken), and additional fills up until the resting order is fully taken.
- This mechanism ensures that even if there are partial fills or subsequent trades on the resting order, each execution is recorded separately.

Example

You place an GTT order to buy 1 WETH at a max price limit of 1,800 USDC, with a time limit of 3 days. Your order could be processed in several ways:

- **Instant full fill**: Your order is fully taken, immediately.
  - That means you obtain the target 1 WETH at the desired price.
  - A fill of the transaction will be recorded in the UI.
- **Instant partial fill + Resting Order**:
  - If your order is not entirely filled, a fill with the quantity that has been partially executed will be recorded in the UI.
  - Then, a new order will be created to capture the remaining quantity at the requested price. This order will be resting on the order book, waiting to be fully or partially taken, until the expiry date.
  - Each subsequent transaction that matches your resting order will be logged as a new fill until the order is fully executed or expired
- **No instant fill + Resting Order**:
  - If there is no matching order available on the order book at the time of placement, a "resting" order is posted in the book, waiting to be taken, either fully or partially.
  - Each transaction will log a new fill until the order is fully taken or expired.
- **Order Cancellation**: If there is no match for your order on the order book by the end of the specified time period (3 days in this case), the order will be automatically canceled.

### Fill or Kill (FOK)[​](https://docs.mangrove.exchange/general/web-app/trade/more-on-order-types#fill-or-kill-fok) <a href="#fill-or-kill-fok" id="fill-or-kill-fok"></a>

The KOF order is an "all or nothing" instant order. It is similar to the IOC order in the sense that it executes immediately, but it does not allow for partial filling.

Example

You place an FOK order to buy 1 WETH at a max price limit of 1,800 USDC. Your order could either be:

- Fully taken immediately, i.e. you get your 1 WETH at the desired price.
- Canceled if there is no match on the order book.

# Approvals

## Infinite approval[​](https://docs.mangrove.exchange/general/web-app/trade/approve-buy#infinite-approval) <a href="#infinite-approval" id="infinite-approval"></a>

Before your order can succeed, you will have to approve Oxium to transfer the funds.

1. After choosing your order parameters, you will have to click the "Buy" or "Sell" button.
2. It will trigger the approval process, starting with a pop-up. Click on "Proceed" then "Approve".
3. Your wallet will open - you can leave the suggested amount for an "infinite approval".

   caution

   Clicking "Max" will give you the maximum amount available in your wallet. This means you will have to re-approve each time you make an order.

4. Click next, review the transaction and click "Approve" on your wallet.
5. Wait for the transaction to be processed, and that's it - you're ready to trade!

On the following pages, you will find more details on how to execute different order types

## About Approvals[​](https://docs.mangrove.exchange/general/web-app/trade/approve-buy#about-approvals) <a href="#about-approvals" id="about-approvals"></a>

You can read some more about approvals in the FAQ section.

Here are a few things you should consider when it comes to approvals:

1. An approval is valid only for a specific order type of a specific market.

   > 💡 For example, if you approved a BUY market order for the WSEI/USDC market, this approval is not valid for SELL market orders for that same market. You have to approve again.

2. Approvals accumulate together.

   > 💡 For example, if you approve buy market order for WSEI/USDC market with a 1000 USDC and perform a market order for 100 USDC, you have 900 USDC in approved balance. If you perform the same action again ("Approve & Buy"), you'll have 1800 USDC of approved balance.

3. If your pre-approved amount is used up, your order will fail. An easy way around this is to perform an infinite approval.

## Revoke token approvals[​](https://docs.mangrove.exchange/general/web-app/trade/approve-buy#revoke-token-approvals) <a href="#revoke-token-approvals" id="revoke-token-approvals"></a>

To remove a dApp access to your wallet's tokens, you can revoke approvals previously granted. An easy way to do it would be to use [Revoke](https://revoke.cash/), for example. This will however risk your orders failing if you have open orders, so be sure you don't need the approvals.

# Minimum Volume

Due to the density on each market, there is a minimum token requirement when placing limit orders (except for IOC orders). You can read more about why your transactions might be failing in the FAQ.

This value will change based on the market and the source of liquidity you select, so please check the volume below in the app to make sure before you place your order!

# How to Track and Manage Orders

Oxium’s Trade page dashboard is designed to help you efficiently manage and track all of your active, filled, and historical orders for each trading pair. Here’s a breakdown of how to monitor and interact with your orders.

## **Trades Tab**

The **Trades** tab shows recent transactions for the selected trading pair. This log of recent trades helps you understand market activity and price trends. It includes:

- **Size**: The amount of the asset traded.
- **Price**: The price at which the trade occurred.
- **Date**: The timestamp of each trade.

This tab provides a quick way to gauge market trends and see how frequently trades are happening at different price points.

## **Open Orders Tab**

The **Open Orders** tab is where you’ll find all your active limit orders that haven’t been filled or canceled yet. This tab is essential for tracking orders that are waiting for specific market conditions. Here’s what you’ll see:

- **Market**: The trading pair associated with the order, such as WETH/USDC.
- **Side**: Indicates whether it’s a Buy or Sell order.
- **Type**: Specifies the type of order, typically Limit or Market.
- **Filled/Amount**: Shows how much of the order has been filled versus the total order amount.
- **Price**: The set price for the order to execute.
- **Time in Force**: Indicates the order’s duration condition (e.g., GTC - Good Till Canceled, FOK - Fill or Kill).
- **Action**: An option to cancel the order directly from this tab if needed.

This tab is particularly useful for monitoring your ongoing trades and adjusting or canceling them as necessary.

## Managing Orders from the Open Orders Tab

From the **Open Orders**, you can quickly manage your orders: Modify or cancel them.

- **Modify**: Click **Modify** (the pen) to open the **Order Details** window, where you can adjust:
  - **Limit Price**: Change the price at which you want the order to execute.
  - **Amounts**: Adjust the amounts for **Send from Wallet** or **Receive to Wallet** to increase or decrease the funds allocated to this order.
- **Cancel**: If you no longer want the order to remain open, click **Cancel** (the cross) to remove it from the Open Orders list and cancel your order.

## **Orders History Tab**

The **Orders History** tab provides a comprehensive log of all your completed, expired, or canceled orders. Here, you can review past trades and actions. The fields in this tab include:

- **Market**: The trading pair involved in the order.
- **Side**: Shows whether it was a Buy or Sell.
- **Type**: Indicates the order type, such as Market or Limit.
- **Received/Sent**: Details the amounts of assets traded or received.
- **Price**: The price at which the trade was executed.
- **Date**: The date and time the order was filled or canceled.
- **Status**: Displays the final status of the order, such as Filled, Expired, or Canceled.
- **Explorer**: A link to the blockchain explorer for each transaction, enabling you to verify and track transactions on-chain.

# Earn

The **Earn** page on Oxium’s DApp lets you explore and manage yield-generating positions within available vaults, built on Oxium's flexible liquidity engine. These vaults leverage Oxium’s unique liquidity provisioning to offer optimized yield strategies, allowing you to earn rewards while maintaining liquidity flexibility. With Oxium’s composable infrastructure, yield opportunities are more dynamic and adaptable to market conditions, giving liquidity providers enhanced control over their earnings. You can deposit tokens to earn yields, view your active positions, and monitor key metrics for each vault.

#### **Step 1: Accessing the Earn Page**

In the Oxium DApp sidebar, click the **"Earn"** icon (the piggy bank icon). This will take you to the Earn page, where you can view all available vaults and your active positions.

<figure><img src="https://2719346828-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fpeljr67Or3TDyhxkyIv3%2Fuploads%2FJLmV9KQsfZC4Vd56iLXu%2FCapture%20d%E2%80%99e%CC%81cran%202025-05-21%20a%CC%80%2011.01.46.png?alt=media&#x26;token=225bb879-7f26-440c-a4b1-810d4135da70" alt=""><figcaption></figcaption></figure>

**Step 2: Viewing Vaults and Strategies**

The Earn page is divided into two sections:

- **My Positions**: Displays any active positions you currently hold in different vaults.
- **Vaults**: Shows all available vaults, including their associated **market pairs** (e.g., WSEI-USDC), **strategies** (such as Kandel YEI), and **vault managers** (e.g., Redacted Labs). Key metrics, such as Total Value Locked (TVL) and annual percentage yield (APY), are also shown if available.

1. **Vault Market**: Each vault lists the token pair it supports, such as **WSEI-USDC**.
2. **Strategy and Manager**: Each vault is managed by a specific strategy (like **Kandel**) and a vault manager (such as **Redacted Labs**).
3. **APY and TVL**: View potential returns (APY) and the total funds locked in the vault (TVL).
   - **Filter and Search Options**: Use the **Search Vault** bar to find a specific vault by name or market. You can also use the **Filter** button to narrow down the list based on different criteria.

<figure><img src="https://2719346828-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fpeljr67Or3TDyhxkyIv3%2Fuploads%2Faf7YZTGTYijUyj68fl66%2FCapture%20d%E2%80%99e%CC%81cran%202025-05-21%20a%CC%80%2011.22.53.png?alt=media&#x26;token=eb8f4763-fba7-40a8-978e-3dc7807b2e95" alt=""><figcaption></figcaption></figure>

**Step 3: Selecting a Vault and Viewing Details**

1. **Select a Vault**: Click on a vault from the list to view more detailed information. This will open the **Vault Details** page, providing deeper insights into the vault’s performance and requirements.
2. **Vault Details Overview**:
   - **TVL and APY**: Shows the total value locked in the vault and its projected annual yield.
   - **Performance Fee**: This is the percentage fee taken by the vault manager from the profits generated.
   - **Strategy and Manager**: Details on the strategy used in the vault and the entity managing it.
   - **Deposit and Withdrawal Options**: The page provides sections for **Deposit** and **Withdraw**, allowing you to manage your funds within the vault.
3. **Vault Description and Charts**: Each vault includes a description (currently placeholder text in some cases) and a **performance chart** displaying metrics like APY and TVL trends over time. Charts labeled "Vault charts coming soon!" indicate that historical data is not yet available.

#### **Step 4: Depositing Funds into a Vault**

1. **Deposit Section**: On the right side of the Vault Details page, you’ll find the **Deposit** section.
2. **Select Deposit Amount**:
   - You can deposit tokens like WSEI or USDC by selecting the desired amount. Use the percentage shortcuts (25%, 50%, 75%, Max) to quickly choose how much of your balance you want to deposit.
3. **Confirm Deposit**: Once you’ve selected the amount, click the **Deposit** button. Confirm the transaction in your wallet to finalize the deposit.

   **Note**: Ensure you have enough tokens in your wallet for the selected deposit, as well as enough to cover any network fees.

<figure><img src="https://2719346828-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fpeljr67Or3TDyhxkyIv3%2Fuploads%2FeoWjjFtMdrLvEIQlxtq0%2FCapture%20d%E2%80%99e%CC%81cran%202025-05-21%20a%CC%80%2011.11.53.png?alt=media&#x26;token=cad40815-db05-4cf1-9b36-eaf8fda6b878" alt=""><figcaption></figcaption></figure>

**Step 5: Withdrawing Funds from a Vault**

1. **Withdraw Tab**: Next to the Deposit tab, you’ll see the **Withdraw** tab. Click here if you wish to remove funds from the vault.
2. **Select Withdrawal Amount**: Choose the percentage of your funds in the vault you’d like to withdraw (25%, 50%, 75%, Max).
3. **Confirm Withdrawal**: Click the **Withdraw** button and confirm the transaction in your wallet to complete the withdrawal process.

   **Note**: Be aware of any withdrawal fees or delays that might apply depending on the vault’s strategy.

#### **Step 6: Monitoring Your Position and Rewards**

1. **My Position**: Under **My Position**, you can track your current balances in the vault, including each token (e.g., WSEI and USDC), the minted amount of any vault-specific tokens, and other details.
2. **Rewards**: Below My Position, you’ll see the **Rewards** section, which shows any rewards you’ve accrued from the vault. Click **Claim Rewards** to transfer any available rewards to your wallet.

# Kandel Yei Finance

# What is Kandel and Kandle Yei?

Kandel is an Automated Market Making strategy that uses on-chain order flow to repost offers instantly, without any latency. It could be considered as a market-making bot equivalent that operates solely on the blockchain. It leverages **the interaction between buyers and sellers** that creates price movement, rather than the price itself.

Within a market and price range you select, Kandel automatically posts Bids and Asks. **Its main goal is to buy low and sell high** - profits are made through accumulated spread, i.e. the difference between the Bids and Asks that are taken.
