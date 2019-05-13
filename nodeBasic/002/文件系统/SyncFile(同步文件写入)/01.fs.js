/**
 * 同步文件的写入
 *    - 打开文件
 *        fs.openSync(path, flags[, mode])
 *          - path 要打开文件的地址
 *          - flags 打开文件要做的操作类型
 *              r 只读的
 *              w 可写的
 *         返回值：返回表示文件描述符的整数
 *    - 写入文件
 *        - fs.writeSync(fd, string[, position[, encoding]])
 *            - fd 文件的描述符
 *            - string 写入的内容
 *            - position 写入的其实位置
 *              - encoding 默认是 utf-8
 *    - 保存关闭文件
 *        - fs.closeSync(fd)
 */

// 异步文件写入
let fs = require('fs')

let fd = fs.openSync("hello.txt", "w")

fs.writeSync(fd, '写入的内容', 2)

fs.closeSync(fd)