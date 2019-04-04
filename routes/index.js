var express = require('express');
var router = express.Router();
// var db = require('../db.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', {
  //   title: 'Home',
  //   name: 'Ismet',
  //   blogs: db, 
  //   header: "car_fanatic_blog"
  // });
  res.render('index', { title: 'Express' });
});

module.exports = router;
