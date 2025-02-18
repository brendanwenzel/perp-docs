---
id: data-source
title: Data Source
---

# Data Source 

## Smart Contracts

We see smart contracts as the default data source. For anything that is retrievable via smart contracts directly, we mostly will get them by reading the contracts.

### Exploring Data

**Please find the contract addresses in the metadata**

- Optimistic: [https://metadata.perp.exchange/v2/optimism.json](https://metadata.perp.exchange/v2/optimism.json)
- Optimistic Kovan: [https://metadata.perp.exchange/v2/optimism-kovan.json](https://metadata.perp.exchange/v2/optimism-kovan.json)

**You can then search the address with the blockchain explorer to see the read/write interface of the contracts**

- Optimistic: [https://optimistic.etherscan.io/](https://optimistic.etherscan.io/)
- Optimistic Kovan: [https://kovan-optimistic.etherscan.io/](https://kovan-optimistic.etherscan.io/)

### Usage Examples
:::note
Please check out https://github.com/perpetual-protocol/sdk-curie, a Javascript SDK to interface with our v2 smart contracts.
:::

---

## The Graph

We use [The Graph](https://thegraph.com/) as the default on-chain data indexing service. For any data that cannot be retrieved from smart contracts directly, for example some aggregated data, we mostly will fetch from The Graph.

### Exploring Data

- Use either of the provided servers:
    
    ```json
    "graphServerConfigs": [
    	{
    		"url": "https://api.thegraph.com/subgraphs/name/perpetual-protocol/perpetual-v2-optimism",
    		"wsUrl": "wss://api.thegraph.com/subgraphs/name/perpetual-protocol/perpetual-v2-optimism",
    		"healthUrl": "https://api.thegraph.com/index-node/graphql",
    		"name": "perpetual-protocol/perpetual-v2-optimism"
    	},
    	{
    		"url": "https://subgraph-api-singapore.perp.fi/subgraphs/name/perpetual-protocol/perpetual-v2-optimism",
    		"wsUrl": "wss://subgraph-ws-singapore.perp.fi/subgraphs/name/perpetual-protocol/perpetual-v2-optimism",
    		"healthUrl": "https://subgraph-singapore.perp.fi:8030/graphql",
    		"name": "perpetual-protocol/perpetual-v2-optimism"
    	}
    ]
    ```
    
- You will see a GraphQL explorer interface by opening the URL.
    
    ![](./images/graphiql_screenshot.png)
    

### Usage Examples

- Market Detail / Funding Rate (8h)
    
    ![](./images/funding_rate.png)
    
- Market Detail / Trades
    
    ![](./images/market_trades.png)
    
- Market Detail / Fills
    
    ![](./images/market_filled.png)
    
- History (all tabs)
    
    ![](./images/history.png)
    

---

## AppSync

We use [AppSync](https://aws.amazon.com/appsync/) as an alternative to The Graph for time sensitive data, e.g. price chart series, since The Graph can sometimes be out of sync or unstable. We use as little data from AppSync as possible since AppSync is centralized.



### Exploring Data

:::note
Please contact the team to get the api-key if needed.
:::

- Service Configs

    ```json
    "candleServerConfigs": [
        {
            "url": "https://4b3vdz2hdjho7gzuo4wl2jgsoe.appsync-api.ap-southeast-1.amazonaws.com/graphql",
            "region": "ap-southeast-1",
            "key": "xxxxxxxxxx"
        }
    ],
    "statisticsServerConfigs": [
        {
            "url": "https://4b3vdz2hdjho7gzuo4wl2jgsoe.appsync-api.ap-southeast-1.amazonaws.com/graphql",
            "region": "ap-southeast-1",
            "key": "xxxxxxxxxx"
        }
    ]
    ```

- Example

    ```bash
    curl -L -X POST 'https://4b3vdz2hdjho7gzuo4wl2jgsoe.appsync-api.ap-southeast-1.amazonaws.com/graphql' \
         -H 'x-api-key: xxxxxxxxxx' \
         -H 'Content-Type: application/json' \
         -d '{"query":"query MyQuery {\n getStatistics(ammAddr: \"0x8C835DFaA34e2AE61775e80EE29E2c724c6AE2BB\") {\n lastTradePriceUsd\n volume24h\n baseVolume24h\n priceChangeRate24h\n priceHigh24h\n priceLow24h\n }\n}\n","variables":{}}'
    ```
    
- Candle Service Schema
    
    ```graphql
    #
    # Models
    #
    
    type CandleStick {
        market: String!,
        resolution: String!,
        startTime: Int!,
        open: String!,
        high: String!,
        low: String!,
        close: String!,
        volume: String!,
        baseAssetVol: String!,
        txCount: Int!
        version: Int!
        blockNumber: Int!
    }
    
    #
    # Operations
    #
    
    type Query {
        listCandleSticks(
            query: TableCandleStickQueryInput!, 
            limit: Int, 
            nextToken: String
        ): CandleStickConnection
    }
    
    type Subscription {
        onUpsertCandleStick(
            market: String,
            resolution: String,
            startTime: String
        ): CandleStick
    
    		onDeleteCandleStick(
            market: String,
            resolution: String,
            startTime: String
        ): CandleStick
    }
    
    #
    # Operation Models
    #
    
    type CandleStickConnection {
        items: [CandleStick]
    		
    		# token to get next page data if any
        nextToken: String
    }
    
    input TableCandleStickQueryInput {
    		# format: baseToken#resolution
        # ex: 0x7EAdA83e15AcD08d22ad85A1dCE92E5A257Acb92#5m
        marketResolution: TableStringFilterInput
        startTime: TableIntFilterInput
    }
    
    input TableStringFilterInput {
        ne: String
        eq: String
        le: String
        lt: String
        ge: String
        gt: String
        contains: String
        notContains: String
        between: [String]
        beginsWith: String
    }
    
    input TableIntFilterInput {
        ne: Int
        eq: Int
        le: Int
        lt: Int
        ge: Int
        gt: Int
        contains: Int
        notContains: Int
        between: [Int]
    }
    ```
    
- Statistics Service Schema
    
    ```graphql
    #
    # Models
    #
    
    type Statistics {
        ammAddr: String! # ammAddr is used in place of baseToken in perp v2
        lastTradePriceUsd: String
        volume24h: String
        baseVolume24h: String
        priceChangeRate24h: String
        priceHigh24h: String
        priceLow24h: String
        timestamp: Int!
        blockNumber: Int!
    }
    
    #
    # Operations
    #
    
    type Query {
        getStatistics(ammAddr: String!): Statistics
    }
    
    type Subscription {
        onUpsertStatistics(ammAddr: String): Statistics
    }
    
    #
    # Operation Models
    #
    
    input TableStringFilterInput {
        ne: String
        eq: String
        le: String
        lt: String
        ge: String
        gt: String
        contains: String
        notContains: String
        between: [String]
        beginsWith: String
    }
    
    input TableIntFilterInput {
        ne: Int
        eq: Int
        le: Int
        lt: Int
        ge: Int
        gt: Int
        contains: Int
        notContains: Int
        between: [Int]
    }
    ```

### Usage Examples

- Candle Price Chart
- Market Statistics
    - funding rate
    - volume24h
    - Change (24h)
- Reward
    - Gas Rebate
    - Liquidity Mining
    
    ![](./images/reward.png)
    
- Pool APR
    
    ![](./images/pool_apr.png)

    ![](./images/pool_net_return.png)
    

---

## Examples of Mixed Data Sources

- TVL
    - `pool` from **The Graph**
    - `markPrice` from **smart contracts**
    
    ```bash
    pool.baseAmount.mul(markPrice).add(pool.quoteAmount)
    ```
    
- 24h Fees
    - `volume24h` from A**ppSync**
    - `exchangeFeeRatios` from **smart contracts**
    - `pool` from **The Graph**
    
    ```bash
    volume24h.mul(exchangeFeeRatios[pool.baseAddress])
    ```
    
- Liquidity Pool
    
    ![](./images/liquidity_pool.jpeg)
