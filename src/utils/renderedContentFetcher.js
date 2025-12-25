const puppeteer = require('puppeteer');

const DEFAULT_TIMEOUT_MS = 15000;
const DEFAULT_WAIT_UNTIL = 'networkidle2';
const DEFAULT_USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

let browserInstancePromise;

async function getBrowserInstance() {
  if (!browserInstancePromise) {
    browserInstancePromise = puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
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
    await page.goto(url, { timeout: timeoutMs, waitUntil });
    return await page.content();
  } finally {
    await page.close();
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
