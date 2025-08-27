# Jelly Verse

# Multitoken Pools

**Einzigartige Möglichkeiten von JellySwap:**

Die Fähigkeit von JellySwap, mehrere Token in einem einzigen Pool zu unterstützen, unterscheidet es von traditionellen AMMs. Dies fügt Schichten der Komplexität hinzu, bietet aber auch einzigartige Chancen für Liquiditätsanbieter.

**Die Dynamik eines Multi-Token-Pools:**

Multi-Token-Pools enthalten mehr als zwei Token, und in diesem Beispiel wird ein Pool mit sowohl stabilen als auch volatilen Vermögenswerten betrachtet. Der Pool besteht aus USDC, WBTC, JLY und WETH.

**Tiefere Einblicke in das Beispiel:**

- **Erste Annahme:** Eine gleichmäßige Verteilung von $10.000 auf die vier Token.
- **Preisbewegungen:** Mit der Zeit behält USDC seinen fixierten Wert bei, JLY verzeichnet ein Preisanstieg von 15%, WBTC sinkt um 4%, während WETH um 50% steigt.
- **Dynamik des Impermanent Loss:** Die Aufnahme von USDC, einem USD-Stablecoin, macht den Pool anfällig für temporäre Verluste. Da der Preis von USDC konstant bleibt, während die anderen Vermögenswerte im Pool Schwankungen erleben, ändern sich die relativen Anteile der Vermögenswerte im Pool, was zu Impermanent Loss führt.

**Verständnis der Strategie für Liquiditätsanbieter:**

Liquiditätsanbieter in solchen Pools setzen im Wesentlichen auf die erwartete Volatilität der enthaltenen Vermögenswerte. Wenn sie sich für solche Pools entscheiden:

1. **Volatilitätsfarming:** Die LPs nutzen die häufigen Preisfluktuationen, um Tauschgebühren zu verdienen. Mehr Volatilität bedeutet in der Regel mehr Trades und daher mehr Gebühren.
2. **Verwaltung des Impermanent Loss:** Sie verstehen den inhärenten temporären Verlust, insbesondere aufgrund der Präsenz eines Stablecoins. Aber solange die volatilen Vermögenswerte zu ihren Anfangspreisen zurückkehren oder sich so bewegen, dass der Gesamtpoolwert ausgeglichen wird, wird der Impermanent Loss rückgängig gemacht.
3. **Portfolio-Diversifikation:** Die Teilnahme an solch einem Pool ermöglicht es LPs, ihr Kapital zu diversifizieren und das Risiko eines einzelnen Vermögenswerts zu reduzieren.

**Das Endziel für LPs:**

Für Liquiditätsanbieter in einem Multi-Token-Pool dreht sich die Strategie oft darum, die Renditen aus Tauschgebühren zu maximieren, während sie die Risiken des Impermanent Loss verstehen und verwalten. Das perfekte Szenario ist ein Pool, dessen Gesamtwert viele Schwankungen erfährt (was zu Tauschvorgängen und Gebühren führt), aber am Ende wieder dort landet, wo er begonnen hat, wodurch jeder temporäre Verlust aufgehoben wird.

Abschließend bieten Multi-Token-Pools neue Möglichkeiten für Liquiditätsanbieter, erfordern jedoch auch ein tieferes Verständnis der beteiligten Vermögenswerte und der gesamten Marktdynamik. Das Gleichgewicht zwischen Tauschgebührrenditen und potentiellem Impermanent Loss wird zum Schlüssel zum Erfolg in diesen Pools.

# Preminted JPT

Preminted JPT in JellySwap: Ein vereinfachter Blick

**Verstehen von Preminted JPT:** Die Pools von JellySwap haben sich weiterentwickelt, und ein neues Konzept namens "Preminted JPT" ist entstanden. Warum? Nun, als komplexere Pool-Setups (wie verschachtelte Pools) populär wurden, entstand ein Bedarf für einfachere Übergänge von einem Token in einem Pool direkt zu seinem JPT (JellySwap Pool Token). Normalerweise wird dieser Übergang als "Join" bezeichnet, und er kann komplex und teuer in Gas sein, wenn er Teil eines Multi-Hop-Batch-Tauschs ist.

**Was macht Preminted JPT?**

- Wenn ein Pool erstellt wird, minted er sofort die maximale Menge an JPT (2\*\*(111)).
- Dieser JPT wird dann als regulärer Token innerhalb des Pools behandelt.
- Allerdings verhalten sich die Berechnungen des Pools so, als ob dieser JPT nicht vorhanden wäre, wodurch die Gesamtmenge von JPT nicht so bedeutungsvoll ist.
- Stattdessen ist die "virtuelle Menge" wichtig - das ist die Menge an JPT, die tatsächlich von Benutzern außerhalb des Vaults gehalten wird.

**Was ist der Vorteil?**

- Bei Pools mit Preminted JPTs, wie den Composable Stable Pools, können Benutzer direkt von einem Token im Pool zu seinem JPT wechseln.
- Vor Preminted JPT benötigte diese Art von Tausch einen separaten "Join"-Prozess.

---

**In einfacheren Worten:** Preminted JPT ist wie eine vorgeladene Geschenkkarte für JellySwap Pools. Anstatt jedes Mal neue JPT-Token zu minten, wenn ein Benutzer Liquidität zu einem Pool hinzufügt, wird das maximale JPT-Guthaben im Voraus erstellt, was den Eintritt in den Pool günstiger macht.

# Relayers

**Was ist ein Relayer?** Ein Relayer agiert wie ein vertrauenswürdiger Mittelsmann im JellySwap-Ökosystem. Indem Benutzer einem Relayer die Erlaubnis erteilen, können sie ihm bestimmte Aufgaben (wie Trades, Beitritte oder Austritte) in ihrem Namen überlassen. Dies ist jedoch nicht so riskant wie es klingt, da mehrere Sicherheitsebenen vorhanden sind.

**Hauptpunkte zu Relayers:**

1. **Zweistufige Autorisierung:** Damit ein Relayer funktioniert, müssen ihn sowohl der Benutzer als auch das Protokoll autorisieren.
2. **Freiheit im Design:** Es gibt keinen feste Anleitung für die Erstellung eines Relayers. Wenn Sie vorhaben, einen zu erstellen, entscheiden Sie, ob er eigenständig sein wird oder Teil des Batch Relayers.
3. **Benutzer-Ebene Autorisierung:** Benutzer können wählen, ob sie eine einmalige Genehmigung per Unterschrift oder eine anhaltende per Transaktion geben möchten.
4. P**rotokoll-Ebene Autorisierung:** Hier legt das autorisierende Organ des Protokolls (wie die Jellyverse DAO) fest, welche Aktionen der Relayer ausführen kann und auf welchen Smart Contracts.
5. **Batch Relayer:** Dieser spezielle Relayer ermöglicht es, dass mehrere Aktionen miteinander verknüpft und zusammen ausgeführt werden, was zu einem reibungsloseren Benutzererlebnis führt.

**Warum Relayers verwenden?**

1. **Effizienz**: Benutzer können komplexe Vorgänge mit nur einer einzigen Transaktion ausführen.
2. **Flexibilität**: Relayers können sich an verschiedene Aufgaben anpassen, von einfachen Trades bis zu komplexen Migrationen zwischen Pools.
3. **Sicherheit**: Obwohl Relayers im Auftrag eines Benutzers handeln können, stellen integrierte Autorisierungen sicher, dass Missbrauch vermieden wird.

**Ein praktisches Anwendungsbeispiel:** Die Pool-Migration innerhalb JellySwap's zielt darauf ab, den Liquiditätsanbietern (LPs) eine optimale Kapitaleffizienz zu bieten. Deshalb führte es die Möglichkeit ein, von einem älteren Pool zu einem kapitaleffizienteren zu wechseln. Anstatt manuell eine Reihe von Schritten zur Migration zwischen Pools durchzugehen, kann ein Relayer sie alle in eine reibungslose Transaktion kombinieren.

Im Wesentlichen machen Relayers im JellySwap-Umfeld Prozesse rationalisierter, effizienter und benutzerfreundlicher, während sie sicherstellen, dass die Sicherheit an oberster Stelle steht.

# Smart Order Router (SOR)

Stell dir vor, du hättest einen persönlichen Assistenten, der für dich einkaufen geht und Preise in verschiedenen Geschäften vergleicht, um dir das beste Angebot zu machen. Das macht im Grunde genommen der Smart Order Router für jegliche Trades auf JellySwap.

**Wie funktioniert es?**

1. **Optimale Preissuche:** Immer wenn du Tokens tauschen möchtest, schaut sich der SOR alle verfügbaren JellySwap-Pools an, um den besten Preis für dich zu finden.
2. **Einzelner oder mehrere Pools:** Manchmal könnte der beste Preis in einem einzigen Pool liegen. Zu anderen Zeiten könnte es notwendig sein, deinen Trade über mehrere Pools zu leiten, um den größtmöglichen Wert zu erhalten.
3. **Automatische Entscheidung:** Der SOR trifft diese Entscheidungen automatisch. Es ist so, als hättest du ein GPS für deine Trades, das jedes Mal den besten Weg findet.

# JellyStake

Übersicht

## Was ist JellyStake?

JellyStake fungiert als entscheidende Brücke im Jellyverse-Ökosystem und ermöglicht es sowohl Nutzern als auch Teilnehmern, sich an **dezentraler Entscheidungsfindung (Governance)** zu beteiligen und gleichzeitig ein Fundament für die gesamte wirtschaftliche Struktur von Jellyverse zu schaffen. Mit JellyStake haben Staker die Möglichkeit, **einen Anteil an den Protokolleinnahmen zu verdienen**, die im gesamten Spektrum der Protokolle innerhalb Jellyverse generiert werden.

## Einnahmensammlung und Verteilung im Jellyverse

Um die Dezentralisierung der Abstimmungsbefugnis zu bewahren, eine nachhaltige Wirtschaft zu fördern und die Nutzer zu motivieren sich gemeinsam an der DAO-Verwaltung zu beteiligen, wird ein Teil der gesamten im Ökosystem erzielten Einnahmen den JLY-Stakern zugewiesen. Dieser Ansatz ist unerlässlich, um sicherzustellen, dass das Halten von JLY-Tokens und die aktive Teilnahme an der Governance attraktiv bleibt.

Die Nutzer, die aktiv Wert zum Ökosystem beitragen, indem sie verschiedenen Protokollen wie JellySwap, jAssets, JellyBond und anderen Liquidität zur Verfügung stellen, erhalten als Belohnung JLY-Tokens.

In einem zweiten Schritt kann JLY dann innerhalb des Staking-Protokolls genutzt werden, um die Zukunft der DAO mitzugestalten und einen Anteil an den Protokollgebühren im gesamten Ökosystem zu verdienen. Dementsprechend werden frühe Mitwirkende mehr Belohnungen erhalten und damit das zusätzliche Risiko kompensiert bekommen, das sie eingehen.

JellyStake legt das Fundament für ein widerstandsfähiges Ökosystem und bietet Beitragenden einen dauerhaften finanziellen Anreiz, sich langfristig zu engagieren und von den wachsenden Handelsvolumina im Ökosystem zu profitieren, anstatt sich auf spekulative Aktivitäten auf dem offenen Markt zu verlassen.

-> Mehr dazu in den [Tokenomics](/german/jellyverse-architecture/tokenomics)

## Governance&#x20;

Die Governance von Jellyverse basiert auf dem JLY-Token. Diese Struktur ist für eine dezentrale Organisation wie Jellyverse von entscheidender Bedeutung, um sicherzustellen, dass die Interessen einzelner Nutzer mit den Zielen der DAO übereinstimmen. Die Verwendung eines anderen Tokens anstelle des eigenen der Organisation könnte zu Entscheidungen führen, die die Wirtschaft dieses Tokens gegenüber der Gesundheit der gesamten Jellyverse-Wirtschaft priorisieren.

-> Erfahre mehr über das [Governance-System](/german/jellyverse-architecture/governance)[ von Jellyverse](/german/jellyverse-architecture/governance)

# Staking Chests

### Was sind Staking Chests?

Jellyverse führt eine spannende Neuerung beim Staking ein. Anders als traditionelle Systeme, die Nutzer auf eine einzelne Staking-Position beschränken, können hier Nutzer mehrere Positionen erstellen, die jeweils als Staking-Truhen(Chests) dargestellt werden. Jede dieser Truhen gibt Nutzern die Flexibilität, eine bestimmte Menge an JLY-Token einzuzahlen, abzuheben oder zu freezen.

Aus technischer Sicht werden Staking-Positionen als NFTs (Nicht-fungible Tokens) verkörpert. Diese NFTs speichern wichtige Parameter wie Staking-Balance, Zeitstempel, Freezingdauer und andere für das Staking relevante Elemente direkt auf der Blockchain.

Stell dir das vor wie eine Quittung für den Einstieg in den Staking-Prozess. Sie ermöglichen es den Nutzern, ihre Staking-Positionen einfach zu verwalten, was besonders wertvoll wird, wenn Nutzer einen bestimmten Teil ihrer JLY-Bestände freezen möchten, um ihren Abstimmungseinfluss und ihre jährliche Prozentrendite (APR) zu erhöhen.

### **Gefrorene Truhen**

Um am Staking teilzunehmen, müssen mindestens 1000 $JLY eingezahlt und für mindestens 7 Tage und maximal 3 Jahre eingefroren werden.

Eine gefrorene Truhe ermöglicht es Benutzern, die sich langfristig an der Abstimmungs- und Governance-Prozesse von Jellyverse beteiligen möchten, eine erhöhte Stimmkraft und einen erhöhten jährlichen Prozentsatz (APR) zu erhalten. Die gefrorene Truhe erlaubt (oder verbietet) die folgenden Aktionen:

&#x20; • JLY hinzufügen, ohne die verbleibende Freezing-Zeit zu beeinflussen

&#x20; • JLY kann nicht entfernt werden

&#x20; • Bietet erhöhte Stimmkraft und APR

Die verbleibende Freezing-Zeit wird zu ihrem nominalen Wert betrachtet, was zu einer abnehmenden Stimmkraft und einer Verringerung des APR-Bonus führt, je weiter die Zeit fortschreitet. Einfach ausgedrückt, Benutzer mit der längsten verbleibenden Einfrierzeit erhalten den größten Anreiz, wenn sie sich entscheiden, ihre Vermögenswerte erneut einzufrieren.&#x20;

### Bewertung der verbleibenden Freezing-Zeit

Wie bereits erwähnt, erhalten Benutzer einen höheren APR- und Stimmkraft-Bonus, wenn sie sich entscheiden, ihre Position für längere Zeiträume einzufrieren.&#x20;

# Voting power

## Was sind "Stimmen" (Votes)?

Anders als das allgemein bekannte Vote-Escrow-Modell, das es Nutzern ermöglicht, für jeden gestakten TOKEN veTOKEN zu erhalten, verknüpft unser System die Abstimmungsmacht direkt mit jeder Truhe. Daher zeigt jede Truhe die Anzahl der Stimmen an, die ein Nutzer einem Governance-Proposal zuweisen kann.

Dieser Ansatz macht die Ausgabe eines sekundären Tokens überflüssig, ermöglicht es, langfristiges Engagement (längere Freezingperiode) mit mehr Abstimmungsmacht zu belohnen und den verbleibenden Freezingzeitraum zum nominalen Wert zu bewerten.

Nutzer können ihre Abstimmungsmacht erhöhen, indem sie ihre Freezingperiode verlängern oder mehr JLY in die Truhe legen.

# jAssets von BLKSWN

Das jAsset-Protokoll ist ein Community-Projekt, das noch nicht von der Jellyverse DAO bestätigt wurde.

## Übersicht

jAssets ist eine kollateralisierte Schuldenplattform. Benutzer können Kollateral (bestimmte ERC20-Token, die durch die Governance ausgewählt wurden) hinterlegen und jAssets (jUSD, jAAPL, jTSLA, etc.) an ihre eigene Adresse ausgeben und anschließend diese Token an jede andere Adresse übertragen. Die einzelnen kollateralisierten Schuldpositionen werden als Troves bezeichnet. Die jAssets sind wirtschaftlich darauf ausgelegt, ihren zugrunde liegenden Oracle-Wert (Peg) aufgrund der folgenden Eigenschaften zu halten:

- Das System ist darauf ausgelegt, immer über-kollateralisiert zu sein – das bedeutet, dass der Dollarwert des hinterlegten Kollaterals den Dollarwert der ausgegebenen jAssets übersteigt.
- Der jUSD ist vollständig einlösbar – Benutzer können $x in jUSD gegen $x in Kollateral-Token (abzüglich Gebühren) direkt mit dem System jederzeit tauschen.

Nach dem Öffnen eines Troves können Benutzer Token ausgeben ("leihen"), sodass das Kollateralisierungsverhältnis ihres Troves über ihrem individuellen Mindestkollateralisierungsverhältnis (IMCR) bleibt. Das IMCR wird basierend auf dem Kollateral des Troves berechnet, beträgt jedoch mindestens 110 %.

Die Token sind frei austauschbar – jeder mit einer EVM-Adresse kann jAsset-Token senden oder empfangen, unabhängig davon, ob er einen offenen Trove hat oder nicht. Die Token werden bei der Rückzahlung der Schulden eines Troves verbrannt.

Das jAsset-System verwendet Preisfeeds vom dezentralisierten pyth.network Oracle-Anbieter. Wenn ein Trove unter sein IMCR fällt, wird er als unterkollateralisiert angesehen und ist anfällig für Liquidation.

## Oracle

Apollon nutzt [pyth.network](http://pyth.network/) als dezentralen Oracle-Anbieter. Die aktuellen Preise werden vom Kunden bei Pyth angefragt und an die Vertragsmutationen weitergegeben. Diese aktualisieren wiederum die Oracles über eine Pyth-Schnittstelle. Folglich zahlt der Benutzer die Gasgebühr, die für die Oracle-Aktualisierung anfällt.

Nachdem die Oracles aktualisiert wurden, erstellt der PriceFeed einen Preisspeicher-Cache. Dieser Cache enthält die Preise aller relevanten Tokens und wird während der Ausführung verwendet. Dieses Schema wurde implementiert, um den Gasverbrauch zu optimieren, indem sichergestellt wird, dass jeder Preis nicht mehr als einmal pro Ausführung aus dem Pyth-Speicher angefordert wird.

Wenn der letzte Preis-Update eines Tokens älter als 5 Minuten ist, wird der Preis-Feed als unzuverlässig markiert. In diesem Zustand wird das Minten neuer Schulden deaktiviert. Es sind nur Funktionen erlaubt, die das Total Collateralization Ratio (TCR) erhöhen und somit das System entlasten. Zusätzlich gibt es ein Fallback auf einen zweiten Preis-Feed, der direkt von der Governance in das Protokoll geschrieben wird. Dieses Fallback soll die Vor- und Nachhandelszeiten abdecken, in denen [pyth.network](http://pyth.network/) möglicherweise noch keine Preise liefert, der Handel an der NASDAQ jedoch bereits begonnen hat.

## Benutzeroberfläche

Die Benutzeroberfläche ist bewusst so gestaltet, dass sie der Struktur einer zentralen Börse sehr ähnlich ist. Das Eröffnen von Positionen, ob Long oder Short, sowie das Bereitstellen von Liquidität werden als "One-Click-Lösung" angeboten. Das System ist so konzipiert, dass die Interaktion mit der Blockchain im Hintergrund abläuft, sodass der Benutzer nur die Transaktionsbestätigungen durchführen muss. Darüber hinaus bietet das jAsset-System vertraute Werkzeuge für die Chartanalyse, die es den Nutzern ermöglichen, auf Basis der technischen Analyse Investitionsentscheidungen zu treffen. Die Benutzeroberfläche enthält wichtige Informationen, wie die Überversicherung des eigenen Vaults oder den aktuellen Orakelpreis der jAssets im Vergleich zu ihrem gehandelten Preis auf der DEX.

{% embed url="<https://youtu.be/M2YS1mR-k8Q>" %}

## Liquiditätsmanagement

Ein erheblicher Teil der Interaktionen innerhalb des jAsset-Systems erfolgt über den Vault. Nach Bereitstellung von Sicherheiten ermöglicht der Vault die Erstellung von jAssets oder einem Stablecoin (als jUSD bezeichnet), um auf dezentrale Vermögenswerte zuzugreifen. Dies bietet dem Benutzer die Möglichkeit:

- Liquidität in den Pools bereitzustellen und dadurch von den generierten Gebühren und Pool-Belohnungen zu profitieren. Im Kontext von DeFi wird diese Art der Liquiditätsbereitstellung oft als "Liquidity Mining" bezeichnet.
- Eine Long- oder Short-Position für das jAsset zu eröffnen und somit auf die Preisbewegung des Vermögenswertes zu spekulieren.

Ein einzigartiges Merkmal des jAsset-Systems ist, dass sowohl Sicherheiten als auch Schulden aus mehreren Vermögenswerten bestehen können. Zum Beispiel ist es möglich, Kryptowährungen wie BTC oder ETH zusammen mit einem Stablecoin im Vault als Sicherheiten zu hinterlegen und dadurch eine Long-Position für ein jAsset zu erstellen. Auf diese Weise kann ein Benutzer an der Wertsteigerung der Kryptowährung teilnehmen und gleichzeitig von der Preisbewegung des jAssets profitieren. Dies ermöglicht die Umsetzung verschiedener Anlagestrategien, wie z.B. Hebelwirkung oder das Aufbauen von Hedge-Positionen.

Wenn das Sicherheitenverhältnis unter 110 % fällt, wird der Vault liquidiert. Stabilitätspools werden als primärer Mechanismus zur Sicherung des Systems während der Liquidation verwendet. Wenn dieser Pool leer oder unzureichend finanziert ist, gibt es einen systemweiten Stabilitätspool als zusätzliche Sicherheit. Eine weitere Sicherheitsmaßnahme ist die Umverteilung von Vermögenswerten unter allen Vaultinhabern. Weitere Details werden in Kürze verfügbar sein.

Im Falle des Stablecoins können Rückkäufe durchgeführt werden, um den Preis des Stablecoins im Falle eines Preisabschlags in Richtung des Pegs (1 $) zu bewegen.

## Preisentwicklung

Um sicherzustellen, dass die Preise von jAssets die Preise realer Vermögenswerte widerspiegeln, sind verschiedene harte und weiche Kopplungsmechanismen vorhanden. Diese Mechanismen bieten Anreize, eine Gegenposition aufzubauen, falls ein Premium oder Discount vorliegt, sodass das jAsset idealerweise den realen Preis widerspiegelt.

### Premium

- Aufgrund des 110% Sicherheitenverhältnisses ist das Premium auf 110 % begrenzt. Wenn ein jAsset mit einem Premium von mehr als 10 % gekauft wird, haben Benutzer die Möglichkeit, von diesem hohen Premium zu profitieren. Zum Beispiel, wenn das Premium 15 % beträgt, könnte ein Benutzer Sicherheiten in einem Vault hinterlegen und eine Short-Position in diesem Vermögenswert eröffnen. Dies würde das Premium verringern. Nach dem Tausch wäre die Rendite des Benutzers höher als die im Vault hinterlegte Sicherheit. Selbst wenn der Vault anschließend liquidiert wird, gibt es einen Gewinn für die Person, die das Premium durch den Verkauf des jAssets minimiert hat.
- Sobald ein bestimmtes Premium-Niveau erreicht ist (die genaue Formel wird in der technischen Dokumentation veröffentlicht), wird die Gebühr für das Eröffnen zusätzlicher Long-Positionen erhöht. Dadurch wird es zunehmend unattraktiver, weiterhin gegen den aktuellen Orakelpreis mit einem steigenden Premium zu wetten.

### Discount

- Ähnlich wie bei der Prämie steigt die Gebühr für den Verkauf des Vermögenswerts, sobald er ein bestimmtes Discountniveau erreicht.

## Einlösungen (Redemptions)

Eine Redemption ist ein Mechanismus, der zum Tragen kommt, wenn jUSD mit einem Discount gehandelt wird. In diesem Prozess zahlt der Einlöser die jUSD-Schulden eines anderen Vaults zurück und erhält im Gegenzug die im Vault hinterlegten Sicherheiten zum jeweiligen Gegenwert. Werden im Vault verschiedene Token als Sicherheiten verwendet, werden diese gleichmäßig verteilt. Der Einlöser muss eine Gebühr bezahlen, die dynamisch vom Zeitraum seit dem letzten Stablecoin-Minting abhängt und mindestens 0,5 % der Sicherheit beträgt. Der Vault, aus dem die Redemption erfolgt, erleidet keinen Verlust, aber es kommt zu einer Verschiebung der Vermögenswerte im Portfolio.

Die Vaults werden nach PICR (Passive Collateral Ratio) sortiert, um die Reihenfolge der Redemptions zu bestimmen. Der Vault mit dem niedrigsten PICR wird zuerst redeemed. Der PICR stellt das Collateral-Verhältnis der letzten Interaktion (Minting, Rückzahlung, Aktualisierung der Sicherheiten) mit dem Vault dar.

&#x20;

# Liquidation und der Stability Pool

jAssets verwenden einen zweistufigen Liquidationsmechanismus in folgender Prioritätsreihenfolge:

1. Unter-kollateralisierte Vaults werden gegen den Stability Pool, der jAsset-Token enthält, aufgerechnet.
2. Falls der Stability Pool erschöpft ist, werden unter-kollateralisierte Vaults auf andere Kreditnehmer umverteilt.

\\

Das jAsset-Protokoll verwendet in erster Linie die jAsset-Token im Stability Pool, um unter-kollateralisierte Schulden zu absorbieren, d.h. die Verbindlichkeiten des liquidierten Kreditnehmers zu tilgen.

Jeder Benutzer kann jAsset-Token in den Stability Pool einzahlen. Dies ermöglicht es ihnen, das Kollateral aus dem liquidierten Vault zu verdienen. Wenn eine Liquidation erfolgt, wird die liquidierte Schuld mit der gleichen Menge und Art von jAssets aus dem Pool beglichen (welche dabei verbrannt werden), und das liquidierte Kollateral wird proportional an die Einleger verteilt.

Einleger im Stability Pool können erwarten, Nettogewinne aus Liquidationen zu erzielen, da in den meisten Fällen der Wert des liquidierten Kollaterals größer ist als der Wert der stornierten Schuld (da ein liquidierter Vault wahrscheinlich einen ICR knapp unter 110 % aufweist).

Wenn die liquidierte Schuld höher ist als die verfügbare Menge an jAssets im Stability Pool, versucht das System, so viel Schuld wie möglich mit den Token im Stability Pool zu tilgen, und verteilt das verbleibende liquidierte Kollateral und die verbleibende Schuld auf alle aktiven Vaults.

Jeder kann die öffentliche Funktion batchLiquidateTroves() mit einer benutzerdefinierten Liste von unter-kollateralisierte Vault-Adressen aufrufen, um eine Liquidation zu versuchen.

\\

# Liquidationslogik

Das genaue Verhalten von Liquidationen hängt vom anfänglichen Kollateralisierungsverhältnis (ICR) des zu liquidierenden Vaults und den globalen Systembedingungen ab: dem gesamten Kollateralisierungsverhältnis (TCR) des Systems, der Größe des Stability Pools, usw.\\

| ICR > TCR    | Nicht liquidierbar.                                                                                                                                                                                                                                                                                                                                                                    |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ICICR < IMCR | Versuch, die Liquidation über die Stability Pools auszugleichen und den verbleibenden Teil umzuverteilen.                                                                                                                                                                                                                                                                              |
| ICR ≥ IMCR   | <p>Normal Mode: Nicht liquidierbar.<br>Recovery Mode: Versuch, die Liquidation über die Stability Pools auszugleichen und den verbleibenden Teil umzuverteilen, jedoch nur ein Bruchteil (IMCR \* USD-Wert der Schuld) des Kollaterals des Vaults wird liquidiert. Der restliche Teil wird in den CollSurplusPool übertragen, von wo aus der Vault-Besitzer ihn beanspruchen kann.</p> |

Einleger im Stability Pool erhalten über die Zeit Kollateral-Token, da liquidierte Schulden mit ihrer Einlage verrechnet werden. Wenn sie ihre eingezahlten jAssets teilweise oder vollständig abheben oder ihre Einlage aufstocken, sendet das System ihnen ihre angesammelten Kollateralgewinne.

Ähnlich werden die angesammelten Gewinne eines Vaults aus Liquidationen automatisch auf den Vault angewendet, wenn der Besitzer eine Operation durchführt – z. B. das Hinzufügen/Abheben von Kollateral oder das Ausgeben/Rückzahlen von jAssets.

\\

# Recovery Mode

Der Recovery Mode tritt in Kraft, wenn das gesamte Kollateralisierungsverhältnis (TCR) des Systems unter 130 % fällt.

Während des Recovery Mode werden die Liquidationsbedingungen gelockert, und das System blockiert Transaktionen von Kreditnehmern, die das TCR weiter senken würden. Neue Schulden können nur durch Anpassung bestehender Vaults ausgegeben werden, wenn dies ihr ICR verbessert, oder durch das Eröffnen eines neuen Vaults mit einem ICR von ≥130 %. Generell gilt: Wenn eine Anpassung eines bestehenden Vaults das ICR senkt, wird die Transaktion nur ausgeführt, wenn das resultierende TCR über 130 % liegt.

Der Recovery Mode ist so strukturiert, dass er Kreditnehmer dazu anregt, das TCR schnell wieder über 130 % zu heben, und Schuldinhaber dazu motiviert, den Stability Pool wieder aufzufüllen.

Ökonomisch gesehen ist der Recovery Mode darauf ausgelegt, Kollateralaufstockungen und Schuldenrückzahlungen zu fördern. Er wirkt auch als selbstregulierendes Abschreckungsmittel: Die Möglichkeit seines Eintretens führt das System tendenziell davon weg, diesen Zustand überhaupt zu erreichen.

\\

# jUSD Redemption

Jeder Inhaber von jUSD (unabhängig davon, ob er einen aktiven Vault hat) kann sein jUSD direkt beim System einlösen. Sein jUSD wird zum Nennwert gegen Kollateral eingetauscht: Die Einlösung von x jUSD-Token liefert $x an Kollateral-Token zurück (abzüglich einer Redemption-Gebühr). Einlösungen sind nur für den jUSD-Token aktiviert, nicht für andere jAssets.

Wenn jUSD gegen Kollateral eingelöst wird, storniert das System den jUSD durch die Verrechnung mit den Schulden in den Vaults, und das Kollateral wird aus diesen Vaults entnommen.

Falls der Vault unterschiedliche Kollateral-Token verwendet, werden diese entsprechend ihrer aktuellen Dollar-Bewertung gleichmäßig verwendet. Das bedeutet, dass sich das Verhältnis zwischen den verschiedenen Token nicht ändert. Nur Kollateral-Token, die nicht vom Protokoll selbst ausgegeben wurden (≠ jAssets), werden zur Einlösung verwendet.

Um die Einlösungsanfrage zu erfüllen, werden Vaults in aufsteigender Reihenfolge ihres letzten aktiven Kollateralisierungsverhältnisses (LACR) eingelöst. Das LACR ist das ICR des Vaults zum Zeitpunkt der letzten Operation des Vault-Besitzers.

**Redemptions schaffen eine Preisuntergrenze**

Ökonomisch schafft der Redemption-Mechanismus eine feste Preisuntergrenze für jUSD, die sicherstellt, dass der Marktpreis bei oder nahe $1 USD bleibt.

Redemptions werden blockiert, wenn das TCR < 110 % fällt. Bei einem so niedrigen TCR wäre eine Einlösung wahrscheinlich unrentabel, da jUSD vermutlich über $1 gehandelt wird, falls das System so stark abgestürzt ist. Dennoch könnte dies eine Möglichkeit für einen Angreifer mit einer großen Menge an jUSD sein, das TCR weiter zu senken.

\
\\

# Erwartete Nutzerverhalten

Im Allgemeinen rufen Kreditnehmer Funktionen auf, die Vault-Operationen für ihren eigenen Vault auslösen. Benutzer des Stability Pools (die auch Kreditnehmer sein können oder nicht) rufen Funktionen auf, die Stability Pool-Operationen auslösen, wie das Einzahlen oder Abheben von Token aus dem Stability Pool.

Jeder kann die öffentlichen Liquidationsfunktionen aufrufen und versuchen, einen oder mehrere Vaults zu liquidieren.

Inhaber von jUSD-Token können ihre Token auch einlösen und eine Menge an Token im Wert von 1:1 (abzüglich Gebühren) gegen Kollateral eintauschen.

Liquiditätsanbieter im Swap Pool prägen entweder neue jAssets aus ihrem Vault oder hinterlegen sie direkt aus ihrem Bestand.

\
**DEX vs Oracle Preisunterschiede**

| Priceunterschied  | Optionen                                                                                                                                                                                                                                                                                                                      |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 110% Premium      | <p>Short-Position eröffnen + Vault-Liquidation: $1100 Kollateral in einem Trove. $1000 Short-Position (Asset-Prägung + DEX-Verkauf).</p><p>$1100 stabiler Ertrag. Der Vault ist nicht mehr relevant und kann liquidiert werden. Gewinn: Differenz zwischen 1 und 3 (eine Prämie von 112 % führt zu einem Gewinn von 2 %).</p> |
| ≤ 110%            | Alle Vaults sind mindestens zu 110 % kollateralisiert. Daher sind Kreditgeber bereit, bis zu 110 % zu zahlen, um ihre Schulden zurückzukaufen und ihr Kollateral zurückzuziehen.                                                                                                                                              |
| Stablecoin < 100% | **Redemption**: Benutzer können ihre Stablecoins verwenden, um die Schulden anderer Kreditgeber zu tilgen und das Kollateral als Belohnung zu erhalten, mit einer Bewertung von $1 pro Coin.                                                                                                                                  |

# Core Smart Contracts

- **BorrowerOperations.sol:** Enthält die grundlegenden Operationen, mit denen Kreditnehmer mit ihrem Vault interagieren: Vault-Erstellung, Kollateralaufstockung/-abhebung, Schuldenrückzahlung. Es sendet auch Ausgabegebühren an den Governance-Vertrag. Die Funktionen in BorrowerOperations rufen TroveManager auf, um den Trove-Status zu aktualisieren, falls erforderlich. Sie interagieren auch mit den verschiedenen Pools, um Tokens zwischen Pools oder zwischen Pool und Nutzer zu bewegen.
- **TroveManager.sol:** Verzeichnet den Status jedes Vaults, d. h. das Kollateral und die Schulden eines Vaults. Er speichert auch den Einsatz des Troves und die damit verbundenen Belohnungen durch Umverteilung. Es werden keine Werte (Tokens) im TroveManager selbst gehalten. Funktionen des TroveManagers interagieren mit verschiedenen Pools, um Tokens bei Bedarf zu verschieben.
- **LiquidationOperations.sol:** Verfügt über keinen eigenen Zustand oder Token-Bestand, arbeitet jedoch mit dem TroveManager und StabilityPoolManager zusammen, um Vaults bei Bedarf zu liquidieren.
- **StabilityPool.sol:** Bietet Funktionen für Stability Pool-Operationen: Einzahlungen tätigen und zusammengefasste Einlagen sowie angesammelte Kollateralgewinne abheben. Dieser Pool hält die jAsset-Einlagen sowie die Kollateralgewinne der Einleger, die durch Liquidationen entstehen. Es gibt einen StabilityPool für jeden jAsset-Token.
- **StabilityPoolManager.sol:** Verfolgt alle Stability Pools und fungiert als Verteiler zwischen ihnen und den LiquidationOperations.
- **ReservePool.sol:** Hält jUSD und JLY als Reserveentschädigung. Wird durch BorrowerOperations gefüllt und stellt Tokens für unter-kollateralisierte Liquidationen bereit.
- **CollSurplusPool.sol:** Hält das Kollateralüberschuss aus Vaults, die im Recovery Mode liquidiert wurden. Gibt den Überschuss an den jeweiligen Kreditnehmer zurück, wenn dieser es beansprucht.
- **RedemptionOperations.sol:** Verwendet den Status des TroveManagers und der SortedTroves, um Redemptions durchzuführen. Dabei werden jUSD (Schulden) verbrannt und Kollateral aus dem StoragePool an den Einlöser ausgezahlt. Redemption-Gebühren werden an den Governance-Vertrag übertragen.
- **SortedTroves.sol:** Eine doppelt verknüpfte Liste, die die Adressen der Vault-Besitzer speichert, sortiert nach ihrem LACR. Vaults werden basierend auf ihrem ICR an der korrekten Position eingefügt oder neu eingefügt, sobald ein Vault-Besitzer seinen Vault aktualisiert.
- **HintHelpers.sol:** Ein Hilfsvertrag, der nur Leseoperationen zur Berechnung genauer Hinweise für Vault-Operationen bereitstellt, die erforderlich sind, um den Vault in die sortierte Liste (SortedList) (wieder-)einzufügen.
- **DebtToken.sol:** Der jAsset-Token-Vertrag, der den ERC20-Standard für fungible Tokens zusammen mit EIP-2612 implementiert. Enthält einen Mechanismus, der versehentliche Transfers an Adressen wie den StabilityPool oder address(0) blockiert. Der Vertrag prägt, verbrennt und überträgt jAsset-Token.
- **TokenManager.sol:** Enthält eine Liste von Schuldtokens (DebtToken) und Kollateral-Token (ERC20), die dem System zur Verfügung stehen. Er ermöglicht der Governance, Tokens in das System einzuführen.
- **StoragePool.sol:** Hält den gesamten Kollateralbestand und zeichnet die Gesamtschulden der Vaults auf. Er trennt die Vermögenswerte zwischen:
  - Aktive Vermögenswerte gesunder Vaults.
  - Default-Vermögenswerte liquidierter Vaults, die auf aktive Vault umverteilt werden sollen. Wenn ein Vault ausstehende Schulden-"Belohnungen" hat, werden diese auf den Vault angewendet, wenn er das nächste Mal eine Kreditnehmeroperation, eine Redemption oder eine Liquidation durchläuft.
  - jUSD Gas Compensation als Liquidationsreserve. jUSD wird gespeichert, wenn ein Vault eröffnet wird, und freigegeben, wenn ein Vault liquidiert oder geschlossen wird.
  - Nicht zugewiesene Vermögenswerte aus einer Umverteilung, bei der der letzte Vault eines Kollateraltyps liquidiert wurde. Diese können von jedem beansprucht werden.
- **SwapPair.sol:** Swap-Pool-Vertrag. Hält die Liquidität eines Swap-Paares. Berechnet die dynamische Swap-Gebühr basierend auf der Reserve (Pool-Preis) und dem Oracle-Unterschied.
- **SwapOps.sol:** Verwaltet Swap-Paare und fungiert als Routing-Anbieter zwischen ihnen. Es bietet dem Kreditnehmer die Schnittstelle für die Schuldenaufnahme, die von BorrowerOperations unterstützt wird.
- **PriceFeed.sol:** Enthält Funktionen zum Abrufen des aktuellen Oracle-Preises, den das System zur Berechnung der Kollateralisierungsverhältnisse verwendet.

# PriceFeed und Oracle

Das jAsset-Protokoll verwendet das Pyth Network als dezentralen Oracle-Anbieter. Die aktuellen Preise werden von Pyth durch den Client abgerufen und dann an die Vertragsmutationen weitergeleitet, welche die Oracles über eine Pyth-Schnittstelle aktualisieren. Der Benutzer übernimmt die Gasgebühr für das Oracle-Update.

Nach der Aktualisierung der Oracles erstellt der PriceFeed einen temporären Preisspeicher. Dieser Speicher enthält die Preise aller relevanten Token und wird während der Ausführung verwendet. Dieses Schema optimiert den Gasverbrauch, indem sichergestellt wird, dass jeder Preis pro Ausführung höchstens einmal aus dem Pyth-Speicher abgerufen wird.

Wenn das letzte Update eines Token-Preises älter als 5 Minuten ist, wird der Preisfeed als nicht vertrauenswürdig markiert. In diesem Zustand wird das Prägen neuer Schulden deaktiviert, und nur Funktionen, die das gesamte Kollateralisierungsverhältnis (TCR) erhöhen und somit das Systemrisiko verringern, sind zulässig. Zusätzlich gibt es eine Fallback-Lösung zu einem sekundären Preisfeed, der direkt von der Governance in das Protokoll eingespeist wird. Dieser sekundäre Feed soll die Vor- und Nachhandelszeiten abdecken, während derer das Pyth Network möglicherweise noch keine Preise bereitstellt, der Handel an der NASDAQ jedoch bereits begonnen hat.

\\

# Contract Ownership und Funktionserlaubnisse

Alle Kern-Smart-Contracts im jAssets-Protokoll erben von der OpenZeppelin-Vorlage Ownable.sol. Dadurch hat jeder Vertrag eine einzelne Besitzeradresse, die die Adresse des Deployers ist. Die Vertragsbesitzrechte werden entweder bei der Bereitstellung oder unmittelbar nach dem Aufruf der Address-Setter-Funktion aufgegeben, wodurch der Vertrag mit dem restlichen jAsset-Kernsystem verbunden wird. In einigen Fällen wird das Eigentum an den Governance-Vertrag von Jellyverse übertragen, um zukünftige Anpassungen zu ermöglichen. Weitere Einzelheiten hierzu finden sich im Governance-Abschnitt.

Mehrere öffentliche und externe Funktionen enthalten Modifikatoren wie requireCallerIsTroveManager, requireCallerIsStoragePool usw., die sicherstellen, dass diese Funktionen nur von den jeweils berechtigten Verträgen aufgerufen werden können.

\\

# Sortierte Liste von Vaults nach LACR

Das jAsset-Protokoll verwendet eine spezielle Datenstruktur in Form einer sortierten doppelt verknüpften Liste von Vaults, die nach dem Last Active Collateralization Ratio (LACR) geordnet bleibt. Das LACR wird als der Betrag des Kollaterals in USD geteilt durch den Schuldenbetrag in USD zum Zeitpunkt der letzten Aktualisierung durch den Kreditnehmer berechnet.

Diese geordnete Liste ist entscheidend für eine effiziente Gasnutzung während Einlösungsprozessen, da sie es ermöglicht, Vaults in aufsteigender Reihenfolge ihrer Individual Collateralization Ratios (ICR) zu priorisieren.

Die Implementierung dieser sortierten doppelt verknüpften Liste befindet sich in SortedTroves.sol.

Jeder Knoten in dieser Liste entspricht einem aktiven Vault im System, der durch die Adresse des Besitzers identifiziert wird. Die Liste unterstützt Positionshinweise für eine effiziente O(1)-Einfügung, die im Abschnitt HintHelper genauer beschrieben wird.

Zusätzlich speichert jede Node das LACR des Vaults zum Zeitpunkt seiner Einfügung in die Liste.

Die Entscheidung, Vaults nach LACR statt nach ICR zu sortieren, beruht darauf, dass jeder Vault unterschiedliche Anteile an verschiedenen Kollateral-Token halten kann. Änderungen in den Token-Preisen beeinflussen die individuellen Kollateralisierungsverhältnisse unterschiedlich, was es unpraktisch macht, eine sortierte Liste ausschließlich basierend auf dem ICR zu führen.

Nodes werden nur dann erneut in die sortierte Liste eingefügt, wenn eine Vault-Operation durchgeführt wird – wie das Hinzufügen oder Entfernen von Kollateral oder Schulden aus der Position.

\\

# Bereitstellung von Hinweisen für Vault-Operationen

Alle Vault-Operationen, die das Kollateralisierungsverhältnis ändern, erfordern das Einfügen oder Wiedereinfügen in die `SortedTroves`Liste. Um Gasgebühren und die Rechenkomplexität beim Einfügen zu optimieren, können zwei Hinweise (Hints) bereitgestellt werden.

Ein Hinweis ist die Adresse eines Vaults, die sich in der Nähe der korrekten Einfügeposition in der sortierten Liste befindet. Vault-Operationen verwenden zwei Hinweis-Argumente: `_lowerHint`, das auf `nextId` verweist, und `_upperHint`, das auf `prevId` verweist—die beiden angrenzenden Knoten, die Nachbarn des zu bearbeitenden Vaults sind (oder werden). Diese Methode gewährleistet Widerstandsfähigkeit gegenüber Änderungen in benachbarten Vaults, bevor die Transaktion verarbeitet wird.

Die Wirksamkeit eines Hinweises reduziert die Gasgebühren erheblich, da der erforderliche Listendurchlauf minimiert wird. Die Funktion `SortedList::findInsertPosition(...)`, die während Vault-Operationen aufgerufen wird, überprüft zuerst, ob `_prevId` gültig ist (mit einem größeren LACR als der einzufügende Vault) und steigt die Liste von dort aus ab. Wenn dies nicht erfolgreich ist, wird `_nextId` (mit einem kleineren LACR) überprüft und aufsteigend durchsucht.

Um nützliche Hinweise zu generieren, wählt die Funktion `HintHelpers::getApproxHint(...)` zufällig Vaults aus und gibt denjenigen zurück, der der Zielposition am nächsten liegt. Mathematisch wird mit `numTrials = k * sqrt(n)`, wobei `n` die Listengröße ist, der Gasverbrauch typischerweise auf `O(sqrt(n))` reduziert, wenn `k >= 10`. Diese Funktion akzeptiert auch einen zufälligen Seed (`_inputRandomSeed`), um bei aufeinanderfolgenden Aufrufen unterschiedliche Ergebnisse zu erzielen und die Genauigkeit der Annäherung zu verbessern.

#### Vault-Operation ohne Hinweis

1. Der Benutzer startet eine Vault-Operation in seinem Browser.
2. Die Operation wird mit `_lowerHint = _upperHint = userAddress` aufgerufen.
3. Gasgebühr im schlimmsten Fall: `O(n)`, wobei `n` die Größe der `SortedTroves`-Liste ist.

#### Vault-Operation mit Hinweisen

1. Der Benutzer startet eine Vault-Operation in seinem Browser.
2. Das Frontend berechnet lokal ein neues Kollateralisierungsverhältnis basierend auf den Änderungen am Kollateral und/oder den Schulden.
3. `HintHelpers::getApproxHint(...)` wird mit dem berechneten Verhältnis aufgerufen, und es wird eine Vault-Adresse zurückgegeben, die sich nahe der richtigen Einfügeposition befindet.
4. `SortedTroves::findInsertPosition(...`) wird mit dem ungefähren Hinweis (`_prevId` und `_nextId`) und dem neuen Verhältnis aufgerufen.
5. Die genauen Nachbarn (`_nextId` als `_lowerHint` und `_prevId` als `_upperHint`) werden der Vault-Operation übergeben.
6. Gasgebühren: Die Schritte 2-4 sind gasfrei, und Schritt 5 kostet `O(1)`.

Durch die Verwendung von Hinweisen werden Vault-Operationen für Benutzer günstiger, allerdings mit einer geringfügig längeren Ausführungszeit, da die Ergebnisse von JSON-RPC-Anfragen (z. B. an Infura) abgewartet werden müssen, es sei denn, der Frontend-Betreiber betreibt eine Full Node.

\\

\\
