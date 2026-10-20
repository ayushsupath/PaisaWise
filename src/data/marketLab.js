export const instruments = [
  {
    id: 'tbill',
    name: 'Treasury Bills',
    issuer: 'Government of India (via RBI auctions)',
    purpose: 'Short-term government borrowing / liquidity management for the state',
    typicalMaturity: '91, 182, 364 days (issuance practice)',
    riskNote: 'Sovereign credit risk in theory; yields still fluctuate with policy and liquidity.',
    retailNote: 'Institutional market; students may encounter T-bills indirectly via mutual funds—not direct trading in this simulator.',
    fictionalExample: {
      faceValue: 100000,
      purchasePrice: 98500,
      days: 91,
      label: 'Fictional 91-day illustration',
    },
  },
  {
    id: 'cp',
    name: 'Commercial Paper',
    issuer: 'Highly rated corporates / eligible FIs',
    purpose: 'Short-term working capital and general corporate funding',
    typicalMaturity: 'Up to one year (within RBI CP guidelines)',
    riskNote: 'Unsecured—issuer credit quality drives pricing.',
    retailNote: 'Sold mainly to institutional investors; not a student savings substitute.',
    fictionalExample: {
      faceValue: 5000000,
      discountYieldPercent: 6.8,
      days: 120,
      label: 'Fictional CP issue',
    },
  },
  {
    id: 'cd',
    name: 'Certificate of Deposit',
    issuer: 'Scheduled commercial banks',
    purpose: 'Bulk short/medium-term funding from corporates/institutions',
    typicalMaturity: 'From 7 days up to one year (per RBI framework)',
    riskNote: 'Bank credit risk; understand terms vs insured retail deposits.',
    retailNote: 'Large ticket sizes; educational comparison only here.',
    fictionalExample: {
      principal: 10000000,
      ratePercent: 7.1,
      days: 180,
      label: 'Fictional bank CD',
    },
  },
  {
    id: 'call',
    name: 'Call Money',
    issuer: 'N/A — inter-bank borrowing/lending',
    purpose: 'Overnight liquidity adjustment among banks',
    typicalMaturity: 'Overnight / on call',
    riskNote: 'Counterparty among regulated banks; rate volatile with system liquidity.',
    retailNote: 'Not accessible to individual students as a product.',
    fictionalExample: {
      amount: 50000000,
      ratePercent: 6.25,
      days: 1,
      label: 'Fictional overnight call',
    },
  },
  {
    id: 'repo',
    name: 'Repo Transaction',
    issuer: 'RBI with eligible banks (policy operations)',
    purpose: 'Collateralised short-term liquidity injection/absorption',
    typicalMaturity: 'Overnight to longer LAF tenors',
    riskNote: 'Secured by eligible securities; policy tool not retail investment.',
    retailNote: 'Understand concept for exams; not an app feature to “invest” in.',
    fictionalExample: {
      cash: 250000000,
      repoRatePercent: 6.5,
      days: 1,
      collateral: 'Government securities (hypothetical)',
      label: 'Fictional RBI repo',
    },
  },
]

export const scenarios = [
  {
    id: 's1',
    prompt:
      'A corporate treasury has ₹2 crore surplus for 45 days before a tax payment. Which instrument is MOST appropriate to study for short-term parking (institutional context)?',
    options: ['Long-term equity IPO', 'Treasury bill or certificate of deposit (subject to eligibility)', 'Real estate purchase', 'Physical gold only'],
    correctIndex: 1,
    explanation:
      'Short-term sovereign or bank money market instruments are textbook choices for temporary institutional surpluses—subject to eligibility and policy.',
  },
  {
    id: 's2',
    prompt: 'Call money rates spike sharply for one day. A likely academic explanation is:',
    options: [
      'System-wide temporary liquidity shortage among banks',
      'SEBI banned all stocks',
      'MCA dissolved all companies',
      'Students stopped using UPI forever',
    ],
    correctIndex: 0,
    explanation: 'Call rates reflect inter-bank liquidity conditions at the shortest tenor.',
  },
  {
    id: 's3',
    prompt: 'Which instrument is unsecured corporate short-term paper?',
    options: ['Treasury bill', 'Commercial paper', 'Currency note', 'Fixed deposit insurance certificate'],
    correctIndex: 1,
    explanation: 'CP is unsecured corporate money market borrowing.',
  },
]

export function computeTbillReturn({ faceValue, purchasePrice }) {
  const gain = faceValue - purchasePrice
  const yieldSimple = (gain / purchasePrice) * 100
  return { gain, yieldSimple }
}

export function computeDiscountYield({ faceValue, ratePercent, days }) {
  const interest = (faceValue * ratePercent * days) / (100 * 365)
  return { interest, proceeds: faceValue - interest }
}

export function computeCpDiscount({ faceValue, discountYieldPercent, days }) {
  const interest = (faceValue * discountYieldPercent * days) / (100 * 365)
  return { interest, proceeds: faceValue - interest }
}

export function computeFixedInterest({ principal, ratePercent, days }) {
  const interest = (principal * ratePercent * days) / (100 * 365)
  return { interest, maturityAmount: principal + interest }
}
