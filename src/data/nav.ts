export interface NavItem {
  title: string;
  href: string;
  badge?: string;
  external?: boolean;
}

export const headerNav: NavItem[] = [
  { title: "机场推荐", href: "/brands/" },
  { title: "机场评测", href: "/category/evaluation/" },
  { title: "客户端教程", href: "/category/tutorials/" },
  { title: "客户端下载", href: "/topics/clients/", badge: "常用" },
  { title: "AI工具推荐", href: "/topics/ai-tools/" },
  { title: "流媒体工具推荐", href: "/topics/streaming/" },
  { title: "免费苹果ID共享", href: "/topics/apple-id/" },
  { title: "免费节点", href: "/topics/free-nodes/" },
  { title: "关于我们", href: "/about/" },
];

export const footerNav = {
  columns: [
    {
      title: "核心栏目",
      items: [
        { title: "机场综合推荐", href: "/brands/" },
        { title: "最新测评报告", href: "/category/evaluation/" },
        { title: "客户端配置指南", href: "/category/tutorials/" },
        { title: "服务对比测试", href: "/compare/" },
      ],
    },
    {
      title: "客户端与资源",
      items: [
        { title: "Clash 全平台全集", href: "/topics/clients/" },
        { title: "Sing-box 订阅教程", href: "/topics/clients/" },
        { title: "Shadowrocket 使用小白包", href: "/topics/clients/" },
        { title: "美区 Apple ID 共享", href: "/topics/apple-id/" },
      ],
    },
    {
      title: "专题与导航",
      items: [
        { title: "AI 工具加速使用指南", href: "/topics/ai-tools/" },
        { title: "4K 流媒体解锁测试", href: "/topics/streaming/" },
        { title: "免费应急节点汇总", href: "/topics/free-nodes/" },
        { title: "外链跳转中转站", href: "/go/example-brand/" },
      ],
    },
  ],
};
