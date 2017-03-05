/* const Mock = require('mockjs'); */

/* const data = Mock.mock({ */
  /* 'list|1-10': [{ */
    /* 'id|+1': 1, */
    /* // 'name|3-10': 'abc', */
    /* 'type|3': 'ef', */
    /* 'age|20-30': 1, */
    /* 'price|20-30.2-10': 1, */
    /* 'married|1-4': true, */
    /* 'obj|2': { */
      /* type: 1, */
      /* sex: 'male', */
      /* job: 'it' */
    /* }, */
    /* 'children|+1': ['zs', 'ls', 'ww', 'zl'], */
    /* 'name': '@FIRST @LAST', */
    /* 'phone': /(?:139|188|155)\d{8}/ */
  /* }] */
/* }) */

/* console.log(JSON.stringify(data, null, 4)) */
const Mock = require('mockjs');
module.exports = {
    api: '/h5/flight/user/passengerlist',
    response: function (req, res) {
        res.json(
            Mock.mock({
            'errinfo': '',
            flag: true,
            'islogin|1': true,
              'passengers|10-20': [
                {
                  'ageType|0-9': 1,
                  'certs|1-3': [
                    {
                      'name|+1': ['身份证', '护照', '其他'],
                      'cardlssuePlace2Code': '',
                      'number|10000-90000': 1,
                      'numberObj': {

                      }
                    }
                  ],
                  'englishName|1-3': 'AA',
                  'totName|0-1': '成人票'
                }
              ]
            })
        );
    }
}
