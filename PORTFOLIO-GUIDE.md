# 作品集使用指南

## 📁 文件结构

```
coralhymn2602/
├── portfolio.html              # 作品集主页面（图片网格展示）
├── docs/                       # 作品详情目录
│   ├── project-001.html        # 作品详情页面 1
│   ├── project-002.html        # 作品详情页面 2
│   ├── project-003.html        # 作品详情页面 3
│   └── project-004.html        # 作品详情页面 4
└── images/                     # （可选）本地图片目录
    └── portfolio/
        ├── project-001-hero.jpg
        ├── project-001-1.jpg
        └── ...
```

---

## 🎨 添加新作品到作品集

### 步骤 1：在 portfolio.html 中添加作品卡片

打开 `portfolio.html`，找到 `<div class="portfolio-grid">` 部分，添加新的作品卡片：

#### 类型 A：可点击跳转的作品（有详情页）

```html
<div class="portfolio-item clickable" data-category="game" onclick="location.href='./docs/project-XXX.html'">
    <img src="图片URL" alt="作品名称" class="portfolio-image">
    <div class="portfolio-link-icon">
        <i class="fas fa-arrow-right"></i>
    </div>
    <div class="portfolio-overlay">
        <div class="portfolio-category">分类名称</div>
        <h3 class="portfolio-title">作品标题</h3>
        <p class="portfolio-description">简短描述（1-2句话）</p>
    </div>
</div>
```

#### 类型 B：仅展示的作品（无详情页）

```html
<div class="portfolio-item" data-category="art">
    <img src="图片URL" alt="作品名称" class="portfolio-image">
    <div class="portfolio-overlay">
        <div class="portfolio-category">分类名称</div>
        <h3 class="portfolio-title">作品标题</h3>
        <p class="portfolio-description">简短描述（1-2句话）</p>
    </div>
</div>
```

### 步骤 2：选择正确的分类

`data-category` 属性用于筛选功能，可选值：
- `game` - 游戏开发
- `art` - 艺术设计
- `design` - UI/UX 设计
- `other` - 其他/实验项目

### 步骤 3：准备作品图片

**推荐尺寸：**
- 主图：1200x675px (16:9)
- 缩略图：600x338px (16:9)

**图片来源选项：**

1. **使用在线占位符（临时）**：
   ```
   https://via.placeholder.com/600x338/背景色/文字色?text=文字内容
   示例：https://via.placeholder.com/600x338/1a1a2e/ffffff?text=My+Project
   ```

2. **使用本地图片（推荐）**：
   - 将图片放入 `images/portfolio/` 目录
   - 引用路径：`../images/portfolio/文件名.jpg`

3. **使用图床**：
   - 上传到你的图床（如 img.h440.top）
   - 引用完整 URL

---

## 📝 创建作品详情页

### 步骤 1：复制模板文件

复制 `docs/project-001.html` 并重命名为 `docs/project-XXX.html`（XXX 为编号）。

### 步骤 2：修改基本信息

在 `<head>` 部分修改：
```html
<title>你的作品名称 | Coralhymn</title>
<meta name="description" content="作品描述">
```

### 步骤 3：修改项目信息

找到 `.project-header` 部分，修改：
- 分类标签（`.project-category`）
- 项目标题（`.project-title`）
- 元信息（`.project-meta`）：开发时间、工具、类型、平台等

### 步骤 4：编写项目内容

在 `<article class="project-content">` 中编写：

```html
<h2>项目概述</h2>
<p>介绍项目的背景、目标和核心概念...</p>

<h2>设计理念</h2>
<p>阐述设计思路、灵感来源和想要表达的内容...</p>

<h2>技术实现</h2>
<ul>
    <li>技术亮点 1</li>
    <li>技术亮点 2</li>
    <li>技术亮点 3</li>
</ul>

<h2>开发过程</h2>
<p>描述开发过程中遇到的挑战和解决方案...</p>

<h2>项目截图</h2>
<div class="project-gallery">
    <img src="截图1URL" alt="截图1" class="gallery-image">
    <img src="截图2URL" alt="截图2" class="gallery-image">
    <img src="截图3URL" alt="截图3" class="gallery-image">
</div>

<h2>未来计划</h2>
<p>后续更新计划和展望...</p>
```

### 步骤 5：添加项目链接

修改 `.project-links` 部分的按钮链接：
```html
<div class="project-links">
    <a href="下载链接" class="btn btn-primary" target="_blank">
        <i class="fas fa-download"></i> 下载
    </a>
    <a href="试玩链接" class="btn btn-outline" target="_blank">
        <i class="fas fa-play"></i> 在线试玩
    </a>
    <a href="GitHub链接" class="btn btn-secondary" target="_blank">
        <i class="fab fa-github"></i> 源代码
    </a>
</div>
```

### 步骤 6：更新 portfolio.html 中的链接

确保 `portfolio.html` 中对应作品的 `onclick` 指向正确的详情页：
```html
onclick="location.href='./docs/project-XXX.html'"
```

---

## 🎯 最佳实践

### 图片优化
1. **格式选择**：
   - 照片类：JPG（质量 80-90%）
   - 图形/UI：PNG（压缩优化）
   - 简单图形：SVG

2. **文件大小**：
   - 主图：< 500KB
   - 缩略图：< 100KB
   - 总页面加载：< 2MB

3. **懒加载**（可选）：
   ```html
   <img src="图片URL" alt="描述" loading="lazy" class="portfolio-image">
   ```

### 内容写作
1. **标题**：简洁有力，突出核心特色
2. **描述**：1-2句话概括项目本质
3. **详情页**：
   - 项目概述：what & why
   - 设计理念：how & inspiration
   - 技术实现：technical highlights
   - 开发过程：challenges & solutions
   - 截图展示：visual proof

### 分类建议
- **game**：游戏作品、Game Jam 项目
- **art**：公共艺术、数字艺术、生成艺术
- **design**：UI/UX、界面设计、视觉设计
- **other**：工具开发、实验项目、技术原型

---

## 🔧 常见问题

### Q1: 图片不显示？
**A**: 检查图片路径是否正确：
- 相对路径：从当前文件位置出发
- 绝对路径：以 `/` 开头
- 外部 URL：确保链接有效

### Q2: 点击作品没有跳转？
**A**: 检查：
1. `onclick` 属性是否正确
2. 目标文件是否存在于 `docs/` 目录
3. 文件命名是否一致（大小写敏感）

### Q3: 筛选功能不工作？
**A**: 确保：
1. `data-category` 属性已设置
2. 分类值与筛选按钮的 `data-filter` 匹配
3. JavaScript 文件已正确加载

### Q4: 移动端显示异常？
**A**: 检查：
1. 视口 meta 标签是否存在
2. 图片是否有固定宽度（应使用百分比或 max-width）
3. 测试不同屏幕尺寸

---

## 📊 示例：完整添加流程

假设要添加一个新游戏作品 "太空探险"：

### 1. 准备素材
- 主图：space-adventure-hero.jpg (1200x675)
- 截图：3张 (600x338 each)
- 存放位置：`images/portfolio/space-adventure/`

### 2. 创建详情页
```bash
# 复制模板
cp docs/project-001.html docs/project-005.html
```

编辑 `docs/project-005.html`：
- 标题：太空探险
- 分类：游戏开发
- 内容：填写项目信息

### 3. 添加到作品集
在 `portfolio.html` 的 `.portfolio-grid` 中添加：
```html
<div class="portfolio-item clickable" data-category="game" onclick="location.href='./docs/project-005.html'">
    <img src="../images/portfolio/space-adventure/hero.jpg" alt="太空探险" class="portfolio-image">
    <div class="portfolio-link-icon">
        <i class="fas fa-arrow-right"></i>
    </div>
    <div class="portfolio-overlay">
        <div class="portfolio-category">游戏开发</div>
        <h3 class="portfolio-title">太空探险</h3>
        <p class="portfolio-description">一款探索宇宙奥秘的冒险游戏，玩家将在 procedurally generated 的星系统中航行。</p>
    </div>
</div>
```

### 4. 测试
- 打开 `portfolio.html`
- 确认新作品显示在网格中
- 点击卡片，验证跳转到详情页
- 测试筛选功能（选择"游戏"分类）

---

## 🚀 进阶技巧

### 自定义分类
如需添加新分类（如 "video"）：

1. 在 `portfolio.html` 添加筛选按钮：
   ```html
   <button class="filter-btn" data-filter="video">视频</button>
   ```

2. 使用新的 `data-category` 值：
   ```html
   <div class="portfolio-item" data-category="video">
   ```

### 添加视频作品
```html
<div class="portfolio-item" data-category="video">
    <video class="portfolio-image" autoplay muted loop playsinline>
        <source src="视频URL.mp4" type="video/mp4">
    </video>
    <div class="portfolio-overlay">
        <!-- 内容 -->
    </div>
</div>
```

### 添加标签系统
在 `.portfolio-overlay` 中添加：
```html
<div class="portfolio-tags">
    <span class="skill-tag">Godot</span>
    <span class="skill-tag">像素艺术</span>
</div>
```

---

## 📞 需要帮助？

如有问题，请检查：
1. 浏览器 Console 的错误信息
2. HTML 语法是否正确（标签闭合、引号匹配）
3. 文件路径是否正确
4. JavaScript 是否成功加载

祝创作愉快！🎨
