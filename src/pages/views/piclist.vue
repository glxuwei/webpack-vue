<style lang="less">
@import 'style.less';
body {
    padding-top: .88rem;
    &.gray {
        background: #F5F5F5;
    }
}
&.body_line {
    background: url('@{imgPath}/line.png') repeat-y .5rem 0;
}
header {
    position: fixed;
    z-index: 500;
    top: 0;
    left: 0;
    right: 0;
    background: #11BF79;
}
.wrapper {
    padding: .5rem .3rem;
    &.gray {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #F5F5F5;
    }

    .empty {
        padding-top: 1.5rem;
        text-align: center;
        img {
            vertical-align: middle;
            width: 1.4rem;
        }
        p {
            margin-top: .7rem;
            color: #959595;
            line-height: .4rem;
            font-size: .28rem;
        }
    }
    &.loading {

    }
}

.piclist {
    dl {
        padding-left: 1rem;
        dt.date {
            float: left;
            margin-left: -1rem;
            padding: .14rem 0;
            width: 1rem;
            background: #FFF;
            color: #444;
            font-size: .28rem;
            .day {
                display: block;
                font-size: .6rem;
            }
            .month {
                margin-top: .1rem;
                margin-left: .1rem;
            }
        }
        dd {}

        ul {
            .clearfix;
            margin-left: -.2rem;
            overflow: hidden;
            li {
                float: left;
                margin-bottom: .5rem;
                margin-left: .3rem;
                width: 2.6rem;
                height: 3.2rem;
                overflow: hidden;
                figure {
                    position: relative;
                    img {
                        border-radius: .06rem;
                        vertical-align: middle;
                        width: 2.6rem;
                        height: 2.6rem;
                    }
                    .like {
                        display: block;
                        position: absolute;
                        z-index: 10;
                        right: 0;
                        bottom: 0;
                        padding: .15rem .25rem;
                        font-size: .3rem;
                        color: #FFF;

                        .iconfont {
                            font-size: .4rem;
                            // vertical-align: -.06rem;
                        }
                    }
                }
                section {
                    padding-top: .1rem;
                }
                .position {
                    font-size: .28rem;
                    color: #444;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    .iconfont {
                        font-size: .32rem;
                        // vertical-align: -.05rem;
                        color: #11BF79;
                    }
                }
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
            <i class="iconfont iconfont-user"></i>
        </a>
        <span>{{user}}的照片</span>
    </header>
    <section class="wrapper" :class="{gray: empty}">
        <loading-wrap v-show="loading"></loading-wrap>
        <div v-if="empty" class="empty">
            <img src="/static/images/icon-empty.png">
            <p>你还没有发照片哦<br>把你相册中的美图分享出来吧！</p>
        </div>
        <div v-if="piclist | objectEmpty" class="piclist">
            <dl v-for="item in piclist">
                <!-- {{$key}} - {{obj}} -->
                <dt class="date">
                    <span class="day">{{$key | day}}</span>
                    <span class="month">{{$key | month}}</span>
                </dt>
                <dd>
                    <ul>
                        <li v-for="pic in item">
                            <figure>
                                <img :src="pic.img">
                                <span class="like" @click.stop.prevent="piclike(pic)">
                                    <i class="iconfont" :class="pic.like ? 'iconfont-like2' : 'iconfont-like'"></i>
                                    {{pic.like_num}}
                                </span>
                            </figure>
                            <section>
                                <p class="position">
                                    <i class="iconfont iconfont-position"></i>{{pic.position}}
                                </p>
                            </section>
                        </li>
                    </ul>
                </dd>
            </dl>
        </div>
    </section>
</template>
<script>
import loadingWrap from '../../components/loading.vue';
export default Vue.extend({
    ready(){
        setTimeout(() => {
            document.body.className = 'body_line';
            this.loading = false;
            this.piclist = {
                '8-20': [{
                    link: '#',
                    img: '/static/images/temp/imglist1.jpg',
                    like: false,
                    like_num: 98,
                    position: '美国纽约'
                }, {
                    link: '#',
                    img: '/static/images/temp/imglist1.jpg',
                    like: false,
                    like_num: 98,
                    position: '美国纽约'
                }, {
                    link: '#',
                    img: '/static/images/temp/imglist1.jpg',
                    like: true,
                    like_num: 98,
                    position: '美国纽约'
                }],
                '8-12': [{
                    link: '#',
                    img: '/static/images/temp/imglist1.jpg',
                    like: false,
                    like_num: 98,
                    position: '美国纽约'
                }],
                '7-22': [{
                    link: '#',
                    img: '/static/images/temp/imglist1.jpg',
                    like: false,
                    like_num: 98,
                    position: '美国纽约'
                }]
            };
        }, 1000);
    },

    data(){
        return{
            user: 'sufsdewe',
            piclist: null,
            empty: false,
            loading: true
        }
    },

    methods:{
        piclike(pic){
            if (! pic.like) {
                pic.like_num++;
                pic.like = true;
            }
        }
    },

    computed:{},

    components:{loadingWrap},

    filters:{
        objectEmpty(value) {
            if (value === null) return false;
            if (typeof value !== 'object') return false;
            return value;
        },
        day(val) {
            return val.split('-')[1];
        },
        month(val) {
            return val.split('-')[0] + '月';
        }
    },

    events:{},

    watch:{}

});
</script>
