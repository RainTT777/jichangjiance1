// 跳转链接映射
export interface RedirectLink {
  id: string;
  url: string;
  description: string;
}

export const redirects: RedirectLink[] = [
  {
    id: 'example',
    url: 'https://example.com',
    description: '示例链接',
  },
  // 添加更多跳转链接
];

export function getRedirectById(id: string): RedirectLink | undefined {
  return redirects.find(redirect => redirect.id === id);
}
