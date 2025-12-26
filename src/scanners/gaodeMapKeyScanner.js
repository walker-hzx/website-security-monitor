const { loadEnvironmentFiles } = require('../utils/loadEnvironment');
loadEnvironmentFiles();
const cheerio = require('cheerio');
const logger = require('../utils/logger');
const {
  fetchRenderedContent,
  DEFAULT_TIMEOUT_MS,
  DEFAULT_WAIT_UNTIL,
  shutdownBrowser
} = require('../utils/renderedContentFetcher');
const { writeGaodeReport } = require('../utils/reportWriter');

const DEFAULT_RENDER_OPTIONS = {
  timeoutMs: DEFAULT_TIMEOUT_MS,
  waitUntil: DEFAULT_WAIT_UNTIL
};

function flipHttpProtocol(targetUrl) {
  if (targetUrl.startsWith('https://')) {
    return `http://${targetUrl.slice(8)}`;
  }
  if (targetUrl.startsWith('http://')) {
    return `https://${targetUrl.slice(7)}`;
  }
  return null;
}

async function fetchWithProtocolFallback(targetUrl, renderOptions) {
  try {
    const content = await fetchRenderedContent(targetUrl, renderOptions);
    return { html: content, resolvedUrl: targetUrl, protocolSwapped: false };
  } catch (fetchError) {
    const alternate = flipHttpProtocol(targetUrl);
    if (!alternate) {
      throw fetchError;
    }
    logger.warn(`目标 ${targetUrl} 初次请求失败，尝试切换协议为 ${alternate}`);
    const content = await fetchRenderedContent(alternate, renderOptions);
    return { html: content, resolvedUrl: alternate, protocolSwapped: true };
  }
}

// Patterns target how the Gaode SDK typically exposes its key in inline scripts.
const GAODE_KEY_PATTERNS = [
  /AMap\.init\([^)]*?key\s*[:=]\s*['"]([^'"]+)['"]/gi,
  /AMap\.Loader\([^)]*?key\s*[:=]\s*['"]([^'"]+)['"]/gi,
  /key\s*[:=]\s*['"]([A-Za-z0-9]{6,40})['"]/gi,
  /key=([A-Za-z0-9]{6,40})/gi
];

function extractGaodeKeyCandidates(text = '') {
  const normalized = text.trim();
  if (!normalized) {
    return [];
  }

  const uniqueKeys = new Set();
  for (const pattern of GAODE_KEY_PATTERNS) {
    let match;
    while ((match = pattern.exec(normalized)) !== null) {
      const candidate = match[1];
      if (candidate) {
        uniqueKeys.add(candidate);
      }
    }
    pattern.lastIndex = 0;
  }

  return [...uniqueKeys];
}

async function runGaodeMapKeyScan(targets = [], opts = {}) {
  const { dryRun = false, renderOptions = {} } = opts;
  const findings = [];
  const effectiveRenderOptions = { ...DEFAULT_RENDER_OPTIONS, ...renderOptions };

  if (!targets.length) {
    logger.warn('未指定扫描目标，跳过高德 Key 扫描。');
    return findings;
  }

  for (const target of targets) {
    const label = target.name || target.url || '未知目标';
    if (!target.url) {
      logger.warn(`目标 ${label} 缺少 url，已跳过。`);
      continue;
    }

    logger.info(`正在扫描 ${label} -> ${target.url}`);
    if (dryRun) {
      findings.push({ target: label, url: target.url, dryRun: true, keys: [] });
      continue;
    }

    try {
      const { html, resolvedUrl, protocolSwapped } = await fetchWithProtocolFallback(
        target.url,
        effectiveRenderOptions
      );
      const $ = cheerio.load(html);
      const scriptText = $('script')
        .map((_, el) => $(el).html() || '')
        .get()
        .join('\n');
      const candidates = extractGaodeKeyCandidates(`${html}\n${scriptText}`);

      if (candidates.length) {
        logger.warn(`在 ${label} 发现 ${candidates.length} 个疑似高德 Key：${candidates.join(', ')}`);
      } else {
        logger.info(`在 ${label} 未检测到明显的高德 Key。`);
      }

      findings.push({
        target: label,
        url: target.url,
        resolvedUrl,
        protocolSwapped,
        keys: candidates
      });
    } catch (error) {
      logger.error(`请求 ${label} 失败`, error);
      findings.push({ target: label, url: target.url, error: error.message });
    }
  }

  return findings;
}

module.exports = {
  extractGaodeKeyCandidates,
  runGaodeMapKeyScan
};

if (require.main === module) {
  const config = require('../config/default');
  const gaodeConfig = config.scanners?.gaode || {};
  const outputFile = gaodeConfig.outputFile || 'reports/gaode-key-findings.json';

  (async () => {
    const renderOptions = gaodeConfig.render;
    const targets = config.targets || [];
    let results = [];
    try {
      results = await runGaodeMapKeyScan(targets, { renderOptions });
      try {
        const resolvedPath = await writeGaodeReport({ targets, results, outputFile });
        logger.info(`扫描结果已写入 ${resolvedPath}`);
      } catch (writeError) {
        logger.warn('扫描输出文件写入失败，将在控制台保留日志。');
      }
    } finally {
      await shutdownBrowser().catch((err) => logger.debug('渲染器关闭失败', err));
    }
  })().catch((err) => {
    logger.error('高德 Key 扫描失败', err);
    process.exit(1);
  });
}
