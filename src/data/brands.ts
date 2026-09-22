// 品牌数据
export interface Brand {
  slug: string;
  name: string;
  description: string;
  logo: string;
  category?: string;
  featured?: boolean;
  pros: string[];
  cons: string[];
  rating?: number;
  articleCount?: number;
}

export const brands: Brand[] = [
  {
    slug: 'edgenova',
    name: 'EdgeNova',
    description: '全线 IPLC 专线，晚高峰依然稳定流畅。解锁 Netflix、Disney+、ChatGPT 等主流服务。',
    logo: '/edgenova_logo.png',
    category: 'IEPL专线',
    featured: true,
    pros: ['物理内网专线抗干扰', '无感秒开 4K/8K 视频', '原生纯净 IP 解锁 AI'],
    cons: ['热门节点偶有满载', '起步套餐无按量付'],
    rating: 9.8,
    articleCount: 5,
  },
  {
    slug: 'sujie',
    name: '速界',
    description: '专门针对跨服游戏玩家优化，提供低丢包率的专线连接，游戏与4K观影体验极佳。',
    logo: '/sujie_logo.png',
    category: '游戏加速专线',
    featured: true,
    pros: ['极低 Jitter 抖动', '真实 1.0 倍率不限设备', '游戏专线低丢包'],
    cons: ['免费体验节点较少'],
    rating: 9.6,
    articleCount: 4,
  },
  {
    slug: 'kexinyun',
    name: '可信云',
    description: '高强度数据加密，无日志记录，极度保护用户隐私安全，支持匿名支付与全端订阅。',
    logo: '/kexinyun_logo.png',
    category: '高性价比/按量',
    featured: true,
    pros: ['全过程无日志记录', '不限设备同时连接', '年付折合仅 8 元/月'],
    cons: ['客服响应时间稍长'],
    rating: 9.5,
    articleCount: 3,
  },
  {
    slug: 'kuaili',
    name: '快狸',
    description: '专注大带宽 UDP 优化与流媒体解锁，多线程并发下载测试可轻松达到 100MB/s - 300MB/s。',
    logo: '/kuaili_logo.png',
    category: '大流量/高吞吐',
    featured: true,
    pros: ['300MB/s 极限峰值带宽', '不设隐形高倍率', '新手一键配置'],
    cons: ['节点维护更新较频繁'],
    rating: 9.4,
    articleCount: 3,
  },
  {
    slug: 'yuntu',
    name: '云图机场',
    description: '金融级物理专线不过 GFW 过滤，独享商业原生 IP 池，针对 ChatGPT、Claude 进行风控优化。',
    logo: '/yuntu_logo.png',
    category: '外贸&AI解锁',
    featured: true,
    pros: ['真物理专线不过 GFW', '商业白名单纯净 IP', '外贸/AI 生产力首选'],
    cons: ['资费相对偏高'],
    rating: 9.3,
    articleCount: 4,
  },
  {
    slug: 'jisuyun',
    name: '极速机场',
    description: '采用国内三网顶级精品优化线路与物理落地，提供 28ms 超低延迟与 990M 带宽。',
    logo: '/jisuyun_logo.png',
    category: 'IEPL专线',
    featured: true,
    pros: ['28ms 国内极低延迟', '三网 CN2 GIA 9929', '24小时无视晚高峰'],
    cons: ['限制在线连接数'],
    rating: 9.1,
    articleCount: 3,
  },
  {
    slug: 'shunyun',
    name: '瞬云',
    description: '主打轻量与极速连接，支持灵活的按量付费模式，非常适合作为主线之外的备用机场。',
    logo: '/shunyun_logo.png',
    category: '高性价比/按量',
    featured: false,
    pros: ['灵活按量计费模式', '轻量极速握手连接', '备用永不失联'],
    cons: ['基础包流量较小'],
    rating: 9.0,
    articleCount: 3,
  },
  {
    slug: 'jilianyun',
    name: '极连云',
    description: '多站 BGP 中转架构，访问国内响应迅速，适合跨服游戏、4K 高清视频和日常办公使用。',
    logo: '/jilianyun_logo.png',
    category: '高性价比/按量',
    featured: false,
    pros: ['多站 BGP 智能中转', '月付 10 元极低门槛', '适合日常办公与观影'],
    cons: ['晚高峰偶有波动'],
    rating: 8.9,
    articleCount: 2,
  },
  {
    slug: 'guangnianti',
    name: '光年梯',
    description: '注重隐私保护与无日志政策，AES-256 加密传输。起步价仅 9.9 元/月，提供 1020M 大带宽。',
    logo: '/guangnianti_logo.png',
    category: '大流量/高吞吐',
    featured: false,
    pros: ['9.9 元起大流量套餐', 'AES-256 高强加密', '1020M 海量带宽秒开'],
    cons: ['海外节点延迟略高'],
    rating: 8.8,
    articleCount: 2,
  },
];

// 获取精选品牌
export function getFeaturedBrands(): Brand[] {
  return brands.filter(brand => brand.featured);
}

// 根据slug获取品牌
export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find(brand => brand.slug === slug);
}

