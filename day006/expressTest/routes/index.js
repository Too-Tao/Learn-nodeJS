var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/content.html', function (req, res, next) {
  const id = req.query.id
  res.send('获取到的ID:' + id)
})

router.post('/login.html', function (req, res, next) {
  const username = req.body.username
  const password = req.body.password
  res.send('传的用户名是：' + username + ',传的密码是：' + password)
})

module.exports = router;
