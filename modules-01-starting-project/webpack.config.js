/* eslint-disable function-call-argument-newline */
/* eslint-disable quote-props */
/* eslint-disable no-undef */
const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: 'assets/scripts/'
  },
  devtool: 'eval-cheap-module-source-map',
  // devServer: {
  //   contentBase: './'
  // }
  plugins: [
    new CleanPlugin.CleanWebpackPlugin()
  ]
};
