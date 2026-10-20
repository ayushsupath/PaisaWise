const moduleTitle = 'Money Basics for Students (Paisa Basics)'

export const module4Lessons = [
  {
    id: 'm4-t1',
    slug: 'needs-wants-student-cashflow',
    moduleId: 4,
    moduleTitle,
    category: 'personal',
    title: 'Needs, Wants, and Student Cash Flow',
    difficulty: 'Beginner',
    definition:
      'Needs are costs that support basic living or study, while wants are optional choices whose priority can differ from person to person. Cash flow is the money coming in and going out over a period.',
    whyItMatters:
      'Pocket money, a stipend, or a scholarship can seem sufficient until rent, food, travel, and small digital payments add up. Knowing what is essential and what is optional helps you make choices without guilt and plan for the timing of irregular income.',
    characteristics: [
      'List essentials such as shared-room rent, meals, transport, medicines, and course materials before planning flexible spending.',
      'A want is not automatically wasteful: a café visit or a hobby purchase may matter to you, but its priority is still a choice.',
      'Record all money received and spent for a month, including small cash purchases and Unified Payments Interface (UPI) payments.',
      'Allowance, stipend, and scholarship money may arrive on different schedules; plan around when it will actually be available.',
      'Review the plan after a change in classes, travel, income, or prices; a budget can make room for enjoyment.',
    ],
    example:
      'Illustration only, not financial advice: Aditi, a student in Pune, receives ₹10,000 in monthly allowance. She writes down ₹4,000 for meals, ₹1,500 for bus travel, and ₹1,000 for course materials and phone data. Over the month, she also spends ₹1,200 on café visits and delivery, often through UPI, plus ₹300 on a music subscription. Seeing the full ₹8,000 of listed spending helps her notice that the optional items are choices, not necessities. She decides to keep one café visit and review the subscription before renewal. Her remaining ₹2,000 is not automatically free money; she keeps some aside for a delayed allowance or an upcoming college expense.',
    rememberThis:
      'Track money coming in and going out. Separate essentials from flexible choices. Small digital payments count. Make a plan that can change.',
    mcqs: [
      {
        question: 'Which habit gives the clearest picture of where an allowance goes?',
        options: ['Guess at month-end', 'Track all inflows and expenses for a month', 'Ignore small digital payments', 'Count only cash withdrawals'],
        correctIndex: 1,
        explanation: 'Recording cash and digital payments alongside income shows the actual pattern instead of relying on memory.',
      },
      {
        question: 'Which statement about a want is most accurate?',
        options: ['It is always a waste of money', 'It is any payment made digitally', 'It is only an expensive purchase', 'It is an optional choice whose priority can vary'],
        correctIndex: 3,
        explanation: 'Wants can be meaningful and worthwhile; identifying them helps you decide intentionally how much room they get.',
      },
      {
        question: 'A student receives a scholarship only at the start of each term. What should they consider when planning?',
        options: ['When the money arrives, as well as how much arrives', 'Only the total amount for the whole year', 'That all wants become essential', 'That expenses stop between terms'],
        correctIndex: 0,
        explanation: 'Timing matters: money received irregularly needs to cover expenses across the periods before the next payment.',
      },
    ],
  },
  {
    id: 'm4-t2',
    slug: 'student-budgeting-methods',
    moduleId: 4,
    moduleTitle,
    category: 'personal',
    title: 'Budgeting Methods That Work for Students',
    difficulty: 'Beginner',
    definition:
      'A budget gives expected income a job by planning for essential costs, flexible spending, savings, and other priorities. The 50/30/20 framework, zero-based budgeting, and envelope budgeting are different ways to make that plan.',
    whyItMatters:
      'Student income may be modest or irregular, while rent, fees, and travel still have due dates. A method can help you decide what to do with an allowance or stipend before everyday purchases use it up.',
    characteristics: [
      'The 50/30/20 framework starts by allocating 50% to needs, 30% to wants, and 20% to savings or debt; it is a guide, not a rule.',
      'Zero-based budgeting assigns every rupee a purpose, including savings and a buffer, so planned income minus allocations equals zero.',
      'Envelope budgeting sets a separate limit for each category; envelopes can be physical, notes in an app, or separate account spaces.',
      'Build the plan using money you expect to receive and can actually access, rather than counting uncertain income as guaranteed.',
      'Adjust percentages and category limits to fit real rent, college costs, family support, local prices, and changing income.',
    ],
    example:
      'Illustration only, not financial advice: Rohan in Jaipur has ₹12,000 available for the month. A simple 50/30/20 reference would be ₹6,000 for needs, ₹3,600 for wants, and ₹2,400 for savings or debt, but his actual essentials cost more than that needs share. He uses a zero-based plan instead: ₹7,000 for essentials, ₹1,500 for flexible spending, ₹1,500 for savings, ₹1,000 for an upcoming course fee, and ₹1,000 as a buffer. These add to ₹12,000. He then treats the categories like envelopes, checking the remaining flexible amount before ordering food. The example shows how to adapt a framework, not a recommended split.',
    rememberThis:
      'Choose a method you will review. Give every rupee a purpose. Use envelopes as category limits. Treat percentages as flexible guides.',
    mcqs: [
      {
        question: 'In zero-based budgeting, what does a planned balance of zero mean?',
        options: ['Every rupee has an assigned purpose', 'You must spend all your money', 'You have no savings', 'Your bank account must be empty'],
        correctIndex: 0,
        explanation: 'Zero means no income is left unassigned; savings and a buffer can both be assigned purposes.',
      },
      {
        question: 'How should a student use the 50/30/20 framework?',
        options: ['As a fixed rule for every student', 'As a starting guide to adapt to actual costs', 'As a promise of investment returns', 'As a way to calculate tax'],
        correctIndex: 1,
        explanation: 'The framework can prompt a plan, but rent, income, and essential costs differ, so the shares may need adjustment.',
      },
      {
        question: 'What is the main purpose of envelope budgeting?',
        options: ['To make every category spend the same amount', 'To keep all money as cash at home', 'To set and monitor a limit for each spending category', 'To avoid recording purchases'],
        correctIndex: 2,
        explanation: 'An envelope or digital equivalent makes a category’s spending limit visible as the month progresses.',
      },
    ],
  },
  {
    id: 'm4-t3',
    slug: 'emergency-fund-inflation',
    moduleId: 4,
    moduleTitle,
    category: 'personal',
    title: 'Emergency Savings and Inflation',
    difficulty: 'Beginner',
    definition:
      'An emergency fund is money kept accessible for an unexpected essential cost or disruption to income. Inflation is a broad rise in prices over time, which can reduce what the same amount of money can buy.',
    whyItMatters:
      'A medical cost, a broken study laptop, or a delayed stipend can leave little time to find money and may lead to borrowing. At the same time, money kept for years without considering access and rising prices may buy less in the future.',
    characteristics: [
      'Build a safety buffer gradually; a target based on a number of months of essential costs is a flexible planning guide, not a fixed prescription.',
      'Choose a target that reflects your regular essentials, income reliability, family or other support, and how quickly you could access help.',
      'Keep emergency money separate from everyday spending and accessible enough for a genuine urgent expense.',
      'A regulated bank savings account or another simple, low-risk option may offer access; check its terms, fees, risks, and protections before choosing.',
      'Inflation can reduce purchasing power over time, while products with higher potential returns may also involve risk or restricted access.',
      'Avoid putting money needed for emergencies into an option that could lose value or cannot be reached promptly.',
    ],
    example:
      'Illustration only, not financial advice: Meera, a student in Kochi, estimates that her essential monthly costs are about ₹9,000: ₹4,000 for her hostel, ₹3,000 for meals, and ₹2,000 for transport and medicines. She considers a target expressed in months of those costs, but treats it as a planning guide rather than a required exact number. Because her stipend can be delayed and her family support is limited, she begins setting aside ₹500 when money arrives and checks that the savings remain accessible. She does not assume this amount suits everyone. She also remembers that if prices rise, ₹9,000 may not cover the same essentials later, so she reviews the estimate over time.',
    rememberThis:
      'Build gradually. Use months of essential costs only as a flexible guide. Prioritise access and safety. Remember that inflation changes purchasing power.',
    mcqs: [
      {
        question: 'What is the main purpose of an emergency fund?',
        options: ['To chase the highest possible return', 'To pay for every planned holiday', 'To replace all insurance', 'To help cover an unexpected essential expense'],
        correctIndex: 3,
        explanation: 'An emergency fund is a reachable buffer for urgent essential costs, not a return-maximising investment or replacement for every protection.',
      },
      {
        question: 'Why might a student use months of essential costs as a flexible savings target?',
        options: ['It is an exact rule that suits every person', 'It connects the buffer to likely essential spending while leaving room for personal circumstances', 'It guarantees that no emergency will happen', 'It means all savings must be invested'],
        correctIndex: 1,
        explanation: 'Essential costs offer a practical reference, but income reliability, support, and access to help affect what is suitable.',
      },
      {
        question: 'How can inflation affect money set aside for future expenses?',
        options: ['It can make the same amount buy less as prices rise', 'It guarantees that every savings product loses money', 'It makes all prices fall', 'It ensures cash doubles in value'],
        correctIndex: 0,
        explanation: 'When prices rise broadly, the same amount of money generally buys fewer goods and services.',
      },
    ],
  },
  {
    id: 'm4-t4',
    slug: 'spending-habits-and-splitting-bills',
    moduleId: 4,
    moduleTitle,
    category: 'personal',
    title: 'Spending Habits, Subscriptions, and Split Bills',
    difficulty: 'Beginner',
    definition:
      'Spending habits are repeated choices about how money is used. A subscription is a recurring payment, impulse spending happens with little planning, and splitting a bill means agreeing how a shared cost is divided.',
    whyItMatters:
      'Small renewals, quick purchases, and social plans can quietly use money meant for travel or study costs. A pause before buying and a clear agreement about shared bills can reduce regret and awkwardness without ruling out fun.',
    characteristics: [
      'Review recurring subscriptions and free-trial renewal dates; cancel a service in time if you no longer want it.',
      'For an impulse purchase, pause and compare the price with a planned goal or an upcoming essential bill.',
      'Fear of missing out (FOMO) can make a trend or group plan feel urgent; decide whether it fits your own priorities and budget.',
      'A planned treat can fit a budget, but avoid turning “treat yourself” into automatic borrowing or repeated unplanned spending.',
      'Agree how to split a shared bill before ordering, and check the amount and recipient before paying through Unified Payments Interface (UPI).',
      'Keep a simple note of who paid and what each person owes; settle shared costs clearly and respectfully.',
    ],
    example:
      'Illustration only, not financial advice: Kabir, a student in Indore, sees friends ordering a ₹900 meal and feels fear of missing out (FOMO), but checks his plan before joining. The group agrees beforehand to split a separate ₹1,200 shared snack equally among four people, which is ₹300 each. Kabir checks the amount and recipient before paying. Later, he notices a ₹199 monthly over-the-top (OTT) subscription renewing and a ₹250 impulse purchase he made after seeing a trend online. He checks whether he still uses the service and decides what fits next month’s plan. The figures are illustrative; the point is to pause, check recurring costs, and agree on shared amounts before sending money.',
    rememberThis:
      'Check renewals before they charge. Pause on impulse and FOMO spending. Agree on the split first. Verify the amount and recipient.',
    mcqs: [
      {
        question: 'What is a helpful way to avoid an unwanted subscription charge?',
        options: ['Check the renewal terms and cancel in time if you do not want it', 'Ignore the renewal date', 'Share your payment PIN with a friend', 'Assume a free trial cannot charge you'],
        correctIndex: 0,
        explanation: 'Knowing the renewal date and terms gives you time to decide whether to keep or cancel the service.',
      },
      {
        question: 'A student feels pressure to buy something because friends are buying it. What is a useful first step?',
        options: ['Borrow immediately so they do not miss out', 'Buy it without checking the price', 'Pause and compare it with personal priorities and the budget', 'Assume every trend is essential'],
        correctIndex: 2,
        explanation: 'Pausing helps separate social pressure from what the student actually values and can afford.',
      },
      {
        question: 'Four friends agree to split a ₹1,200 shared bill equally. How much does each person owe?',
        options: ['₹200', '₹300', '₹400', '₹600'],
        correctIndex: 1,
        explanation: '₹1,200 divided equally among four people is ₹300 per person; confirming the split avoids confusion.',
      },
    ],
  },
]
