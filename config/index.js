// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  title: {
    index: '图片社区-首页',
    post: '图片社区-图片发布',
    'like_peoples': '图片社区-喜欢',
    'piclist': '图片社区-图片列表',
    'place_piclist': '图片社区-目的地图片',
    'detail': '图片社区-详情页'
  },
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: 'http://localhost:8080',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
  },
  styles: ['/static/css/base.css', '/static/css/common.css', '/static/fonts/css/iconfont.css'],
  scripts: ['/static/lib/vue.js', '/static/lib/zepto.js']
}