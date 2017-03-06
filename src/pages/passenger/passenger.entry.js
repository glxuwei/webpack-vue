import Passenger from './passenger.vue';

window.QV = ((qv, undefined) => {

  qv.createPassenger = (options = {}) => {
    const el = options.el;
    const appendCustomElement = el => {
      let ext = '';
      let sliceIndex = 1;
      const propertiesMapping = {
        '#': 'id',
        '.': 'className',
      }
      let elementProperty = propertiesMapping(el[0]);
      if (!elementProperty) {
        elementProperty = 'id';
        ext = '#';
        sliceIndex = 0;
      }
      const customElement = document.createElement('div');
      customElement[elementProperty] = el.slice(sliceIndex);
      document.body.appendChild(customElement);
      return ext + el;
    }
    if (!(document.querySelector(el) instanceof HTMLElement)) {
      if (typeof el === 'string') {
        options.el = appendCustomElement(el);
      } else {
        throw new Error('createPassenger的参数el必须为字符串');
      }
    }
    return new Vue({
      el: options.el,
      data: {
        options: options.data
      },
      template: '<div class="qv-component"><passenger :options="options"></passenger></div>',
      components: {
        Passenger
      }
    });

  }
  return qv;
})(window.QV || {})

const vm = QV.createPassenger({
  el: '#js_container',
  data: {
    getPassengers: {
      type: 'get',
      url: '/aa',
      body: {
      }
    }
  }
});




