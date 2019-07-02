let http = require('http')

http.createServer(function (request, response) {
  response.writeHead(200,{"Content-Type": "text/html; charset=utf-8"})
  response.write('<h1>hahaha</h1>')
}).listen(8001, function () {
  console.log("Server Start")
})