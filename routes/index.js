var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'services', college: 'Centennial' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home', college: 'Centennial' });
});

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about', college: 'Centennial' });
});

/* GET home page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact', college: 'Centennial' });
});

/* GET home page. */
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'projects', college: 'Centennial' });
});

module.exports = router;
