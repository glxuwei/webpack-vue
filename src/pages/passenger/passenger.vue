<template>
  <div class="qvwrapper">
    <transition name="slide" mode="in-out">
      <component :is="renderview" @changeview="changeView" class="passenger"></component>
    </transition>
  </div>
</template>

<style lang="less">
  @import '../components.less';
  @import './passenger.less';
  .qvwrapper{
    position: relative;
  }
  .passenger{
    position: absolute;
    width: 100%;
    background: #fff;
    font: 16px helvetica,arial;
    min-height: 100vh;
    .header{
      .tem(10);
      padding: 0 @em;
      background: @bgColor;
      font-size: 16px;
      font-weight: 700;
      .px2em(line-height, 44);
      color: #7ff;
    }
    .back {
      float: left;

    }
    .title {
      font-weight: 700;
      text-align: center;
      color: #fff;
    }
    .confirm{
      float: right;
    }
    .addbtn {
      .px2em(margin, 15);
      display: block;
      .px2em(line-height, 34);
      color: #1ba9ba;
      text-align: center;
      border: 1px solid #1ba9ba;
      .px2em(border-radius, 4);
      background: #fbfbfb;
      &:before{
        .qvicon;
        font-size: 18px;
        content: "\e00f";
      }
    }
    .qvlist{

    }
    .qvlist {
      font-size: 12px;
      .px2em(padding-left, 15, 12);
      border: 1px solid #e1e5e9;
      border-left: none;
      border-right: none;
      background: #fbfbfb;
      .item{
        &.on:before{
          color: #1ba9ba;
        }
        position: relative;
        border-bottom: 1px solid #dce1e6;
        .px2em(line-height, 21, 12);
        &:before{
          content: '\e006';
          margin: auto 0;
          position: absolute;
          bottom: 0;
          top: 0;
          .px2em(height, 22, 18);
          .px2em(width, 22, 18);
          .qvicon;
          border: 1px solid #ccc;
          font-size: 18px;
          .px2em(border-radius, 3, 18);
          .px2em(line-height, 16, 18);
          color: #fbfbfb;
        }
        &:after{
          content: "\e010";
          .qvicon;
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto 0;
          width: 35px;
          height: 35px;
          font-size: 20px;
          color: #c5c5c5;
        }
        &:last-child{
          border: none;
        }
      }
      .content{
        .paddingem(10, 45, 10, 45, 12);
      }
      .info{
        color: #666;
      }
      .name {
        color: #333;
        font-size: 14px;
        font-weight: 700;
        .px2em(margin-right, 10, 14);
      }
      .idtype{
        color: #333;
      }
      .idname{
        .px2em(margin-right, 10, 12);
      }
    }

  }
.slide-enter-active, slide-leave-active {
  transition: all .3s ease;
}
.slide-enter, .slide-leave-active {
  opacity: 0;
}
.slide-enter{
  transform: translateX(100vw);
}
.slide-leave-active{
  transform: translateX(-100vw);
}

</style>

<script>

import PassengerList from './components/passengerList'
import EditForm from './components/editForm'
import AddForm from './components/addForm'

export default {
  props: ['options'],
	data(){
    return {
      renderview: 'PassengerList'
    }
  },
  computed:{
    passengers() {
    }
  },
  methods:{
    changeView(view) {
      this.renderview = view;
    }
  },
	components:{
    PassengerList,
    EditForm,
    AddForm
  },

  filters:{},

  events:{},

  watch:{}

};
</script>
