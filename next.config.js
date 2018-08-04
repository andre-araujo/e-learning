const prefix = process.env.BASE_URL || '';

module.exports = {
  distDir: '../.next',
  assetPrefix: prefix,
  exportPathMap(defaultPathMap) {
    const customPathMap = Object.assign({}, defaultPathMap);

    for (const page in customPathMap) {
      if (/style/.test(page)) {
        delete customPathMap[page];
      }
    }

    return customPathMap;
  },
};
