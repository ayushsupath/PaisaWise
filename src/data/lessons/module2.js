/** @type {import('./types').Lesson[]} */
export const module2Lessons = [
  {
    id: 'm2-t1',
    slug: 'money-market-meaning-role',
    moduleId: 2,
    moduleTitle: 'The Money Market',
    category: 'money-market',
    title: 'Money Market: Meaning and Role',
    difficulty: 'Beginner',
    definition:
      'The money market is the part of finance where governments, banks, and other institutions borrow or invest for short periods, generally up to a year. Its instruments help participants manage temporary cash needs and liquidity.',
    whyItMatters:
      'A company’s short-term borrowing may appear in business news, while banks use this market to manage daily cash positions. Its rates can also influence the broader cost of short-term funds, even though most students do not trade these instruments directly.',
    characteristics: [
      'It focuses on short-term borrowing and investing rather than long-term ownership finance.',
      'Instruments include Treasury bills, commercial paper, commercial bills, certificates of deposit, call money, and repos.',
      'Banks, governments, companies, mutual funds, and other institutions participate under applicable rules.',
      'A borrower’s credit quality, instrument design, and market liquidity affect its funding cost.',
      'Money markets help financial institutions manage day-to-day liquidity and payment obligations.',
      'The market supports monetary-policy transmission, but its rates can move for several reasons.',
      'For current eligibility, issuance, and market rules, check rbi.org.in and other relevant official sources.',
    ],
    example:
      'Illustrative example only: Ritu, a junior finance assistant at a fictional food company in Nagpur, tracks ₹5,00,000 in customer payments expected next month while suppliers need payment this week. She asks the company’s bank about short-term funding and compares the cost with delaying an equipment purchase. At the same time, a bank with temporary surplus funds may invest in an eligible short-term instrument rather than leave cash unused. Neither choice is automatically risk-free: the company must repay, and the bank must assess the instrument and its issuer. This is the money market’s practical role—helping institutions bridge timing gaps and place short-term funds. The figures describe a classroom situation, not a current rate or offer.',
    rememberThis:
      'Money markets handle short-term funds. Institutions use them to bridge cash timing gaps. Instrument, issuer, and liquidity shape risk. Check current RBI rules before using specific details.',
    mcqs: [
      {
        question: 'What is the main purpose of the money market?',
        options: ['To support short-term borrowing and liquidity management', 'To provide permanent ownership in a company', 'To finance only household shopping', 'To set every bank’s retail loan rate directly'],
        correctIndex: 0,
        explanation: 'Money-market instruments help institutions borrow, lend, or invest for short periods and manage liquidity.',
      },
      {
        question: 'A company has a temporary cash gap before customer payments arrive. Which market is most relevant to its short-term funding need?',
        options: ['Residential property market', 'Money market', 'Labour market', 'Art market'],
        correctIndex: 1,
        explanation: 'The money market is designed for short-term borrowing and investment, which can help bridge a timing gap.',
      },
      {
        question: 'Which statement about money-market risk is most accurate?',
        options: ['Every instrument is guaranteed by the government', 'Short maturity means there is no risk', 'Risk depends in part on the issuer and instrument terms', 'Only individual students participate'],
        correctIndex: 2,
        explanation: 'A short maturity does not remove credit or liquidity risk; the issuer and instrument structure matter.',
      },
    ],
  },
  {
    id: 'm2-t2',
    slug: 'segments-money-market',
    moduleId: 2,
    moduleTitle: 'The Money Market',
    category: 'money-market',
    title: 'Segments of the Money Market',
    difficulty: 'Beginner',
    definition:
      'The money market has connected segments organised around different instruments and funding needs. Each segment has its own issuers, participants, contract structure, and risks.',
    whyItMatters:
      'When a company’s short-term borrowing appears in the news, knowing the segment helps you identify who borrowed, from whom, and on what kind of promise. It also makes terms such as T-bill, CP, CD, and repo easier to distinguish.',
    characteristics: [
      'Treasury bills are short-term government securities issued at a discount to face value.',
      'Commercial paper is an unsecured short-term borrowing instrument issued by eligible companies and institutions.',
      'Commercial bills connect financing with a trade transaction and a future payment obligation.',
      'Certificates of deposit are time-bound deposit instruments issued by eligible institutions.',
      'Call money supports very short-term, typically overnight, borrowing and lending among eligible participants.',
      'Repo transactions provide short-term funds against securities under an agreement to reverse the transaction.',
      'For current instrument eligibility and rules, verify details at rbi.org.in and other relevant official sites.',
    ],
    example:
      'Illustrative example only: Aditi, a business intern in Delhi, reads that fictional company Seva Foods must pay a supplier before a large customer invoice is settled. It could explore eligible commercial paper if it qualifies and investors accept its credit risk. A bank with surplus cash might instead buy a government T-bill, while another bank could borrow overnight in call money to meet a temporary settlement need. These are not interchangeable contracts: the issuer, security, payment promise, and maturity differ. A financial-news report that says “short-term funding” is therefore incomplete until you identify the segment. The examples and amounts are fictional; actual access and terms depend on current rules and market conditions.',
    rememberThis:
      'Learn each segment by issuer, investor, instrument, and repayment promise. T-bills, CP, bills, CDs, call money, and repo differ. Segments connect through short-term funding needs. Verify current rules officially.',
    mcqs: [
      {
        question: 'Which instrument is issued by the Government of India as short-term borrowing?',
        options: ['Commercial paper', 'Certificate of deposit', 'Treasury bill', 'Commercial invoice'],
        correctIndex: 2,
        explanation: 'A Treasury bill is a short-term government security; the other choices represent different instruments or documents.',
      },
      {
        question: 'A bank borrows overnight from another eligible participant to cover a short cash need. Which segment is most directly involved?',
        options: ['Call money', 'Equity market', 'Housing market', 'Insurance market'],
        correctIndex: 0,
        explanation: 'Call money is a very short-term segment used by eligible institutions to manage temporary funding needs.',
      },
      {
        question: 'Why should a learner distinguish CP from a T-bill?',
        options: ['They are always issued by the same borrower', 'They both represent company shares', 'They have identical credit backing', 'Their issuers and credit risks differ'],
        correctIndex: 3,
        explanation: 'A T-bill is a government security, while CP is an issuer’s short-term unsecured borrowing; their credit exposure is not identical.',
      },
    ],
  },
  {
    id: 'm2-t3',
    slug: 'participants-money-market',
    moduleId: 2,
    moduleTitle: 'The Money Market',
    category: 'money-market',
    title: 'Participants in the Money Market',
    difficulty: 'Beginner',
    definition:
      'Money-market participants are institutions that issue, buy, sell, borrow, or lend short-term instruments. Which participants may transact depends on the instrument and the rules that apply.',
    whyItMatters:
      'A first-jobber reading that a company issued CP should ask who issued it and which institutions bought it. That question reveals how businesses obtain short-term funds and why a student’s indirect investment is different from direct market participation.',
    characteristics: [
      'The central government issues Treasury bills to help meet its financing needs.',
      'Banks issue some instruments, invest surplus cash, and borrow to manage liquidity.',
      'Eligible companies and financial institutions may issue CP for short-term funding.',
      'Mutual funds and other institutional investors may invest for their schemes within applicable mandates.',
      'Primary dealers support government-securities auctions and trading as authorised market participants.',
      'RBI oversees relevant parts of the market and uses liquidity operations for monetary purposes.',
      'Participation, eligibility, and limits can change; check current official RBI material.',
    ],
    example:
      'Illustrative example only: Isha, a new analyst in Chennai, reads that a fictional manufacturer issued ₹2 crore of CP to pay for inventory before its sales season. A bank and an institutional fund are among the fictional investors, each assessing the issuer and maturity before committing funds. Separately, a primary dealer participates in government-securities activity, while RBI’s actions influence market liquidity. Isha does not become a direct CP investor simply because she holds units in a fund; the fund acts under its own mandate and discloses its holdings and risks. The example maps roles rather than promising any return, and the amount is not a current issuance rule.',
    rememberThis:
      'Issuers raise short-term funds; investors supply them. Banks can both borrow and invest. Institutions participate under instrument-specific rules. A fund investor is not the same as a direct issuer or trader.',
    mcqs: [
      {
        question: 'Who may be a money-market participant, depending on the instrument and applicable rules?',
        options: ['Only individual college students', 'Banks, governments, eligible companies, and institutional investors', 'Only stock exchanges', 'Only overseas central banks'],
        correctIndex: 1,
        explanation: 'The market is mainly institutional, with different entities taking part in different instruments under relevant rules.',
      },
      {
        question: 'A mutual fund buys short-term instruments for its scheme. Who makes the investment decision?',
        options: ['Each unit holder placing a separate order for every instrument', 'The issuing company’s customers', 'The fund acting within its mandate', 'The college attended by the unit holders'],
        correctIndex: 2,
        explanation: 'The fund is the direct market participant for those holdings; unit holders own units in the scheme under its disclosed terms.',
      },
      {
        question: 'Which statement best describes a bank’s role in money markets?',
        options: ['A bank can only issue shares', 'A bank can only act as a regulator', 'A bank is never allowed to invest', 'A bank may borrow, lend, issue instruments, or invest depending on its role and rules'],
        correctIndex: 3,
        explanation: 'Banks have several possible roles in short-term markets, subject to the instrument and applicable regulations.',
      },
    ],
  },
  {
    id: 'm2-t4',
    slug: 'treasury-bill-market',
    moduleId: 2,
    moduleTitle: 'The Money Market',
    category: 'money-market',
    title: 'Treasury Bill Market',
    difficulty: 'Intermediate',
    definition:
      'A Treasury bill (T-bill) is a short-term government security issued below its face value and redeemed at face value on maturity. The difference between the purchase price and face value is the investor’s gross discount return.',
    whyItMatters:
      'T-bills help the government manage short-term funding and provide a reference point in money markets. Understanding face value, discount, and maturity also helps students interpret financial news without confusing a discount instrument with an interest-paying deposit.',
    characteristics: [
      'The Government of India issues T-bills through an auction process managed by RBI.',
      'A T-bill is a discount instrument: it is issued below face value and pays face value at maturity.',
      'Face value is the amount due at maturity; the purchase price is lower in a discount issue.',
      'The holding period ends on the stated maturity date, unless the holder sells earlier in the secondary market.',
      'A sale before maturity can produce a price gain or loss as market yields change.',
      'T-bills carry sovereign credit exposure, but an early sale still has market-price risk.',
      'Check rbi.org.in for current auction calendars, available maturities, and operating rules.',
    ],
    example:
      'Illustrative example only: In a fictional classroom auction, Dev pays ₹98,000 for a T-bill with a face value of ₹1,00,000 and a stated maturity date 90 days later. If he holds it until that date and the government pays as promised, he receives ₹1,00,000. The ₹2,000 difference is the gross discount return before considering taxes, transaction costs, or the time value of money. If Dev sells before maturity, the market price may be above or below his purchase price. The 90-day period and all amounts are fictional, not a current issue tenor or promised return. Verify live auction details with RBI.',
    rememberThis:
      'T-bill means short-term government security. It is bought at a discount and redeemed at face value. Maturity and early-sale price are different ideas. Confirm current auction details with RBI.',
    mcqs: [
      {
        question: 'How does an investor typically earn the gross return on a discount T-bill held to maturity?',
        options: ['By receiving face value above the lower purchase price', 'By receiving company dividends', 'By converting it into an insurance policy', 'By having the purchase price returned with a separate monthly coupon'],
        correctIndex: 0,
        explanation: 'For a discount T-bill held to maturity, the difference between the lower purchase price and face value is the gross discount return.',
      },
      {
        question: 'In the fictional example, a T-bill is bought for ₹98,000 and pays ₹1,00,000 at maturity. What is the gross difference?',
        options: ['₹98,000', '₹2,000', '₹1,00,000', '₹1,98,000'],
        correctIndex: 1,
        explanation: 'Subtracting the ₹98,000 purchase price from ₹1,00,000 face value gives a ₹2,000 gross difference, before costs and taxes.',
      },
      {
        question: 'What can happen if a holder sells a T-bill before maturity?',
        options: ['Its face value must rise', 'It becomes a bank deposit', 'The sale price may be above or below the purchase price', 'The original maturity is automatically cancelled for all holders'],
        correctIndex: 2,
        explanation: 'Secondary-market prices can change with yields and demand, so an early sale may realise a gain or a loss.',
      },
    ],
  },
  {
    id: 'm2-t5',
    slug: 'commercial-paper',
    moduleId: 2,
    moduleTitle: 'The Money Market',
    category: 'money-market',
    title: 'Commercial Paper (CP)',
    difficulty: 'Intermediate',
    definition:
      'Commercial paper (CP) is an unsecured short-term debt instrument issued by eligible companies or financial institutions to raise funds. “Unsecured” means it is not backed by a specific pledged asset; investors rely on the issuer’s ability to pay.',
    whyItMatters:
      'A company may use CP to cover working-capital needs instead of relying only on a bank loan. When you see a CP issue reported, remember that it is company borrowing—not a government guarantee or a share in the company.',
    characteristics: [
      'CP represents a repayment obligation of the issuer, not ownership like an equity share.',
      'It is unsecured, so the issuer’s credit quality and ability to repay matter.',
      'CP is issued for short-term funding and may be structured at a discount or with a stated return.',
      'Eligible companies and financial institutions issue CP subject to current RBI requirements.',
      'Banks, mutual funds, and other permitted institutional investors may invest in CP.',
      'An investor may face credit and liquidity risk if the issuer cannot pay or resale is difficult.',
      'Check rbi.org.in for current issuer eligibility, issue procedures, and maturity rules.',
    ],
    example:
      'Illustrative example only: Priya, a finance trainee at a fictional Pune packaging company, helps review a CP issue with a face value of ₹5,00,000 to cover a temporary raw-material bill. An institutional investor pays ₹4,90,000 for the discount instrument. If the company repays the full face value on the agreed fictional maturity date, the gross difference is ₹10,000 before costs and taxes. Unlike a T-bill, this promise comes from the company, not the Government of India. The investor therefore studies the issuer’s finances and payment capacity. The issue amount, price, and date are classroom numbers only; they are not a current minimum, tenor, or return.',
    rememberThis:
      'CP is short-term company borrowing. It is unsecured, not a share, and not government-guaranteed. Issuer credit matters. Check current eligibility and issue rules at RBI.',
    mcqs: [
      {
        question: 'What does “unsecured” mean when describing commercial paper?',
        options: ['It has no repayment date', 'It is backed by a specific pledged asset', 'It is not backed by a specific pledged asset', 'It is guaranteed by every bank'],
        correctIndex: 2,
        explanation: 'Unsecured CP does not rely on a specific pledged asset, so an investor must consider the issuer’s creditworthiness.',
      },
      {
        question: 'A company issues CP to fund inventory. What does the investor hold?',
        options: ['A short-term debt claim on the issuer', 'Ownership shares in the company', 'A government tax receipt', 'A personal deposit account at the issuer'],
        correctIndex: 0,
        explanation: 'CP is a debt instrument: the issuer promises repayment under its terms. It does not give the investor company ownership.',
      },
      {
        question: 'In the fictional example, an investor pays ₹4,90,000 and receives ₹5,00,000 at maturity. What is the gross difference?',
        options: ['₹4,90,000', '₹5,00,000', '₹9,90,000', '₹10,000'],
        correctIndex: 3,
        explanation: 'The gross difference is ₹5,00,000 minus ₹4,90,000, or ₹10,000, before costs and taxes.',
      },
    ],
  },
  {
    id: 'm2-t6',
    slug: 'commercial-bills',
    moduleId: 2,
    moduleTitle: 'The Money Market',
    category: 'money-market',
    title: 'Commercial Bills',
    difficulty: 'Intermediate',
    definition:
      'A commercial bill is a written payment instrument linked to a genuine sale of goods or services, with payment due at a later date. When accepted by the buyer, it records a clear obligation that may be financed before maturity.',
    whyItMatters:
      'A supplier may deliver goods to a business that will pay after several weeks. Bill finance can help the supplier receive money sooner, which matters to small firms managing wages and inventory while customers follow agreed payment terms.',
    characteristics: [
      'A commercial bill arises from an underlying trade transaction rather than being a general-purpose company promise.',
      'The seller draws the bill and the buyer accepts the payment obligation under agreed terms.',
      'A bank or other eligible financier may discount an accepted bill and pay the seller before maturity.',
      'Discounting provides earlier cash; the financier collects the amount due according to the bill’s terms.',
      'The transaction’s documents and the buyer’s creditworthiness affect whether financing is available.',
      'Non-payment at maturity can create credit and legal recovery issues for the parties.',
      'Check current RBI guidance and applicable law for permitted bill-financing arrangements.',
    ],
    example:
      'Illustrative example only: Rohan, a young owner of a fictional Jaipur stationery wholesale shop, supplies notebooks worth ₹50,000 to a college canteen, which agrees to pay in 60 days and accepts a bill. Rohan needs cash sooner to pay his paper supplier, so a financier agrees to pay ₹49,000 now after reviewing the trade documents and buyer risk. If the bill is honoured, the financier collects ₹50,000 on its fictional due date; the ₹1,000 difference is the discount in this simplified example. If the buyer does not pay, the parties may face recourse and recovery questions under their agreement. The amounts and timing are fictional, not a standard rate or term.',
    rememberThis:
      'A commercial bill links finance to a real trade and later payment. Acceptance records the buyer’s obligation. Discounting gives the seller earlier cash. Verify documents and current rules.',
    mcqs: [
      {
        question: 'What is the defining link in a commercial bill?',
        options: ['A government budget announcement', 'A genuine trade transaction and a later payment obligation', 'Ownership in a listed company', 'A student’s monthly allowance'],
        correctIndex: 1,
        explanation: 'A commercial bill is connected to a sale and the buyer’s promise to pay later, unlike a general-purpose share or allowance.',
      },
      {
        question: 'Why might a supplier discount an accepted commercial bill?',
        options: ['To obtain cash before the buyer’s payment date', 'To turn the bill into company equity', 'To remove all buyer credit risk', 'To change the original sale into a government grant'],
        correctIndex: 0,
        explanation: 'Discounting lets the supplier receive funds sooner, though the financier still considers the transaction and payment risk.',
      },
      {
        question: 'In the fictional example, the financier pays ₹49,000 against ₹50,000 due. What is the simplified discount?',
        options: ['₹49,000', '₹50,000', '₹1,000', '₹99,000'],
        correctIndex: 2,
        explanation: 'The simplified difference is ₹50,000 minus ₹49,000, which equals ₹1,000 before other costs or legal terms.',
      },
    ],
  },
  {
    id: 'm2-t7',
    slug: 'certificate-of-deposit',
    moduleId: 2,
    moduleTitle: 'The Money Market',
    category: 'money-market',
    title: 'Certificate of Deposit (CD)',
    difficulty: 'Intermediate',
    definition:
      'A Certificate of Deposit (CD) is a negotiable, time-bound money-market instrument issued by an eligible bank or financial institution to raise funds. Its terms specify the amount, return structure, and maturity under applicable rules.',
    whyItMatters:
      'A CD helps explain how institutions obtain short-term funds from investors. It is different from a student’s ordinary savings account: a CD has defined terms, and an early sale or transfer may depend on its structure and market conditions.',
    characteristics: [
      'A CD is a debt instrument, not ownership in the issuing bank or institution.',
      'It is issued by an eligible institution under applicable RBI requirements.',
      'The instrument sets a maturity date and may use a discount or stated-return structure.',
      'Some CDs can be negotiable, allowing transfer or secondary-market trading subject to rules.',
      'The issuer’s ability to repay and the instrument’s liquidity are relevant risks.',
      'A CD should not be confused with every retail fixed deposit or a demand-deposit account.',
      'Check rbi.org.in for current issuer eligibility, permitted terms, and operating requirements.',
    ],
    example:
      'Illustrative example only: Varun, a young treasury analyst, reviews a fictional bank’s CD issued to fund short-term lending. It has a face value of ₹2,00,000 and matures several fictional months later. In this discount illustration, an institutional investor pays ₹1,96,000 and receives ₹2,00,000 at maturity: a gross difference of ₹4,000 before costs and taxes. Varun records the maturity rather than treating the CD like savings-account cash. If it is negotiable, an early sale may be possible, but the price and availability depend on the market and current rules. Credit quality matters too. The amount and period are fictional, not a current minimum or tenor.',
    rememberThis:
      'A CD is a time-bound debt instrument from an eligible issuer. It is not a share or an ordinary demand account. Maturity and liquidity matter. Verify current rules with RBI.',
    mcqs: [
      {
        question: 'What does a Certificate of Deposit represent?',
        options: ['A negotiable, time-bound debt instrument issued by an eligible institution', 'Ownership in the issuing bank', 'A payment card for a student', 'A government tax refund'],
        correctIndex: 0,
        explanation: 'A CD is a debt instrument with defined terms and maturity; it does not give its holder ownership in the issuer.',
      },
      {
        question: 'A student assumes every CD can be withdrawn like a savings account. What is the main correction?',
        options: ['A CD is always an equity share', 'A CD has set terms and early access or sale depends on its structure and rules', 'A CD has no issuer', 'A CD never has a maturity date'],
        correctIndex: 1,
        explanation: 'A CD is time-bound. Whether it can be transferred or sold before maturity depends on the instrument and applicable rules.',
      },
      {
        question: 'Which risk should an investor consider for a CD?',
        options: ['Only the risk of a company dividend changing', 'Only the weather on maturity day', 'The issuer’s ability to repay and the instrument’s liquidity', 'Whether the instrument gives voting rights'],
        correctIndex: 2,
        explanation: 'Credit risk and the ability to sell or transfer the instrument are important considerations for a debt instrument.',
      },
    ],
  },
  {
    id: 'm2-t8',
    slug: 'call-money-market',
    moduleId: 2,
    moduleTitle: 'The Money Market',
    category: 'money-market',
    title: 'Call Money Market',
    difficulty: 'Intermediate',
    definition:
      'The call money market is a segment where eligible institutions lend and borrow funds for a very short period, commonly overnight. It helps participants handle temporary liquidity needs and payment obligations.',
    whyItMatters:
      'Banks must settle payments even when cash inflows and outflows do not arrive at the same time. Call money provides a market-based way for eligible institutions to manage short gaps, while its rates can reflect changing liquidity conditions.',
    characteristics: [
      'Transactions are very short-term; call money commonly refers to overnight borrowing and lending.',
      'Participation is limited to eligible institutions under current market rules.',
      'The borrowing institution agrees to repay principal and the applicable interest for the period.',
      'Call money is generally unsecured, so participants manage counterparty and settlement risk.',
      'Demand and supply of funds influence the rate, which can move as market liquidity changes.',
      'Call money is distinct from longer-term interbank borrowing and secured repo transactions.',
      'Check rbi.org.in for current participants, market arrangements, and applicable rules.',
    ],
    example:
      'Illustrative example only: Asha, a junior treasury officer at a fictional Ahmedabad bank, sees that a large payment will clear tomorrow but the bank is short ₹10 crore tonight. Another eligible bank has temporary surplus funds. They agree to a one-night, unsecured call-money loan at a fictional annualised rate of 6%. Using a simple 365-day illustration, the interest is ₹10,00,00,000 × 0.06 × 1/365, or about ₹16,438 before settlement conventions and costs. The borrowing bank repays the principal and calculated interest the next day. All participants, amounts, and the rate are fictional; this is a calculation lesson, not a current rate or eligible-participant list.',
    rememberThis:
      'Call money helps eligible institutions manage very short cash gaps. It is commonly overnight and usually unsecured. Rate and counterparty risk matter. Check the latest RBI market rules.',
    mcqs: [
      {
        question: 'What is call money mainly used for?',
        options: ['Long-term home loans', 'Overnight or very short-term liquidity between eligible institutions', 'Buying company ownership', 'Paying a student’s tuition directly'],
        correctIndex: 1,
        explanation: 'Call money is a very short-term funding segment used by eligible institutions to manage liquidity.',
      },
      {
        question: 'In the fictional calculation, what does ₹10 crore × 6% × 1/365 estimate?',
        options: ['The one-day interest before conventions and costs', 'The bank’s annual profit', 'The face value of a T-bill', 'The amount of principal forgiven'],
        correctIndex: 0,
        explanation: 'Principal multiplied by the annualised rate and one day’s fraction of a year estimates simple one-day interest.',
      },
      {
        question: 'Which feature generally distinguishes call money from repo?',
        options: ['Call money always represents equity', 'Repo cannot involve securities', 'Call money is generally unsecured, while repo is structured against securities', 'Call money is a government tax instrument'],
        correctIndex: 2,
        explanation: 'Call money is generally an unsecured short-term loan; repo involves securities transferred under an agreement to reverse the transaction.',
      },
    ],
  },
  {
    id: 'm2-t9',
    slug: 'repo-reverse-repo',
    moduleId: 2,
    moduleTitle: 'The Money Market',
    category: 'money-market',
    title: 'Repo and Reverse Repo Concepts',
    difficulty: 'Intermediate',
    definition:
      'A repurchase agreement (repo) is a secured short-term transaction in which one party obtains cash by transferring securities and agrees to buy them back later at an agreed price. From the cash lender’s perspective, the same transaction is a reverse repo.',
    whyItMatters:
      'Repo operations are part of how institutions manage liquidity, and RBI liquidity actions can influence short-term market conditions. Understanding which side borrows cash prevents confusion when you hear “repo” in policy news or a market report.',
    characteristics: [
      'The cash borrower transfers securities and agrees to repurchase them on a later date.',
      'The cash lender receives securities and agrees to return them when the cash is repaid.',
      'The repo rate is reflected in the difference between the initial and repurchase cash amounts.',
      'The securities provide collateral, but valuation, margin, and counterparty risks still require management.',
      '“Repo” and “reverse repo” describe opposite perspectives on the same secured transaction.',
      'RBI conducts liquidity operations under its current policy framework; operational details can change.',
      'For current policy rates and transaction rules, check rbi.org.in rather than relying on an old example.',
    ],
    example:
      'Illustrative example only: Kunal, a new employee at a fictional bank, observes a treasury team that needs ₹1 crore overnight and transfers eligible securities to another institution under a repo agreement. They agree to reverse the transaction the next day for ₹1,00,01,000. The bank receives cash now and pays ₹1,000 more when it repurchases the securities; that difference is the simplified financing cost. From the other institution’s side, the same deal is a reverse repo: it provides cash and temporarily receives securities. The collateral reduces some exposure but does not erase operational, valuation, or counterparty risk. The rupee amounts and one-day period are fictional, not a current repo rate, policy facility, or market quote.',
    rememberThis:
      'In repo, the cash borrower gives securities and later buys them back. The cash lender’s view is reverse repo. Collateral does not erase all risk. Check current RBI operations and rates officially.',
    mcqs: [
      {
        question: 'In a repo transaction, which party needs cash and transfers securities under an agreement to buy them back?',
        options: ['The cash borrower', 'The cash lender only', 'A company shareholder', 'The securities regulator'],
        correctIndex: 0,
        explanation: 'The cash borrower obtains funds against securities and agrees to repurchase them later under the transaction terms.',
      },
      {
        question: 'From the cash lender’s point of view, the repo transaction is called what?',
        options: ['Commercial paper', 'Reverse repo', 'A Treasury bill auction', 'A demand deposit'],
        correctIndex: 1,
        explanation: 'The same secured transaction is repo for the cash borrower and reverse repo for the cash lender.',
      },
      {
        question: 'In the fictional example, the borrower receives ₹1,00,00,000 and repays ₹1,00,01,000 next day. What is the simplified financing cost?',
        options: ['₹1,00,00,000', '₹1,00,01,000', '₹1,000', '₹2,00,01,000'],
        correctIndex: 2,
        explanation: 'The difference between the repurchase cash amount and the initial amount is ₹1,000 before other costs.',
      },
    ],
  },
]
