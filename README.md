# 郑栩作品集站（纯静态版）

纯静态个人作品集站点（`index.html` + 2 份单文件知识报告子页 `seedance-eval-spec.html` / `qianwen-channel-research.html` + `assets/css/style.css` + `assets/js/project-data.js` + `assets/js/main.js` + 本地官方 GSAP 3.12.5），零后端、零登录、零数据库，支持离线双击直接打开。

---

## 本地打开三步

1. **下载并解压**：将 `zhengxu-portfolio-static.zip` 下载到本地并完整解压到一个文件夹中。
2. **双击打开**：直接双击文件夹内的 `index.html`（使用 Chrome / Edge / Safari 均可，无需启动本地服务器，也无需联网）。
3. **浏览与交互**：按页面顺序浏览 `Hero → Path（含 Earlier Chapters 校园经历）→ Signals → Work → Capabilities → Method → Knowledge → Contact`，点击任意信号卡、方法案例按钮或项目卡片即可打开全屏 Case Study 详情弹窗（支持 `#project-<id>` 锚点、复制链接与上下翻页）。

> 如需修改项目文案、数字或新增项目，只需编辑 `assets/js/project-data.js`，无需改动 HTML 结构。

---

## GitHub Pages 发布三步

1. **创建或打开目标仓库**：在 GitHub 上新建一个公开仓库（或使用已有作品集仓库），将解压后的全部文件（`index.html` 与 `assets/` 目录）上传/推送到 `main` 分支根目录。
2. **开启 Pages 服务**：进入仓库的 `Settings → Pages`，在 `Build and deployment` 下将 `Source` 设为 `Deploy from a branch`，分支选择 `main`、目录选择 `/ (root)`，点击 `Save`。
3. **等待部署并访问**：等待约 1–2 分钟构建完成后，访问 GitHub Pages 分配的 `https://<username>.github.io/<repo>/` 链接即可在线访问（注意不要覆盖现有的 `ask-me-zhengxu` 与 `RAG-Lite` 仓库）。
