// 品牌数据
export interface Brand {
  slug: string;
  name: string;
  description: string;
  logo?: string;
  featured?: boolean;
  pros: string[];
  cons: string[];
  rating?: number;
}

export const brands: Brand[] = [
  {
    slug: 'example-service-a',
    name: '示例服务 A',
    description: '高速稳定的网络加速服务，适合日常使用和流媒体观看。',
    featured: true,
    pros: [
      '速度快，延迟低',
      '节点分布广泛',
      '支持流媒体解锁',
      '价格实惠',
    ],
    cons: [
      '客服响应较慢',
      '高峰期偶有拥堵',
    ],
    rating: 4.5,
  },
  {
    slug: 'example-service-b',
    name: '示例服务 B',
    description: '专业级网络服务，提供IEPL专线和BGP中继线路。',
    featured: true,
    pros: [
      'IEPL专线稳定',
      '晚高峰表现优秀',
      '支持ChatGPT原生IP',
      '技术支持专业',
    ],
    cons: [
      '价格较高',
      '需要实名认证',
    ],
    rating: 4.8,
  },
  {
    slug: 'example-service-c',
    name: '示例服务 C',
    description: '性价比之选，适合预算有限的用户。',
    featured: true,
    pros: [
      '价格便宜',
      '流量充足',
      '入门门槛低',
      '支持按需购买',
    ],
    cons: [
      '速度一般',
      '节点较少',
      '稳定性欠佳',
    ],
    rating: 3.8,
  },
  {
    slug: 'example-service-d',
    name: '示例服务 D',
    description: '游戏加速专用，低延迟优化线路。',
    featured: false,
    pros: [
      '游戏优化线路',
      '延迟极低',
      'UDP支持完善',
      '适合游戏玩家',
    ],
    cons: [
      '流量限制较严',
      '价格偏高',
    ],
    rating: 4.2,
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
