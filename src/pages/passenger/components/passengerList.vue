<template>
  <div>
      <passenger-header type="passengerList"></passenger-header>
      <a @click.prevent="addPassenger">新增乘机人</a>
      <ul>
        <li class="qv-list">aa</li>
      </ul>
  </div>
</template>
<script>
  import PassengerHeader from './passengerHeader'
  export default {
    data() {
      return {
      }
    },
    ready() {
    },
    components: {
      PassengerHeader
    },
    methods: {
      addPassenger() {
        this.$emit('changeview', 'AddForm');
      },
    }
  }
</script>
