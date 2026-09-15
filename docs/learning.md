# Learning 学习笔记维护指南

## 页面结构

- `/learning`：分类卡片，初始包含 Radiation、Extragalactic、Dynamics。
- `/learning/radiation`：该分类内的笔记列表，支持按标题、简介、标签搜索。
- `/learning/radiation/my-note`：独立笔记阅读页，带目录、数学公式和前后篇切换。

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

每个文件自动成为一篇笔记。无需为每篇笔记修改页面代码或维护列表。文件放在分类目录直属层级，不嵌套子文件夹。

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

## 添加新分类

在 `lib/learning-categories.ts` 的 `learningCategories` 数组末尾添加一个条目：

```ts
{
  slug: 'cosmology',
  title: 'Cosmology',
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

页面静态导出到 `out/`，兼容现有 GitHub Pages 部署流程。网站访客侧没有上传后台；管理笔记使用 GitHub 仓库或本地文件。
