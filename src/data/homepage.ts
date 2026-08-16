export const heroData = {
  badge: "2026 全网机场实时连通性检测",
  title: "全网 10 大机场实时连通性与性能检测中心",
  subtitle: "基于 24 小时多节点探针自动化监测。实测 EdgeNova、极连云、光年梯、云图、快狸、极速Cloud、瞬云、速界、寰宇云、可信云等 10 大优质机场的晚高峰延迟、丢包率、流媒体解锁与套餐价格。",
  primaryCta: { text: "立即检测全站机场", href: "#detectorRoot" },
  secondaryCta: { text: "客户端下载", href: "/topics/clients/" },
  card: {
    title: "10 大机场实时检测速报",
    status: "全网正常率 99.6%",
    metrics: [
      { label: "平均延迟", value: "38ms" },
      { label: "高峰期丢包率", value: "< 0.2%" },
      { label: "流媒体解锁率", value: "99.1%" },
    ],
    note: "实时同步 · 探针节点：香港/日本/新加坡/美国",
  },
};

export const statsData = [
  { label: "收录品牌词", value: "50+", subtext: "多维度真实检测" },
  { label: "测试指标", value: "12项", subtext: "延迟/带宽/解锁" },
  { label: "教程发布", value: "80+", subtext: "全平台多客户端" },
  { label: "更新频率", value: "每日", subtext: "自动探针数据" },
];

export const featuresData = [
  {
    icon: "BookOpen",
    title: "客户端配置教程",
    description: "全面覆盖 Windows, Mac, iOS, Android 以及路由器系统的零基础上手配置。",
    link: "/category/tutorials/",
    badge: "入门必看",
  },
  {
    icon: "ShieldCheck",
    title: "深度实测报告",
    description: "晚高峰测速、4K/8K 视频缓冲时间、ChatGPT/Netflix 4K 解锁能力横向测评。",
    link: "/category/evaluation/",
    badge: "独立测评",
  },
  {
    icon: "Scales",
    title: "服务选购对比",
    description: "直观对比 IPLC/IEPL 专线、BGP 中转与直连线路的性价比与实际体验。",
    link: "/compare/",
    badge: "选购建议",
  },
  {
    icon: "BuildingLibrary",
    title: "品牌词落地页",
    description: "汇聚全网常见网络加速服务商的详细履历、架构特点与历史稳定性评价。",
    link: "/brands/",
    badge: "品牌聚合",
  },
  {
    icon: "QuestionMarkCircle",
    title: "常见长尾解答",
    description: "针对订阅失败、DNS 污染、规则分流冲突等典型疑难杂症的解决方案。",
    link: "/blog/",
    badge: "排错指南",
  },
  {
    icon: "ChatBubbleLeftRight",
    title: "用户答疑 FAQ",
    description: "快速解答新手在选择节点、客户端以及使用过程中最关心的 5 大常见问题。",
    link: "#faq",
    badge: "常见问题",
  },
];

export const topicClustersData = [
  {
    title: "全平台客户端下载全集",
    slug: "clients",
    description: "包含 Clash Verge Rev, Sing-box, Shadowrocket, Surge, Quantumult X 官方最新版。",
    count: 12,
    badge: "热度最高",
  },
  {
    title: "AI 工具加速与解锁指南",
    slug: "ai-tools",
    description: "ChatGPT, Claude 3.5, Midjourney 等生成式 AI 常用原生节点要求与配置解析。",
    count: 8,
    badge: "效率必备",
  },
  {
    title: "4K 流媒体解锁专题",
    slug: "streaming",
    description: "Netflix, Disney+, YouTube Premium 原生 IP 解锁检测与检测工具推荐。",
    count: 6,
    badge: "影音娱乐",
  },
  {
    title: "美区 Apple ID 共享与注册",
    slug: "apple-id",
    description: "免信用卡注册美区 Apple ID 教程，以及小火箭安装备用账号获取。",
    count: 5,
    badge: "免费资源",
  },
];

export const comparisonData = {
  title: "服务方案横向对比（示例维度）",
  subtitle: "根据业务需求与使用场景，选择最适合自己的网络线路架构",
  rows: [
    {
      type: "IPLC/IEPL 顶级专线",
      speed: "极高 (最高 1Gbps)",
      stability: "99.9% (不受敏感时期影响)",
      unblock: "原生 IP 全解锁",
      price: "较高的资费预算",
      recommendation: "适合对延迟敏感、注重连通率与高规格工作用户",
    },
    {
      type: "BGP 多线中转",
      speed: "高 (200Mbps-500Mbps)",
      stability: "98.5% (偶有微小波动)",
      unblock: "大多数平台支持",
      price: "中等性价比高",
      recommendation: "适合日常 4K 看剧、AI 办公与绝大多数普通用户",
    },
    {
      type: "普通直连/云服务器",
      speed: "中等 (视本地 ISP 决定)",
      stability: "容易受晚高峰拥堵影响",
      unblock: "视机房广播 IP 决定",
      price: "极低/免费",
      recommendation: "适合临时应急或轻度查阅资料需求",
    },
  ],
};

export const seoSectionData = {
  title: "为什么需要独立客观的机场节点测评与技术检测？",
  contentParagraphs: [
    "在当今复杂的网络环境下，选择一个稳定、高速且隐私安全的网络加速服务至关重要。市场上的服务商参差不齐，线路架构包括 IPLC 专线、IEPL 专线、BGP 中转以及普通的直连节点。普通用户往往难以通过简单的宣传文案判断其真实的抗波动能力与晚高峰速率。",
    "机场检测指南通过自建多节点自动化探针，每日 24 小时监测不同品牌在香港、日本、新加坡、台湾、美国等常用区域节点的延迟、Packet Loss 丢包率与带宽峰值。同时，我们针对 ChatGPT、Claude、Netflix、Disney+ 等主流平台的地理位置检测规则，提供实时的解锁有效性分析。",
    "无论您是在寻找适合 iOS 的 Shadowrocket 小火箭教程，还是需要 Windows 上 Clash Verge Rev 的配置指导，亦或是想对比不同品牌之间的性价比，本站均能为您提供详实、结构化且无虚假营销的技术沉淀。",
  ],
};

export const faqData = [
  {
    question: "什么是 IPLC / IEPL 专线？为什么比直连更稳定？",
    answer: "IPLC（国际专线电路）与 IEPL（国际以太网专线）是点对点的内网传输通道，数据无需经过公共互联网防火墙过滤。因此，专线在晚高峰时期几乎不受骨干网拥堵影响，延迟低且丢包率极低。",
  },
  {
    question: "Clash 和 Sing-box 客户端应该如何选择？",
    answer: "Clash Verge Rev 界面美观、开箱即用，适合绝大多数桌面用户；Sing-box 则是新一代通用代理框架，支持更丰富的协议（如 Vless, Reality, Hysteria 2），性能开销低，适合对新技术有要求的进阶用户。",
  },
  {
    question: "为什么访问 ChatGPT 或 Netflix 会提示“地区不受支持”？",
    answer: "这类服务采用了严格的风控机制，会对公共机房广播 IP 进行屏蔽。如果您的节点使用的不是原生住宅 IP 或被频繁共享，就会触发地理位置阻断。建议选择提供原生 IP 分流解锁的服务。",
  },
  {
    question: "本站是否提供付费订阅购买？",
    answer: "本站为纯粹的技术评测与知识分享博客，不直接出售任何网络代理订阅或服务。所有内容仅供技术探讨、学习交流与选购参考。",
  },
  {
    question: "新手第一次使用代理软件，应该从哪里开始？",
    answer: "建议先阅读我们的【客户端教程】栏目，根据您的操作系统（Windows, Mac, iOS 或 Android）下载对应的官方客户端，并学习如何导入订阅链接与启用规则分流。",
  },
];

export const ctaData = {
  title: "准备好提升您的网络连接体验了吗？",
  subtitle: "探索我们精心整理的独立测评报告与全平台客户端下载指南，轻松找到最适合您的方案。",
  primaryButton: { text: "立即浏览测评", href: "/category/evaluation/" },
  secondaryButton: { text: "查看品牌库", href: "/brands/" },
};
