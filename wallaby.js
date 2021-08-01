var path = require("path");

module.exports = (wallaby) => {
  process.env.NODE_PATH +=
    path.delimiter +
    path.join(wallaby.localProjectDir, "common", "temp", "node_modules");
  return {
    autoDetect: true,
    testFramework: {
      path: "./common/temp/node_modules",
    },
  };
};
