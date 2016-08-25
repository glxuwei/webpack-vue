<!-- 首页banner -->
<style lang="less">
    @imgPath: '/static/images';
    .banner {
        padding-top: 1.3rem;
        box-sizing: border-box;
        height: 4.2rem;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        text-align: center;
        color: #FFF;

        &.style1 {
            background-image: url('@{imgPath}/banner1.jpg');
        }
        &.style2 {
            background-image: url('@{imgPath}/banner2.jpg');
        }
        &.style3 {
            background-image: url('@{imgPath}/banner3.jpg');
        }

        h2 {
            font-size: .42rem;
        }

        .text {
            margin-top: .32rem;
            font-size: .26rem;
            line-height: .44rem;
        }
    }
</style>
<template>
    <section class="banner" v-bind:class="banner.style">
        <h2>{{banner.title}}</h2>
        <div class="text">{{{banner.text}}}</div>
    </section>
</template>
<script>
export default Vue.extend({
    props: ['banner']
});
</script>
