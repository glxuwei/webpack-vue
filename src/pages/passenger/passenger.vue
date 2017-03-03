<template>
  <div>
    <component :is="renderview" @changeview="changeView"></component>
  </div>
</template>

<style lang="less" scoped>
  @bgColor: #1ba9ba;
  @fzDark: #333;
  @fzGrey: #666;
  @fzbtn: #1ba9ba;
  @fzError: #ff4500;
  .passenger{

  }
</style>

<script>
import PassengerList from './components/passengerList'
import EditForm from './components/editForm'
import AddForm from './components/addForm'

export default {
  props: ['name'],
	ready(){

	},
	data(){
    return {
      renderview: 'PassengerList'
    }
  },
  computed:{
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
