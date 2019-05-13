/**
 * 异步文件写入
 *    打开文件
 *      fs.open(path, flags[, mode], callback)
 *    写入文件
 *      fs.write(fd, string[, ], callback)
 *    保存退出编辑文件
 *      fs.close(fd, callback)
 *
 */

let fs = require('fs')

fs.open("hello.txt", "w", function (err, fd) {
  if (!err) {
    fs.write(fd, "异步写入的内容", function (err) {
      if (!err) {
        fs.close(fd, function (err) {
          if (!err) {
            console.log("文件关闭")
          }
        })
      } else {
        console.log(err)
      }
    })
  } else {
    console.log(err)
  }
})