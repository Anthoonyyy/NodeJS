var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*GET homepage */
router.get('/contact', function(req, res, next) {
  res.render('formulaire', { title: 'Express' });
});
module.exports = router;
