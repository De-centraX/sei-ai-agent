# Oxium

# Audits

Oxium is an open-source protocol that has been rigorously audited by the highly reputable and expert firm, ChainSecurity and Nethermind, ensuring the utmost security and reliability.

Oxium has been thoroughly audited. You will find here official reports of the audits we passed:

### Oxium core​ <a href="#mangrove-core" id="mangrove-core"></a>

| Version                                                                                                                                                           | Auditor       | Date    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------- |
| [V0](<https://github.com/mangrovedao/audits/blob/main/core/v0/ChainSecurity_Mangrove_Association_(ADDMA)_Mangrove_audit-c7a5bd87cc411539606ff9082bb5c8a1.pdf>)    | ChainSecurity | 03/2023 |
| [V1](https://github.com/mangrovedao/audits/blob/main/core/v1/ChainSecurity_Mangrove_Association_ADDMA_Mangrove_Core_audit_2-d3425cee36b3dad60bfac272af328fd4.pdf) | ChainSecurity | 11/2023 |

### Strategies

| Version                                                                                                                                                                                               | Auditor       | Date    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------- |
| [V0](https://github.com/mangrovedao/audits/blob/main/strats/v0/ChainSecurity_Mangrove_Association_ADDMA_MangroveOrder_audit-7e289d0c705233f1d69d419d7689cab5.pdf)                                     | ChainSecurity | 03/2023 |
| [V1](https://github.com/mangrovedao/audits/blob/main/strats/v1/ChainSecurity_Mangrove_Association_Mangrove_Strategies_audit-caa8fc55eadb26bf40eead2b80af0c99.pdf)                                     | ChainSecurity | 11/2023 |
| [Amplifier & Routing](https://github.com/mangrovedao/audits/blob/main/strats/v1/2024-02-14-NM-0162-Nethermind_SmartRouter_MangroveOrder_MangroveAmplifier_audit-26ca97c4578d39c3ca4cb82ae7a0f374.pdf) | Nethermind    | 02/2024 |
| [UniV3 & Orbit Routers](https://github.com/mangrovedao/audits/blob/main/strats/v1/NM0208_FINAL_MANGROVE-684a6582cd4f3a18a25feeed05fb5482.pdf)                                                         | Nethermind    | 03/2024 |

### Kandel <a href="#kandel" id="kandel"></a>

| Version                                                                                                                                                           | Auditor       | Date    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------- |
| [V0](https://github.com/mangrovedao/audits/blob/main/strats/v0/ChainSecurity_Mangrove_Association_ADDMA_Kandel_Strats_audit-db1b0f4516874f622d2a7f5bc7837f7c.pdf) | ChainSecurity | 04/2023 |

### Vaults

| Version                                                                                       | Auditor    | Date    |
| --------------------------------------------------------------------------------------------- | ---------- | ------- |
| [V0](https://github.com/mangrovedao/audits/blob/main/vaults/NM_0339_Mangrove_Vault_FINAL.pdf) | Nethermind | 10/2024 |

Note:

- Oxium core and Strategies each have two distinct audits, which are complementary to each other.
- MangroveOrder is a peripheral contract for the Oxium core protocol which allows users to submit limit orders such as:
  - Good-til-cancelled (GTC, or GTT)
  - Fill-or-kill (FOK)
- Kandel is "buy low, sell high" market making strategy that leverages Oxium core protocol.

# Terms of Service

### **Disclaimer and Exclusion of Warranties**

Oxium is a decentralized Web3 service that provides technical tools exclusively for experienced users who are capable of understanding the risks inherent in blockchain technology, smart contracts, and decentralized financial services. Oxium, its founders, administrators, developers, and all partners and collaborators expressly disclaim any and all liability, whether direct or indirect, for any loss, damage, or harm, whether material or immaterial, resulting from the use of its services, access to its interfaces, or reliance on any information made available on its website or associated applications.

By using Oxium and any associated strategies, including the Kandel strategy, you acknowledge that you assume all risks and confirm that you have the necessary knowledge and understanding of blockchain technology, tokens, and the decentralized financial environment. You understand that Oxium does not act as an intermediary, agent, fiduciary, or custodian, and you alone are responsible for your use of the services and for the security of your private keys and wallets.

### **1. Legal Compliance and Jurisdiction**

It is solely your responsibility to ensure that your use of our services complies with the laws, regulations, and legal requirements applicable in your jurisdiction. Oxium is not intended for use, directly or indirectly, by any person or entity located in a jurisdiction where the use of blockchain-based services, decentralized exchanges (DEX), or decentralized financial (DeFi) products is prohibited or restricted. This includes, but is not limited to, any person or entity located in the United States of America (including all its territories and possessions), as well as any other jurisdiction or territory subject to economic or trade sanctions imposed by the U.S. Department of the Treasury’s Office of Foreign Assets Control (OFAC), the European Union, or any other relevant authority. Prohibited jurisdictions include, but are not limited to, North Korea, Iran, Syria, Sudan, Crimea, Donbass, Cuba, and any other country or region subject to similar embargoes or sanctions.

You must not use VPNs or other means to circumvent these restrictions. By using our services, you represent and warrant that:

- You are not a citizen or resident of, or located in, any prohibited or embargoed jurisdiction.
- You are not listed on any government sanctions list, such as the OFAC Specially Designated Nationals (SDN) List or any similar list maintained by a competent authority.
- You are not acting for the benefit of, or on behalf of, any person or entity in such jurisdictions or subject to such restrictions.
- You will not use our services to violate or circumvent any applicable laws, regulations, or economic and trade sanctions.

Oxium reserves the right, at any time and in its sole discretion, to restrict or block access to its services to any person or entity that it determines may violate applicable legal or regulatory requirements or that may pose a risk to the integrity or security of its services.

By using our services, you confirm that you are not subject to any legal or regulatory restrictions that would prohibit you from accessing or using the services provided by Oxium. You understand and agree that failure to comply with these requirements may result in the immediate suspension or termination of your access to the services, without notice or compensation.

### **2. Economic and Market Risks**

As a user of the Kandel strategy and other services provided by Oxium, you understand and accept that you are exposed to economic risks, including but not limited to:

- Partial or total loss of the tokens used.
- Partial or total loss of the value of the tokens used.
- Extreme market volatility.
- Insolvency of third-party platforms or companies.
- Lack of liquidity and the impossibility of reselling tokens on markets.

You are solely responsible for verifying that you are legally allowed to hold and use the crypto-assets you acquire, as well as for any taxes, duties, or assessments associated with your use of the services.

### **3. Impermanent Loss**

Kandel operates as a passive market-making strategy, generating profit from the spread between bids and asks. However, impermanent loss can occur in scenarios where market prices move significantly. For example, if the current price of an ETH/USDC pair rises and exceeds the maximum price range of your strategy, your remaining bids may no longer match the market price, stopping any profit generation and potentially leading to a partial or total loss.

### **4. Smart Contract and Technological Risks**

You acknowledge that even though the Kandel strategy has been implemented by an experienced team of researchers and developers and has been thoroughly audited by ChainSecurity, using Kandel and Oxium’s services entails technological and security risks, including but not limited to:

- Security errors or failures that allow and/or result in hacking, theft, or unauthorized access to user, third-party platform, or website/app data.
- The theft or loss of your external wallet’s private key or your access to third-party platforms.
- Risks inherent to the blockchains used for the strategy, including but not limited to successful attacks by hackers, criminal groups, organizations, or countries (such as denial-of-service attacks, Sybil attacks, spoofing, smurfing, malware attacks, consensus-based attacks, phishing, or other methods known or unknown).
- Lack of transparency in crypto asset management and markets.
- The irreversible nature of blockchain transactions; once executed, transactions cannot be reversed or refunded by Oxium, third parties, or blockchain validators.

### **5. Third-Party Services and Wallets**

Oxium is not responsible for any third-party tools, wallets, or services you use to access our services, including but not limited to wallet providers such as MetaMask, Coinbase Wallet, or Ledger. You are solely responsible for ensuring the security of your private keys and wallets, and any compromise of these may result in the loss of your assets.

Oxium also disclaims any responsibility for damages caused by third-party services or external links made available through the Oxium interface. Use of such services is at your own risk and may be governed by separate terms of use.

### **6. No Warranties and Limitation of Liability**

Oxium makes no representations or warranties, express or implied, regarding the reliability, accuracy, timeliness, security, or availability of its services. All services and content are provided on an “as is” and “as available” basis, without any representation or warranty of any kind. No information, advice, or data obtained through Oxium or the Kandel strategy shall constitute a warranty or binding commitment of Oxium, nor shall it establish any contractual, tort, or other legal liability.

Oxium shall not, under any circumstances, be liable for any losses, damages, or disputes arising from the use of, or inability to use, its services or the Kandel strategy, whether in contract, tort, strict liability, or any other legal theory. This exclusion of liability includes, but is not limited to, direct, indirect, incidental, consequential, punitive, special, or exemplary damages, even if Oxium has been advised of the possibility of such damages.

### **7. Intellectual Property**

All rights, titles, and interests in and to the services and all related content, code, data, and materials remain the exclusive property of Oxium or its licensors. You may not reproduce, imitate, or use any Oxium intellectual property without prior written authorization.

### **8. Modifications and Updates**

Oxium reserves the right to modify, suspend, or discontinue any part of its services at any time, for any reason, without notice and without liability. It is your responsibility to review the Terms of Service periodically to remain informed of any updates.

### **9. Acknowledgment and Acceptance of Risks**

By accessing or using our services and the Kandel strategy, you confirm that you have read, understood, and accepted the entirety of these Terms of Service, including the associated risks and limitations. You agree that your sole and exclusive remedy for any dispute with Oxium is to discontinue use of our services.

# Privacy policy

### Privacy Policy – Oxium

#### 1. Introduction

Oxium is a decentralized finance (DeFi) protocol that respects your privacy and is committed to protecting your personal data. This Privacy Policy describes how we collect, use, store, and protect your information when you use our services, websites, and applications (collectively, the “Services”).

---

#### 2. Data We Collect

**Public Blockchain Data**

When you connect your non-custodial wallet to our Services, we collect and log your publicly-available blockchain address. These addresses are public data, not created or assigned by us or any central authority, and are not personally identifying on their own.

**Technical Information**

We may collect technical information such as browser type, operating system, referring and exit pages, browser or device language, and similar data. This information helps us improve the user experience and detect any illicit activity.

**Tracking Technologies**

We and our third-party service providers may access and collect information from technologies such as cookies, localStorage, mobile device identifiers, web beacons, and other similar technologies to provide and personalize the Services and their features for you across sessions.

**Direct Communications**

When you contact us via email, social media, or other support channels like Twitter, Discord, or Telegram, or participate in surveys or questionnaires, we receive the information and communications you share. We do not attempt to link this information to your wallet address, IP address, or other personal details.

**Job Applications**

If you apply for a position with us, we collect all information you provide through our application form, including your name, email address, phone number, professional and immigration status, and any other documents such as your CV, cover letter, or freeform text you include.

---

#### 3. Use of Data

The information we collect is used in accordance with our Terms of Use and legal requirements. We may use this information to:

- Provide, maintain, personalize, and improve our Services and their features.
- Provide user support and respond to your requests regarding the Services.
- Protect against, investigate, and stop any fraudulent, unauthorized, or illegal activity.
- Comply with our legal and regulatory obligations.
- Process your job application and contact you throughout the recruitment process.

---

#### 4. Data Sharing

We do not share your information with third parties for marketing purposes. However, we may share or disclose the data we collect in the following situations:

- With staff or members of our organization.
- With regulators, government entities, and law enforcement to comply with our legal obligations.
- With service providers and vendors who may assist us in providing, delivering, and improving the Services (e.g., hosting provider, mailing provider, external recruitment platforms, etc.).

---

#### 5. Your Rights

In accordance with the General Data Protection Regulation (GDPR), you have the following rights regarding your personal data:

- Right to be informed: you have the right to be informed about how your personal data is collected and used.
- Right of access: you can request access to your personal data that we hold.
- Right to rectification: you can request the correction of inaccurate or incomplete personal data.
- Right to erasure: you can request the deletion of your personal data.
- Right to restrict processing: you can request the restriction of processing of your personal data in certain circumstances.
- Right to data portability: you can request to receive your personal data in a structured, commonly used, and machine-readable format.
- Right to object: you can object to the processing of your personal data in certain circumstances.
- Right to withdraw consent: where processing is based on your consent, you can withdraw it at any time.
- Right to file a complaint: you have the right to lodge a complaint with the competent data protection authority.

To exercise these rights, please contact us at: \[your contact email address].

---

#### 6. Data Retention

We retain your personal data only as long as necessary for the purposes for which it was collected, to provide our Services, resolve disputes, enforce our agreements, and comply with legal obligations. This period may vary depending on the nature of the data and the reasons for collecting it, considering the purposes described in this Privacy Policy and our own legal and regulatory requirements.

---

#### 7. Security

We take reasonable steps to protect your personal data from misuse, loss, unauthorized access, modification, or disclosure, including implementing appropriate security measures. Security measures in place will be reviewed from time to time in line with legal and technical developments. However, we cannot guarantee that such misuse, loss, unauthorized access, modification, or disclosure will not occur. You are responsible for all your activities on the Services, including the security of your blockchain network addresses, cryptocurrency wallets, and their cryptographic keys.

---

#### 8. Links

Our Services may contain links to other websites and resources provided by third parties. This Privacy Policy applies only to our Services. Accessing those third-party websites or resources requires you to leave our Services. We do not control those third-party sites or any of the content contained therein, and you agree that we are in no circumstances responsible or liable for any of those third-party sites, including, without limitation, their content, policies, failures, promotions, products, services, or actions and/or any damages, losses, failures, or problems caused by, related to, or arising from those sites. We encourage you to review all policies, rules, terms, and regulations, including the privacy policies, of each site you visit.

---

#### 9. Changes to the Policy

We may modify this Privacy Policy at any time, particularly to comply with any regulatory, case law, editorial, or technical changes. These modifications will apply as of the effective date of the modified version.

If we change this Privacy Policy, we will take steps to notify all users via a notice on our Site and will post the amended Privacy Policy on the Site. Please regularly review the latest version of this Privacy Policy.
