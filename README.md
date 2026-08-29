# 机场测评博客

专业的机场性能审计与测评平台，基于 Astro 构建。

## 快速开始

### 安装依赖
```bash
npm install
```

### 本地开发
```bash
npm run dev
```

访问 http://localhost:4321

### 构建生产版本
```bash
npm run build
```

### 预览构建结果
```bash
npm run preview
```

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

## 项目结构

```
/
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
