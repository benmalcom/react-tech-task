const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.js')();

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    compress: true,
    contentBase: path.join(__dirname, 'public'),
    publicPath: 'http://localhost:7000/dist/',
    port: 7000,
    hot: true,
    inline: true,
    open: true,
  },
});
