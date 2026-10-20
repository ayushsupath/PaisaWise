const moduleTitle = 'Credit, Loans & CIBIL'

export const module6Lessons = [
  {
    id: 'm6-t1',
    slug: 'credit-interest-and-apr',
    moduleId: 6,
    moduleTitle,
    category: 'credit',
    title: 'Credit, Interest, and the Real Cost of Borrowing',
    difficulty: 'Beginner',
    definition:
      'Credit lets you use borrowed money now and repay it later; principal is the amount borrowed, and interest is its cost. Simple interest is calculated on principal alone, compound interest can also grow on past interest, and APR is an annualised way to compare borrowing costs that may include specified fees.',
    whyItMatters:
      'A phone EMI or education loan can look manageable month to month while costing more over its full term. Flat-rate quotes can hide how quickly the outstanding balance falls, so compare the repayment schedule, total rupees payable, and disclosed fees—not just the quoted rate or EMI.',
    characteristics: [
      'Simple interest = principal × annual rate × time; it does not add past interest to the calculation base.',
      'With compound interest, unpaid interest may be added to the balance, so later interest can be charged on it too.',
      'APR annualises borrowing costs and may include specified fees; the calculation and included charges depend on the product and disclosure.',
      'A flat rate may calculate interest on the original principal for the whole term, even as you repay it.',
      'A reducing-balance rate calculates interest on the outstanding principal, which falls as repayments reduce the debt.',
      'Check the lender’s Key Facts Statement and contract for the APR method, fees, payment dates, and total repayment.',
    ],
    example:
      'Illustration only, not a current offer: Bengaluru student Asha compares two ways to describe a ₹1,00,000, two-year loan at 12% a year, with no fees. On a flat basis, interest is ₹1,00,000 × 12% × 2 = ₹24,000, making the total ₹1,24,000. For a simplified reducing-balance comparison, suppose she repays ₹50,000 of principal at the end of each year: first-year interest is ₹12,000 on ₹1,00,000, and second-year interest is ₹6,000 on the remaining ₹50,000. Total interest is ₹18,000 and total repayment ₹1,18,000. Real monthly schedules and fees change the figures, so this is not a personal quote.',
    rememberThis:
      'Simple interest uses the original principal; compound interest can include past interest. Flat and reducing-balance rates are calculated differently. Compare APR disclosures, all fees, repayment schedule, and total rupees payable. This lesson is general education, not personal financial advice; verify current terms with official lender and RBI sources.',
    mcqs: [
      {
        question: 'With compound interest, future interest may be calculated on:',
        options: [
          'Only the original principal, no matter what',
          'The principal plus interest already added to the balance',
          'The borrower’s monthly food budget',
          'The number of payments already made',
        ],
        correctIndex: 1,
        explanation:
          'Compound interest may be charged on accumulated interest as well as the original principal, depending on the product terms.',
      },
      {
        question: 'In the simplified example, why was reducing-balance interest ₹18,000?',
        options: [
          'Interest was ₹12,000 on ₹1,00,000, then ₹6,000 on the remaining ₹50,000',
          'The flat rate was added to a credit score',
          'The principal doubled every year',
          'Fees were assumed to be ₹18,000',
        ],
        correctIndex: 0,
        explanation:
          'At 12% a year, the two interest amounts are ₹12,000 and ₹6,000 after the first ₹50,000 principal repayment.',
      },
      {
        question: 'Why look beyond a loan’s advertised rate or EMI?',
        options: [
          'A low EMI always means lower total cost',
          'APR guarantees loan approval',
          'Fees and repayment timing affect the total cost',
          'Loan terms never affect interest',
        ],
        correctIndex: 2,
        explanation:
          'The term, repayment schedule, and included fees can change the total cost; check the lender’s disclosures and contract.',
      },
    ],
  },
  {
    id: 'm6-t2',
    slug: 'credit-score-cibil-basics',
    moduleId: 6,
    moduleTitle,
    category: 'credit',
    title: 'Credit Scores and CIBIL: The Basics',
    difficulty: 'Beginner',
    definition:
      'A credit score is a summary based on information in a person’s credit history, while a credit report lists credit accounts and repayment details. CIBIL is one of India’s credit information companies; lenders may consider its report or score along with other information.',
    whyItMatters:
      'A credit history may matter when you later apply for a card or loan, but a score does not guarantee approval or measure your worth. Knowing what can influence it helps you build a record responsibly without taking on unnecessary debt just to chase a number.',
    characteristics: [
      'Payment history, including whether payments were made as agreed, can influence a score.',
      'Credit utilisation describes how much of your available revolving credit you are using; high usage may matter.',
      'The age and length of credit history can be considered, so a new file may have limited history.',
      'Several applications in a short time can lead to multiple lender enquiries on a report.',
      'Score calculations and lender decisions differ; no single factor or score guarantees approval.',
      'Students can start responsibly by paying any existing obligations on time and checking reports; borrowing solely to create a score is unnecessary.',
      'Dispute inaccurate report entries with the relevant credit bureau and lender through their official channels.',
    ],
    example:
      'Illustration: Pune college student Meera has never borrowed and does not take a loan just to create a score. Later, when her income and needs make a card useful, she checks its terms, spends only what she can repay, and pays on time. Over time, a lender enquiry or a high card balance could also appear in her credit file; payment history, utilisation, and the age of her accounts can all matter, though exact scoring methods vary. When Meera notices an unfamiliar account on her report, she contacts the bureau and lender through official channels to dispute it. A score is one input, not a promise of approval.',
    rememberThis:
      'Payment history, utilisation, history length, and enquiries may influence a score, but their effects vary. Pay as agreed, review your report, and dispute errors. Do not borrow just to build a score; a score is not a guarantee. This is general education, not personal financial advice; verify report and dispute steps with the official bureau and lender.',
    mcqs: [
      {
        question: 'Which set contains factors that may influence a credit score?',
        options: [
          'Only a person’s age in years',
          'Payment history, utilisation, history length, and enquiries',
          'The colour of a debit card',
          'The number of savings goals in an app',
        ],
        correctIndex: 1,
        explanation:
          'Payment history, utilisation, the length of a credit history, and lender enquiries can all be relevant; exact scoring methods differ.',
      },
      {
        question: 'What is a sensible way for a student with no credit history to start?',
        options: [
          'Take several loans only to create a score',
          'Miss payments to show activity',
          'Borrow only if there is a genuine need and repay as agreed',
          'Share a card PIN to build history faster',
        ],
        correctIndex: 2,
        explanation:
          'There is no need to borrow just for a score. If you use credit for a real need, borrow within your means and repay as agreed.',
      },
      {
        question: 'What does a credit score tell a lender?',
        options: [
          'It guarantees that every application will be approved',
          'It is the borrower’s bank balance',
          'It replaces checking the credit report and application',
          'It is one input that may be considered with other information',
        ],
        correctIndex: 3,
        explanation:
          'Lenders may consider a score alongside other information; a score alone does not guarantee approval.',
      },
    ],
  },
  {
    id: 'm6-t3',
    slug: 'credit-cards-billing-minimum-due',
    moduleId: 6,
    moduleTitle,
    category: 'credit',
    title: 'Credit Cards: Billing Cycle and the Minimum-Due Trap',
    difficulty: 'Beginner',
    definition:
      'A billing cycle is the period in which a card issuer records transactions before preparing a statement; the statement gives the amount due and payment date. The minimum due is only the smallest required payment shown on that statement, not a payoff of the full balance.',
    whyItMatters:
      'Paying only the minimum can leave most of the bill unpaid, allowing interest and charges to build under the card terms. The interest-free period generally depends on paying the full statement balance on time and meeting the issuer’s conditions; using a large share of your limit can also affect credit assessments.',
    characteristics: [
      'Know your statement date, billing-cycle dates, and payment due date.',
      'To generally retain the interest-free period on purchases, pay the full statement balance by the due date and follow the card terms.',
      'If a prior balance is unpaid, or for cash advances, interest-free treatment may not apply; check the issuer’s terms.',
      'Paying only the minimum due leaves a balance to repay and can make borrowing costly.',
      'Utilisation is the balance used compared with available credit; a credit limit is not spending money you can afford.',
      'Avoid cash withdrawals on a credit card unless you understand the applicable fees and interest.',
    ],
    example:
      'Illustration only: Delhi first-jobber Kabir receives a statement for ₹10,000, with a displayed minimum due of ₹500 and a later payment due date. If he pays just ₹500, ₹9,500 of the statement remains unpaid, before any later transactions or applicable charges. The minimum payment does not clear the bill or promise that future purchases remain interest-free. If Kabir wants to avoid purchase interest, he should check his card terms and, where due, pay the full statement balance on time. He also tracks his balance against his limit, because available credit is not extra income. Actual fees and interest depend on the issuer’s current terms.',
    rememberThis:
      'Know your statement and due dates. The minimum due is not full repayment. Paying the full statement balance on time is generally needed for the purchase interest-free period, subject to card terms and past balances. Keep spending affordable and verify current issuer charges and conditions; this is general education, not personal financial advice.',
    mcqs: [
      {
        question: 'A ₹10,000 statement has a ₹500 minimum due. What happens if you pay only ₹500?',
        options: [
          'The full ₹10,000 bill is cleared',
          'The remaining ₹9,500 may still be owed and attract interest or charges under the terms',
          'The card turns into a debit card',
          'All future purchases are guaranteed interest-free',
        ],
        correctIndex: 1,
        explanation:
          'The minimum due is not the full statement balance; the remaining amount may attract interest or charges under the card terms.',
      },
      {
        question: 'What generally helps retain an interest-free period on purchases?',
        options: [
          'Paying the full statement balance by its due date, subject to card terms',
          'Paying only the minimum every month',
          'Withdrawing cash before the statement date',
          'Using the entire credit limit',
        ],
        correctIndex: 0,
        explanation:
          'Paying the full statement balance by the due date is generally required for purchase interest-free treatment, subject to issuer terms and any past balance.',
      },
      {
        question: 'Credit utilisation broadly compares:',
        options: [
          'The number of cards with the number of bank accounts',
          'The due date with the statement date',
          'The outstanding balance with the available credit limit',
          'Monthly income with a savings target',
        ],
        correctIndex: 2,
        explanation:
          'Utilisation is how much of available revolving credit is in use; keeping spending affordable matters regardless of the limit.',
      },
    ],
  },
  {
    id: 'm6-t4',
    slug: 'education-loans-and-debt-payoff',
    moduleId: 6,
    moduleTitle,
    category: 'credit',
    title: 'Education Loans, EMIs, and a Debt Payoff Plan',
    difficulty: 'Intermediate',
    definition:
      'An education loan helps fund eligible study costs and must be repaid under its contract. An EMI (equated monthly instalment) is a regular payment that typically covers interest and part of the principal; a moratorium defers scheduled repayment for a stated period, but interest may still accrue.',
    whyItMatters:
      'Students and families need to understand the total loan cost, any co-borrower responsibility, and when repayment begins before accepting an offer. A repayment pause may let interest build, while an affordable EMI—or a clear plan for several debts—can help prevent an expensive surprise after studies.',
    characteristics: [
      'Read the education-loan contract for the amount, fees, co-borrower obligations, repayment dates, and total repayment.',
      'A moratorium defers scheduled payments under stated terms; it does not automatically cancel or waive interest.',
      'Interest may accrue during study or a moratorium, and the repayment balance can grow; confirm how and when it is treated.',
      'An EMI generally includes interest and principal; early payments may be weighted more toward interest, depending on the schedule.',
      'Snowball pays extra toward the smallest balance first; avalanche pays extra toward the highest-interest debt first, while keeping required payments current on all debts.',
      'A “no-cost EMI” phone offer may still have conditions, fees, or foregone discounts; compare its total payable price with the cash price.',
      'If repayment looks difficult, contact the lender early and verify any scheme eligibility and current rules from official sources.',
    ],
    example:
      'Illustration only: Jaipur student Ananya considers a ₹4,00,000 education loan for a two-year course. Before signing, she asks the lender whether interest accrues during the moratorium, how it affects the balance, and when the first EMI is due; a pause in scheduled payments does not itself mean interest stops. After graduation, she lists her required EMIs and keeps those current. If she has extra money for two small debts, she could use snowball to clear the smaller balance first; if she wants to target cost, avalanche directs extra payments to the higher-interest debt. A ₹30,000 phone on “no-cost EMI” could still mean fees or a lost cash discount, so she checks the total price before adding another payment.',
    rememberThis:
      'Check the full education-loan contract: a moratorium may not stop interest. An EMI repays interest and principal over time. Snowball targets the smallest balance; avalanche targets the highest interest rate, while keeping other required payments current. Compare a phone EMI’s total price, fees, and lost discounts. Verify current lender and official scheme terms; this is general education, not personal financial advice.',
    mcqs: [
      {
        question: 'What does a loan moratorium generally mean?',
        options: [
          'The loan is cancelled',
          'Scheduled repayment is deferred under stated terms; interest may still accrue',
          'Interest is always waived',
          'The lender has given a scholarship',
        ],
        correctIndex: 1,
        explanation:
          'A moratorium defers scheduled repayment; whether interest accrues or is supported depends on the contract and any applicable scheme.',
      },
      {
        question: 'Which debt does the avalanche method prioritise for extra repayment?',
        options: [
          'The debt with the highest interest rate',
          'The debt with the smallest balance, regardless of rate',
          'The newest debt only',
          'The debt with the longest lender name',
        ],
        correctIndex: 0,
        explanation:
          'Avalanche directs extra payments to the highest-interest debt, while required payments on other debts remain current.',
      },
      {
        question: 'What should you check before taking a phone on “no-cost EMI”?',
        options: [
          'Only whether the monthly instalment looks small',
          'Whether the phone has the newest colour',
          'Total payable price, fees, offer conditions, and any lost cash discount',
          'Whether the EMI creates a scholarship',
        ],
        correctIndex: 2,
        explanation:
          'A “no-cost” label does not tell the whole story; compare the total price and check fees, conditions, and foregone discounts.',
      },
    ],
  },
]
