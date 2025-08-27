# Oxium

## Kandle Yei

Kandle Yei is a strategy based on Kandle, but with funds deposited on [Yei Finance](https://www.yei.finance/) at any given time, the leading lending protocol on Sei. This allows users to combine trading fees generated on Oxium while also benefiting from Yei Finance’s yield.

# How does Kandel Work?

This section is a detailed explanation of how Kandel works, introducing configuration parameters and key mechanics. For the sake of simplicity, we have clearly separated the startup steps and picked round numbers.

Kandel is not intended as a "set and forget" strategy, and needs ongoing maintenance and checks.

# Step-by-step visual explanation

### Setting things up <a href="#setting-things-up" id="setting-things-up"></a>

Before launching your customized Kandel strategy, you will be asked to set specific input parameters. For more information, you can refer to the Parameters description table, as well as the Choosing parameters section.

<figure><img src="https://content.gitbook.com/content/peljr67Or3TDyhxkyIv3/blobs/Gd5doPs4LvKfutieS4vO/white_background_image.png" alt=""><figcaption></figcaption></figure>

Based on the selected **price range** and either the `number of offers` or `ratio`, the price grid is constructed using a geometric progression. The `min` and `max` prices of the user inputs are the limits of the grid.

The increments are calculated using a key metric called **ratio** (of the geometric progression). Kandel starts from the `min` price, all the way up to the `max` price. By default, the ratio is \~1% (due to ticks it will not be exactly 1%).

**Note** : In this example, the user selected an ETH/USDC trading pair.

<figure><img src="https://content.gitbook.com/content/peljr67Or3TDyhxkyIv3/blobs/N1TWDOoNnvbX6ymmQots/volume_distribution_white_bg.png" alt=""><figcaption></figcaption></figure>

Based on the selected amount of initial liquidity to be deposited, Kandel draws the **volume distribution** (i.e. the initial volume at each price point). In the example of a uniform volume distribution, the user's liquidity is spread evenly throughout the price grid.\\

**Note** : For this explanation, we are conveniently using a 1 ETH allocation for each increment. If based on our parameters, our Kandel would create a price grid of 10 points, for example, then we would use 10 ETH in total (1 ETH \* 10 price points).

### Populating Bids and Asks <a href="#populating-bids-and-asks" id="populating-bids-and-asks"></a>

<figure><img src="https://content.gitbook.com/content/peljr67Or3TDyhxkyIv3/blobs/x4T1ZkFsbYKVXio2ART1/only_outer_background_white.png" alt=""><figcaption></figcaption></figure>

Afterwards, the Kandel strategy contract populates the price grid by posting offers:

- **Bids** are posted from min price to mid price (current price)
- **Asks** are on the other side of the book, from mid price to max price

### Bid is taken <a href="#bid-is-taken" id="bid-is-taken"></a>

<figure><img src="https://content.gitbook.com/content/peljr67Or3TDyhxkyIv3/blobs/xJx20toN4yrvXJpKWWJo/outer_background_white_bidtaken%20(1).png" alt=""><figcaption></figcaption></figure>

When a **bid** is taken, the Kandel strategy contract sends the corresponding amount of **quote tokens** (USDC) and receives a corresponding amount of **base tokens** (ETH).

### Reposting liquidity as an Ask <a href="#reposting-liquidity-as-an-ask" id="reposting-liquidity-as-an-ask"></a>

<figure><img src="https://content.gitbook.com/content/peljr67Or3TDyhxkyIv3/blobs/tujlwfj5lR10W2P5VYtf/outer_background_white_repost.png" alt=""><figcaption></figcaption></figure>

The received amount of **base tokens** (ETH) is used to post a dual offer at a **step size k=1 above**. This is automatically handled by Kandel, it is part of its trading behaviour.

**Note** : Since the volume objective at the relevant index is 1 ETH, all the received liquidity is used to populate corresponding **ask**. Our Kandel just received 1 ETH (previous Bid), and is using it all to repost an offer, an Ask (called dual offer).

### Ask is taken <a href="#ask-is-taken" id="ask-is-taken"></a>

<figure><img src="https://content.gitbook.com/content/peljr67Or3TDyhxkyIv3/blobs/lFBxQqLX9MmfqZzKndwB/outer_background_white_asktaken.png" alt=""><figcaption></figcaption></figure>

Inversely to the **bid** example, when an ask is taken, the Kandel strategy contract sends the corresponding amount of **base tokens** (ETH) and receives a corresponding amount of **quote tokens** (USDC).

### Reposting liquidity as an Bid <a href="#reposting-liquidity-as-an-bid" id="reposting-liquidity-as-an-bid"></a>

<figure><img src="https://content.gitbook.com/content/peljr67Or3TDyhxkyIv3/blobs/0y8V6pDzOozvfnDSbm8l/outer_background_white_repost_final.png" alt=""><figcaption></figcaption></figure>

The received amount of **quote tokens** (USDC) is used to post a dual offer **step size k=1 below**.

In our example:

- We just received 1,300 USDC for sending 1 ETH through our **ask**
- Previously, we sent 1,287 USDC and received 1 ETH through our **bid**

Therefore, 13 USDC is reinvested into the strategy. A new **bid** at k=1 steps below is reposted, and offers 1,300 USDC for 1.01 ETH.

**Calculation**

- _Profit = 1,300 USDC - 1,287 USDC = 13 USDC_
- _13 / 1300 = 0.01 = 1%_
  - i.e. we made a 1% profit on the spread
- Kandel will repost our **bid** to offer _1,287+13 USDC_ for _1\*1.01 ETH_, reinvesting the 1% profit we just made

### Another Ask is taken <a href="#another-ask-is-taken" id="another-ask-is-taken"></a>

<figure><img src="https://content.gitbook.com/content/peljr67Or3TDyhxkyIv3/blobs/E62ZmPnpZGXmHRqj6I4f/outer_background_white_ask_1313.png" alt=""><figcaption></figcaption></figure>

When another **ask** is taken, once again Kandel sends the corresponding amount of **base tokens** (ETH) and receives a corresponding amount of **quote tokens** (USDC).

### Reposting liquidity as a Bid #2 <a href="#reposting-liquidity-as-a-bid-2" id="reposting-liquidity-as-a-bid-2"></a>

<figure><img src="https://content.gitbook.com/content/peljr67Or3TDyhxkyIv3/blobs/LvFkL2TNAtQz8wtXJ6qB/outer_background_white_repost_2600.png" alt=""><figcaption></figcaption></figure>

Similarly to our previous **bid**, the received amount of **quote tokens** (USDC) is used to post a dual offer **step size k=1 below**.

Note :

If an **ask** was to be taken next, the profit from the spread would be reinvested into the strategy.

# Parameters

This section describes Kandel's parameters. For more contextual information, head over to the visual explanation.

| Parameters        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pair              | <p>The pair represents the chosen market on which a Kandel strategy is running (along with the technical tick spacing).</p><p><em>Example: ETH/USDC is a trading pair</em></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Price range       | <p>The price range is needed to run any market-making strategy. It consists of the lowest and highest prices in the price grid at which Kandel instance posts its bids and asks.</p><p><em>Example of a price range:</em><br><em>• Lowest price = 1000 USDC per ETH</em><br><em>• Highest price = 1500 USDC per ETH</em></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Current price     | <p>The current price of the base token that is used for constructing the price distribution.</p><p><em>Example: the price of ETH is used for the ETH/USDC pair</em></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Number of offers  | The number of offers to be published by the Kandel strategy within the selected price range.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Ratio             | <p>The ratio defines the distance between price points which is derived using geometric progression.</p><p><em>Example:</em><br><em>• Ratio is <code>0.01</code> (due to ticks it will not be exact)</em><br><em>• Mid price is <code>1000</code></em><br><em>• Price point below mid price: <code>10000.99</code></em><br><em>• Price point above mid price: <code>10001.01</code></em>Additionally, the ratio could be derived from price points <code>PricePoint(i+1) / PricePoint(i) - 1</code>.<br><em>Example: <code>1010 / 1000 - 1 = 0.01</code></em></p>                                                                                                                                                                                                                                                                                                                                                                     |
| Step size         | <p>It is the distance between an executed bid/ask and its dual offer.</p><p>Whenever a Kandel ask is taken at a given price point, Kandel uses the amount of quote just received to place a bid at a lower price point. With a step size of 1, it will place the bid at the price point immediately below. With a step size of 2, Kandel will repost two price points below, etc. (Technical aside: if in attempting to repost say 3 steps below Kandel hits the boundaries of its range it will transport as far below as possible). The same applies symmetrically for bids.</p><p>Using a step size ≥ 2 allows one to publish a more continuous liquidity on the books, regularising the strat’s PnL, while at the same time keeping a reasonable spread between price points. Indeed, what matters to PnL is not the distance between price points, but how far money moves along the price grid each time an offer is taken.</p> |
| Initial inventory | <p>The initial inventory is the amount of base tokens and quote tokens that must be deposited into the strategy. The minimum to be deposited into the strategy depends on the selected price range and density of the selected market.</p><p><em>Example on the ETH/USDC pair:</em><br><em>• Base token is ETH</em><br><em>• Quote token is USDC</em></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Bounty            | <p>It is the required amount of native tokens to be deposited into the strategy. A provision is required to post an offer, in order to pay a potential bounty. The bounty is only a subset, smaller in value than the provision.</p><p>The provision covers the whole price grid, hence:<br>• <em>Kandel provision = Provision per offer x Number of offers</em></p><p>Example: if the selected pair is on the Polygon network, the bounty would be an amount of MATIC tokens.\*</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

# Choosing Kandel parameters

This section goal is to help you develop an intuition to choose your Kandel parameters. It should be taken as an explanation on how the various parameters can impact your Kandel, and how the market conditions (ex: volatility) could be taken into account. It is **not** a trading advice.

**Note** : As a reminder, Kandel is not intended as a "set and forget" strategy, and needs ongoing maintenance and checks.

We will be going through standard steps you might want a take in order to check the market and deploy a new Kandel. Essentially, that means that by using discrete AMM such as Kandel, you can fix the level of liquidity you are offering adjusted per volatility. So choosing the spread starts with answering the question - what is the volatility? If you can estimate or predict it well enough, the only thing you need to do is pick the spread (i.e. your parameters for Kandel).

### Check-in frequency <a href="#check-in-frequency" id="check-in-frequency"></a>

First, it is good practice to know how often you aim to update your Kandel. Depending on the trading pair you chose, markets can behave very differently.

**Example** : I will update my Kandel every 24h.

### Set your price range <a href="#set-your-price-range" id="set-your-price-range"></a>

Next, you should try to anticipate how much the market/price will vary during that period you just decided on. You are kind of betting on daily volatility.

**Example :** I will look at the market volatility for the past 24h, and decide on the price range for my new Kandel.

### Number of Offers / Ratio <a href="#number-of-offers--ratio" id="number-of-offers--ratio"></a>

This is the number of offers / ratio of the progression used to calculate the price grid. You would logically bet on intra-day volatility (few min or hours). If the volatility is increasing, you might want to increase the grid size (space between the offers). You will find more information about its calculation in the previous table.

**Note :**&#x20;

- High volatility: spaced out offers (less offers in the chosen range) -> higher ratio
- Low volatility: narrow offers (more offers in the chosen range) -> smaller ratio

### Step size <a href="#step-size" id="step-size"></a>

The general idea to configure your step size, is that a bigger volatility would likely lead to a bigger step size.

### Simple use case <a href="#simple-use-case" id="simple-use-case"></a>

Let's say you want to have a continuous Kandel, and maybe your current paramaters allow you only 2 offers:

- The solution to this is instead of having 2 offers with a step size = 1, you can configure 16 offers with a step size of 8
- That gives you continuity (more offers for a similar interval)
- When your offers are taken, Kandel will be able to "grab" lower prices

# Published Liquidity

Kandel instances don't lock your funds into the strategy. It uses the funds on the selected source, for publishing the chosen amount of liquidity.

Published liquidity is the amount of liquidity in active offers that are managed by the particular Kandel instance.

# More on failing offers

This section explains the reasons why some offers might fail using Kandel.

### Definition <a href="#definition" id="definition"></a>

When we talk about an offer "failing", we mean that it could not execute. An offer can also fail to update itself. While we won't go into details in this part of the documentation, it is important to mention and differentiate those cases to further understand Kandel strategy's behavior.

- `makerExecute()`: it is the callback function that is called when an offer is matched. Its role is to execute all offers that were posted on Oxium by a given contract.
  - A failure in `makerExecute()` means the trade is canceled, and the bounty is given to the Taker as a compensation. The offer is removed from the book.
- `makerPosthook()`: it is the callback function that is called after the offer execution (i.e. after a successful execution of `makerExecute()`).
  - A failure in `makerPosthook()` means the offer cannot update or repost itself after being taken. It does not cancel the trade, since it is called after `makerExecute()`.

### Kandel and `makerExecute()` failure <a href="#kandel-and-makerexecute-failure" id="kandel-and-makerexecute-failure"></a>

After launching a Kandel strategy, Bids and Asks are populated with a certain volume. Kandel strategy's contract is handling all the posting for the user, using liquidity that has been previously deposited.\
Therefore, since the user is not in charge of writing and maintaining the smart contract, failures to execute `makerExecute()` can be almost entirely ruled out, with the exception of some very specific scenarios such as:

- Someone severely modifies the volume distribution/sourcing methods, creating issues when a Kandel Bid/Ask is taken (via the SDK)
- Kandel runs on YEI, and the user's liquidity is not available for sourcing at the time the offer is taken. That could happen if the user's funds are suddenly borrowed entirely (on YEI)

### Kandel and `makerPosthook()` failure <a href="#kandel-and-makerposthook-failure" id="kandel-and-makerposthook-failure"></a>

The main failures that Kandel could run into are linked to reposting Bids and Asks. This has little incidence for the user, nor does it affect the behavior of his Kandel strategy.\
Non-reposted liquidity will be placed into the Unallocated liquidity reserve, and the offer will be "empty" for Kandel, until the user replenishes it.\\

**Note** :

> If too many empty offers stack up, it would diminish Kandel's ability to profit from the spread, and therefore the overall generated yield. Kandel is not intended as a "set and forget" strategy, and needs ongoing maintenance and checks.

Reposting offers is handled with `makerPosthook()`, and failure could happen if:

- The residual of a partially taken offer is too small with regard to density:
  - A partially taken offer is the result of a Taker placing a Market order
  - If an offer is almost entirely taken, the remainder (dust) could be too small to pass the density check, leading to a failure to repost itself
- Kandel runs out of gas during the execution of the `makerPosthook()` because the gas requirements suddenly changed
  - This is unlikely to happen, but it theoretically could (if the order book becomes very dense in offers, for example)

# Potential risks

Kandel strategy is subject to some risks that should be taken into consideration. By using Kandel, you acknowledge (i) having the necessary knowledge and understanding of the blockchain technology and the tokens, and (ii) comprehended the risks associated with blockchain-based software systems and tokens, as described below and in the disclaimer.

### Economical risks <a href="#economical-risks" id="economical-risks"></a>

As a user of the Kandel strategy, you understand that using Kandel can be affected by economic risks, including but not limited to:

- Partial or total loss of the tokens used;
- Partial or total loss of the value of the tokens used;
- Market extreme volatility;
- Insolvency of a third-party platform or company;
- Absence of liquidity and impossible resale on markets of the tokens.

### Impermanent Loss <a href="#impermanent-loss" id="impermanent-loss"></a>

Kandel is a passive market-maker where profit is generated from the spread. An example of impermanent loss on an ETH/USDC pair would be as follows:

1. If the current price of ETH/USDC pair moves up, asks will be consumed.
2. If the price keeps going up and crosses the max price range value, Kandel strategy will be left only with active bid offers on the ETH/USDC market.
3. It is likely that no one would be interested in taking these bids since they would not match the current price (you would be offering too little USDC for ETH, considering the new current price). This is what we call impermanent loss - your strategy stops generating profit from the spread.

### Smart contract and technological risks <a href="#smart-contract-and-technological-risks" id="smart-contract-and-technological-risks"></a>

You understands that even though the strategy has been implemented by an experienced team of researchers and developers, the use of Kandel can be affected by smart contract and technological risks, including but not limited to:

- Security error or failure allowing and/or resulting in hacking and stealing of user, third-party platform and/or website/app data;
- Stealing or loss of the user external wallet private key or his access to the third-party platform;
- Risks associated with blockchains used for the strategy, including but not limited to due to successful attacks from hackers or other criminal groups or organizations or countries, including but not limited to denial of service attacks, Sybil attacks, spoofing, smurfing malware attacks, consensus-based attacks, or phishing, or other new methods that may or may not be known;
- Lack of transparency in crypto asset management and markets;

That being said, please note that the **Kandel strategy has been thoroughly audited** by ChainSecurity.

# Technical Architecture

Oxium is built on the infrastructure developed by Mangrove — a **battle-tested** and **audited** programmable order book protocol. This foundation provides a robust and flexible execution engine, well-suited for the demands of decentralized trading.

Oxium offers its own interface, positioning, and feature set, while relying on a proven underlying technology.
