export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
}

export const categories: CategoryItem[] = [
  {
    id: "evaluation",
    name: "机场评测",
    slug: "evaluation",
    description: "实测多条线路延迟、丢包率、高峰期带宽带宽与流媒体解锁完整报告。",
    icon: "ShieldCheck",
    color: "from-teal-500 to-emerald-600",
  },
  {
    id: "tutorials",
    name: "客户端教程",
    slug: "tutorials",
    description: "覆盖 Windows, macOS, iOS, Android, 路由器的全平台客户端配置说明。",
    icon: "BookOpen",
    color: "from-sky-500 to-blue-600",
  },
  {
    id: "comparison",
    name: "选购对比",
    slug: "comparison",
    description: "横向对比不同服务商的性价比、节点数量、协议支持与售后响应速度。",
    icon: "Scales",
    color: "from-indigo-500 to-purple-600",
  },
  {
    id: "tools",
    name: "实用工具",
    slug: "tools",
    description: "节点测速、订阅转换、规则集配置、美区 Apple ID 注册与共享资源。",
    icon: "Wrench",
    color: "from-amber-500 to-orange-600",
  },
];
