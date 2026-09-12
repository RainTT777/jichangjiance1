// 专题数据
export interface Topic {
  slug: string;
  title: string;
  description: string;
  icon?: string;
  articleCount: number;
}

export const topics: Topic[] = [
  {
    slug: 'client-guides',
    title: '客户端配置指南',
    description: '各平台客户端的详细安装和配置教程，从入门到精通。',
    icon: '📱',
    articleCount: 12,
  },
  {
    slug: 'ai-tools',
    title: 'AI工具使用',
    description: '如何使用机场服务访问ChatGPT、Claude等AI工具的完整指南。',
    icon: '🤖',
    articleCount: 8,
  },
  {
    slug: 'streaming-unlock',
    title: '流媒体解锁',
    description: 'Netflix、Disney+等流媒体平台的解锁方法和节点选择指南。',
    icon: '🎬',
    articleCount: 10,
  },
  {
    slug: 'beginner-guide',
    title: '新手入门',
    description: '从零开始的完整入门教程，帮助新手快速上手。',
    icon: '🚀',
    articleCount: 15,
  },
  {
    slug: 'advanced-tips',
    title: '进阶技巧',
    description: '高级用户的优化技巧、故障排查和性能调优方法。',
    icon: '⚡',
    articleCount: 9,
  },
  {
    slug: 'security-privacy',
    title: '安全与隐私',
    description: '如何保护个人隐私和提升使用安全性的完整指南。',
    icon: '🔒',
    articleCount: 7,
  },
];
