const express = require('express')
const router = express.Router()

router.get('/list.html', function (req, res, next) {
  res.send('<h1>张三</h1><br /><h1>张1</h1><br /><h1>张2</h1><br />')
})

module.exports = router