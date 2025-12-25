const LEVELS = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3
};

const configuredLevel = (process.env.LOG_LEVEL || 'info').toLowerCase();
const activeLevel = LEVELS[configuredLevel] ?? LEVELS.info;

function log(level, message, meta) {
  if (LEVELS[level] > activeLevel) {
    return;
  }
  const prefix = `[${level.toUpperCase()}]`;
  if (meta) {
    console.log(prefix, message, meta);
  } else {
    console.log(prefix, message);
  }
}

function error(message, err) {
  log('error', message);
  if (err) {
    console.error(err.stack || err);
  }
}

function warn(message) {
  log('warn', message);
}

function info(message) {
  log('info', message);
}

function debug(message) {
  log('debug', message);
}

module.exports = {
  error,
  warn,
  info,
  debug
};
