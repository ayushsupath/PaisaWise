const moduleTitle = 'Saving & Investing Basics'

export const module7Lessons = [
  {
    id: 'm7-t1', slug: 'risk-return-liquidity-time-value', moduleId: 7, moduleTitle, category: 'investing',
    title: 'Risk, Return, Liquidity, and Time Value', difficulty: 'Beginner',
    definition:
      'Risk is the possibility that an outcome differs from what you expect, including losing money; return is the gain or loss on money you save or invest. Liquidity means how easily you can access money, while time value means money available today can be more useful than the same amount later because it can be used, saved, or invested in the meantime.',
    whyItMatters:
      'A student paying rent next month needs access to that money, while a first-job earner saving for a goal years away has a different timeline. Knowing how access, uncertainty, and time interact helps you compare options without assuming that a higher possible return is guaranteed.',
    characteristics: [
      'Cash in an accessible account is usually liquid, but inflation can reduce what it can buy over time.',
      'Market-linked investments can rise or fall in value, especially over short periods.',
      'Lock-ins, early-exit conditions, and the time needed to receive proceeds all affect liquidity.',
      'A longer time horizon may give you more time to handle ups and downs, but it does not remove risk.',
      'The time value of money depends on factors such as inflation, interest, and when money is available.',
      'Keep near-term needs and emergency money distinct from money intended for longer-term goals.',
    ],
    example:
      'Illustration only, not a recommendation: Riya, a 20-year-old student in Pune, has ₹12,000 saved from a part-time job. She expects to pay ₹8,000 for rent and travel next month, so she keeps that amount somewhere accessible rather than relying on an investment that could fall or take time to sell. She considers putting the remaining ₹4,000 toward a goal five years away, but first checks the possibility of loss, withdrawal rules, and costs. If prices rise, ₹12,000 may also buy less later. The options have different risks, returns, and liquidity; none promises a particular outcome.',
    rememberThis:
      'Risk is uncertainty, return can be positive or negative, and liquidity is access to money. Match the time horizon and access needs to the purpose of the money. A higher possible return is not guaranteed, and time does not erase risk.',
    mcqs: [
      {
        question: 'What does liquidity describe?',
        options: ['How easily money can be accessed or an asset sold for usable money', 'A guaranteed investment return', 'The amount of tax owed', 'How much a company earns'],
        correctIndex: 0,
        explanation: 'Liquidity is about the ease and speed of getting usable money, including any delay or loss involved in selling.',
      },
      {
        question: 'Why might rent due next month need a different home from a goal many years away?',
        options: ['Every investment can be sold instantly at its original price', 'The near-term money may need to be accessible without depending on a market sale', 'A longer time horizon guarantees a profit', 'Rent money cannot lose purchasing power'],
        correctIndex: 1,
        explanation: 'Money needed soon should not depend on an uncertain sale price or a slow withdrawal process.',
      },
      {
        question: 'What does a higher possible return tell you?',
        options: ['That the return is guaranteed', 'That there can be no loss', 'It is a possibility, not a promise, and should be weighed against risk', 'That the investment is always liquid'],
        correctIndex: 2,
        explanation: 'A possible return is not certain. Consider the chance of loss, access, costs, and when you need the money.',
      },
    ],
  },
  {
    id: 'm7-t2', slug: 'compounding-starting-early', moduleId: 7, moduleTitle, category: 'investing',
    title: 'Compounding: Why Starting Earlier Can Matter', difficulty: 'Beginner',
    definition:
      'Compounding means returns left invested can earn further returns over time. The result depends on contribution amounts, timing, returns, costs, and taxes; investment returns are not fixed or guaranteed.',
    whyItMatters:
      'A first-job earner who starts a manageable contribution sooner gives it more time to compound than someone who starts later, all else equal. The figures in a calculator are only illustrations: real returns vary, can be negative, and fees and taxes can reduce the result.',
    characteristics: [
      'Money invested earlier has more time to compound than the same contribution invested later, if other assumptions are equal.',
      'Regular contributions add to the amount that may grow, but do not ensure a gain.',
      'The assumed return and compounding frequency affect a projection.',
      'Fees and taxes can reduce what an investor ultimately keeps.',
      'A smooth calculator line does not represent the ups and downs of real markets.',
      'Do not borrow or skip essential expenses to invest; start only with money you can set aside.',
    ],
    example:
      'Illustration only, not a forecast: Aarav, age 20, and Neha, age 30, each invest ₹1,000 at the end of every month until age 60. Assume a fixed 8% nominal annual return compounded monthly (8% divided by 12 each month); costs and taxes are ignored. The rounded estimates are shown below. Both people contribute regularly, but Aarav’s contributions have ten extra years to compound. Actual returns will vary, may be negative, and will not arrive in a smooth line. The calculation is not a promise or a personal recommendation.\n\n' +
      '| Starting age | Years contributing | Total contributed | Estimated value |\n' +
      '|---|---:|---:|---:|\n' +
      '| 20 | 40 | ₹4,80,000 | About ₹34,91,008 |\n' +
      '| 30 | 30 | ₹3,60,000 | About ₹14,90,359 |',
    rememberThis:
      'Compounding lets returns potentially earn returns too. Starting earlier can provide more time, but the result depends on contributions, returns, fees, and taxes. These numbers are illustrative, not guaranteed.',
    mcqs: [
      {
        question: 'What is compounding?',
        options: ['A fixed fee charged once', 'Returns left invested earning further returns over time', 'A guarantee that an investment cannot fall', 'A way to withdraw money early'],
        correctIndex: 1,
        explanation: 'When returns remain invested, they can become part of the amount that earns future returns.',
      },
      {
        question: 'In the example, what is the main reason the age-20 investor’s estimate is higher?',
        options: ['They make larger monthly contributions', 'They receive a guaranteed rate', 'Their contributions have ten more years to compound', 'Their investments have no costs or risk in real life'],
        correctIndex: 2,
        explanation: 'The comparison assumes equal monthly contributions and returns; the earlier contributions get ten more years in the calculation.',
      },
      {
        question: 'How should you treat a projection using a fixed annual return?',
        options: ['As an illustration based on assumptions, not a promise', 'As the return an investment must deliver', 'As proof that losses cannot happen', 'As a current bank deposit rate'],
        correctIndex: 0,
        explanation: 'Actual returns vary, and a projection also depends on its assumptions and excluded costs or taxes.',
      },
    ],
  },
  {
    id: 'm7-t3', slug: 'savings-accounts-fd-rd-ppf', moduleId: 7, moduleTitle, category: 'investing',
    title: 'Savings Accounts, FD, RD, PPF, and Post-Office Options', difficulty: 'Beginner',
    definition:
      'A savings account holds money for access; a fixed deposit (FD) places a lump sum for a chosen term, while a recurring deposit (RD) accepts regular deposits under its terms. The Public Provident Fund (PPF) and post-office small-savings schemes have their own eligibility, contribution, access, rate, and tax rules, which can change.',
    whyItMatters:
      'A college student or new employee may need both accessible emergency savings and money for a longer-term goal. Compare more than the quoted rate: check who provides the product, deposit protection where applicable, maturity and early-exit terms, tax treatment, and current official rules.',
    characteristics: [
      'Savings-account access, interest rates, fees, and conditions vary by provider and account.',
      'FDs and RDs have terms; early closure or missed deposits may affect interest or incur a penalty under the product rules.',
      'PPF has a long-term structure and access restrictions; confirm the current lock-in, withdrawal, contribution, and tax rules from official sources.',
      'Post-office schemes differ from one another in eligibility, term, access, rate, and tax treatment.',
      'DICGC deposit insurance applies only to eligible deposits at insured banks, subject to its coverage limit and aggregation rules; it is not a blanket guarantee for every product or amount.',
      'Rates and scheme conditions can change; verify current terms with the official bank, India Post, government, or DICGC source as relevant.',
    ],
    example:
      'Illustration only: Kabir, a 21-year-old in Jaipur with a new job, sets aside ₹20,000 for emergencies and expects he may need it at short notice. He compares account access and provider terms before choosing where to keep it. Separately, he considers an FD for ₹10,000 he does not expect to need before maturity, and an RD with ₹1,000 monthly deposits for a planned purchase. He also reads the current official PPF and post-office scheme rules rather than assuming they work like an FD. Before deciding, Kabir checks rates, early-exit conditions, eligibility, taxes, and deposit-protection limits; this example does not promise a rate or outcome.',
    rememberThis:
      'Savings accounts, FDs, RDs, PPF, and post-office schemes have different access, terms, and risks. Check the specific product’s current official rules, including early exit and applicable deposit protection. A quoted rate alone is not enough to compare.',
    mcqs: [
      {
        question: 'Before placing money in an FD, what should you check if you might need it early?',
        options: ['The provider’s app design', 'The early-closure and withdrawal terms', 'A social-media return estimate', 'Whether the FD price changes like a share'],
        correctIndex: 1,
        explanation: 'An FD has a term, and early closure may affect interest or involve a penalty under its rules.',
      },
      {
        question: 'Which statement about deposit protection is accurate?',
        options: ['Every financial product and every amount is fully insured', 'Deposit insurance is the same as market-return protection', 'DICGC protection applies to eligible deposits at insured banks within its rules and limits', 'Post-office and bank products all have identical insurance terms'],
        correctIndex: 2,
        explanation: 'DICGC protection has eligibility, coverage, and aggregation rules; check DICGC’s official information rather than assuming blanket coverage.',
      },
      {
        question: 'Where should you confirm current PPF or post-office scheme rates and terms?',
        options: ['Current official government or India Post sources', 'An old social-media post', 'A friend’s memory of last year’s rate', 'An unverified online message'],
        correctIndex: 0,
        explanation: 'Rates and rules can change. Use the relevant official source to check current terms and eligibility.',
      },
    ],
  },
  {
    id: 'm7-t4', slug: 'mutual-funds-sip-index-funds', moduleId: 7, moduleTitle, category: 'investing',
    title: 'Mutual Funds, SIPs, and Index Funds', difficulty: 'Beginner',
    definition:
      'A mutual fund pools investors’ money to hold a portfolio of investments; its Net Asset Value (NAV) is the per-unit value calculated under the scheme’s rules and can rise or fall. A Systematic Investment Plan (SIP) invests an amount at regular intervals, while a lump-sum investment invests an amount at one time; an index fund aims to track a market index.',
    whyItMatters:
      'A new employee may find regular SIP contributions convenient, but the SIP is only a way to invest—not a guarantee of profit or protection from loss. Understand the fund’s risks, time horizon, expense ratio (ongoing fund costs), tracking difference, and plan type before deciding.',
    characteristics: [
      'NAV can move up or down with the value of a fund’s investments; market-linked returns are not guaranteed.',
      'An SIP invests at intervals; a lump sum invests at one time, and neither method removes market risk.',
      'An index fund aims to follow an index but can differ from it because of expenses and tracking error.',
      'The expense ratio is an ongoing cost of running a scheme and reduces returns available to investors.',
      'Direct and regular plans of a scheme have different distribution arrangements; regular plans include distributor commission in their expenses and typically have a higher expense ratio.',
      'Read the scheme information document, Riskometer, and current disclosures; check that the fund and intermediary meet applicable SEBI requirements.',
    ],
    example:
      'Illustration only: Isha, a 23-year-old analyst in Mumbai, is learning about a hypothetical index mutual fund. She considers a ₹1,000 monthly SIP, while her colleague Dev asks about investing ₹12,000 as a lump sum. Each contribution buys units at the applicable NAV; for example, at a hypothetical NAV of ₹20, ₹1,000 buys 50 units before any applicable charges. Later NAVs may be higher or lower, so neither approach promises a profit. Isha compares the scheme’s index, expense ratio, tracking error, and direct or regular plan costs, then reads its Riskometer and scheme documents. The figures and fund are illustrative, not a recommendation.',
    rememberThis:
      'NAV means Net Asset Value. SIP and lump sum describe timing, not guaranteed outcomes. Compare index tracking, expense ratio, risks, and direct versus regular plan costs using current scheme documents.',
    mcqs: [
      {
        question: 'What does NAV stand for?',
        options: ['Net Asset Value', 'National Account Verification', 'New Annual Valuation', 'Net Added Volume'],
        correctIndex: 0,
        explanation: 'NAV, or Net Asset Value, is the per-unit value of a mutual fund calculated under the scheme’s rules.',
      },
      {
        question: 'What does an SIP describe?',
        options: ['A guaranteed-return mutual fund', 'A method of investing at regular intervals', 'A type of index or stock exchange', 'A promise that the NAV cannot fall'],
        correctIndex: 1,
        explanation: 'An SIP is a schedule for investing contributions; it does not guarantee profit or remove market risk.',
      },
      {
        question: 'What is a key cost difference between direct and regular plans of a scheme?',
        options: ['A direct plan guarantees a higher return', 'A regular plan cannot hold the same scheme portfolio', 'Regular-plan expenses include distributor commission and are typically higher', 'Direct plans have no investment risk'],
        correctIndex: 2,
        explanation: 'Regular plans include distributor commission in their expenses and typically have a higher expense ratio; compare the scheme’s current disclosures.',
      },
    ],
  },
  {
    id: 'm7-t5', slug: 'stocks-ipo-gold-real-estate-crypto', moduleId: 7, moduleTitle, category: 'investing',
    title: 'Stocks, IPOs, Gold, Property, and Crypto: Understand the Risks', difficulty: 'Intermediate',
    definition:
      'A stock or share represents ownership in a company, and an initial public offering (IPO) is a company’s offer of shares to the public. Gold, real estate, and crypto-assets have different ways of being valued, bought, held, and sold, as well as different risks, costs, liquidity, and rules.',
    whyItMatters:
      'College students and first-job earners may see exciting claims about IPO gains or fast-moving assets online. Understanding what you own, how you can sell it, what it costs, and what can go wrong is more useful than following a tip or assuming that diversification prevents every loss.',
    characteristics: [
      'A share’s value can rise or fall with a company’s prospects and market conditions; an investor can lose money.',
      'An IPO does not guarantee that shares will list at a gain; read the official offer documents and risk disclosures.',
      'Diversification spreads money across assets or companies to reduce concentration, but cannot remove all risk.',
      'Gold prices can move, and jewellery may also involve making charges and differences between buying and selling prices.',
      'Property can require substantial capital and ongoing costs and may take time to sell.',
      'Crypto-assets can be highly volatile and involve custody, fraud, and changing regulatory or tax considerations; verify current official guidance and do not invest based on hype.',
    ],
    example:
      'Illustration only: Ananya, a 22-year-old graduate in Hyderabad, has ₹15,000 set aside after essential expenses. A social-media group urges her to put all of it into one small company’s IPO, promising a listing gain. Instead, she learns that an IPO can list below its offer price and reads the official offer document. She also compares the time and charges involved in selling a share, gold, or property, and learns that crypto-assets can change sharply in value. She considers how concentrating the full ₹15,000 in one idea could expose her to a large loss. Research and diversification can help manage risk, not guarantee a profit.',
    rememberThis:
      'Shares and IPOs can lose value; an IPO is not a sure gain. Gold, property, and crypto-assets have distinct costs, risks, and liquidity. Diversification can reduce concentration risk, but cannot guarantee profits or prevent every loss.',
    mcqs: [
      {
        question: 'What does diversification mainly aim to do?',
        options: ['Guarantee a profit', 'Spread exposure to reduce reliance on one investment', 'Remove every kind of risk', 'Make every asset instantly liquid'],
        correctIndex: 1,
        explanation: 'Spreading exposure can reduce concentration risk, but losses and market-wide risk can still occur.',
      },
      {
        question: 'How should you treat a claim that an IPO will definitely deliver listing gains?',
        options: ['As a guaranteed return if shared widely', 'As proof the company has no risks', 'As an unsupported promise; read official offer and risk information', 'As equivalent to an insured bank deposit'],
        correctIndex: 2,
        explanation: 'IPO prices can fall as well as rise. Review official offer documents and do not rely on guaranteed-gain claims.',
      },
      {
        question: 'Which is a practical feature of property compared with a listed share?',
        options: ['It can require substantial capital and take time to sell', 'It always has no ongoing costs', 'It can always be sold instantly at the expected price', 'It carries no risk if held for one year'],
        correctIndex: 0,
        explanation: 'Property can involve significant purchase and holding costs and may take time to sell at an uncertain price.',
      },
    ],
  },
]
