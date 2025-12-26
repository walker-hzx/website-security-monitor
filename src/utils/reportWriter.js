const fs = require('fs/promises');
const path = require('path');
const logger = require('./logger');

async function writeJsonReport(filePath, payload) {
  const resolvedPath = path.resolve(process.cwd(), filePath);
  const dir = path.dirname(resolvedPath);
  try {
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(resolvedPath, JSON.stringify(payload, null, 2));
    return resolvedPath;
  } catch (err) {
    logger.error(`写入报告失败：${resolvedPath}`, err);
    throw err;
  }
}

function classifyErrorType(errorMessage = '') {
  const normalized = errorMessage.toLowerCase();
  if (!normalized) {
    return 'unknown';
  }
  if (normalized.includes('timeout')) {
    return 'timeout';
  }
  if (normalized.includes('network') || normalized.includes('net::') || normalized.includes('socket')) {
    return 'network';
  }
  if (normalized.includes('refused') || normalized.includes('econnrefused')) {
    return 'connection_refused';
  }
  return 'other';
}

function buildKeyIndex(results = []) {
  const keyIndex = {};
  for (const entry of results) {
    const keys = Array.isArray(entry.keys) ? entry.keys : [];
    for (const key of keys) {
      if (!keyIndex[key]) {
        keyIndex[key] = { occurrences: [], matchCount: 0 };
      }
      keyIndex[key].occurrences.push({ name: entry.target, url: entry.url });
      keyIndex[key].matchCount += 1;
    }
  }
  return keyIndex;
}

function buildFailureSummary(results = []) {
  const failures = [];
  const countsByType = { timeout: 0, network: 0, connection_refused: 0, other: 0, unknown: 0 };
  for (const entry of results) {
    if (!entry.error) {
      continue;
    }
    const errorType = classifyErrorType(entry.error);
    countsByType[errorType] = (countsByType[errorType] ?? 0) + 1;
    failures.push({
      name: entry.target,
      url: entry.url,
      error: entry.error,
      type: errorType
    });
  }
  return {
    total: failures.length,
    byType: countsByType,
    details: failures
  };
}

function buildGaodeSummary(results = []) {
  const keyIndex = buildKeyIndex(results);
  const failures = buildFailureSummary(results);
  const totalKeys = Object.keys(keyIndex).length;
  return {
    totalKeysFound: totalKeys,
    keyIndex,
    failureSummary: failures
  };
}

function buildGaodeReportPayload(targets = [], results = []) {
  const summary = buildGaodeSummary(results);
  return {
    generatedAt: new Date().toISOString(),
    targetCount: targets.length,
    targets: targets.map((target) => ({ name: target.name, url: target.url })),
    findings: results,
    summary
  };
}

async function writeGaodeReport(options = {}) {
  const { targets = [], results = [], outputFile } = options;
  if (!outputFile) {
    throw new Error('Gaode report outputFile is not configured.');
  }
  const payload = buildGaodeReportPayload(targets, results);
  return writeJsonReport(outputFile, payload);
}

module.exports = {
  writeJsonReport,
  buildGaodeReportPayload,
  writeGaodeReport
};
