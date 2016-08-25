
<template>
  this is the post page
</template>

<style lang="less">
  .fade-transition {
  transition: opacity .3s ease;
  }
  .fade-enter, .fade-leave {
  opacity: 0;
  }
</style>

<script>
import COMINFO from './constant'
import promisePos from './position'
let info = {
  title: '发布照片',
  currentlocation: {},
  selectedlocation: {},
  curView: 'PostEditor'
  /* curView: 'AddrSel' */
};

promisePos.then((data) => {
  //进行获取位置操作
}).catch((error) => {
  info.currentlocation = {id: 0, name: ''};
  info.selectedlocation = {id: 0, name: '请选择目的地'};
});
//模拟请求数据
setTimeout(() => {
  info.currentlocation = info.selectedlocation = {id: 1, name: '北京市东城区'};
}, 1000);


export default Vue.extend({

	ready(){
	},
	data(){
    return info
  },
  computed: {
    title () {
      return COMINFO[this.curView].title;
    }
  },
  methods:{

  },
  events: {
    'post-seladdr': () => {
      info.curView = 'AddrSel'
    }
  },
	components:{
  }
});

</script>
