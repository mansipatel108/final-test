var express = require('express');
var router = express.Router();

/* GET home/landing page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET people page. */
router.get('/people', function(req, res, next) {
  res.render('people', { title: 'Express' });
});

/* GET cotact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});


module.exports = router;
