<style lang="less">
@import 'style.less';
body {
    padding-top: .88rem;
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
    padding: .4rem;
}
.like-peoples {
    ul {
        margin-top: -.4rem;
        li {
            border-bottom: 1px solid #D7D7D7;
            font-size: .28rem;
            a {
                display: block;
                min-height: .9rem;
                padding: .4rem 0 .4rem 1.1rem;
            }
            img {
                float: left;
                margin-left: -1.1rem;
                width: .9rem;
                height: .9rem;
                border-radius: 50%;
            }
            p {
                padding-top: .2rem;
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
        </a>
        <span>赞过的人</span>
    </header>
    <section class="wrapper">
        <div class="like-peoples">
            <ul>
                <li v-for="people in peopleList">
                    <a :href="people.link">
                        <img :src="people.img">
                        <p>{{people.userName}}</p>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
export default Vue.extend({
    ready(){

    },
    data(){
        return{
            peopleList: [{
                link: '#',
                img: '/static/images/avatar.png',
                userName: '哆啦A梦'
            }, {
                link: '#',
                img: '/static/images/avatar.png',
                userName: '哆啦A梦'
            }, {
                link: '#',
                img: '/static/images/avatar.png',
                userName: '哆啦A梦'
            }, {
                link: '#',
                img: '/static/images/avatar.png',
                userName: '哆啦A梦'
            }, {
                link: '#',
                img: '/static/images/avatar.png',
                userName: '哆啦A梦'
            }, {
                link: '#',
                img: '/static/images/avatar.png',
                userName: '哆啦A梦'
            }]
        }
    },
    methods:{

    },
    computed:{},

    components:{},

    filters:{},

    events:{},

    watch:{}

});
</script>
