let express = require('express')
let router = express.Router()
let mongoose = require('mongoose')

let Schema = mongoose.Schema

mongoose.connect("mongodb://127.0.0.1:27017/app", { useNewUrlParser: true }, function (err) {
  if (err) {
    throw err
  } else {
    console.log('数据库连接成功')
  }
})

let personSchema = new Schema({
  name: String,
  sex: String,
  age: Number
})

let personModel = mongoose.model('person', personSchema, 'person')
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' })
  // const { id } = req.query

  // personModel.findById(id).exec(function (err, data) {
  //   data.remove(function (err) {
  //     if (!err) {
  //       console.log('数据删除成功')
  //     }
  //   })
  // })
  res.render('index', { title: 'hhh'})
})

// router.post('/login', function (req, res, next) {
//   let username = req.body.username
//   let password = req.body.password
//   res.send('username:' + username + ',password:' + password)
// })

module.exports = router
