<<<<<<< HEAD
# 机场指南博客

一个基于 Astro + Tailwind CSS 构建的高级中文内容站。

## 功能特性

- ✅ 完整的首页设计（Hero、信任数据条、核心栏目、推荐文章、专题聚合、品牌库、对比表格、SEO内容、FAQ、CTA）
- ✅ 博客列表页（带分类筛选）
- ✅ 文章详情页（面包屑、元信息、标签、相关文章、FAQ）
- ✅ 分类页面（动态生成）
- ✅ 标签页面（动态生成）
- ✅ 专题聚合（列表页和详情页）
- ✅ 品牌库（列表页和详情页）
- ✅ 对比工具页
- ✅ 关于页面（含FAQ）
- ✅ 跳转页（统一外链管理）
- ✅ 响应式设计（移动端友好）
- ✅ SEO优化（title、description、canonical、Open Graph）

## 技术栈

- [Astro](https://astro.build) - 静态站点生成器
- [Tailwind CSS](https://tailwindcss.com) - CSS框架
- TypeScript - 类型安全

## 开始使用

### 安装依赖

=======
# 机场测评博客

专业的机场性能审计与测评平台，基于 Astro 构建。

## 快速开始

### 安装依赖
>>>>>>> e7d312c4149c0d49821ad728dcd033c438193bbc
```bash
npm install
```

<<<<<<< HEAD
### 启动开发服务器

=======
### 本地开发
>>>>>>> e7d312c4149c0d49821ad728dcd033c438193bbc
```bash
npm run dev
```

<<<<<<< HEAD
访问 `http://localhost:4321` 查看网站。

### 构建生产版本

=======
访问 http://localhost:4321

### 构建生产版本
>>>>>>> e7d312c4149c0d49821ad728dcd033c438193bbc
```bash
npm run build
```

<<<<<<< HEAD
构建产物位于 `dist/` 目录。

### 预览生产版本

=======
### 预览构建结果
>>>>>>> e7d312c4149c0d49821ad728dcd033c438193bbc
```bash
npm run preview
```

<<<<<<< HEAD
=======
## 添加新评测

在 `src/content/reviews/` 目录下创建新的 Markdown 文件：

```markdown
---
title: "你的评测标题"
description: "简短描述"
date: "2026-08-29"
score: 4.5
categories: ["机场评测"]
tags: ["标签1", "标签2"]
---

评测内容...
```

## 部署到 Cloudflare Pages

1. 推送代码到 GitHub
2. 在 Cloudflare Pages 中连接你的 Git 仓库
3. 构建配置：
   - 构建命令：`npm run build`
   - 输出目录：`dist`
   - Node 版本：18 或更高

>>>>>>> e7d312c4149c0d49821ad728dcd033c438193bbc
## 项目结构

```
/
<<<<<<< HEAD
├── public/              # 静态资源
├── src/
│   ├── components/      # 可复用组件
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ArticleCard.astro
│   │   ├── BrandCard.astro
│   │   └── TopicCard.astro
│   ├── data/           # 数据文件
│   │   ├── articles.ts
│   │   ├── brands.ts
│   │   ├── topics.ts
│   │   └── redirects.ts
│   ├── layouts/        # 布局组件
│   │   └── BaseLayout.astro
│   ├── pages/          # 页面（自动路由）
│   │   ├── index.astro
│   │   ├── blog/
│   │   ├── category/
│   │   ├── tag/
│   │   ├── topics/
│   │   ├── brands/
│   │   ├── compare.astro
│   │   ├── about.astro
│   │   └── go/
│   └── styles/         # 全局样式
│       └── global.css
├── astro.config.mjs    # Astro 配置
├── tailwind.config.mjs # Tailwind 配置
└── tsconfig.json       # TypeScript 配置
```

## 自定义内容

### 添加文章

编辑 `src/data/articles.ts`，添加新文章数据：

```typescript
{
  slug: 'your-article-slug',
  title: '文章标题',
  description: '文章描述',
  category: '分类名称',
  tags: ['标签1', '标签2'],
  author: '作者名',
  publishDate: '2024-03-01',
  featured: true,
}
```

### 添加品牌

编辑 `src/data/brands.ts`，添加品牌信息。

### 添加专题

编辑 `src/data/topics.ts`，添加专题信息。

### 添加跳转链接

编辑 `src/data/redirects.ts`，添加跳转映射。

## 设计风格

- 整洁高级简单的中文内容站风格
- 卡片式/导航式布局
- 轻微渐变和动效
- 层级清晰，适合中文阅读
- 完全响应式，移动端友好

## 注意事项

本项目所有内容均为示例数据，用于展示网站结构和布局。不包含真实的推广链接或购买建议。

## License

MIT
=======
├── public/          # 静态资源
├── src/
│   ├── components/  # 组件（暂未使用）
│   ├── content/     # 内容集合
│   │   └── reviews/ # 评测文章
│   ├── layouts/     # 布局模板
│   ├── pages/       # 页面路由
│   └── styles/      # 全局样式
├── astro.config.mjs
└── package.json
```

## 技术栈

- [Astro](https://astro.build) - 静态站点生成器
- [Tailwind CSS](https://tailwindcss.com) - 样式框架
- TypeScript - 类型支持
>>>>>>> e7d312c4149c0d49821ad728dcd033c438193bbc
