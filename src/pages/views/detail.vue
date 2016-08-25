<style lang="less">
@import 'style.less';
.ellipsis() {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.borderBox() {
    box-sizing: border-box;
}
.flexBox() {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
}
body {
    padding-top: .88rem;
    background: #F5F5F5;
}
header {
    position: fixed;
    z-index: 500;
    top: 0;
    left: 0;
    right: 0;
    background: #11BF79;
}

.detail {
    figure {
        text-align: center;
        img {
            vertical-align: middle;
            max-width: 100%;
        }
    }
    dl.userinfo {
        padding: .3rem;
        background: #fff;
        dt {
            border-bottom: 1px solid #D7D7D7;
            padding-bottom: .3rem;
            .users {
                padding-left: 1.1rem;
                min-height: .9rem;
                img.avatar {
                    float: left;
                    margin-left: -1.1rem;
                    width: .9rem;
                    height: .9rem;
                }
                .username {
                    display: block;
                    font-size: .28rem;
                    font-weight: bold;
                    .ellipsis;
                }
                .date {
                    font-size: .24rem;
                    color: #959595;
                }
                .position {
                    float: right;
                    max-width: 8em;
                    margin-top: .1rem;
                    font-size: .28rem;
                    color: #11BF79;
                    .ellipsis;
                }
            }
        }
        dd {
            padding-top: .3rem;
            .text {
                font-size: .28rem;
                line-height: .46rem;
            }
            .tags {
                font-size: .24rem;
                color: #11BF79;
            }
        }
    }
    .userlike {
        padding: .4rem .3rem;
        .clearfix;
        .total {
            float: left;
            width: 1.12rem;
            margin-top: .05rem;
            font-size: .3rem;
            .iconfont {
                color: #959595;
            }
        }
        a {
            float: left;
            margin-right: .14rem;
            width: .6rem;
            height: .6rem;
            line-height: .6rem;
            border-radius: .3rem;
            text-align: center;
            color: #FFF;
            background: #959595;
            &:last-child {
                margin-right: 0;
            }
        }
        .iconfont {
            font-size: .45rem;
        }
        img {
            width: 100%;
            height: 100%;
            vertical-align: middle;
        }
    }
    .comment {
        border-top: 1px solid #D7D7D7;
        padding: .3rem;
        .comment-empty {
            text-align: center;
        }
        .comment-total {
            font-size: .24rem;
        }
        .comment-list {
            font-size: .28rem;
            padding: .3rem 0 .3rem .8rem;
            border-bottom: 1px solid #D7D7D7;
            color: #444;
            img {
                float: left;
                margin-left: -.8rem;
                width: .6rem;
                height: .6rem;
            }
            .user {
                .ellipsis;
            }
            .date {
                float: right;
                color: #959595;
            }
            .username {
                color: #959595;
            }
        }
    }

}

.comment-dock {
    height: 1.1rem;
    .comment-form {
        .flexBox;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: 1.1rem;
        padding: .2rem .3rem;
        .borderBox;
        border-top: 1px solid #C0C0C0;
        background: #F5F5F5;

        input {
            border: 1px solid #0CBF79;
            width: 100%;
            padding: 0 .2rem;
            border-radius: .08rem;
            height: .7rem;
            font-size: .3rem;
            .borderBox;
            vertical-align: middle;
        }
        button {
            max-width: 2rem;
            width: 28%;
            margin-left: .2rem;
            border: 0;
            border-radius: .08rem;
            background: #11BF79;
            height: .7rem;
            text-align: center;
            color: #FFF;
            .borderBox;
            vertical-align: middle;
            .iconfont {
                font-size: .45rem;
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
        <span class="pull pull-right">
            <a href="javascript:;">
                <i class="iconfont iconfont-share"></i>
            </a>
            <a href="javascript:;" @click.prevent="delPhoto">
                <i class="iconfont iconfont-delete"></i>
            </a>
        </span>
        <span>照片详情</span>
    </header>
    <section class="detail">
        <figure>
            <img src="/static/images/temp/photo.jpg">
        </figure>
        <dl class="userinfo">
            <dt>
                <div class="users">
                    <img class="avatar" src="/static/images/avatar.png">
                    <span class="position">
                        <i class="iconfont iconfont-position"></i>美国纽约
                    </span>
                    <span class="username">嗦嗦连suosuolian</span>
                    <span class="date">1天前发布</span>
                </div>
            </dt>
            <dd>
                <p class="text">暴走了几天之后，终于终于可以歇歇脚了。码头没有想象的那么忙碌，游客更是少，好惬意呀~还好出门前机智的做了防晒，不怕回家变煤球……</p>
                <p class="tags">
                    <span>#地球这一刻#</span>
                </p>
            </dd>
        </dl>
        <div class="userlike">
            <span class="total">
                <i class="iconfont iconfont-like2"></i>23
            </span>
            <a href="#"><img src="/static/images/avatar.png"></a>
            <a href="#"><img src="/static/images/avatar.png"></a>
            <a href="#"><img src="/static/images/avatar.png"></a>
            <a href="#"><img src="/static/images/avatar.png"></a>
            <a href="#"><img src="/static/images/avatar.png"></a>
            <a href="#"><img src="/static/images/avatar.png"></a>
            <a href="#"><img src="/static/images/avatar.png"></a>
            <a href="#"><i class="iconfont iconfont-more"></i></a>
        </div>
        <div class="comment">
            <!-- <div class="comment-empty">
                暂时还没有评论，快来参与讨论吧~ 
            </div> -->
            <div class="comment-total">
                <span>共5条评论</span>
            </div>
            <div class="comment-list">
                <img class="avatar" src="/static/images/avatar.png">
                <div class="user">
                    <span class="date">2分钟前</span>
                    <span class="username">嗦嗦连suosuolian</span>
                </div>
                <div>好美的海！一看就没有pm2.5</div>
            </div>
            <div class="comment-list">
                <img class="avatar" src="/static/images/avatar.png">
                <div class="user">
                    <span class="date">10分钟前</span>
                    <span class="username">路客舍</span>
                    <span>回复了</span>
                    <span class="username">嗦嗦连suosuolian</span>
                </div>
                <div>好美的海！一看就没有pm2.5</div>
            </div>
        </div>
    </section>
    <div class="comment-dock">
        <div class="comment-form">
            <input type="text" placeholder="写评论">
            <button type="button" @click="comment"><i class="iconfont iconfont-like"></i></button>
        </div>
    </div>
    <tips :show.sync="tips_show" :duration="1500">{{{tips_inner}}}</tips>
    <modal :show.sync="modal_show" @ok="modalOk">
        {{{modal_inner}}}
    </modal>
</template>
<script>
import Tips from '../../components/tips.vue';
import Modal from '../../components/modal.vue';
export default Vue.extend({
    ready(){

    },

    data(){
        return{
            userinfo: {
                username: '嗦嗦连suosuolian',
                avatar: '/static/images/avatar.png'
            },
            picinfo: {
                src: '/static/images/temp/photo.jpg',
                text: '暴走了几天之后，终于终于可以歇歇脚了。码头没有想象的那么忙碌，游客更是少，好惬意呀~还好出门前机智的做了防晒，不怕回家变煤球……',
                tags: '地球这一刻',
                publishDate: '1天前发布',
                position: '美国纽约'
            },
            likeinfo: {
                total: 23,
                likelist: [{
                    avatar: '/static/images/avatar.png',
                    link: '#'
                }, {
                    avatar: '/static/images/avatar.png',
                    link: '#'
                }, {
                    avatar: '/static/images/avatar.png',
                    link: '#'
                }]
            },
            modal_show: false,
            modal_inner: '',
            tips_show: false,
            tips_inner: ''
        }
    },

    methods:{
        comment() {
            this.tips_inner = '回复成功';
            this.tips_show = true;
        },
        delPhoto() {
            this.modal_inner = '图片删除后不可复原，<br>确认删除吗？';
            this.modal_show = true;
        },
        modalOk(msg) {
            this.tips_inner = '删除成功';
            this.tips_show = true;
        }
    },

    computed:{},

    components:{
        Tips,
        Modal
    },

    filters:{},

    events:{
        // 'modal-ok'(msg) {
        //     console.log(msg)
        // }
    },

    watch:{}

});
</script>
