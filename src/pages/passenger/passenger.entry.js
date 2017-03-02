

// 每次构建 CLI 自动生成，切勿修改（修改后，构建时也将重写此文件）。

import Passenger from './passenger.vue';

window.QV = ((qv, undefined) => {

  qv.createPassenger = ({el = '', data} = {}) => {

    const appendCustomElement = el => {
      const propertiesMapping = {
        '#': 'id',
        '.': 'className',
      }
      const elementProperty = propertiesMapping(el[0]) || 'id';
      const customElement = document.createElement('div');
      customElement[elementProperty] = el.slice(1);
      document.body.appendChild(customElement);
    }
    if (!(document.querySelector(el) instanceof HTMLElement)) {
      if (typeof el === 'string') {
        appendCustomElement(el);
      } else {
        throw new Error('createPassenger的参数el必须为字符串');
      }
    }
    return new Vue({
      el,
      data,
      template: '<div><passenger :name="name"></passenger></div>',
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
    name: 'zs'
  }
});





