const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
 
  module: {
    rules: [
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
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
