var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dat' });
});

router.get('/', function (req, res, next) {
  res.render('index', { ht: 'Hello World' });
});

router.get('/index', function (req, res, next) {
  res.send('hello');
});

router.get('/newuser', function(req, res) {
  res.render('newuser', { title: 'Add New User' });
});


router.get('/list', function(req, res) {
  var db = req.db;
  var collection = db.get('user_collection');
  collection.find({},{},function(e,docs){
    res.render('list', {
      "list" : docs
    });
  });
});



module.exports = router;

