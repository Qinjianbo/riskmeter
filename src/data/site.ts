export type Lang = 'en' | 'zh';

export type PageKind =
  | 'home'
  | 'generic'
  | 'guide'
  | 'glossary'
  | 'sitemap'
  | 'pendulum'
  | 'drawdown-test'
  | 'drawdown-recovery'
  | 'drawdown-capacity'
  | 'rebalancing-planner';

export type RiskPage = {
  lang: Lang;
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  headline: string;
  summary: string;
  kind: PageKind;
  pairedSlug?: string;
  primaryCta?: { label: string; href: string };
  secondaryCtas?: { label: string; href: string }[];
  metrics?: { label: string; value: string; tone?: 'aqua' | 'leaf' | 'amber' | 'ember' }[];
  sections?: {
    title: string;
    body?: string;
    items?: { title: string; body: string; href?: string; id?: string }[];
  }[];
};

const host = 'https://riskmeter.app';

export const languages: Record<Lang, { label: string; switchLabel: string }> = {
  en: { label: 'English', switchLabel: '中文' },
  zh: { label: '中文', switchLabel: 'EN' }
};

export const nav: Record<Lang, { label: string; href: string }[]> = {
  en: [
    { label: 'Tools', href: '/en/drawdown-test/' },
    { label: 'Pendulum', href: '/en/pendulum/' },
    { label: 'Glossary', href: '/en/risk-glossary/' },
    { label: 'Support', href: '/en/support/' }
  ],
  zh: [
    { label: '工具', href: '/zh/drawdown-test/' },
    { label: '钟摆', href: '/zh/pendulum/' },
    { label: '术语表', href: '/zh/risk-glossary/' },
    { label: '支持', href: '/zh/support/' }
  ]
};

export const pairedSlugs: Record<string, string> = {
  '': '',
  about: 'about',
  ethics: 'ethics',
  support: 'support',
  sitemap: 'sitemap',
  pendulum: 'pendulum',
  'drawdown-test': 'drawdown-test',
  'drawdown-recovery': 'drawdown-recovery',
  'drawdown-capacity': 'drawdown-capacity',
  'rebalancing-planner': 'rebalancing-planner',
  'risk-glossary': 'risk-glossary',
  'drawdown-risk': 'drawdown-explained',
  'drawdown-explained': 'drawdown-risk',
  'what-is-market-pendulum': 'market-pendulum-theory',
  'market-pendulum-theory': 'what-is-market-pendulum'
};

const toolCtas = {
  en: [
    { label: 'Drawdown Test', href: '/en/drawdown-test/' },
    { label: 'Recovery Scenarios', href: '/en/drawdown-recovery/' },
    { label: 'Rebalancing Planner', href: '/en/rebalancing-planner/' }
  ],
  zh: [
    { label: '回撤测试', href: '/zh/drawdown-test/' },
    { label: '恢复情景', href: '/zh/drawdown-recovery/' },
    { label: '再平衡计划器', href: '/zh/rebalancing-planner/' }
  ]
};

export const pages: RiskPage[] = [
  {
    lang: 'en',
    slug: '',
    title: 'RiskMeter - Measure Market Risk Before You Invest',
    description: 'RiskMeter helps investors understand drawdowns, sentiment, and rebalancing discipline through practical bilingual tools.',
    eyebrow: 'Risk education without predictions',
    headline: 'Measure risk before the market tests your discipline.',
    summary: 'A bilingual workspace for drawdown tolerance, recovery math, market sentiment, and rebalancing decisions. No stock tips, no price forecasts, just clearer risk boundaries.',
    kind: 'home',
    primaryCta: { label: 'Start with Drawdown Test', href: '/en/drawdown-test/' },
    secondaryCtas: [
      { label: 'Explore Market Pendulum', href: '/en/pendulum/' },
      { label: 'Open Risk Glossary', href: '/en/risk-glossary/' }
    ],
    metrics: [
      { label: 'Tool categories', value: '4', tone: 'aqua' },
      { label: 'Languages', value: 'EN / 中文', tone: 'leaf' },
      { label: 'Data model', value: 'Local only', tone: 'amber' }
    ]
  },
  {
    lang: 'zh',
    slug: '',
    title: 'RiskMeter - 投资前先衡量风险',
    description: 'RiskMeter 通过双语工具帮助投资者理解回撤、市场情绪与再平衡纪律。',
    eyebrow: '不做预测的风险教育',
    headline: '在市场考验纪律之前，先量清风险边界。',
    summary: '一个双语风险工作台，用来评估回撤承受度、恢复数学、市场情绪和再平衡动作。不荐股、不预测价格，只帮助你把风险说清楚。',
    kind: 'home',
    primaryCta: { label: '从回撤测试开始', href: '/zh/drawdown-test/' },
    secondaryCtas: [
      { label: '探索市场钟摆', href: '/zh/pendulum/' },
      { label: '查看风险术语表', href: '/zh/risk-glossary/' }
    ],
    metrics: [
      { label: '工具类型', value: '4', tone: 'aqua' },
      { label: '语言', value: 'EN / 中文', tone: 'leaf' },
      { label: '数据方式', value: '仅本地', tone: 'amber' }
    ]
  },
  {
    lang: 'en',
    slug: 'drawdown-test',
    title: 'Drawdown Tolerance Test - RiskMeter',
    description: 'Estimate the level of loss you can realistically endure and recover from.',
    eyebrow: 'Core tool',
    headline: 'Find the drawdown band your plan can actually survive.',
    summary: 'Move from abstract risk appetite to visible loss, recovery percentage, notes, and saved local scenarios.',
    kind: 'drawdown-test',
    primaryCta: { label: 'Open recovery scenarios', href: '/en/drawdown-recovery/' },
    secondaryCtas: toolCtas.en,
    metrics: [
      { label: 'Bands', value: '5', tone: 'aqua' },
      { label: 'Saved scenarios', value: '3', tone: 'leaf' },
      { label: 'Saved data', value: 'Browser only', tone: 'amber' }
    ]
  },
  {
    lang: 'zh',
    slug: 'drawdown-test',
    title: '回撤承受度测试 - RiskMeter',
    description: '估算你现实中能承受并恢复的亏损区间。',
    eyebrow: '核心工具',
    headline: '找到你的计划真正扛得住的回撤区间。',
    summary: '把抽象的风险偏好转换成可见亏损、恢复涨幅、本地笔记和可复用情景。',
    kind: 'drawdown-test',
    primaryCta: { label: '打开恢复情景', href: '/zh/drawdown-recovery/' },
    secondaryCtas: toolCtas.zh,
    metrics: [
      { label: '风险档位', value: '5', tone: 'aqua' },
      { label: '保存情景', value: '3', tone: 'leaf' },
      { label: '保存位置', value: '仅浏览器', tone: 'amber' }
    ]
  },
  {
    lang: 'en',
    slug: 'drawdown-recovery',
    title: 'Drawdown Recovery Scenarios - RiskMeter',
    description: 'Compare the returns needed to recover from drawdowns over 1, 3, and 5 years.',
    eyebrow: 'Recovery math',
    headline: 'See how long the climb back can be.',
    summary: 'Drawdowns are nonlinear. This tool turns a loss percentage into breakeven return and annualized recovery paths.',
    kind: 'drawdown-recovery',
    primaryCta: { label: 'Check drawdown capacity', href: '/en/drawdown-capacity/' },
    secondaryCtas: toolCtas.en
  },
  {
    lang: 'zh',
    slug: 'drawdown-recovery',
    title: '回撤恢复情景 - RiskMeter',
    description: '对比 1、3、5 年恢复回撤所需的复利收益。',
    eyebrow: '恢复数学',
    headline: '看清爬出回撤需要多长的路。',
    summary: '回撤不是线性的。这个工具会把亏损比例转换成回本涨幅和不同年限下的年化恢复路径。',
    kind: 'drawdown-recovery',
    primaryCta: { label: '检查回撤容量', href: '/zh/drawdown-capacity/' },
    secondaryCtas: toolCtas.zh
  },
  {
    lang: 'en',
    slug: 'drawdown-capacity',
    title: 'Drawdown Capacity Calculator - RiskMeter',
    description: 'Estimate how much further a position could drop before the account reaches max drawdown.',
    eyebrow: 'Position risk',
    headline: 'Translate account limits into position-level room.',
    summary: 'Combine account size, position size, current drawdown, and max drawdown to estimate remaining capacity.',
    kind: 'drawdown-capacity',
    primaryCta: { label: 'Plan rebalancing', href: '/en/rebalancing-planner/' },
    secondaryCtas: toolCtas.en
  },
  {
    lang: 'zh',
    slug: 'drawdown-capacity',
    title: '回撤承受空间计算器 - RiskMeter',
    description: '估算在不超过最大回撤的前提下，该仓位还能下跌多少。',
    eyebrow: '仓位风险',
    headline: '把账户限制转换成单个仓位的余量。',
    summary: '结合账户规模、仓位规模、当前回撤与最大回撤，估算剩余承受空间。',
    kind: 'drawdown-capacity',
    primaryCta: { label: '规划再平衡', href: '/zh/rebalancing-planner/' },
    secondaryCtas: toolCtas.zh
  },
  {
    lang: 'en',
    slug: 'rebalancing-planner',
    title: 'Rebalancing Planner - RiskMeter',
    description: 'Plan when to rebalance using drift bands and suggested trade sizes.',
    eyebrow: 'Portfolio process',
    headline: 'Turn drift into a concrete rebalancing action.',
    summary: 'Enter target weight, current weight, portfolio value, and band width to get a suggested trade and process note.',
    kind: 'rebalancing-planner',
    primaryCta: { label: 'Sense cycle risk', href: '/en/pendulum/' },
    secondaryCtas: toolCtas.en
  },
  {
    lang: 'zh',
    slug: 'rebalancing-planner',
    title: '再平衡计划器 - RiskMeter',
    description: '用偏离区间与建议交易金额规划何时再平衡。',
    eyebrow: '组合流程',
    headline: '把仓位偏离转换成明确的再平衡动作。',
    summary: '输入目标权重、当前权重、组合规模和区间宽度，得到建议交易金额与流程提示。',
    kind: 'rebalancing-planner',
    primaryCta: { label: '感知周期风险', href: '/zh/pendulum/' },
    secondaryCtas: toolCtas.zh
  },
  {
    lang: 'en',
    slug: 'pendulum',
    title: 'Market Pendulum - RiskMeter',
    description: 'Use the Market Pendulum to understand sentiment extremes and risk asymmetry without predicting prices.',
    eyebrow: 'Sentiment framework',
    headline: 'Map market mood without turning it into a forecast.',
    summary: 'Place the pendulum between fear and euphoria, then translate that reading into risk posture and rebalancing discipline.',
    kind: 'pendulum',
    primaryCta: { label: 'Read the theory', href: '/en/what-is-market-pendulum/' },
    secondaryCtas: toolCtas.en
  },
  {
    lang: 'zh',
    slug: 'pendulum',
    title: '市场钟摆 - RiskMeter',
    description: '用市场钟摆理解情绪极端与风险不对称，而不是预测价格。',
    eyebrow: '情绪框架',
    headline: '观察市场情绪，但不把它误当成预测。',
    summary: '把钟摆放在恐惧与亢奋之间，再把读数转换成风险姿态与再平衡纪律。',
    kind: 'pendulum',
    primaryCta: { label: '阅读理论说明', href: '/zh/market-pendulum-theory/' },
    secondaryCtas: toolCtas.zh
  }
];

const guidePages: RiskPage[] = [
  {
    lang: 'en',
    slug: 'drawdown-risk',
    title: 'Drawdown Risk Explained - RiskMeter',
    description: 'Understand drawdown risk, why it matters more than upside, and how recovery time changes decisions.',
    eyebrow: 'Risk guide',
    headline: 'Drawdown is where portfolio math meets behavior.',
    summary: 'A 25% loss needs 33.3% to recover. A 50% loss needs 100%. The bigger issue is whether the investor can stay rational long enough for recovery to happen.',
    kind: 'guide',
    primaryCta: { label: 'Take the drawdown test', href: '/en/drawdown-test/' },
    secondaryCtas: [{ label: 'Recovery scenarios', href: '/en/drawdown-recovery/' }, { label: 'Risk glossary', href: '/en/risk-glossary/' }],
    sections: [
      { title: 'Three things to remember', items: [
        { title: 'Drawdown compounds fast', body: 'Losses are asymmetric: the required gain grows faster than the loss itself.' },
        { title: 'Recovery time matters', body: 'A tolerable loss on paper can become intolerable when recovery takes years.' },
        { title: 'Psychology is the real cost', body: 'Panic decisions often happen after the math has already become uncomfortable.' }
      ] },
      { title: 'Five drawdown bands', items: [
        { title: 'Very low: up to 10%', body: 'Usually noise for long-term portfolios, but still useful for testing expectations.' },
        { title: 'Low: 11-15%', body: 'Requires discipline and a prewritten plan.' },
        { title: 'Moderate: 16-25%', body: 'Often where investors start changing strategy under pressure.' },
        { title: 'High: 26-35%', body: 'Needs strong liquidity, conviction, and position sizing.' },
        { title: 'Very high: 36%+', body: 'A survival question, not a performance question.' }
      ] }
    ]
  },
  {
    lang: 'zh',
    slug: 'drawdown-explained',
    title: '回撤风险是什么？- RiskMeter',
    description: '理解回撤风险为何比上涨更重要，以及恢复时间与心理压力如何影响投资决策。',
    eyebrow: '风险指南',
    headline: '回撤是组合数学与投资行为相遇的地方。',
    summary: '亏损 25% 需要上涨 33.3% 才能回本；亏损 50% 需要上涨 100%。更关键的是，投资者能否在恢复发生前保持理性。',
    kind: 'guide',
    primaryCta: { label: '进行回撤测试', href: '/zh/drawdown-test/' },
    secondaryCtas: [{ label: '恢复情景', href: '/zh/drawdown-recovery/' }, { label: '风险术语表', href: '/zh/risk-glossary/' }],
    sections: [
      { title: '三个重点', items: [
        { title: '回撤会快速放大', body: '亏损具有不对称性：所需涨幅会比亏损本身更快变大。' },
        { title: '恢复时间很关键', body: '纸面上能承受的亏损，如果恢复要几年，现实中可能完全不同。' },
        { title: '心理成本最高', body: '很多错误决策发生在数学已经让人难受之后。' }
      ] },
      { title: '五档回撤', items: [
        { title: '极低：10% 以内', body: '对长期组合通常是噪音，但适合校准预期。' },
        { title: '低：11-15%', body: '需要纪律和提前写好的计划。' },
        { title: '中等：16-25%', body: '很多投资者会在这里开始动摇策略。' },
        { title: '高：26-35%', body: '需要流动性、信念和仓位控制共同支撑。' },
        { title: '极高：36%+', body: '这已经是生存问题，而不只是收益问题。' }
      ] }
    ]
  },
  {
    lang: 'en',
    slug: 'what-is-market-pendulum',
    title: 'What Is the Market Pendulum? - RiskMeter',
    description: 'Learn how the Market Pendulum explains sentiment extremes, risk asymmetry, and rational decision making.',
    eyebrow: 'Theory',
    headline: 'Markets swing between fear and euphoria.',
    summary: 'The pendulum is not a timing signal. It is a reminder that risk often feels lowest when it is building, and opportunity often feels worst when it is improving.',
    kind: 'guide',
    primaryCta: { label: 'Open the pendulum tool', href: '/en/pendulum/' },
    secondaryCtas: [{ label: 'Drawdown risk', href: '/en/drawdown-risk/' }, { label: 'Rebalancing planner', href: '/en/rebalancing-planner/' }],
    sections: [
      { title: 'Core principles', items: [
        { title: 'Sentiment moves in cycles', body: 'Crowds rarely stay balanced for long. Optimism and pessimism tend to overshoot.' },
        { title: 'Risk rises quietly', body: 'The most comfortable moments can contain the least margin of safety.' },
        { title: 'Opportunity hides in discomfort', body: 'Pessimism can create better future conditions, but only for investors with a process.' }
      ] }
    ]
  },
  {
    lang: 'zh',
    slug: 'market-pendulum-theory',
    title: '市场钟摆理论 - RiskMeter',
    description: '理解市场钟摆如何解释情绪极端、风险不对称和理性决策。',
    eyebrow: '理论说明',
    headline: '市场会在恐惧与亢奋之间摆动。',
    summary: '钟摆不是择时信号。它提醒我们：风险常常在最舒服的时候积累，机会也常常在最难受的时候改善。',
    kind: 'guide',
    primaryCta: { label: '打开市场钟摆工具', href: '/zh/pendulum/' },
    secondaryCtas: [{ label: '回撤风险', href: '/zh/drawdown-explained/' }, { label: '再平衡计划器', href: '/zh/rebalancing-planner/' }],
    sections: [
      { title: '核心原则', items: [
        { title: '情绪是周期性的', body: '群体很少长期保持平衡，乐观和悲观都会过度。' },
        { title: '风险悄悄升高', body: '最舒服的时候，安全边际可能最少。' },
        { title: '机会藏在不适感里', body: '悲观可能改善未来条件，但前提是你有流程。' }
      ] }
    ]
  }
];

const supportPages: RiskPage[] = [
  {
    lang: 'en',
    slug: 'about',
    title: 'About - RiskMeter',
    description: 'About RiskMeter, its purpose, boundaries, and educational disclaimer.',
    eyebrow: 'About',
    headline: 'A risk-first investing education site.',
    summary: 'RiskMeter helps investors think about risk before return through simple frameworks and local-first tools.',
    kind: 'generic',
    primaryCta: { label: 'Read ethics', href: '/en/ethics/' },
    sections: [
      { title: 'What RiskMeter is', body: 'An educational site for understanding drawdowns, market cycles, risk asymmetry, and portfolio discipline.' },
      { title: 'What RiskMeter is not', body: 'It is not investment advice, financial advice, a trading system, or a recommendation to buy or sell any security.' },
      { title: 'Important disclaimer', body: 'All outputs are simplified educational estimates. You are responsible for your own investment decisions.' }
    ]
  },
  {
    lang: 'zh',
    slug: 'about',
    title: '关于 - RiskMeter',
    description: '关于 RiskMeter 的定位、边界与教育用途免责声明。',
    eyebrow: '关于',
    headline: '一个风险优先的投资教育站。',
    summary: 'RiskMeter 通过简单框架和本地优先工具，帮助投资者先思考风险，再讨论收益。',
    kind: 'generic',
    primaryCta: { label: '阅读伦理守则', href: '/zh/ethics/' },
    sections: [
      { title: 'RiskMeter 是什么', body: '一个用于理解回撤、市场周期、风险不对称与组合纪律的教育网站。' },
      { title: 'RiskMeter 不是什么', body: '它不是投资建议、财务建议、交易系统，也不推荐买卖任何证券。' },
      { title: '重要免责声明', body: '所有输出都是简化的教育估算。你需要为自己的投资决策负责。' }
    ]
  },
  {
    lang: 'en',
    slug: 'ethics',
    title: 'Ethics & Guardrails - RiskMeter',
    description: 'RiskMeter public guardrails, sustainability approach, and supporter model.',
    eyebrow: 'Guardrails',
    headline: 'Clear boundaries are part of the product.',
    summary: 'RiskMeter is built to educate, not to nudge users into trades or predictions.',
    kind: 'generic',
    primaryCta: { label: 'Contact support', href: '/en/support/' },
    sections: [
      { title: 'What we do', body: 'We explain risk concepts, provide calculators, and make assumptions visible.' },
      { title: 'What we will not do', body: 'We will not publish price targets, trading signals, or guaranteed return claims.' },
      { title: 'Data & privacy', body: 'Tool inputs are stored locally in your browser unless you intentionally copy and share them.' },
      { title: 'Feedback & accountability', body: 'Corrections, translation improvements, and clarity suggestions are welcome.' }
    ]
  },
  {
    lang: 'zh',
    slug: 'ethics',
    title: '伦理与守则 - RiskMeter',
    description: 'RiskMeter 的公开守则、可持续策略与支持者方案。',
    eyebrow: '守则',
    headline: '清晰边界也是产品的一部分。',
    summary: 'RiskMeter 的目标是教育，而不是把用户推向交易或预测。',
    kind: 'generic',
    primaryCta: { label: '联系支持', href: '/zh/support/' },
    sections: [
      { title: '我们做什么', body: '解释风险概念、提供计算工具，并让假设可见。' },
      { title: '我们不会做什么', body: '不发布价格目标、交易信号或收益保证。' },
      { title: '数据与隐私', body: '工具输入默认只保存在浏览器本地，除非你主动复制分享。' },
      { title: '反馈与责任', body: '欢迎提出修正、翻译和表达清晰度建议。' }
    ]
  },
  {
    lang: 'en',
    slug: 'support',
    title: 'Support & Education - RiskMeter',
    description: 'How RiskMeter works, what to expect, local data notes, and feedback channels.',
    eyebrow: 'Support',
    headline: 'Use the tools with the right expectations.',
    summary: 'RiskMeter keeps calculations simple and local so the educational boundaries stay clear.',
    kind: 'generic',
    primaryCta: { label: 'Open glossary', href: '/en/risk-glossary/' },
    sections: [
      { title: 'What to expect', body: 'Practical calculators, plain-language explanations, and bilingual navigation across the risk learning path.' },
      { title: 'Local-only data', body: 'Inputs and feedback signals are stored in your browser. Clearing cache or changing devices can erase them.' },
      { title: 'Limitations', body: 'The tools ignore taxes, fees, liquidity, cash flows, and path dependence. Treat results as a thinking aid.' }
    ]
  },
  {
    lang: 'zh',
    slug: 'support',
    title: '支持与使用说明 - RiskMeter',
    description: '了解 RiskMeter 的使用方式、本地数据说明与反馈渠道。',
    eyebrow: '支持',
    headline: '用正确预期使用这些工具。',
    summary: 'RiskMeter 保持计算简单、本地优先，让教育边界更清楚。',
    kind: 'generic',
    primaryCta: { label: '打开术语表', href: '/zh/risk-glossary/' },
    sections: [
      { title: '你可以期待什么', body: '实用计算器、清晰解释，以及贯穿风险学习路径的双语导航。' },
      { title: '本地数据说明', body: '输入与反馈信号保存在浏览器本地。清缓存或换设备可能会清空。' },
      { title: '使用限制', body: '工具不纳入税费、流动性、现金流和路径依赖。请把结果当作思考辅助。' }
    ]
  }
];

const glossaryTerms = {
  en: [
    ['drawdown', 'Drawdown', 'A decline from a portfolio peak to a later trough.'],
    ['max-drawdown', 'Maximum drawdown', 'The largest peak-to-trough decline in a period.'],
    ['recovery-time', 'Recovery time', 'The time needed to return from a drawdown to breakeven.'],
    ['risk-asymmetry', 'Risk asymmetry', 'The gap between loss size and the gain needed to recover.'],
    ['risk-budget', 'Risk budget', 'A defined amount of risk a portfolio or position is allowed to take.'],
    ['position-sizing', 'Position sizing', 'Choosing how much capital to allocate to one exposure.'],
    ['rebalancing', 'Rebalancing', 'Returning a portfolio toward its target allocation.'],
    ['drift', 'Drift', 'The difference between current and target allocation.'],
    ['rebalancing-band', 'Rebalancing band', 'A tolerance range that triggers a rebalance when crossed.'],
    ['drawdown-capacity', 'Drawdown capacity', 'Remaining room before a portfolio reaches its max drawdown boundary.'],
    ['sentiment', 'Sentiment', 'The crowd mood around risk, prices, and future expectations.'],
    ['mean-reversion', 'Mean reversion', 'The tendency for extremes to move back toward a more normal range.']
  ],
  zh: [
    ['drawdown', '回撤', '组合从高点到之后低点的下跌幅度。'],
    ['max-drawdown', '最大回撤', '某段时间内最大的高点到低点跌幅。'],
    ['recovery-time', '恢复时间', '从回撤回到回本所需的时间。'],
    ['risk-asymmetry', '风险不对称', '亏损幅度与回本所需涨幅之间的不对称。'],
    ['risk-budget', '风险预算', '组合或仓位被允许承担的风险额度。'],
    ['position-sizing', '仓位规模', '决定把多少资本放到一个风险敞口上。'],
    ['rebalancing', '再平衡', '把组合重新调整回目标配置。'],
    ['drift', '偏离', '当前配置与目标配置之间的差距。'],
    ['rebalancing-band', '再平衡区间', '超过后触发再平衡的容忍范围。'],
    ['drawdown-capacity', '回撤容量', '组合到达最大回撤边界前剩余的空间。'],
    ['sentiment', '情绪', '市场群体对风险、价格和未来预期的心理状态。'],
    ['mean-reversion', '均值回归', '极端状态向更正常范围回落的倾向。']
  ]
};

export const glossaryPages: RiskPage[] = (['en', 'zh'] as Lang[]).map((lang) => ({
  lang,
  slug: 'risk-glossary',
  title: lang === 'en' ? 'Risk Glossary - RiskMeter' : '风险术语表 - RiskMeter',
  description: lang === 'en'
    ? 'A concise glossary of core risk terms used across RiskMeter.'
    : 'RiskMeter 使用的核心风险术语表。',
  eyebrow: lang === 'en' ? 'Reference' : '参考',
  headline: lang === 'en' ? 'A shared vocabulary for risk decisions.' : '为风险决策建立共同语言。',
  summary: lang === 'en'
    ? 'Use these terms to connect the tools, guides, and portfolio process without mixing up risk appetite, capacity, and behavior.'
    : '用这些术语把工具、指南和组合流程连接起来，避免混淆风险偏好、承受能力与行为。',
  kind: 'glossary',
  primaryCta: { label: lang === 'en' ? 'Run the drawdown test' : '进行回撤测试', href: `/${lang}/drawdown-test/` },
  sections: [
    {
      title: lang === 'en' ? 'Core terms' : '核心术语',
      items: glossaryTerms[lang].map(([id, title, body]) => ({ id, title, body }))
    }
  ]
}));

export const sitemapPages: RiskPage[] = (['en', 'zh'] as Lang[]).map((lang) => ({
  lang,
  slug: 'sitemap',
  title: lang === 'en' ? 'Sitemap - RiskMeter' : '站点地图 - RiskMeter',
  description: lang === 'en' ? 'Sitemap for RiskMeter English pages.' : 'RiskMeter 中文页面站点地图。',
  eyebrow: lang === 'en' ? 'Sitemap' : '站点地图',
  headline: lang === 'en' ? 'All RiskMeter pages.' : '所有 RiskMeter 页面。',
  summary: lang === 'en' ? 'A compact index of tools, guides, and support pages.' : '工具、指南与支持页面索引。',
  kind: 'sitemap',
  primaryCta: { label: lang === 'en' ? 'Back home' : '返回首页', href: `/${lang}/` }
}));

export const allPages = [...pages, ...guidePages, ...supportPages, ...glossaryPages, ...sitemapPages];

export function pagePath(page: Pick<RiskPage, 'lang' | 'slug'>) {
  return `/${page.lang}/${page.slug ? `${page.slug}/` : ''}`;
}

export function pageUrl(page: Pick<RiskPage, 'lang' | 'slug'>) {
  return `${host}${pagePath(page)}`;
}

export function alternatePath(page: RiskPage) {
  const otherLang = page.lang === 'en' ? 'zh' : 'en';
  const otherSlug = pairedSlugs[page.slug] ?? page.slug;
  return `/${otherLang}/${otherSlug ? `${otherSlug}/` : ''}`;
}

export function alternateUrl(page: RiskPage) {
  return `${host}${alternatePath(page)}`;
}

export function getPage(lang: string | undefined, slugParts: string[] | undefined) {
  const slug = slugParts?.join('/') ?? '';
  return allPages.find((page) => page.lang === lang && page.slug === slug);
}

export function localizedText(lang: Lang) {
  return {
    home: lang === 'en' ? 'Home' : '首页',
    switchLanguage: lang === 'en' ? '中文' : 'EN',
    localOnly: lang === 'en'
      ? 'Educational only. Tool inputs stay in your browser.'
      : '仅作教育用途。工具输入保存在浏览器本地。',
    related: lang === 'en' ? 'Continue the workflow' : '继续这个流程',
    allPages: lang === 'en' ? 'All pages' : '所有页面',
    useful: lang === 'en' ? 'Was this useful?' : '这页有帮助吗？',
    yes: lang === 'en' ? 'Helpful' : '有帮助',
    no: lang === 'en' ? 'Needs work' : '需改进'
  };
}
