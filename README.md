# 公司网站安全检测平台

为公司所有站点提供统一的安全检测入口，第一阶段聚焦高德地图 Key 泄露，后续陆续增加 JS 漏洞、依赖风险、配置泄露等模块。全部功能均使用 Node.js 实现，便于在不同运维环境中以脚本或 CLI 方式运行。

## 起步指南
1. 安装依赖：`npm install`
2. 运行入口：`npm start`
3. 单模块测试：`npm run scan:gaode`
4. 开发环境：`npm run dev`

## 当前结构概览
- `src/index.js`：统一入口，负责加载配置并调度扫描器。
- `src/scanners/gaodeMapKeyScanner.js`：高德地图 Key 泄露检测器，扫描 HTML/JS 中的 Key。
- `src/config/default.js`：默认目标列表与扫描参数。
- `src/utils/logger.js`：标准输出包装，方便未来替换为更完善的日志系统。
- `src/utils/renderedContentFetcher.js`：借助 Puppeteer 获取渲染后的 DOM，支持 Vue 等 SPA。
- `test/run.js`：提供简单的集成检查，确保扫描器处理空目标时无异常。

## 发展路线
1. 提供 JS 漏洞静态抽取扫描，先实现 XSS/依赖注入检查。
2. 增加依赖风险模块，结合第三方服务获取 CVE 信息。
3. 支持配置泄露扫描，识别页面/仓库中的敏感关键字。
4. 补充调度层，允许将各模块串联为全量扫描流水线。

## 渲染支持
所有扫描默认启动 headless Chromium（通过 Puppeteer）加载目标页面，等到主 JS 逻辑跑完后再采集 HTML/Script，保证 Vue、React 这类 SPA 也能被检测到。首次安装会下载 Chromium；若希望使用系统浏览器，可设置 `PUPPETEER_EXECUTABLE_PATH`；如果希望跳过下载则设置 `PUPPETEER_SKIP_DOWNLOAD=1` 并提供自己的可用 Chromium 路径。扫描脚本可在 `scanners.gaode.render` 中调整 `timeoutMs`/`waitUntil` 等渲染参数。
