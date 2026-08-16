export interface RedirectItem {
  id: string;
  name: string;
  targetUrl: string;
  description: string;
}

export const redirectsData: Record<string, RedirectItem> = {
  "example-brand-1": {
    id: "example-brand-1",
    name: "示例品牌 A 官网",
    targetUrl: "https://example.com/official-a",
    description: "跳转至示例品牌 A 的官方入口",
  },
  "example-brand-2": {
    id: "example-brand-2",
    name: "示例品牌 B 官网",
    targetUrl: "https://example.com/official-b",
    description: "跳转至示例品牌 B 的官方入口",
  },
  "clash-verge-rev": {
    id: "clash-verge-rev",
    name: "Clash Verge Rev 官方发布页",
    targetUrl: "https://github.com/clash-verge-rev/clash-verge-rev/releases",
    description: "跳转至 GitHub 官方 Client 源码发布页面",
  },
};
