var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'Express'
      ,layout:'layout' //模版引用，模版默认是继承Layout。如果其他模版需要修改此处
  });
});

module.exports = router;
