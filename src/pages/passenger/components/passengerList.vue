<template>
  <div>
      <passenger-header type="passengerList"></passenger-header>
      <a @click.prevent="addPassenger" class="addbtn qbd">新增乘机人</a>
      <ul class="qvlist">
        <li class="item" :class="{on: item.selected}" v-for="item of passengers" @click="select(item)" >
          <div class="content">
            <p class="info"><span class="name">{{item.englishName}}</span>{{item.totName}}</p>
            <p class="idtype" v-for="cert of item.certs">
              <span class="idname">
                {{cert.name}}
              </span>
              {{cert.number}}
            </p>
          </div>
        </li>
      </ul>
  </div>
</template>
<script>
  import PassengerHeader from './passengerHeader'
  import $ from 'zepto'

  const closestByTag = (dom, tag) => {
    while(dom.tagName.toLowerCase() !== tag) {
      dom = dom.parentNode;
    }
    return dom;
  }


  export default {
    data() {
      return {
        passengers: [],
      }
    },
    created(){
      $.get('/h5/flight/user/passengerlist?isInter=0', v => {
        v.passengers.forEach(item => {
          item.selected = false;
        });
        this.passengers = v.passengers;
      })
    },
    components: {
      PassengerHeader
    },
    methods: {
      addPassenger() {
        this.$emit('changeview', 'AddForm');
      },
      select(item) {
        item.selected = !item.selected;
      }
    }
  }
</script>
