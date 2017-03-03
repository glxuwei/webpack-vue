const baseConfig = require('../build/webpack.base.conf');
module.exports = (env, config) => {
  config.resolve.extensions.push('.vue');
  config.module.loaders = baseConfig.module.loaders;
  config.plugins = config.plugins.concat(baseConfig.plugins);
  config.vue = baseConfig.vue;
};
