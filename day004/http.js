/*
*  http模块
*/
const http = require('http')

http.get('http://www.baidu.com', function (res) {
  console.log(res)
})