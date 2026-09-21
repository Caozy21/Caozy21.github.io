# Learning 学习笔记维护指南

## 页面结构

- `/learning`：分类卡片，初始包含 Radiation、Extragalactic、Dynamics。
- `/learning/radiation`：该分类内的笔记列表，支持按标题、简介、标签搜索。
- `/learning/radiation/my-note`：独立笔记阅读页，带目录、数学公式和前后篇切换。
- `/learning/en`：英文学习库；分类和文章使用 `/learning/en/<category>/<slug>`。

默认进入中文库。首页、分类页、阅读页顶部均有 **中文 / English** 切换，阅读页切换后仍是同一篇笔记。卡片和阅读页显示双语标题，搜索同时匹配中英文标题。英文正文为预先完成的 AI 辅助译文，不在访客浏览时调用在线 API，无需密钥或后端。

空分类会显示等待更新的提示。正式页面不会自动发布示例内容。

## 上传多个 Markdown 文件

这是 GitHub Pages 静态网站，笔记通过仓库发布。在 GitHub 仓库内打开相应目录，使用 **Add file → Upload files**，可以一次拖入多个 `.md` 文件并提交。现有 GitHub Actions 会在更新 `main` 后重新构建并发布。也可以在本地放入文件，再按日常 Git 工作流提交、推送。

```text
content/learning/
├── radiation/
│   ├── radiative-transfer.md
│   └── blackbody-radiation.md
├── extragalactic/
│   └── galaxy-evolution.md
└── dynamics/
    ├── orbital-mechanics.md
    └── stellar-dynamics.md
```

每个文件自动成为一篇笔记。无需为每篇笔记修改页面代码或维护列表。中文原文放在分类目录直属层级，英文译文只放在该分类的 `en/` 子目录。

文件名使用小写英文字母、数字和连字符，例如 `radiative-transfer.md`。文件名就是页面链接的一部分，因此发布后尽量不改名；标题和正文可以自由使用中文或英文。

## 文件格式

可复制同目录下的 `learning-note-template.md` 到对应分类文件夹，修改文件名和内容。模板默认 `draft: true`，准备好之后改为 `false`，才会进入列表和生成页面。

```yaml
---
title: "Radiative transfer"
description: "A short summary of this note."
date: "2026-09-15"
tags: [Radiation, Transfer]
order: 1
draft: false
---
```

以上元数据均为可选项：

- `title`：文章标题；省略时使用正文开头的 `# 一级标题`，再没有则使用文件名。同名的开头一级标题会自动省去，避免阅读页重复标题。
- `description`：简介，显示在列表和阅读页。
- `date`：有效的 `YYYY-MM-DD` 日期，建议加引号；未填写则不显示日期。
- `tags`：标签数组，也可作为搜索关键词。
- `order`：数字越小越靠前，适合课程章节排序；未填写的排在有编号的笔记后。
- `draft: true`：不生成公开页面，也不计入篇数。省略或 `false` 表示发布。

排序依次按 `order` 升序、日期降序、文件名排序。阅读页前后篇也使用相同顺序。草稿仍保存在 Git 仓库中；公开仓库内的文件可以被任何人查看。

## Markdown 支持

- 标题、列表、引用、链接、图片、分隔线、代码块。
- GitHub 风格表格、任务列表、删除线、脚注。
- `$E = h\nu$` 行内公式；用独立行上的 `$$` 包裹多行 LaTeX 公式。
- 一级至三级标题自动生成目录；桌面端固定在侧边，手机端可折叠。
- 图片放入 `public/learning/`，在笔记中使用 `![图注](/learning/my-figure.png)`。可自行创建更深的图片目录，保持链接一致。不要使用电脑本地绝对路径。
- 同分类笔记链接：`[下一章](./next-note.md)`。
- 跨分类笔记链接：`[轨道力学](../dynamics/orbital-mechanics.md)`。
- 外部网页链接自动在新窗口打开。

正文中的 HTML 和脚本不会执行；使用标准 Markdown 写内容。数学公式由 KaTeX 渲染，支持的 LaTeX 语法以 KaTeX 为准。

## 增加或更新英文译文

使用与原文完全相同的文件名，例如：

```text
content/learning/radiation/my-note.md       # 中文原文
content/learning/radiation/en/my-note.md    # 英文全文
```

英文文件须包含英文 `title`、`description`，以及对应中文文件完整字节内容的 SHA-256 `sourceHash`；正文开头的一级标题应与 `title` 一致。日期、标签、排序等字段默认继承原文，也可在译文中覆盖。英文正文需要完整翻译，保留公式、列表、表格和引用，同时把手工目录链接改为对应英文标题的锚点。

```yaml
---
title: "My English note title"
description: "An English summary."
sourceHash: "<SHA-256 of the entire Chinese Markdown file>"
translation: "AI-assisted English translation"
---
```

原文修改后，旧哈希会阻止构建，避免发布不同步的双语内容。应核对并更新译文后再计算哈希，而不是只更改哈希跳过翻译。可用 `shasum -a 256 content/learning/radiation/my-note.md` 查看新值。

暂未完成英文时可以不创建英文文件，或将译文设为 `draft: true`。中文页正常发布，English 按钮显示“待译”，英文库不列出这篇笔记。若要在等待期间显示英文标题，可将标题登记到 `lib/learning-language.ts` 的 `englishNoteTitles`；全文就绪后自动使用译文标题。

跨篇相对 `.md` 链接在英文页会指向英文库，请确认被引用的笔记已有译本。分类标识 `en` 保留给语言路由，不可作为新分类名。

离线工具 `scripts/translate-learning.mjs` 可提取待译段落并保护公式占位符；它不连接外部 API。`extract <原文> [起始编号] [结束编号]` 输出段落，`patch <原文> <翻译JSON>` 输出可应用的文件补丁。翻译 JSON 格式为 `{ "title": "...", "description": "...", "segments": { "0": "..." } }`，每段公式占位符须恰好保留一次。手工目录的原中文 URL 片段应先百分号编码，工具会映射至译文标题。

## 添加新分类

在 `lib/learning-categories.ts` 的 `learningCategories` 数组末尾添加一个条目：

```ts
{
  slug: 'cosmology',
  title: 'Cosmology',
  titleZh: '宇宙学',
  descriptionZh: '关于宇宙起源与演化的学习笔记。',
  description: 'Notes on the origin and evolution of the universe.',
  image: '/my-cosmology-image.jpg',
},
```

`slug` 使用唯一的小写英文、数字和连字符。将封面图片放入 `public/`，Markdown 放入 `content/learning/cosmology/`。分类卡片、篇数、列表页、阅读页都会在下一次构建时自动生成。即使还没有笔记，也能正常展示分类。

## 本地预览和构建

```bash
npm ci
npm run dev
```

访问 `http://localhost:3000/learning`。新增或编辑 Markdown 后刷新页面即可预览。

发布前检查：

```bash
npm run build
```

翻译专项检查使用 **Node.js 24**（直接加载共享 TypeScript 渲染辅助函数）：

```bash
node scripts/test-learning-markdown.mjs
node scripts/verify-learning-translations.mjs
```

检查包括源文件哈希、译文残留中文、标题、公式一致性和 KaTeX 语法、结构数量、引用和目录锚点。发布要求所有笔记都有英文版时，追加 `--require-complete`。当前 GitHub Actions 的 Node 20 仍可正常构建网站；上述 Node 24 专项脚本在本地运行。

页面静态导出到 `out/`，兼容现有 GitHub Pages 部署流程。网站访客侧没有上传后台；管理笔记使用 GitHub 仓库或本地文件。
