const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const ROOT_DIR = path.resolve(__dirname, '..', '..');
function resolveEnvFiles(nodeEnv) {
  const files = ['.env'];
  if (nodeEnv) {
    files.push(`.env.${nodeEnv}`);
    if (nodeEnv === 'development') {
      files.push('.env.dev');
    }
  } else {
    files.push('.env.dev');
  }
  return [...new Set(files)];
}

function loadEnvironmentFiles() {
  const nodeEnv = process.env.NODE_ENV;
  const envFiles = resolveEnvFiles(nodeEnv);

  for (const file of envFiles) {
    const absolutePath = path.resolve(ROOT_DIR, file);
    if (!fs.existsSync(absolutePath)) {
      continue;
    }
    dotenv.config({ path: absolutePath });
  }
}

module.exports = {
  loadEnvironmentFiles
};
