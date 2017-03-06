import Index from './index.vue';
$(function(){
	//引入公共组件
	//Vue.component('crm-nav', 	require('./../components/nav/nav.vue'));
	new Vue({
		el: '#js_container',
    template: '<div><index></index></div>',
		components: {
      Index
		}
	})
})

