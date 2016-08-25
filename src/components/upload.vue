<template lang="jade">
  vue-file-upload#upload__btn(url='upload.do',
    v-bind:files.sync = 'files',
    :label = 'label',
    :icon = 'icon',
    v-bind:filters = "filters",
    v-bind:events = 'cbEvents',
    v-bind:request-options = "reqopts")
</template>
<style lang="less">
  #upload__btn{
    position: fixed;
    z-index: 100;
    width: 0.52rem;
    height: 0.76rem;
    line-height: 0.76rem;
    right: 0.3rem;
    bottom: 0.3rem;
    background: #11BF79;
    border-radius: 50%;
    text-align: center;
    color: #fff;
    &.hover{
      background: #07AE6B;
    }
    .iconfont-camera{
      font-size: 0.52rem;
    }
  }
</style>
<script>
import VueFileUpload from 'vue-file-upload';
export default {
  data(){
    return{
      files:[],
      label: '',
      icon: 'iconfont iconfont-camera',
      autoUpload: true,
      //文件过滤器，只能上传图片
      filters:[
        {
          name:"imageFilter",
          fn(file){
              var type = '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
              return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
          }
        }
      ],
      //回调函数绑定
      cbEvents:{
        onCompleteUpload:(file,response,status,header)=>{
          console.log(file);
          console.log("finish upload;")
          if (window && window.localStorage) {
            window.localStorage.setItem('pictrip-upload-img-url', 'http://localhost:8080/static/images/icon-empty.png');
            window.location.href = 'http://localhost:8080/post/post.html';
          };
        },
        onAddFileFail (error) {
          console.log('dddd', error)
        }
      },
      //xhr请求附带参数
      reqopts:{
        formData:{
          tokens:'tttttttttttttt'
        },
        responseType:'json',
        withCredentials:false
      }
    }
  },
  ready () {
    this.$watch('files', (ary) => {
      ary[0].upload();
    });
  },
  methods:{
    onStatus(file){
      if(file.isSuccess){
        return "上传成功";
      }else if(file.isError){
        return "上传失败";
      }else if(file.isUploading){
        return "正在上传";
      }else{
        return "待上传";
      }
    }
  },
  components:{
    VueFileUpload
  }
}
</script>
