const { extractGaodeKeyCandidates, runGaodeMapKeyScan } = require('../src/scanners/gaodeMapKeyScanner');

(async function main() {
  const sampleScript = "AMap.init({ key: 'TEST-GAODE-KEY' });";
  const detectedKeys = extractGaodeKeyCandidates(sampleScript);
  if (!detectedKeys.includes('TEST-GAODE-KEY')) {
    throw new Error('高德 Key 抽取逻辑未识别示例代码');
  }

  await runGaodeMapKeyScan([], { dryRun: true });
  console.log('测试通过：基础扫描逻辑正常');
})().catch((error) => {
  console.error('测试失败', error.stack || error);
  process.exit(1);
});
