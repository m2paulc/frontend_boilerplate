var HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path")
const common = require("./webpack.common")
const merge = require("webpack-merge")

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/index.html"
  })],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
    ]
  }
})