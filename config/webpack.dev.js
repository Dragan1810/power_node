//@ts-check
const path = require("path");

/**
 * @type import('webpack').Configuration
 */
const config = {
  entry: "./src/index.ts",
  target: "node",
  node: {
    __filename: true,
    __dirname: true
  },
  watch: true,
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "build/"
  },
  resolve: {
    extensions: [".ts", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(m?js|ts)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "typescript"
              }
            }
          }
        }
      }
    ]
  }
};

module.exports = config;
