<!-- 图片社区首页 -->
<style lang="less">
</style>
<template>
    <pic-list></pic-list>
    <pic-upload></pic-upload>
</template>
<script>
import PicList from './views/list.vue';
import PicUpload from '../components/upload'

export default Vue.extend({
    ready(){
    },

    data(){
        return {}
    },

    methods:{
        changeTab(){

        }
    },

    computed:{},

    components:{
        PicList,
        PicUpload
    },

    filters:{},

    events:{},

    watch:{}

});
</script>
