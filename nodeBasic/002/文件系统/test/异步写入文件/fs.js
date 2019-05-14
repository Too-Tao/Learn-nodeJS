let fs = require('fs')

fs.open('demo.txt', 'w', function (err, fd) {
  if (!err) {
    fs.write(fd, '哈哈哈', function (err, fd) {
      if (!err) {
        fs.close(fd, function (err) {
          if (!err) {
            console.log('文件关闭')
          }
        })
      } else {
        return err
      }
    })
  } else {
    return err
  }
})