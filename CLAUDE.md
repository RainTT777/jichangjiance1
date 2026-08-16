# CLAUDE.md - 项目指南与开发规范

## 项目概览
本项目是一个结构完整、UI 高级、SEO 优化的中文机场代理评测与技术内容博客底座，采用 **Astro + TypeScript + Tailwind CSS + MDX** 静态站点架构构建，支持部署于 Cloudflare Pages / GitHub Pages。

## 核心开发指令
- **本地开发**: `npm run dev` (启动开发服务器)
- **打包构建**: `npm run build` (类型检查及静态页面打包)
- **预览构建**: `npm run preview` (本地预览打包产物)

## 架构规范
1. **内容管理 (Content Collections)**:
   - 所有的博客文章存放在 `src/content/blog/`
   - 所有的品牌词落地页存放在 `src/content/brands/`
   - 所有的专题聚合存放在 `src/content/topics/`
   - Schema 定义统一位于 `src/content/config.ts`

2. **数据中心 (`src/data/`)**:
   - `site.ts`: 全站 SEO 与基本信息元数据
   - `nav.ts`: 顶部导航与底部导航配置
   - `categories.ts`: 分类信息与描述
   - `homepage.ts`: 首页 12 大区块的占位与模型数据
   - `redirects.ts`: 安全的防封/中转外链路由表

3. **代码风格与 UI 规范**:
   - 必须使用 TypeScript 严格类型
   - 样式以 Tailwind CSS 配合 `src/styles/global.css` 统一变量为主
   - 色彩体系以 `slate-900`/`teal-600`/`sky-600` 为核心科技中性调，禁止大面积刺激性鲜艳高饱和色
   - 遵循 Semantic HTML5 规范（单个 h1，结构化 h2/h3）
   - 不引入真实敏感推广链接与硬编码私密凭据
