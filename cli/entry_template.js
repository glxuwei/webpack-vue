module.exports =  `
import {Name} from './{name}.vue';

window.QV = ((qv, undefined) => {

  qv.create{Name} = (options = {}) => {
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
        throw new Error('create{Name}的参数el必须为字符串');
      }
    }

    return new Vue({
      el: options.el,
      data: {
        options: options.data
      },
      template: '<div><{name} :options="options"></{name}></div>',
      components: {
        {Name}
      }
    });

  }
  return qv;
})(window.QV || {})
`;



