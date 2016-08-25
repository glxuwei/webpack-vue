<!-- 图片列表 -->
<style lang="less">
    .piclist {
        position: relative;
        margin-top: .4rem;
        font-size: .24rem;
        .piccard {
            position: absolute;
            top: 0;
            left: 0;
            width: 3.3rem;
            > a {
                display: block;
            }
            figure {
                position: relative;
                img {
                    width: 100%;
                    vertical-align: middle;
                    border-radius: .06rem .06rem 0 0;
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
                padding: .2rem;
                border-radius: 0 0 .06rem .06rem;
                border: 1px solid #D7D7D7;
                border-top: none;
            }

            .position {
                font-size: .26rem;
                color: #444;
                .iconfont {
                    font-size: .3rem;
                    // vertical-align: -.05rem;
                    color: #11BF79;
                }
            }
            .text {
                color: #959595;
                line-height: .33rem;
                max-height: .33rem * 2;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            .info {
                margin-top: .15rem;
                padding-top: .15rem;
                border-top: 1px solid #D7D7D7;

                color: #959595;
                .user {
                    float: left;
                    color: #959595;
                    max-width: 70%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    img {
                        width: .4rem;
                        height: .4rem;
                        vertical-align: middle;
                    }
                    span {
                        margin-left: .1rem;
                        vertical-align: middle;
                    }
                }
                .date {
                    float: right;
                }
            }
        }
    }
</style>
<template>
    <div class="piclist" :style="piclistStyle">
        <div v-for="pic in piclist" class="piccard" :style="pic.style">
            <a :href="pic.link">
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
                <p class="text">{{pic.text}}</p>
                <div class="info clearfix">
                    <span class="user">
                        <img :src="pic.userAvatar"><span>{{pic.userName}}</span>
                    </span>
                    <span class="date">{{pic.date}}</span>
                </div>
            </section>
            </a>
        </div>
    </div>
</template>
<script>
// css单位 px 转换为 rem
let pixelToREM = pixelVal => pixelVal * 2 / 100;
export default Vue.extend({
    ready() {
        for (let i = 1; i <= 11; i++) {
            this.piclist.push({
                link: '#',
                img: `/static/images/temp/imglist${i}.jpg`,
                like: false,
                like_num: 98,
                position: '美国纽约',
                text: '博物馆燃到爆',
                userAvatar: '/static/images/avatar.png',
                userName: 'suosuolian',
                date: '刚刚',
                style: {
                    top: 0,
                    left: 0
                }
            });
        }
        setTimeout(() => {
            this.waterfall();
        }, 0);
    },
    data() {
        return {
            piclistStyle: {
                height: 'auto'
            },
            piclist: []
        }
    },
    methods: {
        piclike(pic){
            if (! pic.like) {
                pic.like_num++;
                pic.like = true;
            }
        },
        waterfall(){
            let picacrdList = this.$el.querySelectorAll('.piccard'),
                // 列之间的间隔
                lineGap = pixelToREM(15),
                // 卡片宽度
                picWidth = pixelToREM(picacrdList[0].offsetWidth),
                // 容器宽度
                wrapWidth = pixelToREM(this.$el.offsetWidth),
                // 显示列数
                cols = Math.floor(wrapWidth / picWidth),
                // 存放每列当前高度的数组
                colsHeight = [];

            // 并初始化列长数组
            for (let i = 0; i< cols; i++) {
                colsHeight.push(0);
            }

            // 循环每个图片卡片，定位
            for (let i = 0; i < picacrdList.length; i++) {
                let pic = picacrdList[i],
                    // 当前的列高，默认为第一列的高度
                    curHeight = colsHeight[0],
                    // 当前插播的列
                    curCol = 0;

                // 遍历记录了高度的列数组
                for (let i in colsHeight){
                    // 找出高度最小的那一列
                    if(colsHeight[i] < curHeight - pixelToREM(30)){
                        curHeight = colsHeight[i];
                        curCol = i;
                    }
                }

                // 更新图片卡片的定位
                this.piclist[i].style = {
                    position: 'absolute',
                    left: `${curCol * (lineGap + picWidth)}rem`,
                    top: `${curHeight}rem`
                };
                // 累加当前列的高度，靠这个值来定位下一个卡片的放置位置
                colsHeight[curCol] += pixelToREM(pic.offsetHeight) + lineGap;
            }
            // 取出列数组中高度最大值，设置到父容器
            this.piclistStyle.height = Math.max.apply(null, colsHeight) + 'rem';
        }
    }
});
</script>
