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
  sections?: {
    title: string;
    body?: string;
    items?: { title: string; body: string; href?: string; id?: string }[];
  }[];
};

const host = 'https://riskmeter.app';
type NavLink = { label: string; href: string };

export const languages: Record<Lang, { label: string; switchLabel: string }> = {
  en: { label: 'English', switchLabel: '中文' },
  zh: { label: '中文', switchLabel: 'EN' }
};

export const nav: Record<Lang, { label: string; href: string }[]> = {
  en: [
    { label: 'Home', href: '/en/' },
    { label: 'Tools', href: '/en/drawdown-test/' },
    { label: 'Pendulum', href: '/en/pendulum/' },
    { label: 'Explain', href: '/en/risk-glossary/' },
    { label: 'Help', href: '/en/support/' }
  ],
  zh: [
    { label: '首页', href: '/zh/' },
    { label: '工具', href: '/zh/drawdown-test/' },
    { label: '钟摆', href: '/zh/pendulum/' },
    { label: '看解释', href: '/zh/risk-glossary/' },
    { label: '帮助', href: '/zh/support/' }
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

const toolCtas = (lang: Lang, currentSlug = '') => workflowSteps(lang)
  .filter((item) => item.slug !== currentSlug)
  .slice(0, 3)
  .map(({ label, href }) => ({ label, href }));

export const pages: RiskPage[] = [
  {
    lang: 'en',
    slug: '',
    title: 'RiskMeter - Check Investment Risk Before You Buy',
    description: 'RiskMeter helps new investors see possible losses, recovery needs, and simple portfolio adjustments before making decisions.',
    eyebrow: 'Risk checks without predictions',
    headline: 'Before you invest, see how much loss you could handle.',
    summary: 'Simple tools for beginners: estimate a possible loss, see how hard it is to recover, and plan what to adjust. No stock picks, no price predictions.',
    kind: 'home',
    primaryCta: { label: 'Start with the loss test', href: '/en/drawdown-test/' },
    secondaryCtas: [
      { label: 'Check market mood', href: '/en/pendulum/' },
      { label: 'Explain the terms', href: '/en/risk-glossary/' }
    ]
  },
  {
    lang: 'zh',
    slug: '',
    title: 'RiskMeter - 买之前先看看风险',
    description: 'RiskMeter 帮助理财小白看懂可能亏多少、回本有多难，以及什么时候该调整仓位。',
    eyebrow: '不预测，只做风险检查',
    headline: '买之前，先看看自己能不能承受下跌。',
    summary: '给理财小白用的简单工具：估算可能亏多少、回本要涨多少、仓位要不要调整。不荐股、不预测涨跌，只帮你把风险看清楚。',
    kind: 'home',
    primaryCta: { label: '先看能亏多少', href: '/zh/drawdown-test/' },
    secondaryCtas: [
      { label: '看看市场情绪', href: '/zh/pendulum/' },
      { label: '看通俗解释', href: '/zh/risk-glossary/' }
    ]
  },
  {
    lang: 'en',
    slug: 'drawdown-test',
    title: 'Loss Tolerance Test - RiskMeter',
    description: 'Estimate how much portfolio loss you may be able to handle before you panic.',
    eyebrow: 'Start here',
    headline: 'If your money drops, how much can you really handle?',
    summary: 'Move the slider to see the dollar loss and how much gain is needed to get back to even.',
    kind: 'drawdown-test',
    primaryCta: { label: 'See how hard recovery is', href: '/en/drawdown-recovery/' },
    secondaryCtas: toolCtas('en', 'drawdown-test')
  },
  {
    lang: 'zh',
    slug: 'drawdown-test',
    title: '亏损承受测试 - RiskMeter',
    description: '估算账户下跌多少时，你可能会开始慌。',
    eyebrow: '从这里开始',
    headline: '如果账户下跌，你到底能扛住多少？',
    summary: '拖动滑杆，看会亏多少钱，以及要涨多少才能回本。',
    kind: 'drawdown-test',
    primaryCta: { label: '看看回本有多难', href: '/zh/drawdown-recovery/' },
    secondaryCtas: toolCtas('zh', 'drawdown-test')
  },
  {
    lang: 'en',
    slug: 'drawdown-recovery',
    title: 'Recovery After Loss - RiskMeter',
    description: 'See how much return is needed to recover after a portfolio loss.',
    eyebrow: 'Can you get back?',
    headline: 'After a loss, how much does it need to rise to recover?',
    summary: 'A 20% loss does not need 20% to recover. This page shows the real return needed over 1, 3, or 5 years.',
    kind: 'drawdown-recovery',
    primaryCta: { label: 'Check room for more loss', href: '/en/drawdown-capacity/' },
    secondaryCtas: toolCtas('en', 'drawdown-recovery')
  },
  {
    lang: 'zh',
    slug: 'drawdown-recovery',
    title: '亏损后多久回本 - RiskMeter',
    description: '看看亏损后，要涨多少、多久才可能回本。',
    eyebrow: '能不能回本',
    headline: '亏了以后，要涨多少才能回本？',
    summary: '亏 20% 不是涨 20% 就能回本。这里会告诉你 1 年、3 年、5 年分别需要多高的收益。',
    kind: 'drawdown-recovery',
    primaryCta: { label: '看看还能承受多少下跌', href: '/zh/drawdown-capacity/' },
    secondaryCtas: toolCtas('zh', 'drawdown-recovery')
  },
  {
    lang: 'en',
    slug: 'drawdown-capacity',
    title: 'More Loss Room Calculator - RiskMeter',
    description: 'Estimate how much more one investment can fall before your account hits your loss limit.',
    eyebrow: 'One holding risk',
    headline: 'How much more can this holding fall before it hurts too much?',
    summary: 'Enter your account size and one holding size. The tool estimates how much more that holding could drop before you hit your loss limit.',
    kind: 'drawdown-capacity',
    primaryCta: { label: 'Plan what to adjust', href: '/en/rebalancing-planner/' },
    secondaryCtas: toolCtas('en', 'drawdown-capacity')
  },
  {
    lang: 'zh',
    slug: 'drawdown-capacity',
    title: '还能跌多少计算器 - RiskMeter',
    description: '估算某个持仓继续下跌多少，会触碰你的亏损上限。',
    eyebrow: '单个持仓风险',
    headline: '这个持仓再跌多少，你会比较难受？',
    summary: '输入账户总金额和某个持仓金额，看看它继续下跌多少会接近你的亏损上限。',
    kind: 'drawdown-capacity',
    primaryCta: { label: '看看要不要调整仓位', href: '/zh/rebalancing-planner/' },
    secondaryCtas: toolCtas('zh', 'drawdown-capacity')
  },
  {
    lang: 'en',
    slug: 'rebalancing-planner',
    title: 'Portfolio Adjustment Planner - RiskMeter',
    description: 'Check whether one holding is too high or too low compared with your target.',
    eyebrow: 'Adjust holdings',
    headline: 'Is one holding taking up too much of your account?',
    summary: 'Enter your target percentage and current percentage. The tool tells you whether you may need to buy, sell, or leave it alone.',
    kind: 'rebalancing-planner',
    primaryCta: { label: 'Check market mood', href: '/en/pendulum/' },
    secondaryCtas: toolCtas('en', 'rebalancing-planner')
  },
  {
    lang: 'zh',
    slug: 'rebalancing-planner',
    title: '仓位调整计划器 - RiskMeter',
    description: '看看某个持仓是不是太多或太少，是否需要调整。',
    eyebrow: '调整仓位',
    headline: '某个持仓是不是占比太高了？',
    summary: '输入你想要的比例和现在的比例，工具会提示大概该买、该卖，还是先不动。',
    kind: 'rebalancing-planner',
    primaryCta: { label: '看看市场情绪', href: '/zh/pendulum/' },
    secondaryCtas: toolCtas('zh', 'rebalancing-planner')
  },
  {
    lang: 'en',
    slug: 'pendulum',
    title: 'Market Mood Pendulum - RiskMeter',
    description: 'Use a simple pendulum to think about whether the market feels fearful, calm, or too excited.',
    eyebrow: 'Market mood',
    headline: 'Is the market calm, fearful, or too excited?',
    summary: 'This is not a prediction. It helps you notice whether people are taking too much risk or becoming too scared.',
    kind: 'pendulum',
    primaryCta: { label: 'Read the plain explanation', href: '/en/what-is-market-pendulum/' },
    secondaryCtas: toolCtas('en', 'pendulum')
  },
  {
    lang: 'zh',
    slug: 'pendulum',
    title: '市场情绪钟摆 - RiskMeter',
    description: '用一个简单钟摆看看市场是害怕、平静，还是过度兴奋。',
    eyebrow: '市场情绪',
    headline: '现在的市场，是害怕、平静，还是太兴奋？',
    summary: '这不是预测涨跌，只是提醒你：大家太兴奋时别冲动，大家太害怕时也别慌。',
    kind: 'pendulum',
    primaryCta: { label: '看通俗解释', href: '/zh/market-pendulum-theory/' },
    secondaryCtas: toolCtas('zh', 'pendulum')
  }
];

const guidePages: RiskPage[] = [
  {
    lang: 'en',
    slug: 'drawdown-risk',
    title: 'Why Losses Feel Hard - RiskMeter',
    description: 'A beginner-friendly explanation of why losses are hard to recover from.',
    eyebrow: 'Plain guide',
    headline: 'Why a loss hurts more than it first looks.',
    summary: 'If your account loses 25%, it needs to rise 33.3% to get back. This page explains that simple idea without heavy finance jargon.',
    kind: 'guide',
    primaryCta: { label: 'Try the loss test', href: '/en/drawdown-test/' },
    secondaryCtas: [{ label: 'See recovery examples', href: '/en/drawdown-recovery/' }, { label: 'Explain the terms', href: '/en/risk-glossary/' }],
    sections: [
      { title: 'Three simple ideas', items: [
        { title: 'Losing 20% is not fixed by gaining 20%', body: 'After a loss, your money starts from a smaller base, so it needs a bigger rise to recover.' },
        { title: 'Time matters', body: 'A loss may look okay on paper, but waiting years to recover can feel very different.' },
        { title: 'Panic is the real danger', body: 'Many people make bad decisions after the loss already feels uncomfortable.' }
      ] },
      { title: 'A simple loss scale', items: [
        { title: '0-10%: small pullback', body: 'Common in investing, but still useful for checking your feelings.' },
        { title: '11-15%: uncomfortable', body: 'You may start watching the account more often.' },
        { title: '16-25%: stressful', body: 'Many beginners start wanting to change everything here.' },
        { title: '26-35%: serious loss', body: 'You need a clear plan and enough cash for daily life.' },
        { title: '36%+: danger zone', body: 'At this point the question is often survival, not return.' }
      ] }
    ]
  },
  {
    lang: 'zh',
    slug: 'drawdown-explained',
    title: '为什么亏损很难受？- RiskMeter',
    description: '用适合理财小白的方式解释：为什么亏损后回本更难。',
    eyebrow: '通俗指南',
    headline: '亏损为什么比看上去更难受？',
    summary: '账户亏 25%，不是涨 25% 就能回本，而是要涨 33.3%。这页用大白话解释这个逻辑。',
    kind: 'guide',
    primaryCta: { label: '先看能亏多少', href: '/zh/drawdown-test/' },
    secondaryCtas: [{ label: '看回本例子', href: '/zh/drawdown-recovery/' }, { label: '看通俗解释', href: '/zh/risk-glossary/' }],
    sections: [
      { title: '三个简单重点', items: [
        { title: '亏 20% 不是涨 20% 就回本', body: '亏损后本金变少了，所以需要更大的涨幅才能回到原点。' },
        { title: '多久回本很重要', body: '纸面上能接受的亏损，如果要等几年才回本，实际感受会很不同。' },
        { title: '最怕的是慌了乱操作', body: '很多错误不是因为亏损本身，而是亏了之后临时冲动做决定。' }
      ] },
      { title: '亏损大概分几档', items: [
        { title: '0-10%：小幅下跌', body: '投资里比较常见，但也可以用来观察自己会不会紧张。' },
        { title: '11-15%：开始不舒服', body: '你可能会更频繁地打开账户看。' },
        { title: '16-25%：明显有压力', body: '很多新手会在这里开始想全部改变策略。' },
        { title: '26-35%：比较严重', body: '这时候需要提前想好的计划，也需要生活资金不受影响。' },
        { title: '36% 以上：危险区', body: '这时更像是能不能扛住的问题，而不是赚多少的问题。' }
      ] }
    ]
  },
  {
    lang: 'en',
    slug: 'what-is-market-pendulum',
    title: 'What Is the Market Mood Pendulum? - RiskMeter',
    description: 'A beginner-friendly explanation of market mood: fear, calm, and excitement.',
    eyebrow: 'Plain explanation',
    headline: 'Markets often swing between fear and excitement.',
    summary: 'This idea does not tell you what to buy. It helps you notice when people may be too confident or too scared.',
    kind: 'guide',
    primaryCta: { label: 'Open the mood tool', href: '/en/pendulum/' },
    secondaryCtas: [{ label: 'Why losses hurt', href: '/en/drawdown-risk/' }, { label: 'Adjust holdings', href: '/en/rebalancing-planner/' }],
    sections: [
      { title: 'What to notice', items: [
        { title: 'People get excited together', body: 'When everyone thinks things can only go up, risk may be higher than it feels.' },
        { title: 'People get scared together', body: 'When everyone is afraid, prices may already include a lot of bad news.' },
        { title: 'Use it as a reminder', body: 'The pendulum is not a signal. It is a reminder to slow down before acting.' }
      ] }
    ]
  },
  {
    lang: 'zh',
    slug: 'market-pendulum-theory',
    title: '市场情绪钟摆是什么？- RiskMeter',
    description: '用适合理财小白的方式解释市场情绪：害怕、平静、过度兴奋。',
    eyebrow: '通俗解释',
    headline: '市场常常在害怕和兴奋之间摆动。',
    summary: '它不会告诉你买什么，只是提醒你：大家太自信或太害怕时，都要慢一点做决定。',
    kind: 'guide',
    primaryCta: { label: '打开情绪工具', href: '/zh/pendulum/' },
    secondaryCtas: [{ label: '为什么亏损难受', href: '/zh/drawdown-explained/' }, { label: '调整仓位', href: '/zh/rebalancing-planner/' }],
    sections: [
      { title: '你需要观察什么', items: [
        { title: '大家会一起兴奋', body: '当所有人都觉得只会涨，风险可能比你感觉到的更高。' },
        { title: '大家也会一起害怕', body: '当所有人都害怕时，价格里可能已经包含很多坏消息。' },
        { title: '把它当提醒，不当信号', body: '钟摆不是买卖信号，只是提醒你做决定前先慢下来。' }
      ] }
    ]
  }
];

const supportPages: RiskPage[] = [
  {
    lang: 'en',
    slug: 'about',
    title: 'About - RiskMeter',
    description: 'What RiskMeter does, what it does not do, and how beginners should use it.',
    eyebrow: 'About',
    headline: 'A simple risk checklist before you invest.',
    summary: 'RiskMeter helps beginners ask: how much could I lose, how hard is recovery, and what should I avoid doing in a panic?',
    kind: 'generic',
    primaryCta: { label: 'Read the rules we follow', href: '/en/ethics/' },
    sections: [
      { title: 'What RiskMeter is', body: 'A set of simple calculators and plain explanations for thinking about investment losses before they happen.' },
      { title: 'What RiskMeter is not', body: 'It is not investment advice, a trading system, or a list of things to buy or sell.' },
      { title: 'Important note', body: 'The numbers are simplified examples. Always make your own decision and consider your own situation.' }
    ]
  },
  {
    lang: 'zh',
    slug: 'about',
    title: '关于 - RiskMeter',
    description: '了解 RiskMeter 能做什么、不能做什么，以及理财小白该怎么用。',
    eyebrow: '关于',
    headline: '投资前，先做一遍简单风险检查。',
    summary: 'RiskMeter 帮理财小白先问清楚：可能亏多少、回本难不难、亏了以后最不该做什么。',
    kind: 'generic',
    primaryCta: { label: '看看工具边界', href: '/zh/ethics/' },
    sections: [
      { title: 'RiskMeter 是什么', body: '一组简单计算器和大白话说明，帮你在投资前先想清楚亏损风险。' },
      { title: 'RiskMeter 不是什么', body: '它不是投资建议、交易系统，也不会告诉你买什么、卖什么。' },
      { title: '重要提醒', body: '页面里的数字只是简化估算。真正做决定时，还要结合你自己的收入、支出和资金安排。' }
    ]
  },
  {
    lang: 'en',
    slug: 'ethics',
    title: 'Rules We Follow - RiskMeter',
    description: 'The simple rules RiskMeter follows: no predictions, no stock tips, and local-only inputs.',
    eyebrow: 'Our rules',
    headline: 'We keep the tool clear: no tips, no predictions.',
    summary: 'RiskMeter is built to help you think, not to push you into a trade.',
    kind: 'generic',
    primaryCta: { label: 'Get help', href: '/en/support/' },
    sections: [
      { title: 'What we do', body: 'We show simple risk numbers and explain what they mean in plain language.' },
      { title: 'What we do not do', body: 'We do not give price targets, trading signals, or promises about future returns.' },
      { title: 'Data & privacy', body: 'Your tool inputs stay in your browser unless you choose to copy and share them.' },
      { title: 'Feedback', body: 'If something is unclear or too technical, it should be improved.' }
    ]
  },
  {
    lang: 'zh',
    slug: 'ethics',
    title: '我们遵守的规则 - RiskMeter',
    description: 'RiskMeter 的工具边界：不预测、不荐股，输入只保存在本地。',
    eyebrow: '工具边界',
    headline: '这个工具只帮你看风险，不给买卖建议。',
    summary: 'RiskMeter 是帮你想清楚，不是催你交易。',
    kind: 'generic',
    primaryCta: { label: '查看怎么用', href: '/zh/support/' },
    sections: [
      { title: '这个工具做什么', body: '用简单数字和大白话，帮你先看清可能亏多少。' },
      { title: '这个工具不做什么', body: '不预测价格，不给交易信号，也不承诺收益。' },
      { title: '数据与隐私', body: '你的输入默认只保存在浏览器本地，除非你主动复制分享。' },
      { title: '反馈', body: '如果哪里看不懂、太专业，就应该继续改得更清楚。' }
    ]
  },
  {
    lang: 'en',
    slug: 'support',
    title: 'Help - RiskMeter',
    description: 'How to use RiskMeter as a beginner and what the tool numbers mean.',
    eyebrow: 'Help',
    headline: 'How to use these tools without overthinking it.',
    summary: 'Start with the loss test, then check recovery, room for more loss, and whether your holdings need adjustment.',
    kind: 'generic',
    primaryCta: { label: 'Explain the terms', href: '/en/risk-glossary/' },
    sections: [
      { title: 'Where to start', body: 'If you are new, start with “how much loss can I handle?” before thinking about what to buy.' },
      { title: 'Where your inputs go', body: 'Inputs stay in your browser. Clearing cache or changing devices can erase them.' },
      { title: 'What the numbers do not include', body: 'The tools do not include taxes, fees, cash needs, or every detail of real investing. Treat them as a rough check.' }
    ]
  },
  {
    lang: 'zh',
    slug: 'support',
    title: '使用帮助 - RiskMeter',
    description: '理财小白如何使用 RiskMeter，以及页面里的数字大概代表什么。',
    eyebrow: '帮助',
    headline: '不用想太复杂，按顺序用就可以。',
    summary: '先看自己能承受多少亏损，再看回本难度、还能跌多少、仓位要不要调。',
    kind: 'generic',
    primaryCta: { label: '看通俗解释', href: '/zh/risk-glossary/' },
    sections: [
      { title: '从哪里开始', body: '如果你是新手，先问“我能承受亏多少”，再去想买什么。' },
      { title: '输入保存在哪里', body: '输入保存在浏览器本地。清缓存或换设备后，可能会消失。' },
      { title: '这些数字不包含什么', body: '工具不包含税费、手续费、现金需求和真实投资里的所有细节。请把结果当作粗略检查。' }
    ]
  }
];

const glossaryTerms = {
  en: [
    ['drawdown', 'Drop from high', 'How far your account has fallen from its recent high.'],
    ['max-drawdown', 'Biggest drop', 'The worst fall from high to low in the period you are checking.'],
    ['recovery-time', 'Time to break even', 'How long it may take for the account to get back to where it started.'],
    ['risk-asymmetry', 'Loss recovery gap', 'A loss needs a bigger percentage gain to get back to even.'],
    ['risk-budget', 'Loss limit', 'The amount of loss you decide you can accept before investing.'],
    ['position-sizing', 'Holding size', 'How much money you put into one fund, stock, or asset.'],
    ['rebalancing', 'Adjusting holdings', 'Buying or selling a little to bring your holdings back near your plan.'],
    ['drift', 'Off target', 'How far the current percentage is from the percentage you planned.'],
    ['rebalancing-band', 'Adjustment trigger', 'The range you allow before you decide to adjust.'],
    ['drawdown-capacity', 'Loss room', 'How much more loss your account can take before it reaches your limit.'],
    ['sentiment', 'Market mood', 'Whether people feel scared, calm, or too excited about the market.'],
    ['mean-reversion', 'Back toward normal', 'After something becomes extreme, it may move closer to a normal level.']
  ],
  zh: [
    ['drawdown', '从高点跌了多少', '账户从最近高点跌下来多少。比如 10 万跌到 8 万，就是跌了 20%。'],
    ['max-drawdown', '最大下跌', '你查看的这段时间里，最严重的一次从高点跌到低点。'],
    ['recovery-time', '多久回本', '账户从亏损状态回到原来金额，大概要多久。'],
    ['risk-asymmetry', '亏损和回本不对等', '亏 20% 后，需要涨 25% 才能回本，不是涨 20%。'],
    ['risk-budget', '亏损上限', '投资前先想好：最多亏到什么程度我还能接受。'],
    ['position-sizing', '持仓金额', '你把多少钱放在某个基金、股票或资产上。'],
    ['rebalancing', '调整仓位', '某类资产涨太多或跌太多后，买一点或卖一点，让比例回到计划附近。'],
    ['drift', '偏离目标', '现在的占比和你原计划的占比差了多少。'],
    ['rebalancing-band', '调整触发线', '偏离超过这个范围，才考虑调整，避免频繁操作。'],
    ['drawdown-capacity', '还能亏多少', '在到达你设定的亏损上限前，账户还剩多少缓冲。'],
    ['sentiment', '市场情绪', '大家现在更害怕、更平静，还是更兴奋。'],
    ['mean-reversion', '回到正常附近', '太热或太冷的状态，之后可能慢慢回到比较正常的位置。']
  ]
};

export const glossaryPages: RiskPage[] = (['en', 'zh'] as Lang[]).map((lang) => ({
  lang,
  slug: 'risk-glossary',
  title: lang === 'en' ? 'Plain Risk Terms - RiskMeter' : '风险名词解释 - RiskMeter',
  description: lang === 'en'
    ? 'Plain explanations of the risk terms used across RiskMeter.'
    : '用大白话解释 RiskMeter 里常见的风险名词。',
  eyebrow: lang === 'en' ? 'Plain terms' : '通俗解释',
  headline: lang === 'en' ? 'Risk words, explained simply.' : '把风险名词说简单一点。',
  summary: lang === 'en'
    ? 'Use this page when a tool label feels unfamiliar. The goal is quick understanding, not textbook definitions.'
    : '如果工具里有词看不懂，先来这里查一下。这里不写教材式定义，只讲你需要知道的大概意思。',
  kind: 'glossary',
  primaryCta: { label: lang === 'en' ? 'Start with loss check' : '先看能亏多少', href: `/${lang}/drawdown-test/` },
  sections: [
    {
      title: lang === 'en' ? 'Common words' : '常见说法',
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

export function workflowSteps(lang: Lang) {
  const prefix = `/${lang}`;
  return lang === 'en'
    ? [
      { slug: 'drawdown-test', label: 'Loss check', shortLabel: 'Loss', href: `${prefix}/drawdown-test/`, body: 'Check how much loss may feel too much.' },
      { slug: 'drawdown-recovery', label: 'Break-even check', shortLabel: 'Recover', href: `${prefix}/drawdown-recovery/`, body: 'See how much it needs to rise to recover.' },
      { slug: 'drawdown-capacity', label: 'More-loss room', shortLabel: 'Room', href: `${prefix}/drawdown-capacity/`, body: 'Check how much buffer is left.' },
      { slug: 'rebalancing-planner', label: 'Adjustment check', shortLabel: 'Adjust', href: `${prefix}/rebalancing-planner/`, body: 'Decide whether to buy, sell, or wait.' },
      { slug: 'pendulum', label: 'Market mood', shortLabel: 'Mood', href: `${prefix}/pendulum/`, body: 'Notice fear, calm, or excitement.' }
    ]
    : [
      { slug: 'drawdown-test', label: '先看能亏多少', shortLabel: '亏多少', href: `${prefix}/drawdown-test/`, body: '先看下跌到什么程度会难受。' },
      { slug: 'drawdown-recovery', label: '再看多久回本', shortLabel: '回本', href: `${prefix}/drawdown-recovery/`, body: '看亏了以后要涨多少才回本。' },
      { slug: 'drawdown-capacity', label: '检查剩余缓冲', shortLabel: '缓冲', href: `${prefix}/drawdown-capacity/`, body: '看看离亏损上限还差多少。' },
      { slug: 'rebalancing-planner', label: '决定要不要调仓', shortLabel: '调仓', href: `${prefix}/rebalancing-planner/`, body: '判断是买一点、卖一点，还是先不动。' },
      { slug: 'pendulum', label: '看看市场情绪', shortLabel: '情绪', href: `${prefix}/pendulum/`, body: '提醒自己别太冲动，也别太慌。' }
    ];
}

export function currentWorkflowIndex(page: RiskPage) {
  return workflowSteps(page.lang).findIndex((step) => step.slug === page.slug);
}

export function nextWorkflowStep(page: RiskPage) {
  const steps = workflowSteps(page.lang);
  const index = currentWorkflowIndex(page);
  if (index < 0) return steps[0];
  return steps[index + 1] ?? steps[0];
}

export function pageLabel(page: Pick<RiskPage, 'lang' | 'slug' | 'headline'>) {
  const workflow = workflowSteps(page.lang).find((step) => step.slug === page.slug);
  if (workflow) return workflow.label;
  if (!page.slug) return page.lang === 'en' ? 'Home' : '首页';
  const labels: Record<string, Record<Lang, string>> = {
    'drawdown-risk': { en: 'Drawdown guide', zh: '回撤指南' },
    'drawdown-explained': { en: 'Drawdown guide', zh: '回撤指南' },
    'what-is-market-pendulum': { en: 'Pendulum theory', zh: '钟摆理论' },
    'market-pendulum-theory': { en: 'Pendulum theory', zh: '钟摆理论' },
    'risk-glossary': { en: 'Plain risk terms', zh: '风险名词解释' },
    about: { en: 'About', zh: '关于' },
    ethics: { en: 'Rules', zh: '工具边界' },
    support: { en: 'Support', zh: '支持' },
    sitemap: { en: 'Sitemap', zh: '站点地图' }
  };
  return labels[page.slug]?.[page.lang] ?? page.headline;
}

export function breadcrumbs(page: RiskPage): NavLink[] {
  if (!page.slug) return [];
  const base = [{ label: page.lang === 'en' ? 'Home' : '首页', href: `/${page.lang}/` }];
  if (currentWorkflowIndex(page) >= 0) {
    return [
      ...base,
      { label: page.lang === 'en' ? 'Risk checks' : '风险检查', href: `/${page.lang}/drawdown-test/` },
      { label: pageLabel(page), href: pagePath(page) }
    ];
  }
  return [...base, { label: pageLabel(page), href: pagePath(page) }];
}

export function contextualLinks(page: RiskPage): NavLink[] {
  const path = pagePath(page);
  const dedupe = (items: NavLink[]) => {
    const seen = new Set<string>();
    return items.filter((item) => item.href !== path && !seen.has(item.href) && seen.add(item.href));
  };
  if (currentWorkflowIndex(page) >= 0) {
    const next = nextWorkflowStep(page);
    const support = page.lang === 'en'
      ? [{ label: 'Plain risk terms', href: '/en/risk-glossary/' }, { label: 'Why losses hurt', href: '/en/drawdown-risk/' }]
      : [{ label: '风险名词解释', href: '/zh/risk-glossary/' }, { label: '为什么亏损难受', href: '/zh/drawdown-explained/' }];
    return dedupe([{ label: page.lang === 'en' ? `Next: ${next.label}` : `下一步：${next.label}`, href: next.href }, ...support]);
  }
  return dedupe([
    page.primaryCta,
    ...(page.secondaryCtas ?? []),
    { label: page.lang === 'en' ? 'Start risk checks' : '开始风险检查', href: `/${page.lang}/drawdown-test/` }
  ].filter(Boolean) as NavLink[]);
}

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
      ? 'For risk checking only. Tool inputs stay in your browser.'
      : '仅作风险检查参考。工具输入保存在浏览器本地。',
    related: lang === 'en' ? 'Next checks' : '下一步检查',
    allPages: lang === 'en' ? 'All pages' : '所有页面',
    useful: lang === 'en' ? 'Was this useful?' : '这页有帮助吗？',
    yes: lang === 'en' ? 'Helpful' : '有帮助',
    no: lang === 'en' ? 'Needs work' : '需改进'
  };
}
