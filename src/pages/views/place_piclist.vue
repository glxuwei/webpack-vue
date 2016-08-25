<!-- 目的地图片列表 -->
<style lang="less">
@import 'style.less';
header {
    position: fixed;
    z-index: 500;
    top: 0;
    left: 0;
    right: 0;
    background: #11BF79;
}
body {
    padding-top: .88rem;
}
.place-link {
    display: block;
    padding: .2rem;
    border: 1px solid #D7D7D7;
    border-radius: .08rem;
    font-size: .26rem;
    .iconfont:first-child {
        color: #C0C0C0;
    }
    .iconfont:last-child {
        color: #848484;
    }
}
</style>
<template>
    <header>
        <a href="javascript:;" class="pull pull-left">
            <i class="iconfont iconfont-back"></i>
        </a>
        <a href="javascript:;" class="pull pull-right">
        </a>
        <span>佛罗伦萨的照片</span>
    </header>
    <section class="wrapper">
        <a href="javascript:;" class="place-link">
            <i class="iconfont iconfont-info"></i>
            <span>查看佛罗伦萨旅游攻略/地图/景点信息</span>
            <i class="iconfont iconfont-arrowright fr"></i>
        </a>
        <waterfall></waterfall>
    </section>
</template>
<script>
import Waterfall from './components/waterfall.vue';
export default Vue.extend({
    ready(){
    },

    data(){
        return{
        }
    },

    methods:{
    },

    computed:{},

    components:{
        Waterfall
    },

    filters:{},

    events:{},

    watch:{}

});
</script>
