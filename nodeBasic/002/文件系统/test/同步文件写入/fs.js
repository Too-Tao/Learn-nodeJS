let fs = require('fs')

let fd = fs.openSync("demo.txt", 'w')

fs.writeSync(fd, "测试写入文件", 4)

fs.closeSync(fd)