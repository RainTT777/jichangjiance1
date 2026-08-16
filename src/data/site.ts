export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  defaultLanguage: string;
  defaultAuthor: string;
  socials: {
    telegram?: string;
    github?: string;
    twitter?: string;
  };
  disclaimer: string;
}

export const siteConfig: SiteConfig = {
  name: "机场检测指南",
  title: "机场检测指南 | 权威机场推荐、评测与网络加速加速教程",
  description: "提供客观全面的机场节点检测、速度测评、稳定性对比、客户端下载与全平台订阅配置教程，助您打造无缝高速的网络连接体验。",
  url: "https://jichangjiance.net",
  defaultLanguage: "zh-CN",
  defaultAuthor: "机场检测实验室",
  socials: {
    telegram: "https://t.me/example_channel",
    github: "https://github.com/example/jichangjiance",
    twitter: "https://twitter.com/example",
  },
  disclaimer: "本站仅提供网络技术交流、工具使用教程与公开评测资讯，不提供任何网络代理销售服务。用户应严格遵守当地法律法规。",
};
