var path = require("path");

var DISTRIBUCTION_DIR = path.resolve(__dirname, "dist");
var SOURCE_DIR = path.resolve(__dirname, "src");

var config = {
  mode: 'production',
  performance: { hints: false },
  entry: SOURCE_DIR + "/app/index.js",
  output: {
    path: DISTRIBUCTION_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/app/"
  },
  module: {
    rules: [
    {
      test: /\.css$/,
      use: [ {loader: 'style-loader'}, {loader: 'css-loader'} ]
    },
    {
      test: /\.js?/,
      include: SOURCE_DIR,
      use: [
      {
        loader: "babel-loader",
        query: {
          presets: [
          "react",
          "stage-2",
          "env"
          ]
        }
      }
      ]
    }
    ]
  }
}

module.exports = config;