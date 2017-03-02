<template>
  <component :is="renderview"></component>
</template>

<style lang="less" scoped>

</style>

<script>
import PassengerList from './passengerList'
import EditFrom from './editForm'
import AddForm from './addForm'

export default {
  props: ['name'],
	ready(){

	},
	data(){
    return{
      renderview: 'PassengerList'
    }
  },
  methods:{

  },
  computed:{},
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
