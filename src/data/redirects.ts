// 跳转链接映射
export interface RedirectLink {
  id: string;
  name?: string;
  url: string;
  description: string;
}

export const redirects: Record<string, RedirectLink> = {
  liangxinyun: {
    id: 'liangxinyun',
    name: '良心云官网入口',
    url: 'http://liangxinyun.club/',
    description: '官方推荐稳定加速节点',
  },
};

export function getRedirect(id: string): RedirectLink | undefined {
  return redirects[id] || {
    id,
    name: '机场官网入口',
    url: 'http://liangxinyun.club/',
    description: '2026年稳定好用翻墙机场官网直达',
  };
}

export function getRedirectById(id: string): RedirectLink | undefined {
  return getRedirect(id);
}
