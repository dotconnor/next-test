const path = require("path");

module.exports = {
  webpack(config) {
    config.module.rules[0].include.push(path.join(__dirname, ".."));
    config.resolve.alias["now-next-test$"] = path.join(__dirname, "..", "src");
    return config;
  },
};
