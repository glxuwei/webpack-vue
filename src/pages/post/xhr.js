export default {
  ajax (type, url, data) {
    const req = new XMLHttpRequest();
    let postData = null;
    let formData = new FormData();
    return new Promise((resolve, reject) => {
      if (!req) {
        reject(new Error('XMLHttpRequest 不存在'));
      }
      type = type.toUpperCase();

      if (data && Object.prototype.toString.call(data) === '[object Object]') {
        let str = '';
        for (var prop in data) {
          if (data.hasOwnProperty(prop)) {
            str = prop + '=' + data[prop] + '&'
            formData.append(prop, data[prop]);
          }
        }
        str = str.substring(0, str.length - 1);
        str = url.indexOf('?') > -1 ? '&' + str : '?' + str;
      }

      if (type === 'GET') {
        formData = null;
        url = url + str;
      } else if (type === 'POST') {
        str = '';
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      } else {
        reject(new Error('只支持get和post请求!'));
      }

      req.open(type, url, true);

      req.onload = () => {
        if (req.status === 200) {
          resolve(req.responseText);
        } else {
          reject(new Error(req.statusText));
        }
      };

      req.onerror = () => {
        reject(new Error(req.statusText));
      };

      req.onabort = () => {
        reject(new Error('中断请求'));
      };

      req.send(postData);
    });
  },
  get () {
    return this.ajax('GET', ...arguments);
  },
  post () {
    return this.ajax('POST', ...arguments);
  }
}

