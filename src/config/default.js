module.exports = {
  targets: [
    {
      name: '公司官网样例',
      url: 'https://example.com'
    }
  ],
  scanners: {
    gaode: {
      enabled: true,
      render: {
        timeoutMs: 15000,
        waitUntil: 'networkidle2'
      }
    }
  }
};
