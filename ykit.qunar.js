const getConfig = require('./ykit/webpack.ykit');
const path = require('path')
exports.config = function() {

  return {
    export: ['./pages/passenger/passenger.entry.js'],
    modifyWebpackConfig: function(baseConfig) {
      return getConfig(this.env, baseConfig);
    }
  }
}
