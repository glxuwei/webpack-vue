<template>
  <section>
    <passenger-header
    type="addForm"
    @changeview="change"
    :formdata="formdata"
    >
    </passenger-header>
    <div>
        <label for="username">姓名</labe>
        <input type="text" v-model="username" name="username" id="username"/>
    </div>
    <div>
        <span>证件类型</span>
        <select v-model="idtype">
            <option>身份证</option>
            <option>护照</option>
            <option>其他</option>
        </select>
    </div>
    <div>
        <label for="idno">证件号码</label>
        <input type="text" id="idno" name="idno" v-model="idno"/>
    </div>
    <div>
        <span>国家区号</span>
        <span></span>
    </div>
    <div>
        <label for="qvp_phoneno">手机号</label>
        <input type="number" name="phoneno" id="qvp_phoneno" v-model="phoneno"/>
    </div>
  </section>
</template>
<script>
  import PassengerHeader from './passengerHeader'
  export default {
    props: ['viewdata'],
    data() {
      return {
        title: '新增乘机人',
        username: '',
        idtype: '',
        idno: '',
        phoneno: ''
      }
    },
    computed:{
      formdata() {
        return {
          username: this.username,
          idtype: this.idtype,
          idno: this.idno,
          phoneno: this.phoneno
        }
      }
    },
    ready() {
      console.log('addForm viewdata ', this.viewdata)
    },
    components: {
      PassengerHeader
    },
    methods: {
      change() {
        this.$emit('changeview', 'PassengerList');
      }
    }
  }
</script>
