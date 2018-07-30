const prefix = process.env.BASE_URL || "";

module.exports = {
  distDir: "../.next",
  assetPrefix: prefix,
  exportPathMap: function (defaultPathMap) {
    const customPathMap = Object.assign({}, defaultPathMap);

    for (let page in customPathMap) {
      if (/style/.test(page)) {
        delete customPathMap[page];
      }
    }

    return customPathMap;
  }
};
