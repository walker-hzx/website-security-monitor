const cheerio = require('cheerio');
const logger = require('../utils/logger');
const {
  fetchRenderedContent,
  DEFAULT_TIMEOUT_MS,
  DEFAULT_WAIT_UNTIL
} = require('../utils/renderedContentFetcher');

const DEFAULT_RENDER_OPTIONS = {
  timeoutMs: DEFAULT_TIMEOUT_MS,
  waitUntil: DEFAULT_WAIT_UNTIL
};

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
      const html = await fetchRenderedContent(target.url, effectiveRenderOptions);
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

      findings.push({ target: label, url: target.url, keys: candidates });
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

  (async () => {
    const timeout = config.scanners?.gaode?.timeoutMs ?? DEFAULT_TIMEOUT_MS;
    await runGaodeMapKeyScan(config.targets || [], { httpTimeout: timeout });
  })().catch((err) => {
    logger.error('高德 Key 扫描失败', err);
    process.exit(1);
  });
}
