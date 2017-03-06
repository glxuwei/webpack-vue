<style lang="less">
</style>
<template>
  <div>
    this is home page
  </div>
</template>
<script>

  const myMixin = {
    created() {
      this.hello();
    },
    methods: {
      hello() {
        console.log('hello from mixin');
      }
    }
  };

  const Component = Vue.extend({
    mixins: [myMixin]
  });

  Vue.mixin({
    created() {
      const ab = this.$options.ab;
      if (ab) {
        console.log(ab, '----->>')
      }
    }
  });

  /* const component = new Component(); */

  const test1 = Vue.extend({
    template: '<p>{{test}}</p>',
    data() {
      return {
        test: 'test1111'
      }
    }
  });

  const d1 = document.createElement('div');
  d1.id = 'd1';
  document.body.appendChild(d1);
  const d2 = document.createElement('div');
  d2.id = 'd2';
  document.body.appendChild(d2);

  new test1().$mount('#d1')
  new test1().$mount('#d2')

  export default {
    mixins: [myMixin],
    ab: 'abcde',
    created() {
      this.say();
    },
    methods: {
      say() {
        console.log('hello from self')
      }
    },
    components: {
      /* test1 */
    }
  }

</script>
