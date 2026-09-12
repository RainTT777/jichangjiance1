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

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:4321` 查看网站。

### 构建生产版本

```bash
npm run build
```

构建产物位于 `dist/` 目录。

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
/
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
