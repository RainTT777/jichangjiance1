// 文章数据
export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  author: string;
  publishDate: string;
  updateDate?: string;
  featured?: boolean;
}

export const categories = [
  '新手教程',
  '使用教程',
  '客户端教程',
  '对比指南',
  '问题解答',
  '进阶技巧',
];

export const articles: Article[] = [
  {
    slug: 'what-is-airport-service',
    title: '什么是机场服务？新手完全指南',
    description: '详细介绍机场服务的基本概念、工作原理和选择方法，帮助新手快速了解。',
    category: '新手教程',
    tags: ['新手入门', '基础概念', '选择指南'],
    author: '编辑部',
    publishDate: '2024-01-15',
    updateDate: '2024-03-01',
    featured: true,
  },
  {
    slug: 'how-to-choose-airport',
    title: '如何选择适合自己的机场服务',
    description: '从速度、稳定性、价格等多个维度分析，教你如何选择最适合的机场服务。',
    category: '新手教程',
    tags: ['选择指南', '对比分析', '新手入门'],
    author: '编辑部',
    publishDate: '2024-01-20',
    featured: true,
  },
  {
    slug: 'clash-windows-setup',
    title: 'Clash for Windows 完整配置教程',
    description: '从下载安装到高级配置，详细讲解Clash for Windows的使用方法。',
    category: '客户端教程',
    tags: ['Clash', 'Windows', '客户端配置'],
    author: '技术团队',
    publishDate: '2024-02-01',
    updateDate: '2024-02-28',
    featured: true,
  },
  {
    slug: 'ios-shadowrocket-guide',
    title: 'iOS Shadowrocket 配置指南',
    description: '完整的Shadowrocket使用教程，包括订阅导入、规则配置和常见问题。',
    category: '客户端教程',
    tags: ['iOS', 'Shadowrocket', '客户端配置'],
    author: '技术团队',
    publishDate: '2024-02-05',
    featured: true,
  },
  {
    slug: 'netflix-unlock-guide',
    title: 'Netflix流媒体解锁完整指南',
    description: '如何选择合适的节点解锁Netflix，以及常见问题的解决方法。',
    category: '使用教程',
    tags: ['Netflix', '流媒体解锁', '节点选择'],
    author: '编辑部',
    publishDate: '2024-02-10',
    featured: true,
  },
  {
    slug: 'chatgpt-access-guide',
    title: 'ChatGPT访问指南：如何稳定使用AI工具',
    description: '详细介绍如何通过机场服务访问ChatGPT、Claude等AI工具。',
    category: '使用教程',
    tags: ['ChatGPT', 'AI工具', '使用技巧'],
    author: '技术团队',
    publishDate: '2024-02-15',
    featured: true,
  },
  {
    slug: 'line-type-comparison',
    title: '线路类型对比：IEPL、CN2、BGP详解',
    description: '深入分析不同线路类型的特点、优缺点和适用场景。',
    category: '对比指南',
    tags: ['线路类型', '对比分析', '技术解析'],
    author: '技术团队',
    publishDate: '2024-02-20',
  },
  {
    slug: 'connection-troubleshooting',
    title: '连接问题排查：从入门到精通',
    description: '详细讲解各种连接问题的原因和解决方法，让你成为故障排查专家。',
    category: '问题解答',
    tags: ['故障排查', '问题解决', '技术支持'],
    author: '技术团队',
    publishDate: '2024-02-25',
  },
  {
    slug: 'android-clients-comparison',
    title: 'Android客户端对比：哪个最好用？',
    description: '对比主流Android客户端的功能、性能和易用性，帮你选择最合适的。',
    category: '客户端教程',
    tags: ['Android', '客户端对比', '使用体验'],
    author: '编辑部',
    publishDate: '2024-03-01',
  },
  {
    slug: 'advanced-rules-config',
    title: '进阶：自定义规则配置详解',
    description: '深入讲解规则配置的原理和方法，实现个性化的分流策略。',
    category: '进阶技巧',
    tags: ['规则配置', '进阶技巧', '分流策略'],
    author: '技术团队',
    publishDate: '2024-03-05',
  },
];

// 获取精选文章
export function getFeaturedArticles(): Article[] {
  return articles.filter(article => article.featured);
}

// 根据分类获取文章
export function getArticlesByCategory(category: string): Article[] {
  return articles.filter(article => article.category === category);
}

// 根据标签获取文章
export function getArticlesByTag(tag: string): Article[] {
  return articles.filter(article => article.tags.includes(tag));
}

// 根据slug获取文章
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug);
}
