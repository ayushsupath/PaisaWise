const moduleTitle = 'Digital Payments & Staying Safe'

export const module5Lessons = [
  {
    id: 'm5-t1',
    slug: 'upi-wallets-cards-basics',
    moduleId: 5,
    moduleTitle,
    category: 'safety',
    title: 'UPI, Wallets, and Cards: Payment Basics',
    difficulty: 'Beginner',
    definition:
      'The Unified Payments Interface (UPI) lets you send money bank-to-bank through a participating app. A wallet holds stored value under its provider’s terms. Debit and credit cards use card networks; debit spends money in your bank account, while credit is borrowed money to repay.',
    whyItMatters:
      'Knowing where money comes from helps you choose a payment method and understand what you are approving. UPI, wallets, and cards have different terms. Charges and daily transaction limits can depend on your bank, app, card, and transaction type, so check current official app or bank terms rather than relying on a general promise.',
    characteristics: [
      'UPI transfers move money between bank accounts; check the recipient name and amount before authorising a payment.',
      'Wallet value is governed by the provider’s rules and may have loading, usage, or withdrawal conditions.',
      'Debit-card spending comes from your bank account; credit-card spending is borrowing that appears on a bill.',
      'Charges, free-use conditions, and daily limits vary by provider, bank, account, and transaction; check current official terms.',
      'A payment request asks you to pay: do not approve one you did not start or do not understand.',
      'Keep transaction alerts enabled and report an unauthorised transaction promptly using official contact details.',
    ],
    example:
      'Illustrative example only: Riya, a first-year student in Jaipur, buys a notebook and lunch for a total of ₹480. She opens her bank’s UPI app, checks that the displayed merchant and amount are correct, and pays from her linked account. Her friend Kabir offers to use a wallet for a ₹200 bus pass; they check the wallet’s current terms before loading it. Riya also has a debit card, which would draw from her bank balance, and a credit card belonging to her parent, which would create a bill to repay. She checks the app and bank terms instead of assuming every method is free or that one daily limit applies everywhere.',
    rememberThis:
      'UPI moves money bank-to-bank; wallet balances follow provider terms. Debit spends your money, while credit is borrowing. Charges and limits vary, so check current official terms. Verify the recipient and amount before paying.',
    mcqs: [
      {
        question: 'What generally happens when you make a UPI payment?',
        options: ['Money moves between linked bank accounts', 'A credit-card loan is always created', 'Cash is added to any wallet automatically', 'The payment is guaranteed to be free'],
        correctIndex: 0,
        explanation: 'UPI enables bank-to-bank payments; the app shows the payment details to verify before you authorise it.',
      },
      {
        question: 'Which statement best describes a credit-card purchase?',
        options: ['It is a gift from the bank', 'It is borrowing that must be repaid under the card terms', 'It is always a debit from a wallet', 'It has no bill or due date'],
        correctIndex: 1,
        explanation: 'A credit-card purchase creates a balance owed to the issuer, with repayment governed by the card agreement.',
      },
      {
        question: 'How should you find out about your UPI daily limit or applicable charges?',
        options: ['Rely on a friend’s old screenshot', 'Assume all banks have the same rules', 'Check your bank’s and app’s current official terms', 'Assume every transaction is free'],
        correctIndex: 2,
        explanation: 'Limits and charges depend on the bank, app, account, and transaction, and can change; confirm with current official sources.',
      },
    ],
  },
  {
    id: 'm5-t2',
    slug: 'kyc-aadhaar-pan-and-secrets',
    moduleId: 5,
    moduleTitle,
    category: 'safety',
    title: 'KYC, Aadhaar, PAN, and What to Keep Private',
    difficulty: 'Beginner',
    definition:
      'KYC (Know Your Customer) is a process financial providers use to verify identity and, where required, other customer details. Aadhaar and PAN can be requested for specific identity or tax-related purposes under applicable rules; they are not a reason to share every personal detail with anyone who asks.',
    whyItMatters:
      'You may need KYC for a bank account, payment service, job payroll, or investment account. Understanding why a document is needed—and using a verified channel—helps you complete legitimate checks while protecting information that could be misused.',
    characteristics: [
      'Complete KYC only through the provider’s official app, website, or branch, and check that the service is genuine.',
      'Ask why a document is needed and share only what the verified service requires for that purpose.',
      'Never tell anyone an OTP, UPI PIN, card PIN, CVV, password, or account passcode.',
      'Do not grant a caller screen-sharing or remote-access control; it can expose private information or let them operate your device.',
      'An OTP is for you to enter in the genuine flow you initiated, not to read out to a caller or message to someone.',
      'If a request is rushed or unexpected, stop and contact the provider through contact details you find independently.',
    ],
    example:
      'Illustrative example only: Aarav, who has just started a job in Indore with an illustrative monthly salary of ₹28,000, receives a message saying his salary account will be frozen unless he completes KYC in ten minutes. The link opens a page that asks for his PAN, Aadhaar details, an OTP, and permission to share his screen. He does not enter anything or install an app. Instead, Aarav opens his bank’s official app himself and checks for a notice. Finding none, he contacts the bank using its verified number and asks whether any KYC update is due. He shares documents only if the bank confirms a genuine requirement and never tells anyone an OTP, PIN, CVV, or password.',
    rememberThis:
      'KYC has a specific verification purpose; use a provider’s verified channel. Share only the documents genuinely required. Never reveal OTPs, PINs, CVV, or passwords. Never provide screen-sharing or remote-access control to a caller.',
    mcqs: [
      {
        question: 'A caller says they need your OTP to finish KYC. What is the safest response?',
        options: ['Read it out before it expires', 'Share your UPI PIN as well', 'Do not share it; verify the request through the provider’s official channel', 'Install the caller’s screen-sharing app'],
        correctIndex: 2,
        explanation: 'A genuine process may ask you to enter an OTP in a verified flow you started, but you should never disclose it to a caller.',
      },
      {
        question: 'What is a sensible way to share a document for KYC?',
        options: ['Send every document to any caller', 'Use the verified provider channel and share only what is required', 'Post it in a public group', 'Share it with a stranger offering faster service'],
        correctIndex: 1,
        explanation: 'A verified channel and purpose-limited sharing reduce unnecessary exposure of sensitive information.',
      },
      {
        question: 'Why should you refuse an unexpected request for screen-sharing access?',
        options: ['It can expose private information or give someone control of your device', 'It proves your identity safely in every case', 'It is required for all bank transfers', 'It hides your payment history from the bank'],
        correctIndex: 0,
        explanation: 'Remote access can expose data or let another person act on your device, so do not grant it to an unsolicited caller.',
      },
    ],
  },
  {
    id: 'm5-t3',
    slug: 'common-digital-scams',
    moduleId: 5,
    moduleTitle,
    category: 'safety',
    title: 'Common Digital Scams for Students',
    difficulty: 'Beginner',
    definition:
      'A digital scam uses deception through messages, calls, payment requests, or fake opportunities to obtain money, account access, or personal information.',
    whyItMatters:
      'Students and people starting work may encounter fake KYC alerts, phishing links, QR collect requests, job-fee demands, task-based work-from-home offers, and abusive digital loan apps. Recognising the pattern gives you time to pause and verify; a suspicious message can be checked without blaming yourself for receiving it.',
    characteristics: [
      'Phishing messages imitate a bank, delivery service, or employer and send you to a look-alike page; verify through the official app or website.',
      'A QR code or UPI collect request can ask you to pay; scanning a code does not itself mean you will receive money.',
      'A fake KYC call may create urgency and ask for an OTP, PIN, password, or remote access; do not disclose secrets.',
      'Treat unexplained upfront fees for an internship or job as a warning sign; verify the employer independently before paying or sharing documents.',
      'Task-based work-from-home scams may offer small early rewards, then demand deposits to unlock tasks or withdraw supposed earnings.',
      'Some abusive digital loan apps use pressure, threats, or unnecessary contact access; check the actual lender and terms and seek help through official channels.',
    ],
    example:
      'Illustrative example only: Meera, a college student in Lucknow, sees a “campus internship” post offering ₹8,000 for a week of online work. A recruiter asks her to pay a ₹500 registration fee and send an Aadhaar photo over chat. Later, another message offers ₹300 for rating products, then asks for a ₹2,000 deposit to unlock more tasks. Meera pauses, searches for the employer’s contact details independently, and asks her college placement office to verify the role. She does not pay or send documents through chat. When a QR “refund” request appears, she recognises it may be asking her to pay, not receive money, and does not approve it.',
    rememberThis:
      'Pause when a message creates urgency or asks for secrets. A QR or collect request can ask you to pay, not receive. Verify jobs independently before paying fees or sending documents. Do not deposit money to unlock task earnings.',
    mcqs: [
      {
        question: 'A QR code message says “scan to receive your refund,” but the app shows a request to approve a payment. What should you do?',
        options: ['Approve it quickly', 'Stop; verify independently because it is a request to pay', 'Tell the sender your OTP', 'Forward the QR code to friends'],
        correctIndex: 1,
        explanation: 'A collect request asks the account holder to pay. Do not approve a request you did not initiate and understand.',
      },
      {
        question: 'A work-from-home offer asks you to deposit ₹2,000 before you can withdraw task earnings. What is the best next step?',
        options: ['Borrow the money and deposit it', 'Share your password to prove trust', 'Pause and verify the company; do not pay to unlock supposed earnings', 'Pay because an earlier task paid a small reward'],
        correctIndex: 2,
        explanation: 'A small initial reward does not prove an offer is genuine; a deposit demanded to unlock tasks or earnings is a reason to stop and verify.',
      },
      {
        question: 'A recruiter asks for an unexplained fee and identity document through chat. What should you do?',
        options: ['Verify the employer through independently found official contacts before sharing or paying', 'Send the document to show enthusiasm', 'Pay first and check later', 'Share an OTP to reserve the role'],
        correctIndex: 0,
        explanation: 'Independent verification helps you assess the role and request before exposing documents or money.',
      },
    ],
  },
  {
    id: 'm5-t6',
    slug: 'finfluencers-and-investment-tip-scams',
    moduleId: 5,
    moduleTitle,
    category: 'safety',
    title: 'Finfluencers, Tip Groups, and Market Manipulation',
    difficulty: 'Beginner',
    definition:
      'A finfluencer shares finance or investment content online. Some explain general concepts, while others may give paid, biased, or unregistered advice. Pump-and-dump schemes try to build excitement around a security, encourage people to buy, and then benefit when promoters sell.',
    whyItMatters:
      'Popular posts, screenshots of profits, and private chat groups are not proof that a person is qualified or that a claim is reliable. Learning to check registration and incentives can help you make independent decisions without treating online content as a personal recommendation.',
    characteristics: [
      'Be cautious of guaranteed returns, urgent “buy now” messages, secret tips, or claims that a loss is impossible.',
      'Check whether someone offering investment advice is appropriately registered; verify current details through sebi.gov.in rather than relying on a badge or screenshot.',
      'Ask whether the creator is paid, holds the promoted asset, or benefits if followers buy or sell.',
      'Pump-and-dump groups can promote a security to attract buyers and then sell into that demand; do not coordinate trades based on chat instructions.',
      'Separate general financial education from personalised investment advice and verify important claims using reliable sources.',
      'Do not share brokerage passwords, OTPs, or screen access, and do not borrow money because an online group predicts a rise.',
    ],
    example:
      'Illustrative example only: Dev, a first-job employee in Mumbai, joins a chat group that says a small-company share will “definitely” rise from ₹40 to ₹80 by Friday. The group posts profit screenshots and asks members to buy ₹5,000 worth immediately, but gives no reliable evidence or risk discussion. Dev notices the urgency and asks whether the promoter is registered and paid to promote the share. He checks registration information through sebi.gov.in and finds that a screenshot in the chat is not verification. He does not act on the group’s instruction, does not share brokerage access, and looks for independent, trustworthy information before making any investment decision.',
    rememberThis:
      'No online tip can guarantee a return. Check investment-adviser registration at sebi.gov.in. Look for incentives and pump-and-dump warning signs. Do not treat a group message as personalised advice or share account access.',
    mcqs: [
      {
        question: 'Where should you check current registration details for someone offering investment advice in India?',
        options: ['A tip group’s pinned message', 'A profit screenshot', 'sebi.gov.in', 'An anonymous poll'],
        correctIndex: 2,
        explanation: 'Use SEBI’s official website to check relevant registration information; screenshots and group claims are not reliable proof.',
      },
      {
        question: 'What is a typical pump-and-dump warning pattern?',
        options: ['A promoter urges everyone to buy, then sells into the demand they created', 'A bank explains how to read a statement', 'An investor compares fees before deciding', 'A company publishes audited information'],
        correctIndex: 0,
        explanation: 'Promoters may create demand with hype and then sell, leaving later buyers exposed to a falling price.',
      },
      {
        question: 'A tip group claims a share is guaranteed to double and says to buy immediately. What is the most sensible response?',
        options: ['Borrow money to buy more', 'Ask the group for your account password', 'Treat the claim as certain because many people posted it', 'Pause, verify the source and incentives, and do not rely on a guarantee'],
        correctIndex: 3,
        explanation: 'Guaranteed-return claims and pressure are warning signs; check sources and make decisions independently.',
      },
    ],
  },
  {
    id: 'm5-t4',
    slug: 'what-to-do-after-a-scam',
    moduleId: 5,
    moduleTitle,
    category: 'safety',
    title: 'What to Do If You Suspect a Scam',
    difficulty: 'Beginner',
    definition:
      'Incident response means taking prompt, practical steps after suspected fraud: notify the bank or payment provider, report through official channels, secure affected accounts, and preserve evidence.',
    whyItMatters:
      'Acting quickly gives the bank and authorities information to investigate and may help them take action; no outcome is guaranteed. Reporting is useful even if you are unsure what happened. Official channels can guide next steps, while people promising guaranteed recovery may be trying to exploit the situation again.',
    characteristics: [
      'Contact your bank or payment provider immediately using verified contact details and ask them to secure affected access or transactions.',
      'For financial cyber fraud in India, call helpline 1930 promptly and follow the official reporting process at cybercrime.gov.in.',
      'Keep transaction IDs, timestamps, messages, phone numbers, screenshots, and complaint references; do not delete evidence.',
      'Change compromised passwords or PINs through trusted official channels, and do not share replacement OTPs or credentials.',
      'Follow up with the bank and keep acknowledgement or ticket numbers for each report.',
      'Avoid recovery agents who promise a guaranteed refund in exchange for fees, OTPs, PINs, or remote access; ask a trusted person for support if needed.',
    ],
    example:
      'Illustrative example only: Nikhil, a first-job employee in Bhopal, notices an unauthorised UPI payment of ₹3,200. He immediately calls his bank using the number in its official app and asks it to secure his account and record the transaction. He then calls 1930 and follows the reporting steps at cybercrime.gov.in, saving the transaction ID, time, messages, and complaint acknowledgements. He changes any compromised credentials through the bank’s verified process and tells a trusted family member. Someone later offers to recover the ₹3,200 for a fee and requests an OTP; Nikhil refuses and shares the offer details with his bank.',
    rememberThis:
      'Contact your bank or payment provider immediately through verified details. Call 1930 and report at cybercrime.gov.in. Save messages, transaction details, and complaint references. Do not pay recovery agents or share secrets.',
    mcqs: [
      {
        question: 'You notice a payment you did not authorise. What should you do first?',
        options: ['Delete the transaction alert', 'Contact your bank or payment provider promptly through verified details', 'Wait a month to see what happens', 'Pay a recovery agent'],
        correctIndex: 1,
        explanation: 'Promptly contacting the provider gives it the details needed to secure access and begin its process.',
      },
      {
        question: 'Which official channels are used in India to report financial cyber fraud?',
        options: ['A social-media poll and a private group', 'Only a message to the suspected caller', 'Helpline 1930 and cybercrime.gov.in', 'A paid recovery service'],
        correctIndex: 2,
        explanation: 'Call 1930 promptly and follow the official process at cybercrime.gov.in; also notify your bank or payment provider.',
      },
      {
        question: 'What evidence is useful to preserve after suspected fraud?',
        options: ['Transaction IDs, timestamps, messages, and complaint references', 'Only an edited screenshot with details removed', 'Nothing; delete all messages', 'A recovery agent’s request for your PIN'],
        correctIndex: 0,
        explanation: 'Accurate records can help the bank and authorities understand and investigate what happened.',
      },
    ],
  },
  {
    id: 'm5-t5',
    slug: 'bnpl-and-digital-lending',
    moduleId: 5,
    moduleTitle,
    category: 'safety',
    title: 'BNPL and Digital Lending: Convenience and Repayment',
    difficulty: 'Intermediate',
    definition:
      'Buy Now, Pay Later (BNPL) defers payment through a credit arrangement with repayment obligations. A digital loan is money borrowed from a lender through an online process. The app or checkout screen may be a platform; identify the actual lender and read the agreement.',
    whyItMatters:
      'Paying later is still borrowing, not extra income or automatically a discount. Interest, fees, late consequences, repayment dates, and credit reporting depend on the specific lender and agreement. Knowing the full cost and whether reliable future income can cover repayments helps you avoid taking on obligations you cannot manage.',
    characteristics: [
      'Before accepting credit, identify the actual lender and read the key terms and loan agreement.',
      'Check the total amount repayable, any interest and fees, due dates, instalment schedule, and consequences of late or missed payments.',
      'BNPL and instant loans are borrowing; compare the full cost with the upfront price and do not decide from the instalment amount alone.',
      'Borrow only when you understand the obligation and have a realistic repayment plan based on reliable income.',
      'Check the lender and current regulatory guidance using official sources, including the relevant RBI information; app-store presence alone is not proof.',
      'Do not grant unnecessary contact or screen access; document and report abusive conduct through the lender’s official grievance process and appropriate official channels.',
    ],
    example:
      'Illustrative example only: Sana, a first-job employee in Chennai, considers a device priced at ₹12,000 upfront or a digital loan showing four monthly instalments of ₹3,200. She calculates that the instalments total ₹12,800, before checking whether any other fee or charge applies. Sana reads the agreement to identify the actual lender, due dates, late-payment terms, and total cost. She checks whether her expected salary after rent and essentials can cover each payment and compares it with waiting and saving. She does not treat the smaller first instalment as a discount or extra income, and she declines until she understands every charge and repayment obligation.',
    rememberThis:
      'BNPL and instant loans are credit, not extra income. Identify the lender and read the agreement. Compare total repayment, fees, due dates, and late terms. Borrow only with a realistic repayment plan.',
    mcqs: [
      {
        question: 'How should BNPL be understood?',
        options: ['A guaranteed discount', 'Extra income with no obligation', 'A credit arrangement that must be repaid under its terms', 'A savings account'],
        correctIndex: 2,
        explanation: 'BNPL defers payment but creates a repayment obligation under the agreement.',
      },
      {
        question: 'Before accepting an instant digital loan, what should you check?',
        options: ['Only the app logo and instalment amount', 'The actual lender, total cost, fees, due dates, and late terms', 'A friend’s account PIN', 'A promise that your credit score will rise'],
        correctIndex: 1,
        explanation: 'The lender and full agreement—not just the displayed instalment—show what you owe and when.',
      },
      {
        question: 'A device costs ₹12,000 upfront or four instalments of ₹3,200. What is the first useful comparison?',
        options: ['The instalments total ₹12,800, and the full agreement may include other costs', 'The instalment choice is automatically free', 'Only the first ₹3,200 matters', 'Any app offering instalments is a bank'],
        correctIndex: 0,
        explanation: 'Four instalments of ₹3,200 total ₹12,800; check the agreement for all costs and conditions before deciding.',
      },
    ],
  },
]
