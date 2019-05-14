let fs = require('fs')

let ws = fs.createWriteStream("demo.txt")

//通过监听流的open和close时间来监听流的打开和关闭

ws.once("open", function () {
  console.log("打开了流")
})

ws.write("通过可写流保存的信息")
ws.write("通过可写流保存的信息")

ws.end()