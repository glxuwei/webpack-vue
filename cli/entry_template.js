module.exports =  `

// 每次构建 CLI 自动生成，切勿修改（修改后，构建时也将重写此文件）。

import {Name} from './{name}.vue';

$(function(){
	new Vue({
		el: '#js_container',
    template: '<div><{name}></{name}></div>',
		components: {
      {Name}
		}
	})
})

`;

