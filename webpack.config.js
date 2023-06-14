const path = require("path");

module.exports = {
  entry: './ja/app.js',
  // devtool: 'inline-source-map',
  // mode: 'development',
  // module: {
  //   rules: [
  //     {
  //       test: /\.tsx?$/,
  //       use: 'ts-loader',
  //       exclude: /node_modules/
  //     }
  //   ]
  // },
  // resolve: {
  //   extensions: [ '.tsx', '.ts', '.js' ]
  // },
  // output: {
  //   filename: 'bundle.js'
  // },
  devServer: {
    static: path.join(__dirname),
    compress: true,
    port: 8080,
  },
};
