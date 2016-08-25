<template>
  <section>
    <div class="addrsel__search">
      <i class="iconfont iconfont-search"></i>
      <input class="addrsel__input" v-model="postxt" type="text" placeholder="搜索旅行目的地"/>
    </div>
    <ul class="addrsel__result">
      <li class="addrsel__item addrsel__item--cur" @click="selectAddr(currentLoc)"><span>我在</span><i class="iconfont iconfont-position2"></i>{{currentLoc.name}}</li>
      <li class="addrsel__item" v-for="item in list | filterBy postxt in 'name'" track-by="id" transition="fade" transition-mode="out-in" @click="selectAddr(item)">{{item.name}}</li>
    </ul>
  </section>
</template>

<style lang="less">
  @import '../post';
  .fade-transition {
  transition: opacity .3s ease;
  }
  .fade-enter, .fade-leave {
  opacity: 0;
  }
  .addrsel__item--cur{
    &.hide{
      display: none;
    }
  }
  .addrsel__search{
    position: relative;
    .px2rem(margin, 30);
    background: #fff;
    border: 1px solid @l1dark;
    .px2px(border-radius, 54);
    .px2px(font-size, 24);
    .px2px(line-height, 60);
    .px2px(height, 60);
  }
  .iconfont-search{
    position: absolute;
    top: 0;
    bottom: 0;
    .px2rem(left, 20);
    .px2px(font-size, 34);
    color: @l1dark;
  }
  .addrsel__input{
    .tapnobg;
    .px2rem(width, 568);
    .px2rem(margin-left, 63);
    border: none;
  }
  .addrsel__result{
    .px2rem(padding-left, 30);
    border-top: 1px solid @d7;
    .iconfont-position2{
      .px2rem(margin-left, 20);
      .px2rem(margin-right, 4);
      .px2px(font-size, 26);
      color: @green;
    }
  }
  .addrsel__item{
    .px2px(font-size, 28);
    .px2rem(line-height, 100);
    color: @dark;
    border-bottom: 1px solid @d7;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &:last-child{
      border-bottom: none;
    }
  }

</style>

<script>
  let info = {
    list: [],
    postxt: ''
  };
  export default {
    props: ['currentLoc', 'selectedLoc', 'curview'],
    data () {
      return info
    },
    ready () {
      this.$watch('postxt', (val) => {
        setTimeout(() => {
          info.list = [{id: 1, name: 'abde'},{id: 2, name: 'abll'},{id: 3, name: 'dd'}]
        }, 1000);
      });
      setTimeout(() => {
        info.list = [{id: 6, name: '北京市'},{id: 5, name: '北京市'},{id: 4, name: '南京市'}]
      }, 1000);
    },
    methods: {
      selectAddr (item) {
        this.selectedLoc = item;
        this.curview = 'PostEditor';
      }
    }
  }
</script>
