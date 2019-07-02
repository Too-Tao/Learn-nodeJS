let fs = require('fs')

let p1 = new Promise(function (resolve, reject) {
  fs.readFile('./file1.txt', function (err, data) {
    if (err) {
      reject('没有读取到文件1')
    } else {
      resolve(data.toString())
    }
  })
})

let p2 = new Promise(function (resolve, reject) {
  fs.readFile('./file3.txt', function (err, data) {
    if (err) {
      reject('没有读取到文件2')
    } else {
      resolve(data.toString())
    }
  })
})

Promise.all([p1, p2]).then(function (datas) {
  console.log(datas)
}, function (errs) {
  console.log(errs)
})