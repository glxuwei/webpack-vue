<template>
  <section class="post-editor__wrapper">
    <div class="post-editor__img" :style="bgStyle"></div>
    <div class="post-editor__body">
      <span class="post-editor__placeholder" @click="emitEdit" :class="{'show': isShowPh}">说明一下这张图吧~</span>
      <div class="post-editor__text" v-value="value" contenteditable="true"></div>
    </div>
  </section>
</template>

<style lang="less">
  @import '../post';
  .post-editor__wrapper{
    background: #fff;
    .px2rem(padding, 30);
    .px2rem(padding-bottom, 40);
  }
  .post-editor__img{
    float: left;
    .px2rem(width, 120);
    .px2rem(height, 120);
    background: #d8d8d8;
    border-radius: 4px;
  }
  .post-editor__body{
    position: relative;
    .px2rem(margin-left, 144);
    .px2px(font-size, 28);
    .px2px(line-height, 48);
  }
  .post-editor__placeholder{
    position: absolute;
    display: none;
    color: @mdark;
    -webkit-tap-highlight-color:transparent;
    &.show{
      display: block;
    }
  }
  .post-editor__text{
    .px2px(margin-top, -10);
    color: @dark;
    border: none;
    .px2rem(min-height, 120);
    .px2rem(max-height, 150);
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-tap-highlight-color:transparent;
  }

</style>

<script>
  let dom_text = null;
  let bgurl = window && window.localStorage ? window.localStorage.getItem('pictrip-upload-img-url') : '';
  export default {
    data () {
      return {
        isShowPh: true,
        value: '',
        bgStyle: {
          background: 'url(' + bgurl + ') no-repeat center'
        }
      }
    },
    computed: {
      isShowPh () {
        if (this.value.length > 5000) {
          this.value = this.value.substring(0, 5000);
          dom_text.innerText = this.value;
          var sel = window.getSelection();
          var range = document.createRange();
          range.selectNodeContents(dom_text);
          range.collapse(false);
          sel.removeAllRanges();
          sel.addRange(range);
        }
        return this.value ? false : true;
      }
    },
    ready () {
      dom_text = document.querySelector('.post-editor__text');
      /* this.$watch('value', (val, oldval) => { */
      /* }) */
    },
    methods: {
      emitEdit () {
        dom_text.focus()
      }
    },
    /* watch:{ */
      /* 'data.value':{ */
          /* handler:(val,oldVal)=>{ */
            /* alert(val) */
          /* }, */
          /* // 深度观察 */
          /* deep:true */
      /* } */
    /* } */

  }

</script>
