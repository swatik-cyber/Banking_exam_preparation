import { Formula } from '../models';

export const FORMULAS: Formula[] = [
  // QUANT
  {
    id: 'f1', section: 'quant', topic: 'Number System', title: 'HCF & LCM',
    formula: 'HCF × LCM = Product of two numbers',
    description: 'HCF (Highest Common Factor) is the greatest number that divides both. LCM is the smallest number divisible by both.',
    examples: ['HCF(12,18)=6, LCM(12,18)=36. Check: 6×36=216=12×18 ✓', 'Find HCF(48,60): 48=2⁴×3, 60=2²×3×5. HCF=2²×3=12']
  },
  {
    id: 'f2', section: 'quant', topic: 'Percentage', title: 'Percentage Formulas',
    formula: 'Percentage = (Value/Total) × 100 | x% of y = y% of x',
    description: 'Used in profit/loss, banking interest, discount calculations.',
    examples: ['40% of 500 = 500% of 40 = 200', 'If price increases by 20%, new price = 1.20 × old price']
  },
  {
    id: 'f3', section: 'quant', topic: 'Percentage', title: 'Successive Percentage Change',
    formula: 'Net change % = x + y + xy/100',
    description: 'When two percentage changes happen one after the other.',
    examples: ['Price up 20%, then down 20%: net = 20 + (-20) + (20×-20)/100 = -4% (loss)', 'Up 10% then 10%: net = 10+10+1 = 21%']
  },
  {
    id: 'f4', section: 'quant', topic: 'Profit & Loss', title: 'Profit & Loss Formulas',
    formula: 'Profit% = (Profit/CP)×100 | SP = CP×(100+P%)/100 | CP = SP×100/(100+P%)',
    description: 'Cost Price (CP), Selling Price (SP), Marked Price (MP).',
    examples: ['CP=₹200, P%=25%. SP=200×125/100=₹250', 'SP=₹300, Loss%=20%. CP=300×100/80=₹375']
  },
  {
    id: 'f5', section: 'quant', topic: 'Profit & Loss', title: 'Discount Formula',
    formula: 'Discount = MP - SP | Discount% = (Discount/MP)×100 | SP = MP×(100-D%)/100',
    description: 'Markdown Price (MP) is always ≥ SP after discount.',
    examples: ['MP=₹500, D%=20%. SP=500×80/100=₹400', 'If profit on CP is 12% after 20% discount: MP×0.8 = CP×1.12']
  },
  {
    id: 'f6', section: 'quant', topic: 'Simple Interest', title: 'Simple Interest',
    formula: 'SI = (P × R × T) / 100 | Amount = P + SI',
    description: 'P=Principal, R=Rate% per annum, T=Time in years.',
    examples: ['P=₹5000, R=8%, T=3 years. SI=5000×8×3/100=₹1200', 'Amount = 5000+1200 = ₹6200']
  },
  {
    id: 'f7', section: 'quant', topic: 'Compound Interest', title: 'Compound Interest',
    formula: 'CI = P[(1 + R/100)ⁿ - 1] | For half-yearly: R→R/2, T→2T',
    description: 'Interest calculated on principal + accumulated interest.',
    examples: ['P=₹1000, R=10%, T=2. CI=1000[(1.1)²-1]=₹210', 'Difference CI-SI for 2 years = PR²/10000']
  },
  {
    id: 'f8', section: 'quant', topic: 'Time & Work', title: 'Time & Work',
    formula: 'If A does in m days, B in n days: Together = mn/(m+n) days | Work = Rate × Time',
    description: 'Convert to work rate (work per day) to solve problems.',
    examples: ['A=10 days, B=15 days. Together=10×15/25=6 days', 'A is twice efficient as B: if together=x days, A alone=1.5x days']
  },
  {
    id: 'f9', section: 'quant', topic: 'Speed & Distance', title: 'Speed, Distance, Time',
    formula: 'Speed = Distance/Time | Avg Speed = 2xy/(x+y) for equal distances | 1 km/h = 5/18 m/s',
    description: 'For trains: add lengths when crossing. Relative speed: add if opposite, subtract if same direction.',
    examples: ['Train 100m crosses pole at 36 km/h: time=100/10=10 sec', 'Two trains 100m,150m at 40,50 km/h opposite: time=250/25=10 sec']
  },
  {
    id: 'f10', section: 'quant', topic: 'Averages', title: 'Average & Weighted Average',
    formula: 'Average = Sum of Items / Number of Items | Weighted Avg = Σ(wᵢxᵢ)/Σwᵢ',
    description: 'If one item is replaced, new avg = old avg ± (new - old)/n.',
    examples: ['Avg of 5 numbers=20. One replaced by 30 (was 10): new avg=20+20/5=24', 'If avg increases by 2 when one value is replaced, new-old=2n']
  },
  {
    id: 'f11', section: 'quant', topic: 'Ratio & Proportion', title: 'Ratio & Proportion',
    formula: 'a:b = c:d → ad = bc (cross multiply) | Componendo-Dividendo: (a+b)/(a-b) = (c+d)/(c-d)',
    description: 'Ratio shows relative size. If A:B=2:3 and B:C=4:5, then A:B:C=8:12:15.',
    examples: ['A:B=2:3, B:C=3:4. A:B:C=2:3:4', 'Partnership: Profit shared in ratio of investments × time']
  },
  {
    id: 'f12', section: 'quant', topic: 'Geometry', title: 'Area & Perimeter Formulas',
    formula: 'Circle: A=πr², C=2πr | Triangle: A=½bh | Rectangle: A=l×b, P=2(l+b)',
    description: 'Key geometry formulas for competitive exams.',
    examples: ['Circle r=7: A=22/7×49=154 cm², C=44 cm', 'Right triangle sides 3,4: hypotenuse=5 (Pythagoras: 3²+4²=5²)']
  },
  {
    id: 'f13', section: 'quant', topic: 'Permutation & Combination', title: 'P&C Formulas',
    formula: 'ⁿPᵣ = n!/(n-r)! | ⁿCᵣ = n!/[r!(n-r)!] | Circular: (n-1)!',
    description: 'Permutation = arrangement (order matters). Combination = selection (order doesn\'t matter).',
    examples: ['Select 3 from 5: ⁵C₃=10', 'Arrange 4 books: 4!=24 ways']
  },
  // REASONING
  {
    id: 'f14', section: 'reasoning', topic: 'Analogy', title: 'Types of Analogies',
    formula: 'Tool:Worker | Cause:Effect | Part:Whole | Degree:Word | Animal:Sound',
    description: 'Identify the exact relationship between the first pair, then apply it.',
    examples: ['Pen:Writer :: Brush:Painter (Tool:Worker)', 'Seed:Tree :: Egg:Bird (Source:Product)']
  },
  {
    id: 'f15', section: 'reasoning', topic: 'Coding-Decoding', title: 'Common Coding Patterns',
    formula: 'Letter shift (+n or -n) | Reverse alphabet (A=Z, B=Y) | Number code (A=1,Z=26) | Position × shift',
    description: 'Most coding problems use one of these standard patterns.',
    examples: ['COLD → DPME (each letter +1)', 'ACT=1+3+20=24 (positional number code)']
  },
  {
    id: 'f16', section: 'reasoning', topic: 'Series', title: 'Number Series Patterns',
    formula: 'AP: aₙ=a+(n-1)d | GP: aₙ=arⁿ⁻¹ | Difference series | Square/Cube series',
    description: 'Always check: differences, ratio, squares, cubes, primes.',
    examples: ['2,6,18,54: ratio=3 (GP)', '1,4,9,16,25: squares of 1,2,3,4,5']
  },
  {
    id: 'f17', section: 'reasoning', topic: 'Directions', title: 'Direction Sense',
    formula: 'After Left turn: N→W→S→E→N | After Right turn: N→E→S→W→N | Distance: Pythagoras',
    description: 'Always draw the path on paper. Use compass directions.',
    examples: ['Go N 3km, turn right, go E 4km: Distance from start=√(9+16)=5km', 'Face North, turn left twice: Now facing South']
  },
  {
    id: 'f18', section: 'reasoning', topic: 'Syllogism', title: 'Syllogism Rules',
    formula: 'All A is B + All B is C → All A is C | Some A is B + All B is C → Some A is C | No A is B + All C is A → No C is B',
    description: 'Use Venn diagrams. Definite and Possible conclusions differ.',
    examples: ['All cats are dogs + All dogs bark → All cats bark', 'Some boys are tall + All tall are smart → Some boys are smart']
  },
  // ENGLISH
  {
    id: 'f19', section: 'english', topic: 'Grammar', title: 'Subject-Verb Agreement',
    formula: 'Neither/Either with Nor/Or: verb agrees with nearest subject | Collective nouns: usually singular',
    description: 'Critical rules for error spotting questions.',
    examples: [
      'Neither he nor they ARE coming (nearest subject=they, plural)',
      'The committee HAS decided (collective noun → singular)'
    ]
  },
  {
    id: 'f20', section: 'english', topic: 'Grammar', title: 'Tense Rules',
    formula: 'Simple Past for completed actions | Present Perfect for recent past | Past Perfect for "before" situations',
    description: 'Time expressions help identify the right tense.',
    examples: ['Yesterday he WENT (simple past)', 'I HAVE SEEN that movie (present perfect)', 'He HAD LEFT before I arrived (past perfect)']
  },
  {
    id: 'f21', section: 'english', topic: 'Vocabulary', title: 'Word Roots',
    formula: 'Phil=love | Mis=hate | Bene=good | Mal=bad | Pre=before | Post=after | Anti=against | Pro=for',
    description: 'Learning roots helps decode unfamiliar words.',
    examples: [
      'Philanthropy = love of mankind (Phil+Anthro)',
      'Malevolent = wishing harm (Mal+Vol)',
      'Precognition = knowing before (Pre+Cogn)'
    ]
  },
  {
    id: 'f22', section: 'english', topic: 'Grammar', title: 'Articles (A/An/The)',
    formula: 'A/An = indefinite (first mention) | The = definite (specific/known) | A before consonant sound, An before vowel sound',
    description: 'Article usage is tested in Fill in the Blanks and Error Spotting.',
    examples: ['AN honest man (vowel sound "on")', 'A university student (consonant sound "you")', 'THE sun rises in THE east']
  }
];
