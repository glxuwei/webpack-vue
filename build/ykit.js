import {spawn, exec} from 'child_process'
import {writeFileSync} from 'fs'
import {resolve, join} from 'path'

//安装qunar插件
spawn('npm', ['i', '@qnpm/ykit-config-qunar', '--registry http://registry.npm.corp.qunar.com/', ' --save']);

exec('mkdir ../ykit && cd ykit && touch webpack.ykit.js');

writeFileSync(resolve(__dirname, '../ykit.qunar.js'), `
exports.config = function() {

  return {
    export: [],
    modifyWebpackConfig: function(baseConfig) {

      return baseConfig;
    }
  }

}
`, 'utf-8');

