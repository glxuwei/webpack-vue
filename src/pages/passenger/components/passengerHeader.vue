<template>
  <header class="header">
    <a @click="back" class="back">{{cancel.text}}</a>
    <a @click="confirmHandler" class="confirm">{{confirm.text}}</a>
    <h3 class="title">{{title}}</h3>
  </header>
</template>
<script>
  const data = {
    passengerList: {
      title: '乘机人',
      cancel: {
        text: '取消',
        handler() {
        }
      },
      confirm: {
        text: '确定',
        handler() {

        }
      }
    },
    addForm: {
      title: '新增乘机人',
      cancel: {
        text: '取消',
        handler() {
          this.$emit('changeview', 'PassengerList');
        }
      },
      confirm: {
        text: '完成',
        handler() {
          console.log(this.formdata, 'formdata---->>');
        }
      }
    },
    editForm: {
      title: '编辑乘机人',
      cancel: {
        text: '取消',
        handler() {
        }
      },
      confirm: {
        text: '完成',
        handler() {

        }
      }
    },
  }
  export default {
    props: ['type', 'formdata'],
    data() {
      return data[this.type || 'passengerList']
    },
    ready() {
      console.log(this.type, 'type', data[this.type])
    },
    methods: {

      back() {
        this.cancel.handler.call(this);
      },
      confirmHandler() {
        this.confirm.handler.call(this);
      }

    }

  }
</script>
