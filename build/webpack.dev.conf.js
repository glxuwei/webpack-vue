var config = require('../config')
var Title = require('../config/title');
var fs = require('fs');
var path = require('path');
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var cssLinks = '';
var scripts = '';
config.scripts.forEach(function (item) {
  scripts = scripts + '<script src="' + item +'"></script>'
});
config.styles.forEach(function (item) {
  cssLinks = cssLinks + '<link rel="stylesheet" href="' + item + '"/>';
});
var devConfig = merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]
});

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
  // https://github.com/ampedandwired/html-webpack-plugin
  devConfig.plugins.push(new HtmlWebpackPlugin({
    filename: name + '.html',
    chunks: [name],
    templateContent: function () {
      var template = fs.readFileSync(path.join(__dirname, '../src/pages/layout/template.html'),'utf-8');
      return template.replace(/<!--title-->/, Title[name] || '').replace(/<!--buildcss-->/, cssLinks).replace(/<!--buildjs-->/, scripts);
    },
    inject: true
  }));
})

module.exports = devConfig;
