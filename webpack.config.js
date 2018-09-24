const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  target: "node",
  watch: true,
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "build/"
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|ts)$/,
        use: "babel-loader",
        exclude: /(node_modules)/
      }
    ]
  }
};
