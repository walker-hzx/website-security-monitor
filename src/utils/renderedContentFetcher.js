const puppeteer = require('puppeteer');
const logger = require('./logger');

const DEFAULT_TIMEOUT_MS = 15000;
const DEFAULT_WAIT_UNTIL = 'networkidle2';
const DEFAULT_USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
const BROWSER_LAUNCH_OPTIONS = {
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox']
};

let browserInstancePromise;
let hasAttemptedBrowserInstall = false;

function isMissingChromeError(error) {
  const message = error?.message ?? '';
  return message.includes('Could not find Chrome');
}

async function downloadChromiumRuntime() {
  try {
    logger.info('Chrome 运行时缺失，正在下载 Chromium 运行时...');
    const { downloadBrowsers } = await import('puppeteer/internal/node/install.js');
    await downloadBrowsers();
    logger.info('Chromium 下载完成。');
  } catch (installError) {
    logger.error('Chromium 下载失败，请手动执行 npx puppeteer install chrome', installError);
    throw installError;
  }
}

function buildLaunchOptions() {
  const executablePath = process.env.PUPPETEER_EXECUTABLE_PATH;
  return executablePath
    ? { ...BROWSER_LAUNCH_OPTIONS, executablePath }
    : { ...BROWSER_LAUNCH_OPTIONS };
}

async function launchBrowserWithFallback() {
  try {
    return await puppeteer.launch(buildLaunchOptions());
  } catch (launchError) {
    if (!hasAttemptedBrowserInstall && isMissingChromeError(launchError)) {
      hasAttemptedBrowserInstall = true;
      await downloadChromiumRuntime();
      return puppeteer.launch(buildLaunchOptions());
    }
    throw launchError;
  }
}

async function getBrowserInstance() {
  if (!browserInstancePromise) {
    browserInstancePromise = launchBrowserWithFallback().catch((error) => {
      browserInstancePromise = null;
      throw error;
    });
  }
  return browserInstancePromise;
}

async function fetchRenderedContent(url, options = {}) {
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  const waitUntil = options.waitUntil ?? DEFAULT_WAIT_UNTIL;
  const userAgent = options.userAgent ?? DEFAULT_USER_AGENT;
  const viewport = options.viewport;
  const browser = await getBrowserInstance();
  const page = await browser.newPage();

  try {
    page.setDefaultNavigationTimeout(timeoutMs);
    await page.setUserAgent(userAgent);
    if (viewport) {
      await page.setViewport(viewport);
    }
    await gotoWithWaitUntilFallback(page, url, { timeoutMs, waitUntil });
    return await page.content();
  } finally {
    await page.close();
  }
}

// When networkidle waits keep hanging, downgrade to domcontentloaded so the scan keeps moving.
async function gotoWithWaitUntilFallback(page, url, options) {
  const { timeoutMs, waitUntil } = options;
  try {
    await page.goto(url, { timeout: timeoutMs, waitUntil });
    return;
  } catch (error) {
    if (error instanceof puppeteer.errors.TimeoutError && waitUntil !== 'domcontentloaded') {
      logger.warn(`页面 ${url} 在等待 ${waitUntil} 时超时，尝试使用 domcontentloaded`);
      await page.goto(url, { timeout: timeoutMs, waitUntil: 'domcontentloaded' });
      return;
    }
    throw error;
  }
}

async function shutdownBrowser() {
  if (!browserInstancePromise) {
    return;
  }
  const browser = await browserInstancePromise;
  await browser.close();
  browserInstancePromise = null;
}

module.exports = {
  fetchRenderedContent,
  shutdownBrowser,
  DEFAULT_TIMEOUT_MS,
  DEFAULT_WAIT_UNTIL
};
