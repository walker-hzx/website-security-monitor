require('dotenv').config();
const config = require('./config/default');
const logger = require('./utils/logger');
const { runGaodeMapKeyScan } = require('./scanners/gaodeMapKeyScanner');
const { shutdownBrowser } = require('./utils/renderedContentFetcher');

async function main() {
  const { targets = [], scanners = {} } = config;
  const gaodeConfig = scanners.gaode || {};

  if (!gaodeConfig.enabled) {
    logger.warn('高德地图 Key 扫描模块已被禁用，跳过。');
    return;
  }

  logger.info(`开始扫描 ${targets.length} 个目标`);
  const renderOptions = gaodeConfig.render || {};
  const results = await runGaodeMapKeyScan(targets, { renderOptions });

  const leakCount = results.reduce((count, entry) => count + (entry.keys?.length || 0), 0);
  const errorCount = results.reduce((count, entry) => count + (entry.error ? 1 : 0), 0);

  if (leakCount) {
    logger.warn(`共发现 ${leakCount} 个疑似 Key 泄露，详见扫描输出。`);
  } else {
    logger.info('未检测到高德地图 Key 泄露。');
  }

  if (errorCount) {
    logger.warn(`其中 ${errorCount} 次请求失败，请检查网络或目标设置。`);
  }
}

main()
  .catch((err) => {
    logger.error('入口执行失败', err);
    process.exit(1);
  })
  .finally(() => {
    shutdownBrowser().catch((err) => logger.debug('渲染器关闭失败', err));
  });
