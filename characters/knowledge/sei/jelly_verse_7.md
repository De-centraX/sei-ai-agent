# Jelly Verse

# Gas-Kompensation

Im jAsset-Protokoll ist es entscheidend, den Liquidationsdurchsatz zu maximieren, um unter-kollateralisierte Vaults schnell zu bewältigen. Liquidatoren, die möglicherweise auch Einlagen im Stability Pool halten, spielen eine zentrale Rolle, indem sie von diesen Liquidationen profitieren.

Hohe Gasgebühren stellen jedoch eine Herausforderung dar. Öffentliche Liquidationsfunktionen können aufgrund hoher Gasgebühren unattraktiv für Liquidatoren sein, was zu einer Verzögerung bei der Abwicklung unter-kollateralisierter Vaults führen kann.

Um rechtzeitige Liquidationen zu fördern, kompensiert das Protokoll Liquidatoren direkt für ihre Gasgebühren und stellt sicher, dass sie selbst bei hohen Gaspreisen mindestens kostendeckend arbeiten oder sogar Gewinn erzielen können. Die Gas-Kompensation besteht aus jUSD und Kollateral:

- Kollateral: Wird dem liquidierten Vault entnommen.
- jUSD: Wird aus einer Liquidationsreserve bereitgestellt, die bei der erstmaligen Schuldenausgabe eines Kreditnehmers finanziert wird. Jede Liquidationstransaktion entnimmt Mittel aus dieser Reserve, um den Liquidator zu entschädigen. Wenn mehrere Vaults in einer einzigen Transaktion liquidiert werden, summieren sich die Beiträge jedes Vaults zur Gesamtkompensation.

Die Gas-Kompensation pro liquidiertem Vault folgt dieser Formel: 5 jUSD + 0,5 % des Kollaterals des Vaults.

**Zeitplan für die Gas-Kompensation**

- Eröffnung eines Vaults: Ein Kreditnehmer gibt zusätzliche 5 jUSD Schulden an einen speziellen Vertrag, den „Gas-Pool“, für die Gas-Kompensation aus.
- Schließung eines aktiven Vaults: Bei der Schließung eines Vaults werden 5 jUSD aus dem Gas-Pool verbrannt, und die entsprechende Schuld im Vault wird storniert, wodurch die Gas-Kompensation zurückerstattet wird.

**Gas-Kompensation und Redemptions**

Redemptions: Wenn ein Vault eingelöst wird, erfolgt dies gegen die Schulden minus der ursprünglichen 5 jUSD. Dadurch bleibt die Gas-Kompensation für Liquidatoren erhalten.

# Der Stability Pool

Jeder Inhaber von jAssets kann diese in den Stability Pool einzahlen, der dazu dient, Schulden aus Liquidationen aufzunehmen und Einleger mit dem liquidierten Kollateral zu belohnen, proportional zu ihrer Einzahlung.

Da Liquidationen bei einem ICR (Initial Collateralization Ratio) knapp unter 110 % erfolgen—und in extremen Fällen typischerweise über 100 % bleiben—profitieren Einleger in der Regel von Liquidationen. In solchen Fällen übersteigt der Dollarwert des erlangten Kollaterals den Dollarwert des jAsset-Verlusts (vorausgesetzt, die jAsset-Preise entsprechen ihren Oracles).

Nach einer oder mehreren Liquidationen verbleibt eine Einzahlung als zusammengesetzte Einzahlung—sie absorbiert Schuldenverluste und erhält Kollateralgewinne.

Gemischte Liquidationen: Offset und Umverteilung

Wenn ein Vault in den Stability Pool liquidiert wird:

- Offset: Wenn die jAsset-Schulden dem Bestand des Stability Pools entsprechen oder diesen übersteigen, werden die Schulden ausgeglichen und die entsprechenden jAssets verbrannt.
- Pure Offset: Wenn der Stability Pool mehr jAssets hält als die Schulden des Vaults, werden die gesamten Schulden ausgeglichen, und das Kollateral des Vaults wird unter den Einlegern aufgeteilt.

Wenn der Stability Pool weniger jAssets hält als die Schulden des Vaults, wird ein Teil der Schulden durch die jAssets des Pools ausgeglichen, und ein proportionaler Teil des Kollaterals des Vaultsgeht an die Stability Provider. Die verbleibenden Schulden und das verbleibende Kollateral werden auf aktive Vaults umverteilt—ein gemischter Offset und eine Umverteilung.

Umverteilungen: Nach Kollateral getrennt

Umverteilungen erfolgen für jede Art von Kollateral-Token:

- Zum Beispiel: Ein Vault mit 30 % BTC und 70 % USDT-Kollateral verteilt 30 % seiner jAsset-Schulden auf andere BTC-Vaults und 70 % auf USDT-Vaults.

Wenn der letzte Vault eines Kollateraltyps liquidiert wird, werden seine Tokens im Storage Pool als unassigned markiert. Diese können von jedem Kreditnehmer über die Funktion claimUnassignedAssets beansprucht werden, wobei das Kollateral und die jAsset-Schulden auf ihren Vault übertragen werden.

Reserve Pool

Der Reserve Pool entschädigt Stability Pool-Einleger, wenn das Kollateralisierungsverhältnis eines Vaults aufgrund schneller Preisänderungen der Oracles unter 100 % fällt. Der Pool wird durch Schuldenausgabegebühren und Subventionen des Governance-Tokens finanziert, und seine Kapazität passt sich dynamisch an die Gesamtmenge der ausgegebenen jUSD-Token an.

Ziel des Reserve Pools ist es, Marktvolatilität abzumildern, Stability Pool-Einleger zu schützen und das allgemeine Vertrauen in das System zu stärken.

\\

# Swap Pools

Das jAsset-Protokoll hat einen Uniswap V2 Fork als dezentrale Börse (DEX) integriert und dabei dynamische Funktionen wie eine Balance-Gebühr und automatische jAsset-Schuldenrückzahlung bei der Entnahme von Liquidität aus den Pools eingebaut.

### **Balance-Gebühr**

Die Balance-Gebühr basiert zunächst auf der statischen Uniswap-Swap-Gebühr, erhöht sich jedoch dynamisch, wenn ein Handel den DEX-Preis vom Oracle-Preis abweichen lässt. Dies soll Benutzer dazu anregen, nicht gegen den gepeggten Preis zu handeln.

### Automatische Schuldenrückzahlung

Wenn ein Benutzer Liquidität aus einem Pool entnimmt, versucht das Protokoll automatisch, mögliche jAsset-Schulden aus dem Vault des Benutzers zu begleichen. Erst nach der Begleichung dieser Schulden werden die verbleibenden Token dem Benutzerkonto gutgeschrieben. Liquidity Pool-Token sind nicht übertragbar, um diese Einschränkung durchzusetzen und delta-neutrale jAsset-Positionen in den Bilanzen zu reduzieren.

### jAsset Minting

Neue jAssets können nur von Kreditnehmern in Verbindung mit Swap Pools geminted werden:

- Long Position (Open Long Position): Kreditnehmer minten neue jUSD und tauschen sie über ein Liquiditätspaar in ein jAsset um (`SwapOperations.openLongPosition()`).
- Short Position (Open Short Position): Kreditnehmer minten ein jAsset und tauschen es gegen jUSD (`SwapOperations.openShortPosition()`).

Nach dem Minting ist ein Rückkauf über die Pools erforderlich, um die Schuldenrückzahlung zu ermöglichen.

Neutrale Position durch Bereitstellung von Swap Pool Liquidität: Kreditnehmer minten ein jAsset und jUSD im aktuellen Swap Pool-Verhältnis und stellen sie direkt als Liquidität in den Pool (`SwapOperations.addLiquidity()`).

\\

# Protokollsystemgebühren

Das jAsset-Protokoll generiert Einnahmen aus verschiedenen Operationen innerhalb seines Systems. Inhaber von Jelly Token (JLY) können ihre Tokens staken, um einen Anteil dieser Gebühren zu verdienen, proportional zu ihrem Einsatz im Verhältnis zur gesamten gestakten Menge an JLY.

### Einnahmequellen

- Redemption-Gebühr
  - Die Redemption-Gebühr wird vom gesamten Kollateral abgezogen, das während einer Einlösung entnommen wird, basierend auf der aktuellen Redemption-Rate. Wenn eine Einlösung über RedemptionManager.redeemCollateral erfolgt, wird die Gebühr an den Staking-Vertrag in allen verwendeten Kollateral-Token übertragen.
- Issuance-Gebühr
  - Die Issuance-Gebühr, die in jUSD erhoben wird, basiert auf der Höhe der Schulden, die der Benutzer aufnimmt, und wird zu den jUSD-Schulden seines Vaults hinzugefügt. Für jUSD variiert die Gebühr mit der aktuellen Borrowing-Rate, die dynamisch ist. Andere jAssets haben einen statischen Borrowing-Satz von 0,5 %.
  - Wenn neue jAssets über Funktionen wie BorrowerOperations.openTrove, SwapOperations.addLiquidity, SwapOperations.openLongPosition oder SwapOperations.openShortPosition geminted werden, wird zusätzliches jUSD geprägt, und eine entsprechende Menge Schulden wird dem Vault des Benutzers hinzugefügt. Die Gebühr wird an den Reserve Pool übertragen. Sobald der Reserve Pool seine maximale Kapazität erreicht hat, werden die nachfolgenden Gebühren an den Staking-Vertrag weitergeleitet.
- Balance-Gebühr
  - Die Balance-Gebühr wird in dem eingehenden Token eines Pool-Swaps gezahlt. Sie besteht aus einem statischen Anteil von 0,3 % (Swap-Gebühr) und einem dynamischen Anteil, der bis zu 5,0 % betragen kann. Der dynamische Teil wird basierend auf der Abweichung des Pool-Preises vom Oracle-Preis berechnet. Je höher die Abweichung, desto höher die Gebühr. 50 % dieser Gebühr werden an den Swap-Pool als Belohnung für Liquiditätsanbieter verteilt, während die restlichen 50 % an den Staking-Vertrag gehen.

### Gebührenplan

- Redemption-Gebühr: Berechnet basierend auf dem `baseRate` im `TroveManager`. Der `baseRate` passt sich bei jeder Einlösung an und nimmt mit der Zeit ab, seit dem letzten Gebührenereignis.
- Issuance-Gebühr: Ebenfalls basierend auf dem `baseRate`, der sich mit jeder jUSD-Ausgabe anpasst und über die Zeit abnimmt.
- Gebührenlimits: Der `REDEMPTION_FEE_FLOOR` und `BORROWING_FEE_FLOOR` sind auf 0,5 % festgelegt. Die maximale Borrowing-Gebühr (`MAX_BORROWING_FEE`) ist auf 5 % begrenzt, um sicherzustellen, dass die Gebühren während der Redemptions nicht unter diese Schwelle fallen und Front-Running verhindern.

### Implementierung des Gebührenverfalls

Die Zeit wird in Minuten gemessen (`block.timestamp`). Die Verfallsrate des `baseRate` sorgt dafür, dass die Gebühren allmählich im Laufe der Zeit sinken. Der Verfallsparameter ist so eingestellt, dass die Gebühr um etwa 1 % pro Stunde reduziert wird, was sicherstellt, dass der `baseRate` nach einer Woche erheblich von seinem Anfangswert abnimmt. Dieser Verfallmechanismus verhindert, dass der `baseRate` künstlich durch häufige kleine Transaktionen auf einem hohen Niveau gehalten wird, und schützt so vor Manipulationen.

# Governance

Das Protokoll enthält mehrere wichtige Verwaltungsfunktionen, die für die Integration zukünftiger Kollateral- und jAsset-Tokens entscheidend sind. Diese Funktionen nutzen das grundlegende Ownable-Konzept, welches das Eigentum nach der Bereitstellung an den Governance-Vertrag überträgt.

Verträge und ihre Funktionen:

- TokenManager
  - setEnableMinting(bool \_enable): Aktiviert oder deaktiviert das Minting neuer Tokens.
  - addDebtToken(address \_debtTokenAddress, bytes32 \_oracleId): Fügt einen neuen Schulden-Token hinzu, basierend auf einer Oracle-ID.
  - addCollToken(address \_tokenAddress, uint \_supportedCollateralRatio, bytes32 \_oracleId, bool \_isGovToken): Fügt einen neuen Kollateral-Token mit unterstütztem Kollateralisierungsverhältnis und Oracle-ID hinzu.
  - setCollTokenSupportedCollateralRatio(address \_collTokenAddress, uint \_supportedCollateralRatio): Setzt das unterstützte Kollateralisierungsverhältnis für einen Kollateral-Token.
  - setStockExchange(address \_debtTokenAddress, address \_exchangeForStock, int \_exchangeRate): Verknüpft einen Schulden-Token mit einer Börse und setzt einen Umrechnungskurs.
  - setNextStockSplitRelative(address \_debtTokenAddress, int32 \_relativeSplit): Legt die relative Aufteilung für den nächsten Aktiensplit eines Schulden-Tokens fest.
  - setSymbolAndName(address \_debtTokenAddress, string memory \_symbol, string memory \_name): Aktualisiert das Symbol und den Namen eines Schulden-Tokens.
- ReservePool
  - setRelativeStableCap(uint \_relativeStableCap): Setzt die relative Obergrenze für stabile Reserven.
  - setGovReserveCap(uint \_govReserveCap): Setzt die Obergrenze für Governance-Reserven.
- TroveManager
  - setEnableLiquidationAndRedeeming(bool \_enable): Aktiviert oder deaktiviert Liquidationen und Redemptions.
- SwapOperations
  - createPair(address \_plainSwapPair, address tokenA, address tokenB): Erstellt ein neues Swap-Paar zwischen zwei Token.

Zusätzlich enthält der PriceFeed einen Mechanismus zur Speicherung von Fallback-Preisen, um Situationen zu bewältigen, in denen das Pyth-Netzwerk nicht verfügbar ist. Diese Fallback-Preise können mithilfe der Funktion PriceFeed.setFallbackPrices() aktualisiert werden.

\\

# Audits

## Solid Proof:

<https://github.com/solidproof/Projects/blob/main/2024/Jellyverse/SmartContract_Audit_Solidproof_jAssets.pdf>

## Alex The Entreprenerd (GalloDaSballo):

<https://github.com/gallodasballo/apollon-review>

# Governance

Ein wirklich dezentrales System

\
Das Governance-Modell von Jellyverse hat das Ziel, Nutzern die Befähigung zu geben, Protokolle innerhalb des Jellyverse-Ökosystems in die richtige Richtung zu lenken.&#x20;

Es bietet auch neuen Projekten die Möglichkeit, sich ins Jellyverse zu integrieren. Dieser Ansatz bietet mehrere bedeutende Vorteile, da Jellyverse für sein nachhaltiges, robustes und skalierbares System bekannt ist. Dieses System ermöglicht eine gerechte Verteilung der Protokoll-Einnahmen an die Stakeholder und macht es zu einer vielversprechenden Wahl für Projekte, die florieren möchten.

Wenn neue Projekte sich dazu entschließen, sich in das Ökosystem zu integrieren, können bestimmte Anpassungen erforderlich sein, insbesondere in Bereichen wie der Verteilung von Rewards. Es ist wichtig zu beachten, dass die Governance-Befugnis ausschließlich auf konfigurierbare Parameter beschränkt ist.

## Liste aller konfigurierbaren Parameter (tbd)&#x20;

### Governance System Übersicht

Ein Proposal ist im Wesentlichen eine Sammlung von Transaktionen. Frontend-Anbieter können benutzerfreundliche Governance-Oberflächen entwerfen, um die Navigation zu vereinfachen und die Interaktion mit dem Governance-System zu erleichtern.

Um ein wirklich dezentrales Governance-System zu etablieren, ist jede Adresse berechtigt, sowohl als Antragsteller (Proposer) als auch als Ausführender (Executor) zu fungieren. Um das Verständnis zu erleichtern, sind diese Rollen ausführlich in der Dokumentation erläutert.

- Proposer können Operationen initiieren oder abbrechen.&#x20;
- Executor können Operationen ausführen, wenn 'timelock' abgelaufen ist.

Dieses Governance-Modell wird nahtlos mithilfe der Smart Contracts von OpenZeppelin integriert. Dieses modulare System besteht aus den folgenden Komponenten:

- JellyToken.sol
- JellyGovernance.sol
- JellyTimelock.sol
- JellyChest.sol

Initial werden folgende Parameter festgelegt:&#x20;

- **Voting Delay (in blocks)** - Die minimale Anzahl von Blöcken, die vergehen müssen, zwischen dem Zeitpunkt, an dem ein Vorschlag erstellt wird, und dem Zeitpunkt, an dem darüber abgestimmt werden kann.
- **Voting Period (in blocks)** - Die Anzahl der Blöcke, über die ein Vorschlag abgestimmt werden muss.
- **Proposal Threshold** - Die minimale Anzahl von Stimmen, die eine Adresse benötigt, um einen Vorschlag zu erstellen.
- **Quorum** - Die minimale Anzahl von Stimmen, die erforderlich ist, damit ein Vorschlag angenommen wird.
- MinDelay - Die minimale Anzahl von Sekunden, die vergehen müssen, bevor eine Operation ausgeführt werden kann. Dies kann null sein.

## Timelock

Die Timelock-Funktion führt eine zeitliche Verzögerung zwischen der Einreichung eines Vorschlags und seiner Ausführung ein, wodurch eine zusätzliche Sicherheitsebene geschaffen wird. Timelock-Operationen werden durch ihren Hash eindeutig identifiziert und folgen einem vorher definierten Lebenszyklus.

### Proposal Lebenszyklus

Jedes Proposal muss sich an einen vorher definierten Lebenszyklus halten, um sicherzustellen, dass die Jellyverse-Community ausreichend Zeit hat, ihn zu überprüfen und zu bewerten. Sobald ein Proposal genehmigt wird, wird es unwiderruflich und kann nicht gestoppt werden. Im Verlauf seines Lebenszyklus kann ein Proposal einen der folgenden Zustände haben:

Ein Proposal kann sich in einem der folgenden Zustände befinden:&#x20;

- **Pending** - Der Vorschlag wurde erstellt, wurde jedoch noch nicht zur Abstimmung vorgelegt.
- **Active** - Der Vorschlag wurde erstellt und wird zurzeit zur Abstimmung gestellt.
- **Cancelled** - Der Vorschlag wurde erstellt, wurde jedoch abgebrochen, bevor darüber abgestimmt wurde.
- **Defeated** - Der Vorschlag wurde erstellt und zur Abstimmung vorgelegt, hat jedoch die Abstimmung nicht bestanden.
- **Succeeded** - Der Vorschlag wurde erstellt, zur Abstimmung gestellt und wurde angenommen.
- **Queued** - Der Vorschlag wurde erstellt, zur Abstimmung gestellt, angenommen und wartet darauf, ausgeführt zu werden.
- **Expired** - Der Vorschlag wurde erstellt, zur Abstimmung gestellt, angenommen, aber vor Ablauf der GRACE_PERIOD nicht ausgeführt. (GRACE_PERIOD ist ein Platzhalterwert.)
- **Executed** - Der Vorschlag wurde erstellt, zur Abstimmung gestellt, angenommen und ausgeführt.

# Reward Distribution

Jellyverse Architektur

## Übersicht

Wie allgemein bekannt ist, erfordert jede Ausführung auf der Ethereum Virtual Machine (EVM) die Bezahlung von Gas-Fees (Gebühren). Daher ist eine automatisierte Verteilung von Rewards (JLY Tokens) nicht effizient und muss vom Nutzer manuell eingesammelt werden (claimen).&#x20;

Die Berechnung und Verteilung der Rewards muss konfigurierbar und überprüfbar sein, um neuen Projekten den Aufbau auf Jellyverse zu ermöglichen und die Dezentralität des Ökosystems zu gewährleisten. Die Rewardverteilung ist eines der Schlüsselelemente des Jellyverse und besteht aus zwei Smart Contracts:

1. minter.sol
2. rewarddistributor.sol

Diese beiden Smart Contracts arbeiten nahtlos zusammen, um eine wöchentlich wiederkehrende Distribution zu ermöglichen. Einfach ausgedrückt kann jeder Benutzer eine Off-Chain-Berechnung durchführen, wobei ein bereitgestellter (oder optionaler) Snapshot verwendet wird, um festzustellen, welche Adressen berechtigt sind, Belohnungen zu erhalten. Dieser Ansatz gewährleistet Flexibilität, vollständige Dezentralisierung und Effizienz im Verteilungsprozess.

## Minter.sol

Dieser Smart Contract wird einen Ownable-Smart Contract erben, sodass er von der Governance aufgerufen werden kann, um wichtige Parameter zu aktualisieren.

## Reward Distributor

Um die Gas-Effizienz zu optimieren, folgt das System einem wöchentlichen Zyklus. Innerhalb dieses Zyklus wird ein Snapshot erstellt, die Verteilung der Rewards berechnet und anschließend für die Benutzer zur Verfügung gestellt. Benutzer können Token nur für einen Snapshot (Zyklus) gleichzeitig beanspruchen. Wenn sie über einen längeren Zeitraum keine Rewards über die Claim-Funktion erhalten haben, sind mehrere Ausführungen möglich. Um diesen Prozess zu erleichtern, wird ein Multicall-Mechanismus verwendet.

Von einem technischen Standpunkt aus ist es möglich, jeden Snapshot und jedes Zeitintervall für die Verteilung auszuwählen. In der Praxis ist jedoch die Erstellung von JLY-Token im JLY-Vertrag festgelegt und dient als Einschränkung für den Reward-Distributor. Darüber hinaus könnte die Community eine Einigung über einen inoffiziellen, leicht überprüfbaren Abstimmungszyklus erzielen, der alle X Blöcke stattfindet.

Das System kann die Blockscout API oder ähnliche Dienste für die Erstellung von Snapshots verwenden. Jedoch ist es von entscheidender Bedeutung, die Sicherheit durch die Implementierung eines On-Chain-Snapshots zu verbessern, möglicherweise unter Verwendung von Cryo. Dieser On-Chain-Snapshot sollte genau mit dem Snapshot übereinstimmen, der aus der Blockscout API (oder anderen Quellen) erhalten wurde.

Aufgrund der Komplexität im Zusammenhang mit der Stimmrechtsberechnung, die von der Freezingdauer im Staking abhängt, ist es entscheidend, eine Momentaufnahme des gesamten relevanten Zustands durchzuführen. Anschließend kann ein Off-Chain-Skript die Daten nutzen um einen 'Merkle-Patricia-Tree' eines gegebenen Zustand zu erstellen. Dadurch kann jeder Nutzer leicht überprüfen, dass derselbe Merkle-Tree unter Verwendung desselben Zustands (Snapshot / Momentaufnahme) erstellt wurde.

Für jeden Snapshot wird eine JSON-Datei generiert und als "\<blockNumber>\_snapshot.json" benannt.&#x20;

Ein Off-Chain TypeScript verwendet die OpenZeppelin Merkle-Tree-Bibliothek, um einen Merkle-Tree für diesen Snapshot zu erstellen. Berechnungen für Token-Ansprüche von Liquiditätsanbietern oder Stakern (Chest-NFTs) sollten auf einem Prozentsatz der wöchentlichen Emission von JLY-Token basieren. Um die Gasnutzung zu optimieren, werden diese Berechnungen Off-Chain durchgeführt. Das Skript kann ebenso in Python, Rust, Go oder einer anderen geeigneten Sprache geschrieben werden. Jeder Datenpunkt des Merkle-Tree sollte den Index im Merkle-Tree, die Adresse des Begünstigten und die Anzahl der JLY-Token, die diesem Begünstigten zustehen (skaliert auf 18 Dezimalstellen), enthalten.

Der Merkle-Tree wird sowohl auf IPFS als auch in einem GitHub-Repository hochgeladen. GitHub dient als zentraler Ort zur Speicherung aller Snapshots und ermöglicht einen bequemen Zugriff. Zusätzlich wird er auf IPFS gespeichert, um die Dezentralisierung sicherzustellen.

Zur Verwaltung von beanspruchten Tokens und zur Verhinderung von doppelten Ansprüchen wird eine Bitmap namens "Claimed" verwendet. Es ist beabsichtigt, dies mithilfe des BitMaps-Contracts von OpenZeppelin für Effizienz und Zuverlässigkeit umzusetzen.

# Tokenomics

Übersicht

**Ticker**: $JLY&#x20;

**Token contract devnet:** 0x9e7A8e558Ce582511f4104465a886b7bEfBC146b&#x20;

**Token contract mainnet:** 0xDD7d5e4Ea2125d43C16eEd8f1FFeFffa2F4b4aF6

Coinmarketcap: <https://coinmarketcap.com/currencies/jellyverse/>

Coin Gecko: <https://www.coingecko.com/en/coins/jellyverse>

### JLY Token Übersicht <a href="#jly-token-in-a-nutshell" id="jly-token-in-a-nutshell"></a>

JLY dient als primärer Governance- und Utility-Token für das Jellyverse-Ökosystem. JLY-Staker haben das Privileg, an wichtigen Entscheidungsprozessen teilzunehmen und wichtige Parameter in einer Vielzahl von Protokollen und dezentralen Anwendungen (dApps) innerhalb von Jellyverse zu beeinflussen. Als einzigartiger Nutzen wird ein Teil der über allen Protokollen generierten Gebühren an die JLY-Staker verteilt.

### Nutzen von JLY:&#x20;

- Governance&#x20;
- Revenue Share&#x20;
- Kollateral für jAssets
- Liquidity Mining&#x20;
- Staking&#x20;

### Token Allokation <a href="#token-allocation" id="token-allocation"></a>

Das Gesamtangebot von JLY ist auf 800 Millionen JLY-Token festgelegt. 70,08 % des gesamten Token-Angebots werden im Laufe der Zeit der Community zugewiesen, während 29,92 % der Token für die anfängliche Entwicklung, das langfristige Wachstum und den zukünftigen Erfolg von Jellyverse vorgesehen sind.

### **Detaillierte Übersicht**

Block Rewards (54,63 %): Der größte Teil von 437.383.634 Token ist für Community-Belohnungen durch Blockbelohnungen vorgesehen. Diese Zuweisung dient als Anreiz für alle Protokolle innerhalb des Jellyverse, wie Jellyswap, Jellystake und jAssets.

Airdrop (11,25 %): Die zweitgrößte Zuweisung von 90.000.000 Token ist für Airdrops vorgesehen. Airdrops werden verwendet, um Token an neue Nutzer zu verteilen und die Akzeptanz und Dezentralisierung von JLY zu fördern.

Investoren und Partner: Investoren erhalten 73.131.641 Token (9,14 %), und Partner haben 54.554.000 Token (6,82 %) erhalten. Investoren stellten das notwendige Kapital für die Entwicklung bereit, während Partner zur Entwicklung, zum Marketing und zu strategischen Partnerschaften beitrugen, um das langfristige Wachstum von Jellyverse sicherzustellen.

Jelly Labs (6,87 %): Die anfängliche Entwicklungseinheit Jelly Labs hält 55.000.000 JLY-Token.

Berater (1,25 %): Jelly Labs reserviert 10.000.000 JLY-Token für Berater, die bereit sind, offizielle Jellyverse-Berater zu werden.

Marketing (3,13 %): Jelly Labs werden 25.000.000 JLY-Token für Marketingzwecke zugewiesen.

Team (2,7 %): Dem Team werden 21.594.391 Token zugewiesen.

Pool Party (Launch Event) (4,17 %): Um die anfängliche Liquidität zu gewährleisten, werden während des Pool Party Events 33.333.334 Token verfügbar gemacht, wobei 50 % an die Teilnehmer verteilt und die anderen 50 % als protokolleigene Liquidität auf Jellyswap gesperrt werden.

Vesting-Periode: Alle Token, die Investoren, Partnern, Beratern, Jelly Labs, Team und Marketing zugewiesen wurden, unterliegen einer Sperrfrist von 24 Monaten mit einer 6-monatigen Cliff-Periode. Dies bedeutet, dass die Token nach und nach freigeschaltet werden, um negative Auswirkungen auf den Preis zu mildern.

\*Für das Marketing sind 10.000.000 JLY-Token von der Sperrfrist ausgenommen, um Market Making, Community-Anreize und andere marketingbezogene Ausgaben zu erleichtern.

### Block Emissionen und Reward Mechanismen

Blockbelohnungen werden gemäß einer vorbestimmten Inflationskurve gemintet und wöchentlich verteilt. Die Berechnung erfolgt off-chain unter Verwendung von Blockchaindaten und wird dann durch einen Governance-Vorschlag bestätigt. Dieser bestimmt die Zuweisung pro Protokoll und anschließend die Zuweisung pro Nutzer innerhalb jedes Protokolls. Für die DEX hat jeder Pool seine eigene prozentuale Zuweisung, und die Belohnungen für einzelne Nutzer werden anteilig basierend auf den LP-Token-Beständen zugewiesen. Beim Staking werden die Belohnungen anteilig basierend auf der durch das Staking erzielten Stimmkraft verteilt.

Zu Beginn wird ein Anteil von \~656.567,55 JLY pro Tag verteilt, der sich gemäß dem Faktor (e^{-0.0015n}) allmählich verringert. Dieser Anteil wird durch die anfängliche Zuweisung von Belohnungen an die Protokolle bestimmt, die kurz vor dem TGE veröffentlicht wird. Sobald Jellyverse vollständig deployed ist, hat die Governance die volle Kontrolle über die Emissionen.

Das theoretische Limit von 800.000.000 JLY-Token wird durch die Begrenzung der Belohnungen auf maximal \~54,7 % sichergestellt, was 437.383.634 Token entspricht.

# Whitepaper

{% file src="<https://3218730379-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F2TV53iLfqQyYfX77O1id%2Fuploads%2F1jthHYrPFrud8sk6MuaW%2Fwhitepaper.pdf?alt=media&token=89924425-a2a7-414f-8370-85b9d4f7352b>" %}

# Contract Addressen

**Unten findest du alle Jellyverse Contract Addressen. Für mehr Infos zu den Contracts, gehe auf** [**seitrace.com**](https://seitrace.com) **und tipp die Adressen ein.**

**Below is a list of all deployed Jellyverse contracts and tokens. For more details, visit** [**seitrace.com**](https://seitrace.com) **and search by the contract addresses.**

| Token      | Contract Address                           |
| ---------- | ------------------------------------------ |
| JellyToken | 0xDD7d5e4Ea2125d43C16eEd8f1FFeFffa2F4b4aF6 |
| jUSD       | 0x4c6Dd2CA85Ca55C4607Cd66A7EBdD2C9b58112Cf |
| jAAPL      | 0x9A5eE1195e5d51e4897Bf22EF3A558319f3bc96f |
| jTSLA      | 0x412621a1ff7a11A794DE81085Dc3C16777a664e2 |
| jMSTR      | 0xcdF04434541559E3f8b7766335Af6EE055C13d1c |
| jNVDA      | 0x162Fd64F868E969555c3898ee7f63b297BBffcCD |
| jMETA      | 0x5A9acdafFC92356c350F7Ed149146DA9F83cF497 |
| jTRUMP     | 0x2c3388D849ddc1F6749a438E8f21803778178B14 |

| Contract Name               | Address                                    |
| --------------------------- | ------------------------------------------ |
| JellyToken                  | 0xDD7d5e4Ea2125d43C16eEd8f1FFeFffa2F4b4aF6 |
| JellyTokenDeployer          | 0x4a431bFAcaccf5361F7fD191839B1799e22978F2 |
| JellyTimelock               | 0xF45A5C823e2f1096412EAD5EC738d36EA0615130 |
| Chest                       | 0xD04750f365a06384e7FCFD0C911C2Ea9Db0978d7 |
| JellyGovernor               | 0xE401e19B5D6239d8cfb6b2Ed1A9Fc209242Ab9ae |
| RewardVesting               | 0x7d42a77a6c1aCccd9556834a8FDd61c7e387cD4A |
| LiquidityRewardDistribution | 0x966C3F49698644484369c318c2C699739C9D8b27 |
| RewardVesting               | 0x4fA3B89D9bE830d49FD84870842d3197724DD7Ba |
| StakingRewardDistribution   | 0x38ABf1e0716C54421dAC35E19c3a3187f5379466 |
| OfficialPoolsRegister       | 0x434440Da993A582118f8eE200e51268380511fEf |
| DailySnapshot               | 0x93F6348Ee1390620d42A85ca610D40AbD941727b |
| Minter                      | 0xA9Ba2FbefDf3d77373a3e97097d35C5808664659 |
| TeamDistribution            | 0xc3266A44c6c08c53EB75416dff4816f7a60AeaD8 |
| InvestorDistribution        | 0xF4493F502dafb568A89188Ec5bD411195fc8396A |

| Contract Name        | Contract Address                                                                                                                                   |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| BorrowerOps          | [0x465BFAd498168D60cb6Fa92FC3F0415277bfB8f4](https://seitrace.com/address/0x465BFAd498168D60cb6Fa92FC3F0415277bfB8f4?tab=contract&chain=pacific-1) |
| RedemptionOps        | [0x628F4a008e0af9425DAd6E5A5939f6526C8F8446](https://seitrace.com/address/0x628F4a008e0af9425DAd6E5A5939f6526C8F8446?tab=contract&chain=pacific-1) |
| LiquidationOps       | [0x1959E6eF3A84Ae7e24A7d45Fd9cA11642C710CE7](https://seitrace.com/address/0x1959E6eF3A84Ae7e24A7d45Fd9cA11642C710CE7?tab=contract&chain=pacific-1) |
| TroveManager         | [0x53AdC171D7C0FBFf4c8E59e61a7133430FEEE173](https://seitrace.com/address/0x53AdC171D7C0FBFf4c8E59e61a7133430FEEE173?tab=contract&chain=pacific-1) |
| SortedTroves         | [0x84506d94DA9b865c16B9c089868cD1e464333917](https://seitrace.com/address/0x84506d94DA9b865c16B9c089868cD1e464333917?tab=contract&chain=pacific-1) |
| HintHelpers          | [0xc27BE26608D1f83197ADc343368Cffad2680330a](https://seitrace.com/address/0xc27BE26608D1f83197ADc343368Cffad2680330a?tab=contract&chain=pacific-1) |
| StabilityPoolManager | [0xb4EC88DBD356DA876d404a3E026F967621aAC8E7](https://seitrace.com/address/0xb4EC88DBD356DA876d404a3E026F967621aAC8E7?chain=pacific-1)              |
| StoragePool          | [0x4c357dAF6C68376826f63D23D79334Ff0D651C59](https://seitrace.com/address/0x4c357dAF6C68376826f63D23D79334Ff0D651C59?tab=contract&chain=pacific-1) |
| ReservePool          | [0x22f1939Bb1f25706656BC0FC97D660B5A5b643eb](https://seitrace.com/address/0x22f1939Bb1f25706656BC0FC97D660B5A5b643eb?tab=contract&chain=pacific-1) |
| TokenManager         | [0x0afF8523b39701b413DFfDf7E0E986c9EBc08f62](https://seitrace.com/address/0x0afF8523b39701b413DFfDf7E0E986c9EBc08f62?tab=contract&chain=pacific-1) |
| PriceFeed            | [0xf67C6464F84306BB29A1aD000479D51b86b8882F](https://seitrace.com/address/0xf67C6464F84306BB29A1aD000479D51b86b8882F?tab=contract&chain=pacific-1) |
| SwapOps              | [0x64Da11e4436F107A2bFc4f19505c277728C0F3F0](https://seitrace.com/address/0x64Da11e4436F107A2bFc4f19505c277728C0F3F0?tab=contract&chain=pacific-1) |
| StakingOps           | [0xa924c3F11f8c76bD02dad60f3E81C3d349447A84](https://seitrace.com/address/0xa924c3F11f8c76bD02dad60f3E81C3d349447A84?tab=contract&chain=pacific-1) |
| CollSurplusPool      | [0x57B662e7757E726a056109e366C6DfABFD1D262c](https://seitrace.com/address/0x57B662e7757E726a056109e366C6DfABFD1D262c?tab=contract&chain=pacific-1) |
| AlternativePriceFeed | [0x292C6A9E316d0200af3De7bA0Cf855F15a9eF2Ef](https://seitrace.com/address/0x292C6A9E316d0200af3De7bA0Cf855F15a9eF2Ef?tab=contract&chain=pacific-1) |
| StakingVestingOps    | [0x559B8d5235487D481dccb7C569e28c21D5c41be1](https://seitrace.com/address/0x559B8d5235487D481dccb7C569e28c21D5c41be1?tab=contract&chain=pacific-1) |
| DnamicFee            | [0xCD6D7aE9c38f1dB6Ae980eb17abE3917735218c1](https://seitrace.com/address/0xCD6D7aE9c38f1dB6Ae980eb17abE3917735218c1?tab=contract&chain=pacific-1) |
| Oracle               | 0xd74919a85D00Df6381A9D6d17530FD6889493b0D                                                                                                         |
| Liquidator           | 0x38Aa3262278682f86ee794f7Df456AA6440baFAD                                                                                                         |

# Audit

Sicherheits-Audit durchgeführt von Hacken

Der Protokollcode von Jellyverse wurde umfassend geprüft und getestet.&#x20;

Das renommierte Audit Unternehmen HACKEN führte eine erfolgreiche Prüfung durch und vergab Jellyverse eine Gesamtbewertung von 9,6/10 Punkten.&#x20;

Für weitere Details kannst du den vollständigen Bericht im PDF einsehen:

{% file src="<https://3218730379-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F2TV53iLfqQyYfX77O1id%2Fuploads%2FoGu1EfjgdIUvqCQ3invU%2FHacken_Jellyverse_SCA_Jellyverse_Governor_Apr2024_P_2024_320_1_20240524.pdf?alt=media&token=b9426de9-993c-488f-9fba-ec18f9afd6ec>" %}

# Socials

Bleib auf dem Laufenden mit den neuesten Nachrichten, Diskussionen und spannenden Inhalten auf den verschiedenen Jellyverse Social-Media-Kanälen.

**X (ehemals Twitter):** Folge Jellyverse auf X, um die neuesten Nachrichten und Updates zu erhalten. -> [X (Twitter)](https://twitter.com/jlyvrs)

**YouTube:** Tauche ein in den Jellyverse YouTube-Kanal. -> [YouTube](https://www.youtube.com/@jellyverse)\

**Telegram:** Tritt Jellyverse auf Telegram bei, um mit der Community in Kontakt zu treten und an Diskussionen teilzunehmen. -> [Telegram_DE](https://t.me/jlyvrs_DE), -> [Telegram_Announcements_DE](https://t.me/jlyvrs_ankuendigungen)

**Reddit:** Nimm an Diskussionen teil und tausche dich mit der Community im offiziellen Subreddit aus. -> [Reddit](https://www.reddit.com/r/jellyverse/)

**Newsletter:** Abonniere den Newsletter, um exklusive Updates und wichtige Ankündigungen zu erhalten.-> [Newsletter](https://www.jellyverse.org/)\\

**LinkedIn:** Vernetze dich mit Jellyverse auf LinkedIn. -> [LinkedIn](https://linkedin.com/company/jlyvrs)\\

**CoinMarketCap:** Entdecke Jellyverse CoinMarketCap-Profil für wertvolle Einblicke in die Community. -> [CMC](https://coinmarketcap.com/community/profile/jellyverse/)\\

**Facebook:** Tritt der Jellyverse Gruppe auf Facebook bei, um aktuelle Informationen zu erhalten und mit der Community in Kontakt zu treten. -> [Facebook](https://www.facebook.com/jlyvrs)

# Einführung

Community Protokolle sind Protokolle die von unabhängigen Teams entwickelt werden und noch nicht von der DAO bestätigt wurden und damit noch kein offizieller Teil von Jellyverse sind. Diese Protokolle durchlaufen dabei verschiedene Stadien:

- **Konzeption**: Ein Protokoll beginnt mit der Idee und der Konzeption. In dieser Phase wird ein Whitepaper entwickelt und Informationen zum Protokoll bereit gestellt
- **Test Deployment**: Ist das Konzept fertig gestellt kann das unabhängige Team das System auf dem Testnet deployen.
- **Community Testing**: Ist das Protokoll erfolgreich auf dem Testnet deployed kann die Community das Protokoll testen.
- **On-Chain Voting**: Im nächsten Schritt wird ein Proposal gestellt und bei positiven Ausgang kann das Protokoll auf dem Mainnet deployed werden.
