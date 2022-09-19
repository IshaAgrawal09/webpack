const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 4500,
    open: true,
    compress: true,
    hot: true,
  },
  // Webpack configuration goes here
};
