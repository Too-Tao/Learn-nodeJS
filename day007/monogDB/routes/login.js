var express = require('express')
var router = express.Router()

router.post('/', function (req, res, next) {
  let username = req.body.username
  let password = req.body.password
  res.send('username:' + username + ',password:' + password)
})

module.exports = router
