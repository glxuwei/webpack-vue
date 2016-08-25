<!-- 图片社区首页 -->
<style lang="less">
    @import './style.less';
    header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }

    .tags-wrap {
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
        font-size: 0;
        a {
            display: inline-block;
            position: relative;
            margin-left: .2rem;
            width: 1.8rem;
            height: 1.8rem;
            color: #FFF;

            &:first-child {
                margin-left: 0;
            }
            img {
                border-radius: .06rem;
                width: 100%;
                height: 100%;
                vertical-align: middle;
            }
            span {
                position: absolute;
                left: 0;
                right: 0;
                bottom: .1rem;
                padding: 0 .1rem;
                text-align: center;
                font-size: .24rem;
                font-weight: bold;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }

    .list-tabs {
        margin-top: .4rem;
        .tabs {
            color: #444;
            font-size: 0;
            text-align: center;
            a {
                display: inline-block;
                margin: 0 .1rem;
                padding: .03rem .3rem;
                border-radius: .4rem;
                color: #444;
                font-size: .26rem;
                font-weight: bold;
                &.current {
                    color: #FFF;
                    background: #11BF79;
                }
            }
        }
    }
</style>
<template>
    <header>
        <a href="javascript:;" class="pull pull-left">
            <i class="iconfont iconfont-back"></i>
        </a>
        <a href="javascript:;" class="pull pull-right">
            <i class="iconfont iconfont-user2"></i>
        </a>
    </header>
    <banner :banner="banner"></banner>
    <section class="wrapper">
        <div v-if="tagsList.length" class="tags-wrap">
            <template v-for="tag in tagsList">
                <a :href="tag.link">
                    <img :src="tag.img" :alt="tag.name">
                    <span>#{{tag.name}}</span>
                </a>
            </template>
        </div>
        <div class="list-tabs">
            <div class="tabs">
                <a class="current" @click="changeTab()" href="javascript:;">全部</a>
                <a @click="changeTab()" href="javascript:;">精华</a>
            </div>
            <waterfall></waterfall>
        </div>
    </section>
</template>
<script>
import Banner from './components/banner.vue';
import Waterfall from './components/waterfall.vue';

export default Vue.extend({
    ready(){
    },

    data(){
        return{
            banner: {
                style: 'style1',
                title: '世界这一刻',
                text: '随时随地，每分每秒<br>就现在<br>随手一拍！'
            },
            tagsList: [{
                name: '布宜诺斯艾利斯',
                link: '#',
                img: '/static/images/temp/temp-180x180.jpg'
            }, {
                name: '纽约',
                link: '#',
                img: '/static/images/temp/temp-180x180.jpg'
            }, {
                name: '雅典',
                link: '#',
                img: '/static/images/temp/temp-180x180.jpg'
            }, {
                name: '东京',
                link: '#',
                img: '/static/images/temp/temp-180x180.jpg'
            }, {
                name: '阿姆斯特丹',
                link: '#',
                img: '/static/images/temp/temp-180x180.jpg'
            }, {
                name: '里约热内卢',
                link: '#',
                img: '/static/images/temp/temp-180x180.jpg'
            }]
        }
    },

    // props: ['banner', 'tagsList']

    methods:{
        changeTab(){

        }
    },

    computed:{},

    components:{
        Banner,
        Waterfall
    },

    filters:{},

    events:{},

    watch:{}

});
</script>
