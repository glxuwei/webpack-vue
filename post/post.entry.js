import TripPage from './post.vue';
document.addEventListener('DOMContentLoaded',() => {
	//引入公共组件
	//Vue.component('crm-nav', 	require('../../components/nav/nav.vue'));
  Vue.directive('value', require('../../directives/value'));
  Vue.config.debug = true;
  // Vue.config.silent = true;
  const Dpr = require('./dpr')();
	new Vue({
		el: '#js_container',
		components: {
			TripPage
		}
	})
},false);

