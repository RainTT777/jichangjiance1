# AGENTS.md - Agent 协作与部署规范

## 目录结构
```text
src/
├── components/   # UI 组件 (Header, Footer, Hero, ArticleCard, BrandCard, ComparisonTable, FAQ 等)
├── content/      # Content Collections (blog, brands, topics 及 config.ts)
├── data/         # 站点全局静态配置数据
├── layouts/      # 页面模板 Layouts (BaseLayout, BlogLayout, LandingLayout)
├── pages/        # 动态与静态路由页面 (index, blog, category, tag, topics, brands, compare, about, go)
└── styles/       # 全局 CSS 样式表 (global.css)
public/
└── robots.txt    # 搜索引擎爬虫指令
```

## Agent 核心准则
1. **增量安全修改**: 不删除已有核心结构，增量完善代码与 UI。
2. **严禁敏感信息**: 不包含 `.env`、访问凭据、真实商业推介链接。
3. **构建可验证性**: 任何大块代码修改后，确保执行 `npm run build` 无 TypeScript 类型报错与 Astro 编译错误。
4. **视觉品质保证**: UI 维持“整洁、科技感、层级清晰、移动端极佳”的高级中文内容站风范。
