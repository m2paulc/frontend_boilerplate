const path = require("path")
const common = require("./webpack.common")
const merge = require("webpack-merge")

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        // use: {
        loader: "file-loader",
        options: {
          name(file) {
            if (process.env.NODE_DEV === 'development') {
              return '[path][name].[ext]'
            }
            return '[contentHash].[ext]'
          },
          outputPath: "./assets",
          esModule: false
        }
        // }
      }
    ]
  }
}