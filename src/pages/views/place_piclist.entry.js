import TripPage from './place_piclist.vue';

$(function(){
	//引入公共组件
	//Vue.component('crm-nav', 	require('../../components/nav/nav.vue'));
	new Vue({
		el: '#js_container',
		components: {
			TripPage
		}
	})
})

