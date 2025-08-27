# Sailor Finance

# Pool Creation

# Create a CLMM Pool

Any project team or user can establish a Concentrated Liquidity Market Maker (CLMM) pool on Sailor. CLMM pools offer advanced market-making capabilities, providing enhanced capital efficiency for liquidity providers and reduced slippage for swaps.&#x20;

## **Important Considerations**

Before creating a CLMM pool and farm, keep these points in mind:

### **Token Selection**

- Any ERC-20 token can be used to create a CLMM pool.
- Each pool consists of two tokens, typically a base and quote token. \
  (e.g. SEI is the base token, USDC is the quote token in a SEI/USDC pool)
- To prevent deplicate pools, only one token pair per fee-tier is allowed on Sailor.

### **Fee Tiers**

Choose from four options:

- 0.01%: Ideal for very stable assets
- 0.05%: Best for high-volume pairs
- 0.25%: Suitable for most pairs
- 1.00%: Designed for exotic pairs

### **Token Price**

- **Starting price** is determined by the number of Quote Tokens required to purchase 1 Base Token.
- **Initial Price Range** will be the interval in which the pool creator's liquidity is initially provided upon pool creation. Initial liquidity will be concentrated within this range.

### **Farm Creation**

- Only the pool creator can establish a farm for the given CLMM pool.
- Two token rewards can be chosen; one must relate to the token pair, while the other can be any ERC-20 token.

### Rewards and APR

APR is calculated based on rewards, token price, and pool liquidity. The APR calculation for CLMM pools is more complex than for Constant Product AMMs, you can understand the full APR calculations in "[Estimated APR Calculations](/sailor-finance-docs/sailor-finance-docs/liquidity-providers/provide-concentrated-liquidity-clmm/estimated-apr-calculations)"

**Key Considerations for Reward Calculations**

- Liquidity around the mid-price
- Price of reward token
- APR calculation methods

Rewards allocated to farms are final and cannot be withdrawn post-creation. Adjustments can only be made 72 hours before the current farming period ends.

# How to Create a CLMM Pool

Sailor's pools are fully permissionless, which allow anyone to create a liquidity pool on the platform.&#x20;

### How to Create a Permissionless Pool&#x20;

1. Go to the [Liquidity ](https://sailor.finance/liquidity-pools)page on Sailor. In the top right corner, click the "Create" button.\\

   <figure><img src="https://3593746478-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6oqly9k0TMVvzV9AsPsg%2Fuploads%2Fqqolgiq7inusApQg5FA4%2Fimage.png?alt=media&#x26;token=d8f09b5e-5c23-48fd-ada8-26306fe11ea6" alt=""><figcaption></figcaption></figure>

2. **Starting Price, Initial Liquidity, and Start Time**\
   \
   Set the Base Token and Quote Token followed by the Fee Tier\\

   <figure><img src="https://3593746478-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6oqly9k0TMVvzV9AsPsg%2Fuploads%2FHcnNBWzh1z2qtrNeQXUB%2Fimage.png?alt=media&#x26;token=509b89e6-7bd3-498b-8840-cf940a90c40b" alt=""><figcaption></figcaption></figure>

   Set the Base Token starting price: This is the number of Quote Tokens needed to purchase 1 Base Token.\\

   <figure><img src="https://3593746478-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6oqly9k0TMVvzV9AsPsg%2Fuploads%2FG9kb3OP1kC8TuOovyxNs%2Fimage.png?alt=media&#x26;token=25e3e687-6857-437d-bcae-21db572a1c49" alt=""><figcaption></figcaption></figure>

   Set Base and Quote token initial liquidity: You can enter one side of initial liquidity and the other side will be calculated according to the Base Token starting price.\\

   <figure><img src="https://3593746478-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6oqly9k0TMVvzV9AsPsg%2Fuploads%2F8CrV3xuhmCpcmDYTm55P%2Fimage.png?alt=media&#x26;token=839bdf0d-bf93-4342-9768-8f9fb5dab31b" alt=""><figcaption></figcaption></figure>

3. After clicking confirm, you must approve the transactions in your wallet. This transaction will initialize the pool, create the AMM account and ID, and add liquidity.\\

   <figure><img src="https://3593746478-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6oqly9k0TMVvzV9AsPsg%2Fuploads%2FCJEH8y3knf1Ty9IqZRvN%2Fimage.png?alt=media&#x26;token=ca2ef63f-9068-46e1-8e49-248247079b46" alt=""><figcaption></figcaption></figure>

4. Once confirming the transaction in your wallet, the new LP will have been created, you will be provided with the new AMM ID, and the pool will launch in a few minutes.\\

   <figure><img src="https://3593746478-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6oqly9k0TMVvzV9AsPsg%2Fuploads%2FR1LHp22mxfsCT9PTFSRh%2Fimage.png?alt=media&#x26;token=9a546365-010b-4625-a9a9-de846ffd668c" alt=""><figcaption></figcaption></figure>

5. Tada! Head back to the [Liquidity ](https://sailor.finance/liquidity-pools)page to check out your pool\\

   <figure><img src="https://3593746478-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6oqly9k0TMVvzV9AsPsg%2Fuploads%2Fd40wFX5lsS5P6GCXHVFZ%2Fimage.png?alt=media&#x26;token=c330bee7-3f3f-4aab-809c-29b57bccd1ba" alt=""><figcaption></figcaption></figure>

# Pool Creation Fees

# Best Practices

This guide provides step-by-step instructions for projects to successfully deploy their tokens and create Concentrated Liquidity Market Maker (CLMM) pools on Sailor, helping avoid common pitfalls that can lead to token price volatility and liquidity issues.

### Understanding Sailor's CLMM Architecture <a href="#understanding-sailors-clmm-architecture" id="understanding-sailors-clmm-architecture"></a>

Sailor DEX is built as a fork of Uniswap V3, implementing concentrated liquidity mechanics that allow liquidity providers to focus their capital within specific price ranges. This concentrated approach offers enhanced capital efficiency compared to traditional AMM models, but requires careful planning to avoid common deployment mistakes.

### Pre-Deployment Preparation <a href="#pre-deployment-preparation" id="pre-deployment-preparation"></a>

### Token Requirements

Before creating a pool on Sailor, ensure your project meets these essential requirements:

- **ERC-20 Compliance**: Any ERC-20 token can be used to create a CLMM pool on Sailor
- **Token Contract Verification**: Ensure your token contract is properly deployed and verified
- **Sufficient Token Supply**: Have adequate tokens available for initial liquidity provision

### Understanding Token Pairing Structure

Each CLMM pool consists of two tokens configured as a base and quote token pair. For example, in a SEI/USDC pool, SEI serves as the base token while USDC functions as the quote token. This pairing structure is crucial for determining pricing mechanics and liquidity distribution.

### Step-by-Step Pool Creation Guide <a href="#step-by-step-pool-creation-guide" id="step-by-step-pool-creation-guide"></a>

### Step 1: Access Sailor's Pool Creation Interface

Navigate to Sailor's pool creation page at <https://sailor.finance/clmm/create-pool/>[1](https://sailor-finance.gitbook.io/sailor-finance-docs). This interface provides all the necessary tools for configuring and deploying your CLMM pool with appropriate parameters.

### Step 2: Configure Token Selection

**Important Consideration**: To prevent duplicate pools, Sailor allows only one token pair per fee tier. Before proceeding, verify that your desired token pair and fee combination doesn't already exist on the platform.

When selecting tokens for your pool:

- Choose your project token as either the base or quote token
- Pair with an established token (such as SEI, USDC, or WETH) for better liquidity attraction
- Consider the trading dynamics between your chosen token pair

### Step 3: Select Appropriate Fee Tier

Sailor offers four distinct fee tiers, each designed for different token categories:

| Fee Tier | Best Use Case      | Description                                            |
| -------- | ------------------ | ------------------------------------------------------ |
| 0.01%    | Very stable assets | Ideal for stablecoin pairs or highly correlated assets |
| 0.05%    | High-volume pairs  | Best for established, high-volume trading pairs        |
| 0.25%    | Most pairs         | Suitable for the majority of token pairs               |
| 1.00%    | Exotic pairs       | Designed for volatile or low-volume exotic token pairs |

**Recommendation**: For new project tokens, the 0.25% fee tier typically provides the best balance between attracting liquidity providers and maintaining reasonable trading costs.

### Step 4: Determine Starting Price

The starting price represents the number of quote tokens required to purchase one base token[2](https://sailor-finance.gitbook.io/sailor-finance-docs/pool-creation/create-a-clmm-pool). This initial price setting is critical and should be based on:

- Fair market valuation of your token
- Comparable projects in your sector
- Available capital for liquidity provision
- Expected trading volume and market conditions

**Critical Warning**: Setting an inappropriate starting price can lead to immediate arbitrage opportunities that may drain your initial liquidity.

### Price Range Strategy: Avoiding Common Pitfalls <a href="#price-range-strategy-avoiding-common-pitfalls" id="price-range-strategy-avoiding-common-pitfalls"></a>

### Understanding Price Range Selection

The initial price range determines where your liquidity will be concentrated upon pool creation[2](https://sailor-finance.gitbook.io/sailor-finance-docs/pool-creation/create-a-clmm-pool). This is where many projects encounter problems by setting ranges too narrow, leading to rapid price movements and potential losses.

### Recommended Price Range Strategies

### Wide Range Strategy | Recommended for New Projects

- **Range Width**: Set price ranges 50-100% above and below the starting price
- **Benefits**: Provides stability and consistent fee-earning potential
- **Risk Level**: Lower risk of going out of range during market volatility
- **Capital Efficiency**: Moderate, but safer for inexperienced teams

### Narrow Range Strategy | Advanced Users Only

- **Range Width**: Set price ranges 10-25% above and below starting price
- **Benefits**: Higher capital efficiency and fee generation
- **Risk Level**: High risk of going out of range, requiring active management
- **Requirements**: Continuous monitoring and rebalancing

### Price Range Calculation Guidelines

When determining your price range, consider these factors

1. **Market Volatility**: More volatile tokens require wider ranges
2. **Trading Volume Expectations**: Higher expected volume may justify narrower ranges
3. **Management Capacity**: Narrow ranges require active position management
4. **Risk Tolerance**: Conservative approaches favor wider ranges

### Liquidity Provision Best Practices <a href="#liquidity-provision-best-practices" id="liquidity-provision-best-practices"></a>

### Initial Liquidity Requirements

When adding initial liquidity to your newly created pool

- **Balanced Approach**: Provide equal value of both tokens when price is within your range
- **Sufficient Depth**: Ensure adequate liquidity to prevent excessive slippage on initial trades
- **Reserve Strategy**: Keep additional tokens available for range adjustments if needed

### Managing Impermanent Loss Risks

Concentrated liquidity positions face different impermanent loss characteristics compared to traditional AMM pools:

- **Higher Exposure**: Concentrated positions can experience more significant impermanent loss within chosen ranges
- **Active Management**: Regular monitoring and position adjustments become more critical
- **Strategic Positioning**: Careful range selection can help mitigate impermanent loss impact

### Farm Creation and Incentive Mechanisms <a href="#farm-creation-and-incentive-mechanisms" id="farm-creation-and-incentive-mechanisms"></a>

### Exclusive Farm Rights

Only the pool creator can establish a farm for their CLMM pool, providing additional incentive mechanisms. When creating farms:

- **Dual Reward System**: Choose two reward tokens, with one required to relate to the token pair
- **Reward Allocation**: Rewards allocated to farms are final and cannot be withdrawn post-creation
- **Timing Considerations**: Adjustments can only be made 72 hours before the current farming period ends

### APR Calculation Factors

The APR calculation for CLMM pools involves complex considerations:

- Liquidity distribution around the mid-price
- Reward token pricing dynamics
- Overall pool liquidity levels
- Trading volume and fee generation

### Common Mistakes and How to Avoid Them <a href="#common-mistakes-and-how-to-avoid-them" id="common-mistakes-and-how-to-avoid-them"></a>

### Price Range Errors

**Problem**: Setting excessively tight price ranges that result in rapid out-of-range positions.

**Solution**: Start with wider ranges (±50-100%) and gradually narrow as you gain experience with market dynamics.

### Insufficient Initial Liquidity

**Problem**: Providing inadequate initial liquidity leading to high slippage and poor trading experience.

**Solution**: Ensure initial liquidity can support reasonable trading volumes without excessive price impact.

### Poor Token Pairing Choices

**Problem**: Pairing with illiquid or inappropriate quote tokens.

**Solution**: Choose established, liquid tokens as your pair (SEI, USDC, WETH) to attract more liquidity providers and traders.

### Lack of Post-Launch Management

**Problem**: Creating pools without ongoing management and optimization.

**Solution**: Implement monitoring systems to track pool performance and make necessary adjustments.

### Monitoring and Optimization <a href="#monitoring-and-optimization" id="monitoring-and-optimization"></a>

### Key Metrics to Track

After deploying your pool, monitor these critical metrics:

- **Trading Volume**: Daily and weekly trading activity
- **Liquidity Utilization**: How effectively your liquidity range captures trading activity
- **Fee Generation**: Actual fees earned compared to projections
- **Price Stability**: Token price movements and volatility patterns

### Adjustment Strategies

Based on performance data, consider these optimization approaches

- **Range Rebalancing**: Adjust price ranges based on trading patterns
- **Liquidity Additions**: Increase liquidity during high-volume periods
- **Fee Tier Evaluation**: Assess whether your chosen fee tier remains optimal

# Lighthouse

Lighthouse is a decentralized fundraising platform crafted to empower Web3 projects, enabling them to launch and raise capital through multi-chain token pools while actively growing their communities.

With Lighthouse, investors gain early access to innovative projects through IDOs, featuring exclusive community pre-sale token listings.

The Sailor team is dedicated to building a leading decentralized fundraising platform that equips users to make informed investment choices and participate in high-potential IDO launches. At the same time, Lighthouse helps projects efficiently raise funds, kickstart their initiatives, and benefit from the platform’s expanding expertise and network.

---

### How can projects use Lighthouse? <a href="#how-can-projects-use-lighthouse" id="how-can-projects-use-lighthouse"></a>

Lighthouse makes it easy for projects of all types to raise funds by creating swap pools with a fixed token purchase price. Fixed swap pools offer several advantages to token sale participants compared to traditional fundraising models like ICOs, IEOs, and IDOs. The key benefit is that the token price remains stable throughout the sale until the initial supply is sold out.

To launch your project on Lighthouse, simply fill out our IDO application form [here](https://www.google.com/url?q=https://docs.google.com/forms/d/e/1FAIpQLSfbY0JR2yJoUs0b0fc_tBvOM5rQsFdWd0LdfeDRmgAsQ1VwQA/viewform?usp%3Ddialog&sa=D&source=docs&ust=1749808273635926&usg=AOvVaw2BNEuIk82LRx62fCdAqbEj).&#x20;

Startups and projects can leverage Lighthouse’s interoperable and decentralized infrastructure to raise capital.

---

### Additional Applications <a href="#additional-applications" id="additional-applications"></a>

Lighthouse’s technology is versatile and can also be used for:

- **Discounted sales** for allowlisted addresses
- **Investment syndicates**
- **Crowdfunding**

# Tokenomics

$SPINACH coming soon.....🔴🥬

# SPINACH Token

More details announcing soon.....

# Protocol

# Protocol Fees

## Swap Fees

### Concentrated Liquidity ("CLMM") Pools

The trading fee for each CLMM pool is set to one of four fee tiers; 0.01% / 0.05% / 0.3% / 1%.&#x20;

### Swap Fee Allocation

Fees generated from swaps in both SAMM and CLMM Pools will be allocated as such:

- 84% to Liquidity Providers
- 12% to $SPINACH token bootstrapping / buy-backs
- 4% to Sailor Foundation

## Pool Creation Fees

Full details to be updated.

# Developers

# Contract Addresses

## Production environment (pacific-1) <a href="#production-environment-pacific-1" id="production-environment-pacific-1"></a>

URL: <https://sailor.finance/>

<table><thead><tr><th width="209">Contract</th><th>Address</th></tr></thead><tbody><tr><td><strong>Factory</strong></td><td>0xA51136931fdd3875902618bF6B3abe38Ab2D703b</td></tr><tr><td><strong>NFT Descriptor</strong></td><td>0x4ed1F9Cc4ee6bc11b27e285464C4DCaF911c85d9</td></tr><tr><td><strong>Position Descriptor</strong></td><td>0x8417845622e9E5d6c2E0e61Ad70969a7Ef7d3725</td></tr><tr><td><strong>Position Manager</strong></td><td>0xe294d5Eb435807cD21017013Bef620ed1AeafbeB</td></tr><tr><td><strong>Swap Router</strong></td><td>0xd1EFe48B71Acd98Db16FcB9E7152B086647Ef544</td></tr><tr><td><strong>Quoter</strong></td><td>0x9aeB489F5bc0d3Eb7892DD7E1FAE2d2ebD02E80b</td></tr><tr><td><strong>Quoter V2</strong></td><td>0xE40703878aC5d3F76eAc66f8688A8F5652Af85b1</td></tr></tbody></table>

# Security

We've completed full audits by leading Web3.0 security firms, Zellic and Verichains.

Uni V2 Contracts

{% file src="<https://3593746478-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6oqly9k0TMVvzV9AsPsg%2Fuploads%2F6chW5OkId7PurY7c7qul%2FCore%20and%20Periphery%20-%20Zellic%20Audit%20Report.pdf?alt=media&token=f937c907-d2b3-4dbd-b588-03f23903a23d>" %}

{% file src="<https://3593746478-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6oqly9k0TMVvzV9AsPsg%2Fuploads%2F85CbSKGg7hRie0GNoTK0%2FVerichains%20Public%20Report%20-%20Sailor%20Finance.pdf?alt=media&token=49e73b3b-88ba-49e0-839c-85217dfcebb1>" %}

Lighthouse IDO Launchpad Contracts

{% file src="<https://3593746478-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6oqly9k0TMVvzV9AsPsg%2Fuploads%2FM00VDa8YM4CFP6cO9OAW%2FVerichains%20Public%20Report%20-%20Sailor%20Finance%20Launchpad.pdf?alt=media&token=a5e35ab9-5c47-4ff9-b527-683916dc3bad>" %}

# Updates

# Resources

# Partnerships Kit

| Resources                                                                                              | Links                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <p><br><strong>Brand Kit</strong><br><em>Logos, fonts, colour scheme, partnership posters</em><br></p> | <p><a href="https://drive.google.com/drive/folders/1c4VdacvH3wZKmqz5d8mcatbwZr-ecQbJ?usp=sharing"><https://drive.google.com/drive/folders/1c4VdacvH3wZKmqz5d8mcatbwZr-ecQbJ?usp=sharing></a><br></p> |
