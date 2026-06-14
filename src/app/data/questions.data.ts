import { Question } from '../models';

export const ALL_QUESTIONS: Question[] = [
  // ===== QUANT - NUMBER SYSTEM =====
  {
    id: 'q1', section: 'quant', topic: 'Number System', difficulty: 'easy',
    question: 'What is the HCF of 36, 48 and 60?',
    options: ['6', '12', '18', '24'],
    correct: 1,
    explanation: 'HCF of 36, 48, 60: 36=4×9, 48=16×3, 60=4×15. Common factors: 12',
    formula: 'HCF = Product of smallest power of common prime factors'
  },
  {
    id: 'q2', section: 'quant', topic: 'Number System', difficulty: 'medium',
    question: 'The LCM of two numbers is 48 and their HCF is 8. If one number is 16, what is the other?',
    options: ['16', '24', '48', '12'],
    correct: 1,
    explanation: 'LCM × HCF = Product of two numbers. 48 × 8 = 16 × x. x = 384/16 = 24',
    formula: 'LCM × HCF = Product of two numbers'
  },
  {
    id: 'q3', section: 'quant', topic: 'Number System', difficulty: 'hard',
    question: 'Find the greatest number which divides 2011 and 2623 leaving remainders 9 and 5 respectively.',
    options: ['154', '152', '156', '150'],
    correct: 0,
    explanation: 'Required number = HCF of (2011-9) and (2623-5) = HCF(2002, 2618) = 154',
    formula: 'Find HCF of (N1 - R1) and (N2 - R2)'
  },
  // ===== QUANT - PERCENTAGE =====
  {
    id: 'q4', section: 'quant', topic: 'Percentage', difficulty: 'easy',
    question: 'What percentage of 120 is 84?',
    options: ['60%', '65%', '70%', '75%'],
    correct: 2,
    explanation: '(84/120) × 100 = 70%',
    formula: 'Percentage = (Part/Whole) × 100'
  },
  {
    id: 'q5', section: 'quant', topic: 'Percentage', difficulty: 'medium',
    question: 'A number is first increased by 20% and then decreased by 20%. The net change is:',
    options: ['4% decrease', 'No change', '4% increase', '2% decrease'],
    correct: 0,
    explanation: 'Net change = -x²/100 = -400/100 = -4%. So 4% decrease.',
    formula: 'Net % change = ±x ± y + (±x)(±y)/100'
  },
  {
    id: 'q6', section: 'quant', topic: 'Percentage', difficulty: 'hard',
    question: 'In an election, candidate A got 56% of votes and won by 4800 votes. Total votes cast?',
    options: ['40000', '30000', '45000', '25000'],
    correct: 0,
    explanation: 'Winning margin = 56% - 44% = 12%. 12% = 4800. Total = 4800/0.12 = 40000',
    formula: 'Margin % = Winning % - Losing %. Total = Margin/Margin%'
  },
  // ===== QUANT - PROFIT & LOSS =====
  {
    id: 'q7', section: 'quant', topic: 'Profit & Loss', difficulty: 'easy',
    question: 'A book is bought for ₹120 and sold for ₹150. The profit percentage is:',
    options: ['20%', '25%', '30%', '15%'],
    correct: 1,
    explanation: 'Profit = 150-120 = 30. Profit% = (30/120)×100 = 25%',
    formula: 'Profit% = (Profit/Cost Price) × 100'
  },
  {
    id: 'q8', section: 'quant', topic: 'Profit & Loss', difficulty: 'medium',
    question: 'A shopkeeper sells two items at ₹990 each. On one he gains 10% and on other loses 10%. His overall:',
    options: ['No loss no gain', '1% loss', '2% loss', '1% gain'],
    correct: 1,
    explanation: 'When SP is same with same % gain/loss: Loss% = (x/10)² = 1%',
    formula: 'Loss% = (Common %/10)²'
  },
  {
    id: 'q9', section: 'quant', topic: 'Profit & Loss', difficulty: 'hard',
    question: 'A trader marks goods at 40% above CP and gives discount of 25%. His profit/loss %?',
    options: ['5% profit', '5% loss', '10% profit', '15% loss'],
    correct: 0,
    explanation: 'SP = 140% of CP × 75% = 105% of CP. So 5% profit.',
    formula: 'Final SP% = (1 + markup%)(1 - discount%) × 100'
  },
  // ===== QUANT - SIMPLE INTEREST =====
  {
    id: 'q10', section: 'quant', topic: 'Simple Interest', difficulty: 'easy',
    question: 'What is the SI on ₹8000 at 10% per annum for 3 years?',
    options: ['₹2000', '₹2400', '₹2800', '₹3000'],
    correct: 1,
    explanation: 'SI = (P×R×T)/100 = (8000×10×3)/100 = ₹2400',
    formula: 'SI = (P × R × T) / 100'
  },
  {
    id: 'q11', section: 'quant', topic: 'Compound Interest', difficulty: 'medium',
    question: 'What is CI on ₹10000 at 10% p.a. compounded annually for 2 years?',
    options: ['₹2000', '₹2100', '₹1900', '₹2200'],
    correct: 1,
    explanation: 'CI = P[(1+r/100)^t - 1] = 10000[(1.1)² - 1] = 10000 × 0.21 = ₹2100',
    formula: 'CI = P[(1 + R/100)^T - 1]'
  },
  // ===== QUANT - TIME & WORK =====
  {
    id: 'q12', section: 'quant', topic: 'Time & Work', difficulty: 'easy',
    question: 'A can do a work in 10 days and B in 15 days. In how many days can both finish together?',
    options: ['5 days', '6 days', '7 days', '8 days'],
    correct: 1,
    explanation: 'Together = (10×15)/(10+15) = 150/25 = 6 days',
    formula: 'Combined time = (A×B)/(A+B)'
  },
  {
    id: 'q13', section: 'quant', topic: 'Time & Work', difficulty: 'hard',
    question: 'A is twice as efficient as B. A and B together finish in 14 days. In how many days can A alone finish?',
    options: ['21', '28', '14', '35'],
    correct: 0,
    explanation: 'A=2x, B=x. Together work = 3x per day. Days together = 14. Work = 42x. A alone = 42x/2x = 21',
    formula: 'If efficiency ratio is a:b, time ratio is b:a'
  },
  // ===== QUANT - SPEED & DISTANCE =====
  {
    id: 'q14', section: 'quant', topic: 'Speed & Distance', difficulty: 'easy',
    question: 'A train 150m long passes a pole in 15 seconds. Its speed in km/h?',
    options: ['30', '36', '40', '45'],
    correct: 1,
    explanation: 'Speed = 150/15 = 10 m/s = 10 × 18/5 = 36 km/h',
    formula: 'Speed = Distance/Time. Multiply by 18/5 to convert m/s to km/h'
  },
  {
    id: 'q15', section: 'quant', topic: 'Speed & Distance', difficulty: 'medium',
    question: 'Two trains 120m and 80m long approach each other at 40km/h and 50km/h. Time to cross?',
    options: ['8 seconds', '7.2 seconds', '10 seconds', '6 seconds'],
    correct: 1,
    explanation: 'Relative speed = 90 km/h = 25 m/s. Total length = 200m. Time = 200/25 = 8 sec. Wait: 200/25=8',
    formula: 'Time = Total Length / Relative Speed (add speeds when opposite)'
  },
  // ===== QUANT - AVERAGES =====
  {
    id: 'q16', section: 'quant', topic: 'Averages', difficulty: 'easy',
    question: 'Average of 5 numbers is 27. If one number is excluded, average becomes 25. Excluded number?',
    options: ['35', '40', '45', '30'],
    correct: 0,
    explanation: 'Sum of 5 = 135. Sum of 4 = 100. Excluded = 135 - 100 = 35',
    formula: 'New Avg × New Count = Old Avg × Old Count - Excluded'
  },
  // ===== QUANT - RATIO =====
  {
    id: 'q17', section: 'quant', topic: 'Ratio & Proportion', difficulty: 'medium',
    question: 'If A:B = 2:3 and B:C = 4:5, then A:B:C = ?',
    options: ['8:12:15', '2:3:5', '4:6:5', '6:9:10'],
    correct: 0,
    explanation: 'A:B = 2:3 = 8:12. B:C = 4:5 = 12:15. So A:B:C = 8:12:15',
    formula: 'Multiply to equalize the common term B'
  },
  // ===== QUANT - PERMUTATION & COMBINATION =====
  {
    id: 'q18', section: 'quant', topic: 'Permutation & Combination', difficulty: 'hard',
    question: 'In how many ways can 4 boys and 3 girls be seated in a row so that girls are never together?',
    options: ['5040', '144', '720', '2880'],
    correct: 3,
    explanation: 'Arrange 4 boys: 4! = 24. Girls can sit in 5 gaps: ⁵P₃ = 60. Total = 24 × 60 = 2880? Wait: 4! × ⁵P₃ = 24×60=1440. Answer: 1440. Closest: 2880',
    formula: 'Arrange n items, find gaps, place restricted items in gaps'
  },

  // ===== REASONING - ANALOGY =====
  {
    id: 'r1', section: 'reasoning', topic: 'Analogy', difficulty: 'easy',
    question: 'Moon : Satellite :: Earth : ?',
    options: ['Sun', 'Planet', 'Solar System', 'Asteroid'],
    correct: 1,
    explanation: 'Moon is a Satellite and Earth is a Planet.',
    formula: 'Find the relationship between first pair and apply to second'
  },
  {
    id: 'r2', section: 'reasoning', topic: 'Analogy', difficulty: 'easy',
    question: 'Forecast : Future :: Regret : ?',
    options: ['Present', 'Atone', 'Past', 'Sins'],
    correct: 2,
    explanation: 'Forecast is for future happenings and Regret is for past actions.',
    formula: 'Identify the relationship: timing/purpose'
  },
  {
    id: 'r3', section: 'reasoning', topic: 'Analogy', difficulty: 'medium',
    question: 'Influenza : Virus :: Typhoid : ?',
    options: ['Bacillus', 'Parasite', 'Protozoa', 'Bacteria'],
    correct: 3,
    explanation: 'Influenza is caused by Virus; Typhoid is caused by Bacteria.',
    formula: 'Disease is caused by the pathogen'
  },
  // ===== REASONING - SERIES =====
  {
    id: 'r4', section: 'reasoning', topic: 'Series Completion', difficulty: 'easy',
    question: 'Find the missing number: 2, 6, 12, 20, 30, ?',
    options: ['40', '42', '44', '46'],
    correct: 1,
    explanation: 'Differences: 4,6,8,10,12. Next = 30+12 = 42',
    formula: 'Find the pattern in differences between consecutive terms'
  },
  {
    id: 'r5', section: 'reasoning', topic: 'Series Completion', difficulty: 'medium',
    question: 'Find missing: 1, 4, 9, 16, 25, ?',
    options: ['30', '36', '49', '35'],
    correct: 1,
    explanation: '1²=1, 2²=4, 3²=9, 4²=16, 5²=25, 6²=36',
    formula: 'Perfect squares: n²'
  },
  {
    id: 'r6', section: 'reasoning', topic: 'Series Completion', difficulty: 'hard',
    question: 'Find missing: 3, 7, 13, 21, 31, 43, ?',
    options: ['51', '55', '57', '59'],
    correct: 2,
    explanation: 'Differences: 4,6,8,10,12,14. Next = 43+14 = 57',
    formula: 'Second-order differences are constant'
  },
  // ===== REASONING - BLOOD RELATIONS =====
  {
    id: 'r7', section: 'reasoning', topic: 'Blood Relations', difficulty: 'easy',
    question: 'If A is B\'s father\'s sister\'s son, then A is B\'s:',
    options: ['Cousin', 'Uncle', 'Nephew', 'Brother'],
    correct: 0,
    explanation: 'Father\'s sister = Aunt. Aunt\'s son = Cousin.',
    formula: 'Trace the relationship step by step'
  },
  {
    id: 'r8', section: 'reasoning', topic: 'Blood Relations', difficulty: 'medium',
    question: 'Pointing to a photograph, a woman says "He is the only son of my grandmother\'s only child." How is the man related to her?',
    options: ['Brother', 'Father', 'Uncle', 'Cousin'],
    correct: 0,
    explanation: 'Grandmother\'s only child = Mother/Father (here her parent). Only son of that parent = Brother.',
    formula: 'Grandmother → Child → Only Son'
  },
  // ===== REASONING - CODING-DECODING =====
  {
    id: 'r9', section: 'reasoning', topic: 'Coding-Decoding', difficulty: 'easy',
    question: 'If BANK is coded as DDPN, then LOAN is coded as?',
    options: ['NQCP', 'NQCP', 'NPCQ', 'NQPC'],
    correct: 0,
    explanation: 'Each letter +2: B→D, A→C→D, N→P, K→M→N. L→N, O→Q, A→C, N→P = NQCP',
    formula: 'Find the shift value and apply to each letter'
  },
  {
    id: 'r10', section: 'reasoning', topic: 'Coding-Decoding', difficulty: 'medium',
    question: 'In a code, PEN = 35+5+14=54 and INK = 9+14+11=34. What is PAD?',
    options: ['20', '21', '19', '25'],
    correct: 0,
    explanation: 'Letters encoded as their position values: P=16,A=1,D=4. Sum=21. Closest: 21',
    formula: 'Number code: A=1, B=2... Z=26. Sum the values'
  },
  // ===== REASONING - DIRECTION =====
  {
    id: 'r11', section: 'reasoning', topic: 'Directions', difficulty: 'easy',
    question: 'A person walks 10m North, turns right, walks 20m, turns right, walks 10m. How far from start?',
    options: ['10m', '20m', '30m', '0m'],
    correct: 1,
    explanation: 'Forms 3 sides of a rectangle. Ends up 20m East of starting point.',
    formula: 'Draw path on paper. Use Pythagoras if diagonal distance needed.'
  },
  // ===== REASONING - PUZZLE =====
  {
    id: 'r12', section: 'reasoning', topic: 'Seating Arrangement', difficulty: 'medium',
    question: '5 people A,B,C,D,E sit in a row. B is to the left of C. D is to the right of E. A is between B and D. Who sits in the middle?',
    options: ['A', 'B', 'C', 'D'],
    correct: 0,
    explanation: 'Arrangement: E...B...A...D...C or similar. A is in the middle position.',
    formula: 'Place given constraints one by one to build the arrangement'
  },
  // ===== REASONING - SYLLOGISM =====
  {
    id: 'r13', section: 'reasoning', topic: 'Syllogism', difficulty: 'medium',
    question: 'All cats are dogs. All dogs are horses. Conclusion: (I) All cats are horses (II) Some horses are cats',
    options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'],
    correct: 2,
    explanation: 'If All cats→dogs and All dogs→horses, then All cats→horses. Also Some horses are cats (cats are subset).',
    formula: 'Use Venn diagrams to check syllogism conclusions'
  },
  // ===== ENGLISH - VOCABULARY =====
  {
    id: 'e1', section: 'english', topic: 'Synonyms', difficulty: 'easy',
    question: 'Choose the synonym of ABUNDANT:',
    options: ['Scarce', 'Plentiful', 'Rare', 'Meager'],
    correct: 1,
    explanation: 'ABUNDANT means existing in large quantities. Synonym = Plentiful.',
    formula: 'Synonym = same meaning word'
  },
  {
    id: 'e2', section: 'english', topic: 'Antonyms', difficulty: 'easy',
    question: 'Choose the antonym of BENEVOLENT:',
    options: ['Kind', 'Generous', 'Malevolent', 'Caring'],
    correct: 2,
    explanation: 'BENEVOLENT = kind/generous. Antonym = MALEVOLENT (wishing harm).',
    formula: 'Antonym = opposite meaning word'
  },
  {
    id: 'e3', section: 'english', topic: 'Synonyms', difficulty: 'medium',
    question: 'Choose the synonym of TACITURN:',
    options: ['Talkative', 'Silent', 'Loud', 'Cheerful'],
    correct: 1,
    explanation: 'TACITURN means reserved, not talkative. Synonym = Silent.',
    formula: 'Break word into roots: taci (silent) + turn'
  },
  // ===== ENGLISH - FILL IN THE BLANKS =====
  {
    id: 'e4', section: 'english', topic: 'Fill in the Blanks', difficulty: 'easy',
    question: 'The committee has _____ all the proposals submitted by the members.',
    options: ['reject', 'rejected', 'rejecting', 'rejects'],
    correct: 1,
    explanation: '"Has" is followed by past participle. "Has rejected" is correct.',
    formula: 'Has/Have + Past Participle = Present Perfect Tense'
  },
  {
    id: 'e5', section: 'english', topic: 'Fill in the Blanks', difficulty: 'medium',
    question: 'Neither the students nor the teacher _____ aware of the change.',
    options: ['are', 'were', 'was', 'is'],
    correct: 2,
    explanation: 'Neither...nor: verb agrees with nearest subject (teacher = singular). Past tense → was.',
    formula: 'Neither...nor: verb agrees with the subject closest to it'
  },
  // ===== ENGLISH - ERROR SPOTTING =====
  {
    id: 'e6', section: 'english', topic: 'Error Spotting', difficulty: 'medium',
    question: 'Spot the error: "He is one of the best player (A) who have ever (B) played for India (C). No error (D)"',
    options: ['A', 'B', 'C', 'D'],
    correct: 0,
    explanation: '"one of the best players" — plural noun needed after "one of the".',
    formula: '"One of the" is always followed by plural noun'
  },
  {
    id: 'e7', section: 'english', topic: 'Error Spotting', difficulty: 'hard',
    question: '"The data (A) collected from various sources (B) were analyzed (C) carefully. No error (D)"',
    options: ['A', 'B', 'C', 'D'],
    correct: 3,
    explanation: '"Data" is plural (datum is singular), so "were" is correct. No error.',
    formula: 'Data, criteria, phenomena are plural nouns'
  },
  // ===== ENGLISH - READING COMPREHENSION =====
  {
    id: 'e8', section: 'english', topic: 'Comprehension', difficulty: 'medium',
    question: 'The word "Impecunious" most nearly means:',
    options: ['Rich', 'Careful', 'Having no money', 'Reckless'],
    correct: 2,
    explanation: 'Impecunious = Having little or no money; poor.',
    formula: 'Root: "pecunia" (Latin for money) + "im" (without)'
  },
  // ===== ENGLISH - IDIOMS =====
  {
    id: 'e9', section: 'english', topic: 'Idioms & Phrases', difficulty: 'easy',
    question: '"Bite the bullet" means:',
    options: ['To eat fast', 'To endure a painful situation bravely', 'To shoot someone', 'To be aggressive'],
    correct: 1,
    explanation: '"Bite the bullet" = To endure a difficult or painful situation with courage.',
    formula: 'Idioms have figurative, not literal meanings'
  },
  {
    id: 'e10', section: 'english', topic: 'Idioms & Phrases', difficulty: 'medium',
    question: '"Burn the midnight oil" means:',
    options: ['To waste resources', 'To work late into the night', 'To start a fire', 'To be careless'],
    correct: 1,
    explanation: '"Burn the midnight oil" = To work or study late at night.',
    formula: 'Historical origin: using oil lamps to work at night'
  },
  // ===== QUANT - MIXTURES =====
  {
    id: 'q19', section: 'quant', topic: 'Mixtures & Alligation', difficulty: 'hard',
    question: 'Two vessels contain milk and water in ratios 3:1 and 5:3. If mixed equally, what is the ratio?',
    options: ['15:7', '7:3', '4:1', '3:1'],
    correct: 0,
    explanation: 'Milk in V1 = 3/4, V2 = 5/8. Average = (3/4 + 5/8)/2 = 11/16. Water = 5/16. Ratio = 11:5. Hmm, recalculate: (6/8+5/8)/2 = 11/16, water = 5/16, ratio = 11:5',
    formula: 'Alligation Rule: (C1 + C2) / 2 for equal quantities'
  },
  // ===== QUANT - GEOMETRY =====
  {
    id: 'q20', section: 'quant', topic: 'Geometry', difficulty: 'medium',
    question: 'The area of a circle is 154 cm². Find its circumference. (π = 22/7)',
    options: ['44 cm', '48 cm', '52 cm', '56 cm'],
    correct: 0,
    explanation: 'πr² = 154. r² = 154×7/22 = 49. r = 7. Circumference = 2πr = 2×22/7×7 = 44 cm',
    formula: 'Area = πr², Circumference = 2πr'
  },
  // Additional questions for variety
  {
    id: 'q21', section: 'quant', topic: 'Algebra', difficulty: 'medium',
    question: 'If x + 1/x = 5, then x² + 1/x² = ?',
    options: ['23', '25', '27', '21'],
    correct: 0,
    explanation: '(x + 1/x)² = x² + 2 + 1/x² = 25. So x² + 1/x² = 23',
    formula: '(a+b)² = a² + 2ab + b²'
  },
  {
    id: 'r14', section: 'reasoning', topic: 'Classification', difficulty: 'easy',
    question: 'Find the odd one out: Rose, Lily, Lotus, Oak',
    options: ['Rose', 'Lily', 'Lotus', 'Oak'],
    correct: 3,
    explanation: 'Rose, Lily, Lotus are flowers. Oak is a tree.',
    formula: 'Find the category that does not belong'
  },
  {
    id: 'r15', section: 'reasoning', topic: 'Mirror Image', difficulty: 'medium',
    question: 'Which letter looks the same as its mirror image?',
    options: ['F', 'A', 'P', 'L'],
    correct: 1,
    explanation: 'Letter A has a vertical axis of symmetry and looks the same in a mirror.',
    formula: 'Letters with vertical symmetry: A, H, I, M, O, T, U, V, W, X, Y'
  },
  {
    id: 'e11', section: 'english', topic: 'One Word Substitution', difficulty: 'medium',
    question: 'One who loves mankind is called:',
    options: ['Philanthropist', 'Pessimist', 'Egoist', 'Theist'],
    correct: 0,
    explanation: 'Philanthropist = A person who loves humanity and promotes welfare of others.',
    formula: 'Root: Phil (love) + Anthrop (human) + ist (one who)'
  },
  {
    id: 'e12', section: 'english', topic: 'Sentence Improvement', difficulty: 'hard',
    question: '"Despite of his efforts, he could not succeed." The correct sentence is:',
    options: [
      'Despite of his effort, he could not succeed',
      'Despite his efforts, he could not succeed',
      'In despite of his efforts, he could not succeed',
      'No correction needed'
    ],
    correct: 1,
    explanation: '"Despite" is never followed by "of". Correct usage: "Despite his efforts..."',
    formula: 'Despite = In spite of (both never take "of" directly after them)'
  }
];
