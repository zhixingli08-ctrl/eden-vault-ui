# EDEN 分钟燃烧金库 · 预览站（v4 · WebGL）

纯静态，直接放 GitHub Pages。所有数字都是浏览器本地模拟：不连钱包、不发交易，页面顶部常驻「预览 · 模拟数据」。

- `index.html` + `assets/eden-v4.js|css` + `assets/fonts/`：独立 dapp（v4）。three.js r187 已打进 `eden-v4.js`（本地，无 CDN），字体自托管（Unbounded / JetBrains Mono 拉丁子集，OFL，见 `assets/fonts/LICENSE.txt`），不加载 Google Fonts。
- 同一个 WebGL 场景随滚动换镜头：反应堆核心（倒计时环 / 随机窗口 / 揭晓爆炸）→ 三池能量流 45/30/25 → 3300 块地块星球（InstancedMesh，一次绘制，悬停 / 点击 / 买入闪光）→ 回购黑洞（每轮 1500 万枚进度弧）。
- 底部常驻一个主操作「燃烧」，次级：领取 / 地块 / 托底兑换。
- `flap-custom/`：Flap 定制金库 UI 预览（依赖 `assets/eden-vault.js|css`，原样保留）。`flap/`：Flap 通用金库面板预览。
- 性能：DPR 上限 1.5（手机 1.0）；帧时间 > 20ms 自动降画质（关泛光、减粒子）；标签页隐藏即停渲染；不在帧循环里读布局；`prefers-reduced-motion` 时改为静态低频渲染。
- 调试参数：`?debug=1` 显示帧率 / draw call / 三角形；`?q=0|1|2` 锁定画质；`?t=秒` 设定起始秒。
