# EDEN 分钟燃烧金库 · 预览站（v3 · 科幻 HUD）

纯静态，可直接放 GitHub Pages 或 file:// 打开。全部数字是浏览器里的本地模拟：不连钱包、不发交易，页面顶部常驻「预览 · 模拟数据」。

- `index.html` — 独立 dapp。与 Flap 定制 UI 用**同一个组件**（`assets/eden-vault.js` / `assets/eden-vault.css`），外面只多一个极简顶栏（`assets/dapp.css` / `assets/dapp.js`）。
- `flap-custom/` — Flap 定制金库 UI 预览：组件嵌在仿 flap.sh 代币页（顶栏 / 面包屑 / 代币卡 / VAULT INFORMATION / 开发者行）里；顶部预览条可切换模拟钱包、错误网络、宿主 riskLevel、marketPhase。
- `flap/` — Flap 通用金库面板预览（合约 `vaultUISchema()` 渲染，上一版交付）。
- `schema.json` / `schema.js` — 合约导出的 Flap schema。

组件源码：Flap 官方模板 `src/vaults/eden-burn-vault/`（Component.tsx / manifest.json / VaultABI.ts / i18n.json）。预览构建把 `@/src/sdk` 换成本地模拟 shim，`@/src/ui` 用模板原件。
性能约束：无全屏 canvas、无常驻 rAF；1 秒节拍只在可见时运行（IntersectionObserver）；动画只动 transform / opacity；尊重 prefers-reduced-motion；不加载外部字体（系统等宽字体）。
自查脚本：`screenshots/shots.js`（截图 + 控制台错误）、`screenshots/flow.js`（模拟授权→燃烧→买地→回购流程）。
