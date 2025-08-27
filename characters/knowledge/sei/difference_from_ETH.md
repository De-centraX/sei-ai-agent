# Sei EVM vs. Ethereum: Key Differences

Sei is fully EVM-compatible, but there are important distinctions between Sei’s EVM and Ethereum. Below is a structured comparison and explanation of the main differences.

---

## Feature Comparison

| Feature                    | Sei EVM                                                     | Ethereum                                                        |
| -------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------- |
| **Block Time**             | 400 ms                                                      | 12 s                                                            |
| **Gas per Second**         | ~100 MegaGas/s                                              | ~3 MegaGas/s                                                    |
| **Finality**               | Instant                                                     | Multiple commitment levels (safe, latest, justified, finalized) |
| **Parallelized Execution** | Yes                                                         | No                                                              |
| **EVM Tooling**            | 100% Compatibility                                          | 100% Compatibility                                              |
| **EVM Version**            | Cancun (without blobs)                                      | Cancun                                                          |
| **Gas Limit**              | 10,000,000                                                  | 45,000,000                                                      |
| **Byte Size Limit**        | 21 MB                                                       | No byte-denominated limits                                      |
| **Execution Environment**  | EVM and Cosmos-SDK                                          | EVM                                                             |
| **Address Space**          | Dual: Cosmos Bech32 (`sei...`) and EVM-compatible (`0x...`) | ECDSA-derived (`0x...`)                                         |
| **State Storage**          | AVL-tree (global root)                                      | Merkle Patricia Trie (MPT)                                      |

---

## Notable Differences

- **EVM Version**: Sei uses the Cancun version of the EVM, but _without_ blob transactions.
- **Gas Limit & Byte Size**: Sei’s gas limit is 10M (vs. 45M on Ethereum) and has a 21MB byte size limit.
- **Finality**: Sei achieves instant finality; Ethereum has multiple commitment levels.
- **Execution Environment**: Sei supports both EVM and Cosmos-SDK transactions. Non-EVM transactions (e.g., Cosmos bank sends, wasm executes) can update EVM-accessible state.
- **Asset Types**: Assets can exist as EVM (ERC20/721/1155), Cosmos CW (CW20, CW721), or native (Sei, IBC, Tokenfactory).
- **Addressing**: Each user has two addresses derived from the same public key: Cosmos Bech32 and EVM-compatible.
- **Interoperability**: Managed via precompiles and pointer contracts.

---

## Deployment Details

- **Testnet**
  - [Changelog](https://github.com/sei-protocol/sei-chain/blob/main/CHANGELOG.md#v5.5.1)
- **Mainnet**
  - [Changelog](https://github.com/sei-protocol/sei-chain/blob/main/CHANGELOG.md#v552)

---

## Opcode Differences

| Opcode           | Sei EVM                                       | Ethereum                            | Notes                                                                |
| ---------------- | --------------------------------------------- | ----------------------------------- | -------------------------------------------------------------------- |
| **PREVRANDAO**   | Value derived from current block time         | RANDAO mix (EIP-4399)               | Not a randomness source; use oracle/VRF. DIFFICULTY aliases to this. |
| **COINBASE**     | Always the global fee collector address       | Block proposer (miner) address      | Do not assume it is the validator address.                           |
| **BASEFEE**      | Current dynamic base fee; no burn             | Current base fee; portion is burned | Legacy tx must specify ≥ 1 gwei base fee on Sei.                     |
| **BLOCKHASH**    | Hash of Tendermint header; different encoding | Keccak of Ethereum block header     | Usable for recent blocks only; not interchangeable across chains.    |
| **GASLIMIT**     | 10,000,000 per block                          | ≈ 45,000,000                        | Represents block gas limit in both chains.                           |
| **TIMESTAMP**    | Tendermint block time                         | Proposer-chosen block time          | Same semantics; do not use as randomness.                            |
| **DIFFICULTY**   | Alias of PREVRANDAO                           | Alias of PREVRANDAO (EIP-4399)      | Returns the same value as PREVRANDAO.                                |
| **Blob Opcodes** | Not supported (Cancun without blobs)          | Supported post-Cancun (EIP-4844)    | Blob transactions are not enabled on Sei.                            |

### Details

- **PREVRANDAO**: On Sei, returns a value derived from the current block time (not true randomness). For randomness, use a verifiable randomness oracle.
- **COINBASE**: Always set to the EVM address of the global fee collector.
- **State Root**: Sei uses an AVL-tree for global state; no per-account state root as in Ethereum’s MPT.
- **Block Hash**: Computed from the Tendermint header, not directly compatible with Ethereum’s block hash.
- **Base Fee & Tips**: All transaction types are supported. For legacy (non-EIP1559) transactions, a base fee of at least 1 gwei is required. Excess gas may not be fully refunded.

#### Example: Querying EIP-1559 Parameters

## Twin Turbo Consensus

### Overview

Sei’s consensus mechanism, known as **Twin Turbo Consensus**, is a set of optimizations built on top of the Tendermint Byzantine Fault Tolerant (BFT) engine. These enhancements—combined with aggressive configuration, parallel execution, and tight integration with SeiDB—enable block finality times of around **400 milliseconds**. The result is near-instant transaction confirmation, unlocking a new class of high-performance decentralized applications, especially for EVM-based workloads.

---

### Core Concepts

#### Pipelined & Parallelized Consensus

Traditional Tendermint consensus processes blocks in sequential rounds: propose, prevote, precommit, and commit. Sei’s Twin Turbo Consensus **pipelines** these steps and integrates them with parallel transaction execution, dramatically reducing block times.

#### Key Enhancements

- **Aggressive Timeout Configuration:**  
  Tendermint consensus parameters (e.g., `UnsafeProposeTimeoutOverride`, `UnsafeCommitTimeoutOverride`) are tuned for much shorter block proposal, voting, and commit rounds. Faster gossip propagation further reduces validator communication latency.

- **Intelligent Mempool Management & Transaction Preparation:**  
  Validators begin processing transactions for the next block even before the proposal is initiated. This includes:

  - Concurrent transaction decoding (`DecodeTransactionsConcurrently`)
  - State dependency analysis (`GenerateEstimatedWritesets`)
  - State prefetching from SeiDB  
    This "pre-consensus" work minimizes the time needed once the block proposal arrives.

- **Optimized BFT Rounds with Parallel Execution:**  
  When a validator receives a block proposal:

  - Transactions are dispatched to the parallel execution engine (`ProcessTXsWithOCC`, `DeliverTxBatch`)
  - Execution proceeds optimistically and concurrently (using multiple worker goroutines and `CacheMultiStore` for state buffering)
  - BFT prevote and precommit voting rounds run in parallel with execution

- **Rapid Finalization and Commit:**  
  Because execution and consensus voting overlap, the time between reaching 2/3+ precommits and committing state changes is minimized. Once consensus is reached, validated state changes are quickly committed to SeiDB, leveraging its high throughput.

## Performance Impact for EVM Developers

Sei’s highly optimized consensus architecture delivers tangible benefits for EVM developers, especially those building latency-sensitive or complex applications.

### Key Benefits

- **Ultra-Low Latency:**  
  Transactions are confirmed in ~400ms, making dApp interactions feel nearly instantaneous and bridging the gap between decentralized and traditional web applications.

- **Enabling Advanced Use Cases:**

  - **High-Frequency Trading:** On-chain trading strategies and bots can operate at speeds previously impractical on other EVM chains.
  - **Real-Time Oracles:** Price feeds and other oracles can update every few seconds, supporting more robust and stable DeFi protocols.
  - **On-Chain Games:** Fast block times enable responsive, interactive gaming experiences.

- **Efficient Multi-Step Operations:**  
  Complex DeFi workflows (e.g., approve → swap → stake) can be executed in sequence within about a second, improving capital efficiency and user experience.

- **Full EVM Compatibility:**  
  All standard EVM features, gas models, and developer tools (Solidity, Vyper, Hardhat, etc.) are supported.

---

## Compatibility and Roadmap

Sei’s consensus enhancements are designed to preserve full EVM compatibility. This means that existing smart contracts, dApps, and developer tooling (such as Solidity, Hardhat, and MetaMask) work seamlessly on Sei EVM without modification.

### Looking Ahead

The Sei team is actively working on further improvements to the execution pipeline and developer experience, including:

- **Advanced State Management:**  
  Techniques like predictive state loading and EVM-specific caching tightly integrated with SeiDB to further reduce latency.

- **EVM Execution Optimizations:**  
  Exploring bytecode optimizations and potential just-in-time (JIT) compilation for even faster smart contract execution.

- **Cross-Chain Communication:**  
  Building protocols that leverage Sei’s fast finality for secure and efficient interoperability with other blockchains.

These ongoing efforts aim to make Sei the premier platform for high-performance, EVM-compatible decentralized applications, while maintaining a familiar developer experience.

## Sei Parallelization Engine

### Overview

The **Sei Parallelization Engine** is a foundational component of Sei’s architecture, purpose-built to overcome the throughput limitations of traditional, sequential blockchain execution. By enabling concurrent processing of non-conflicting transactions within each block, the engine leverages modern multi-core processors to deliver superior scalability and performance.

### Key Innovation

The engine empowers Sei to execute transactions simultaneously across multiple CPU cores, dramatically increasing throughput while ensuring that the final results remain fully deterministic—identical to what would be produced by sequential execution.

### Core Mechanism: Optimistic Concurrency Control (OCC)

At the core of the Parallelization Engine is an **Optimistic Concurrency Control (OCC)** strategy:

- **Parallel Execution Without Locks:**  
  Unlike pessimistic models that lock state resources before execution, OCC allows transactions to run in parallel based on an initial prediction of which parts of the state they will access.

- **Conflict Detection:**  
  During or after parallel execution, the engine checks for conflicts (such as two transactions attempting to write to the same state key).

- **Conflict Resolution:**  
  If a conflict is detected, the affected transactions are re-executed as needed to ensure correctness. This process is efficient because conflicts are typically rare, so most transactions benefit from the speed of parallel execution without additional overhead.

This approach enables Sei to maximize throughput and minimize latency, especially when the majority of transactions do not interact with the same state, making it ideal for high-performance, decentralized applications.

### System Architecture

The Sei Parallelization Engine processes transactions through a carefully structured pipeline to maximize throughput and maintain deterministic results. The architecture consists of the following key stages:

#### 1. Transaction Preprocessing

- **Parsing & Validation:**  
  Incoming raw transaction bytes are parsed into structured transaction objects. Ante handlers perform initial validation, checking signatures, fees, and other prerequisites.

- **Critical Transaction Identification:**  
  Certain transactions (e.g., oracle price feed updates) are flagged for prioritized execution to ensure timely data processing.

- **Batch Grouping:**  
  Transactions are grouped into batches for efficient downstream processing and to lay the groundwork for parallel execution.

---

#### 2. Dependency Analysis (Estimation)

- **Access Prediction:**  
  An access control module analyzes each transaction to estimate which state keys it will read or write. Specialized "Dependency Generator" functions predict access patterns for each transaction type.

- **Precision by Complexity:**

  - _Simple transactions_ (e.g., token transfers) allow precise prediction of accessed accounts and balances.
  - _Complex smart contract calls_ require broader, heuristic-based estimates, considering contract addresses, storage layouts, function selectors, parameters, and historical access patterns.

- **Example:**  
  For a token transfer from account A to B, the estimated read/write set includes:

  - Read: A’s balance, B’s balance, related metadata
  - Write: A’s balance, B’s balance

- **Secondary Effects:**  
  The analyzer may also consider:

  - Fee deductions from sender accounts
  - Interactions with staking or governance modules

- **Output:**  
  Each transaction receives an "estimated writeset" (predicted state impact), annotated with access types (read/write) and confidence levels. These are used for scheduling and conflict minimization in the next phase.

---

#### 3. Parallel Execution

- **Batch Organization:**  
  Transactions and their writesets are logically grouped, with metadata and priority queues established for optimal throughput.

- **Worker Assignment:**  
  A dynamic pool of execution workers (e.g., goroutines) is allocated based on available system resources and CPU architecture. Workers may specialize in certain transaction types, and load balancing ensures efficient resource use.

- **Strategic Scheduling:**  
  Transactions are assigned to workers such that non-conflicting transactions (based on estimated writesets) are executed in parallel. Graph-based algorithms and lookahead scheduling minimize potential conflicts.

- **Buffered Execution:**  
  Each worker executes transactions in isolation, writing all state changes to a temporary buffer (not the main state store). Gas metering and limits are enforced, and intermediate results are held until conflict checks are complete.

- **Runtime Tracking:**  
  The system tracks actual state keys read and written during execution, feeding this data back into the dependency estimator for future optimization.

- **Advanced Techniques:**
  - Adaptive batch sizing based on load and conflict rates
  - Predictive execution of likely transaction paths
  - Distributed execution across multiple nodes (when available)
  - Resource throttling to prevent worker starvation

---

#### 4. Conflict Detection & Resolution

- **Conflict Identification:**  
  After execution, the system compares actual read/write sets. Conflicts are detected when:

  - One transaction reads a key another wrote (Read-After-Write, RAW)
  - One transaction writes a key another read (Write-After-Read, WAR)
  - Multiple transactions write the same key (Write-After-Write, WAW)

- **Detection Algorithms:**

  - Hash-based in-memory tracking for fast lookup
  - Bloom filters for rapid pre-checks
  - Deterministic conflict resolution order to avoid cyclic dependencies
  - Timestamp tracking for correct sequencing

- **Resolution Process:**

  - Conflicting transactions are grouped and their results removed from the buffer.
  - The group is re-executed sequentially in a deterministic order (e.g., system-critical transactions and oracle updates first, then others by block order or gas price).
  - Successfully processed transactions remain isolated from those being re-executed.
  - The process repeats as needed to resolve cascading conflicts.

- **Outcome:**  
  This ensures the final state matches what would have resulted from sequential execution, preserving blockchain consistency.

---

#### 5. Fallback Mechanism

- **Failure Detection:**  
  If parallel execution fails due to excessive conflicts or critical errors, the system triggers a fallback.

- **State Rollback:**  
  All speculative state changes from the failed parallel attempt are discarded.

- **Sequential Reprocessing:**  
  The entire batch is re-executed sequentially, guaranteeing progress even in worst-case scenarios.

---

#### Integration with SeiDB

The parallelization engine is tightly integrated with **SeiDB**, Sei’s custom storage layer, which provides:

- **Performance Optimizations:**

  - Multi-version concurrency control (MVCC) for multiple execution attempts
  - Lock-free reads for non-blocking parallel execution
  - Memory-mapped state caching to reduce I/O
  - Batch commit to minimize disk writes

- **Parallelization Features:**

  - Snapshot isolation for consistent transaction views
  - Atomic multi-key operations for complex state transitions
  - Versioned state access for concurrent reads
  - Fast rollback for speculative state changes

- **Storage Architecture Alignment:**
  - Key-value structure matches dependency analysis patterns
  - Prefix-based organization for contract/module access
  - Hybrid storage tiers for workload optimization
  - Asynchronous persistence to decouple execution from storage latency

This integration enables high throughput even under complex, high-conflict workloads.

---

#### Performance Impact

The Parallelization Engine delivers substantial throughput improvements (scaling with CPU core count):

| Transaction Type  | Sequential TPS | Parallel TPS | Improvement |
| ----------------- | :------------: | :----------: | :---------: |
| Simple Transfers  |     3,000      |   15,000+    |     5x      |
| ERC-20 Transfers  |     2,200      |    9,500+    |    4.3x     |
| DEX Swaps         |      800       |    2,800+    |    3.5x     |
| Complex Contracts |      500       |    1,500+    |     3x      |

These gains allow Sei to fully leverage modern multi-core server hardware for high-performance, EVM-compatible decentralized applications.
