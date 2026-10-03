// 跳转链接映射
export interface RedirectLink {
  id: string;
  name?: string;
  url: string;
  description: string;
}

export const redirects: Record<string, RedirectLink> = {
  edgenova: {
    id: 'edgenova',
    name: 'EdgeNova 官网',
    url: 'https://vip.edgenovaaff.com/#/?code=2OqZX1IP',
    description: '全线 IPLC 专线 · 晚高峰稳定',
  },
  sujie: {
    id: 'sujie',
    name: '速界 官网',
    url: 'https://wudaogang.speedworldaff.com/#/register?code=HOJbbjuY',
    description: '游戏加速优选 · 极低丢包',
  },
  kexinyun: {
    id: 'kexinyun',
    name: '可信云 官网',
    url: 'https://shadow_vps.kosingaff.com/#/register?code=UvY3PsfK',
    description: '数据高强加密 · 隐私保护',
  },
  kuaili: {
    id: 'kuaili',
    name: '快狸 官网',
    url: 'https://yj2081.kuailiaff.com/#/register?code=531W9eSU',
    description: '新手友好 · 一键快速订阅',
  },
  yuntu: {
    id: 'yuntu',
    name: '云图 官网',
    url: 'https://vip.ytjcok.org/#/register?code=75w0GoY2',
    description: '金融级专线 · 全节点1倍率',
  },
  jisuyun: {
    id: 'jisuyun',
    name: '极速Cloud 官网',
    url: 'http://liangxinyun.club/',
    description: '三网CN2 GIA/9929 · 24h无视晚高峰',
  },
  shunyun: {
    id: 'shunyun',
    name: '瞬云 官网',
    url: 'https://aaa.jichang.best/#/register?code=M4UujXjz',
    description: '轻量极速 · 支持按量计费',
  },
  jilianyun: {
    id: 'jilianyun',
    name: '极连云 官网',
    url: 'https://a1917.jlyvipaff.com/#/?code=vT32Xl9X',
    description: '多站 BGP 中转 · 稳定性价比高',
  },
  guangnianti: {
    id: 'guangnianti',
    name: '光年梯 官网',
    url: 'https://gnt001.gntvipaff.cc/#/?code=yAzo4IqK',
    description: 'AES-256 加密 · 支持 Hysteria2',
  },
  liyun: {
    id: 'liyun',
    name: '鲤云 官网',
    url: 'https://鲤云.com',
    description: '海量高速流量 · 性价比首选',
  },
  shanshuiyun: {
    id: 'shanshuiyun',
    name: '山水云 官网',
    url: 'https://山水云.com',
    description: '琴棋书画套餐 · 稳定高质感',
  },
  miaomiaoyun: {
    id: 'miaomiaoyun',
    name: '秒秒云 官网',
    url: 'https://秒秒云.com',
    description: '探花榜眼状元 · 秒开极速',
  },
  jinyun: {
    id: 'jinyun',
    name: '锦云 官网',
    url: 'https://锦云111.com',
    description: '多元办公体验 · 低门槛接入',
  },
  xiongmaocloud: {
    id: 'xiongmaocloud',
    name: '熊猫cloud 官网',
    url: 'https://熊猫导航.com',
    description: '大流量畅享 · 稳定全端支持',
  },
  jiuyun: {
    id: 'jiuyun',
    name: '九云 官网',
    url: 'https://cristyc.jiuyyq.com',
    description: '招财聚财旺财 · 高速好用',
  },
  baoyun: {
    id: 'baoyun',
    name: '宝云 官网',
    url: 'https://宝云.com',
    description: '福宝财宝金宝 · 传世大流量',
  },
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
