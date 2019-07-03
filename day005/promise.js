const fs = require('fs')

const p1 = new Promise((resolve, reject) => {
  fs.readFile('./file1.txt', (err, data) => {
    if (err) {
      reject('Not Found')
    } else {
      resolve(data)
    }
  })
})

let imgPromise = function (path) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = resolve
    img.onerror = reject
    img.src = path
  })
}