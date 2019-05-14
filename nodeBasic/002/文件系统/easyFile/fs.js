let fs = require('fs')

//简单异步写入
// fs.writeFile("demo.txt", "通过writeFile写入的信息", { flag: "a" }, function (err) {
//   if (!err) {
//     console.log("写入成功")
//   }
// })

//简单同步写入
fs.writeFileSync("demo1.txt", "通过writeFileSync同步写入的信息")