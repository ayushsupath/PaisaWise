/** @typedef {import('./types').Lesson} Lesson */

/** @type {Lesson[]} */
export const module1Lessons = [
  {
    id: 'm1-t1',
    slug: 'overview-indian-financial-system',
    moduleId: 1,
    moduleTitle: 'Understanding the Indian Financial System',
    category: 'banking',
    title: 'Overview and Structure of the Indian Financial System',
    difficulty: 'Beginner',
    definition:
      'India’s financial system connects savers with people, businesses, and governments that need funds. It includes institutions, markets, financial instruments, payment systems, and regulators.',
    whyItMatters:
      'Your savings account, a Unified Payments Interface (UPI) payment, an education loan, and a company bond all sit within this system. A monthly mutual fund systematic investment plan (SIP) is another example. Knowing the system’s parts helps you understand who handles money, who sets the rules, and where risks can arise.',
    characteristics: [
      'Intermediaries such as banks and Non-Banking Financial Companies (NBFCs) collect or channel funds.',
      'Markets help participants issue and trade instruments such as shares, bonds, and short-term debt.',
      'Payment and settlement systems move money and record when obligations are completed.',
      'The Reserve Bank of India (RBI) oversees banking, monetary policy, and specified payment activities.',
      'The Securities and Exchange Board of India (SEBI) regulates securities markets and their participants.',
      'Other regulators include the Insurance Regulatory and Development Authority of India (IRDAI) and the Pension Fund Regulatory and Development Authority (PFRDA).',
      'Laws and supervision aim to support confidence, stability, fair conduct, and access to finance.',
    ],
    example:
      'Illustrative example only: Meera in Indore receives ₹8,000 from her parents in her bank account. She pays ₹2,000 in rent through UPI, keeps ₹3,000 for food and travel, and puts ₹1,000 toward a mutual fund systematic investment plan (SIP). Her bank maintains the account and routes payments; the payment system records the transfers. The mutual fund pools investors’ money and invests under securities-market rules overseen by SEBI. When Meera later considers an education loan, a lender assesses her application under its rules and applicable RBI oversight. Her simple monthly choices touch several institutions, markets, instruments, and regulators—not one single “finance department.”',
    rememberThis:
      'The system links savers and users of funds. Institutions, markets, instruments, payments, and regulators all matter. RBI and SEBI have different mandates. Follow the official regulator for current rules.',
    mcqs: [
      {
        question: 'Which description best captures the Indian financial system?',
        options: ['Only the country’s commercial banks', 'Institutions, markets, instruments, payment systems, and regulators working together', 'Only stock exchanges and listed companies', 'Only government departments that collect taxes'],
        correctIndex: 1,
        explanation: 'Finance is a connected system: intermediaries and markets move funds, payment systems settle transactions, and regulators oversee different activities.',
      },
      {
        question: 'A student buys a mutual fund unit. Which regulator is primarily associated with securities-market rules?',
        options: ['SEBI', 'MCA', 'IRDAI', 'PFRDA'],
        correctIndex: 0,
        explanation: 'SEBI regulates securities markets and many market participants, including mutual funds. Other bodies have separate mandates.',
      },
      {
        question: 'Which activity is an example of financial intermediation?',
        options: ['A college publishes its exam timetable', 'A shop sells a notebook for cash', 'A bank gathers deposits and lends to eligible borrowers', 'A student makes a personal study plan'],
        correctIndex: 2,
        explanation: 'An intermediary connects funds from savers with borrowers, while assessing and managing the related financial risks.',
      },
    ],
  },
  {
    id: 'm1-t2',
    slug: 'financial-system-economic-development',
    moduleId: 1,
    moduleTitle: 'Understanding the Indian Financial System',
    category: 'banking',
    title: 'Financial System and Economic Development',
    difficulty: 'Beginner',
    definition:
      'A financial system supports development by collecting savings, directing funds toward useful activity, enabling payments, and helping people and firms manage financial risk. It can support growth, but it cannot guarantee that every investment succeeds.',
    whyItMatters:
      'When a student needs an education loan or a first-jobber starts a monthly savings plan, access to suitable financial services can shape future choices. Businesses also need finance to buy equipment, pay workers, and expand.',
    characteristics: [
      'Savings become available for lending and investment through financial intermediaries and markets.',
      'Credit can help households pay for education and firms invest in productive capacity.',
      'Reliable payment services make trade and salary payments easier to complete.',
      'Insurance and diversified investments help participants manage some risks.',
      'Financial inclusion seeks to widen access to useful, affordable formal services.',
      'Good screening and supervision help limit misallocation, fraud, and excessive risk-taking.',
      'Development depends on real skills, infrastructure, institutions, and sound projects as well as finance.',
    ],
    example:
      'Illustrative example only: Arjun, a first-jobber in Kochi, earns ₹28,000 a month and receives salary in a bank account. He sets aside ₹2,000 for a future course and pays ₹6,000 toward a shared flat using digital transfers. A local tailoring business borrows ₹1,20,000 from a lender to buy two machines and hire an assistant. The loan can help the business serve more customers, but it still needs demand, skills, and repayment planning to succeed. Arjun’s savings, the business loan, and their payments show how finance can support education, work, and production. It enables development; it does not create successful outcomes automatically.',
    rememberThis:
      'Finance channels savings into possible productive uses. Payments and risk services also support daily activity. Access matters, but loans and investments still carry risk. Productive outcomes need more than money.',
    mcqs: [
      {
        question: 'How can a financial system support economic development?',
        options: ['By guaranteeing every business a profit', 'By replacing skills and infrastructure', 'By preventing all economic downturns', 'By connecting savings with investment and enabling payments'],
        correctIndex: 3,
        explanation: 'Finance can fund useful activity and make payments easier, but it cannot remove business risk or replace other foundations of development.',
      },
      {
        question: 'A small business borrows to buy equipment. What is the most balanced conclusion?',
        options: ['The loan can support expansion, but success still depends on demand and sound management', 'Borrowing guarantees more customers', 'A loan removes the need to repay', 'Any equipment purchase automatically raises productivity'],
        correctIndex: 0,
        explanation: 'Credit may help a viable business invest, but repayment and results depend on factors such as demand, costs, and management.',
      },
      {
        question: 'Which is an example of financial inclusion?',
        options: ['Limiting accounts to large companies', 'Making suitable formal financial services accessible to more people', 'Removing all checks before lending', 'Requiring every student to invest in shares'],
        correctIndex: 1,
        explanation: 'Financial inclusion is about widening meaningful access to formal services, alongside appropriate safeguards and suitability.',
      },
    ],
  },
  {
    id: 'm1-t3',
    slug: 'financial-sector-reforms',
    moduleId: 1,
    moduleTitle: 'Understanding the Indian Financial System',
    category: 'banking',
    title: 'Financial Sector Reforms: Context, Need, and Objectives',
    difficulty: 'Intermediate',
    definition:
      'Financial-sector reforms are changes to laws, institutions, market practices, and supervision intended to address weaknesses and improve how finance works. Reforms may change over time as the economy and risks change.',
    whyItMatters:
      'Reforms influence how banks assess a first education loan, how clearly financial products are disclosed, and how markets handle risk. Understanding their aims helps you assess policy news without assuming that every change has only benefits.',
    characteristics: [
      'Reforms may respond to weak institutions, limited competition, poor access, or emerging risks.',
      'Common objectives include stronger stability, more efficient allocation, transparency, and inclusion.',
      'Changes can affect bank governance, capital, supervision, payment systems, and market infrastructure.',
      'Competition can improve service and innovation but also requires suitable consumer safeguards.',
      'Reform outcomes depend on implementation, enforcement, and the capacity of institutions.',
      'Transition can create costs for borrowers, firms, workers, and regulators.',
      'Specific rules change; check the current official policy or legislation before relying on details.',
    ],
    example:
      'Illustrative example only: Nisha, a student in Bhopal, compares two education-loan offers and sees that each lists fees and repayment conditions differently. A policy reform that improves disclosure could make comparison easier, while stronger supervision may require lenders to check repayment risk more carefully. A small firm in her neighbourhood may benefit if reforms make funding channels more competitive, yet the firm would still need to repay what it borrows. Reforms therefore try to address practical problems—such as weak information or poor oversight—rather than promise free credit. Nisha should still read the actual terms and check current rules on the relevant regulator’s official site.',
    rememberThis:
      'Reforms respond to specific system needs. Typical goals include stability, efficiency, transparency, and access. Better rules still need sound implementation. Check official sources for current requirements.',
    mcqs: [
      {
        question: 'Which is a common objective of financial-sector reform?',
        options: ['Guaranteeing gains to all investors', 'Removing every safeguard', 'Improving stability and efficiency while widening fair access', 'Making every financial institution identical'],
        correctIndex: 2,
        explanation: 'Reforms often try to improve how the system works while protecting stability and access; they do not eliminate risk or guarantee returns.',
      },
      {
        question: 'A new disclosure rule makes loan fees easier to compare. Which reform goal does this most directly support?',
        options: ['Transparency', 'Currency printing', 'Company incorporation', 'Eliminating repayment obligations'],
        correctIndex: 0,
        explanation: 'Clearer disclosure helps borrowers understand and compare terms, which supports transparency and informed decisions.',
      },
      {
        question: 'Why can a reform fail to deliver its intended benefit?',
        options: ['Because all reforms must reduce access', 'Because reforms never affect institutions', 'Because financial rules cannot change', 'Because implementation and enforcement may be weak'],
        correctIndex: 3,
        explanation: 'A well-designed change still depends on institutions implementing and enforcing it effectively.',
      },
    ],
  },
  {
    id: 'm1-t4',
    slug: 'banks-versus-nbfcs',
    moduleId: 1,
    moduleTitle: 'Understanding the Indian Financial System',
    category: 'banking',
    title: 'Banks versus NBFCs',
    difficulty: 'Beginner',
    definition:
      'A bank is licensed to conduct banking business, including taking eligible deposits and providing payment services. A Non-Banking Financial Company (NBFC) is a financial company that lends or provides other financial services under a different legal and regulatory framework.',
    whyItMatters:
      'A student may keep salary or scholarship money in a bank and later see an NBFC offer vehicle finance. Knowing the difference helps you check the institution’s status, deposit protections, and loan terms instead of relying on its brand name.',
    characteristics: [
      'Banks can accept eligible demand deposits and provide payment accounts under banking law.',
      'NBFCs provide services such as lending, asset finance, or investment, subject to their category and rules.',
      'RBI regulates banks and many NBFCs, but the applicable laws and requirements are not identical.',
      'An NBFC is not automatically authorised to operate as a bank or offer a bank-style payment account.',
      'Eligible bank deposits may receive insurance from the Deposit Insurance and Credit Guarantee Corporation (DICGC), subject to current law and limits; NBFC deposits are not covered in the same way.',
      'Both banks and NBFCs can lend, and a borrower should compare actual fees, terms, and disclosures.',
      'Check the institution’s official regulatory status; similar names do not mean identical licences.',
    ],
    example:
      'Illustrative example only: Kabir in Surat receives a ₹22,000 first salary into a savings account at a licensed bank. He later needs a scooter for a long commute and compares a fictional ₹70,000 loan from a bank with an offer from an NBFC. He checks the annual cost, processing charges, repayment schedule, and late-payment terms rather than assuming the offers are alike. The bank can provide deposit and payment services under its banking licence; the NBFC may specialise in lending but does not become a bank for that reason. Before signing, Kabir verifies the lender and reads the current agreement. The example illustrates institutional differences, not a recommendation.',
    rememberThis:
      'Banks and NBFCs can both lend, but their licences and rules differ. NBFC does not mean “unregulated.” Deposit protection is not identical. Check status and terms before borrowing.',
    mcqs: [
      {
        question: 'What is a key general distinction between a bank and an NBFC?',
        options: ['Only NBFCs can provide loans', 'Banks may accept eligible demand deposits and provide payment accounts under banking law', 'NBFCs are always government-owned', 'Banks are not regulated'],
        correctIndex: 1,
        explanation: 'Both categories may lend, but banks have banking permissions and obligations that do not automatically apply to NBFCs.',
      },
      {
        question: 'A student sees a company offering a vehicle loan. What should they do before assuming it is a bank?',
        options: ['Check the company’s regulatory status and read the loan terms', 'Assume every lender is covered by the same deposit insurance', 'Rely only on its logo', 'Assume an NBFC cannot be supervised'],
        correctIndex: 0,
        explanation: 'A lender’s name or product does not establish its licence. Verify its status and compare the actual terms.',
      },
      {
        question: 'Which statement about deposit protection is safest?',
        options: ['Every financial product has identical protection', 'NBFC deposits always have bank deposit insurance', 'Eligible bank deposits may have DICGC cover under applicable rules; NBFC deposits are treated differently', 'A loan account is the same as an insured deposit'],
        correctIndex: 2,
        explanation: 'Deposit insurance applies to eligible bank deposits under its governing framework, not to NBFC deposits in the same way. Verify current coverage with DICGC.',
      },
    ],
  },
  {
    id: 'm1-t5',
    slug: 'nbfcs-meaning-and-types',
    moduleId: 1,
    moduleTitle: 'Understanding the Indian Financial System',
    category: 'banking',
    title: 'NBFCs: Meaning and Types',
    difficulty: 'Intermediate',
    definition:
      'A Non-Banking Financial Company (NBFC) is a company whose principal business is financial activity, such as lending or investing, and which falls within the applicable regulatory framework. NBFCs are not banks, and their permissions depend on their registration and category.',
    whyItMatters:
      'Students may encounter NBFCs in education, vehicle, consumer, or small-business finance. Knowing that the label covers different business models helps a first-jobber check what a lender is authorised to do and how its funding differs from a bank’s.',
    characteristics: [
      'Many NBFCs are registered companies that carry on specified financial activities under applicable RBI rules.',
      'Categories include investment and credit companies, microfinance-focused entities, and asset-finance businesses, among others.',
      'Housing finance, infrastructure finance, and other specialised activities may have distinct regulatory treatment.',
      'Some NBFCs lend; others may focus on investment, leasing, or a defined financial service.',
      'NBFCs generally cannot accept demand deposits like banks; only specifically permitted deposit-taking activity is allowed.',
      'RBI requirements can vary by activity, size, risk, and category and may change over time.',
      'Verify current registration and permitted activities with RBI before relying on a company’s claims.',
    ],
    example:
      'Illustrative example only: Sana, a first-jobber in Lucknow, needs a used laptop for work and studies. One fictional NBFC offers a ₹35,000 personal loan; another company in the market focuses on financing commercial vehicles. Both may be called NBFCs, but their business models, eligible customers, and risks can differ. Sana checks the lender’s registered name, applicable RBI status, interest and fee details, and repayment schedule. She also confirms whether the offer is actually a loan or another product. The NBFC label does not tell her that every company can take deposits, use the same licence, or offer the same protections. The names and amounts here are illustrative, not a product recommendation.',
    rememberThis:
      'NBFC is a broad category, not one business model. Permissions depend on the entity and current rules. It is not the same as a bank. Verify status and read product terms.',
    mcqs: [
      {
        question: 'What does the term NBFC tell you most reliably?',
        options: ['The company is a bank with a savings account licence', 'The company has no financial regulator', 'The company is a broad non-bank financial category; its specific activity depends on its permissions', 'The company’s loans carry no risk'],
        correctIndex: 2,
        explanation: 'The label alone does not establish a bank licence, product permission, or risk-free lending. Check the entity’s actual regulatory status.',
      },
      {
        question: 'Which is a possible NBFC business activity, depending on its category and permissions?',
        options: ['Issuing Indian currency notes', 'Asset finance or lending', 'Setting the RBI policy rate', 'Regulating every securities exchange'],
        correctIndex: 1,
        explanation: 'NBFC categories may cover lending, asset finance, investment, and other defined activities; they do not perform central-bank or securities-regulator functions.',
      },
      {
        question: 'What is a sensible way to assess an NBFC loan offer?',
        options: ['Assume all NBFCs have the same terms', 'Check only the app design', 'Ignore repayment timing if the EMI looks small', 'Verify the lender’s status and compare the full cost and repayment conditions'],
        correctIndex: 3,
        explanation: 'A borrower should verify the entity and review all costs and repayment obligations rather than infer suitability from the category or interface.',
      },
    ],
  },
]
