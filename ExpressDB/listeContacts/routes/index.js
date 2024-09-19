var express = require('express');
var router = express.Router();

const root = require('../controllers/root.controller.js');

/*GET homepage*/
router.get('/',root.home);

/*GET homepage*/
router.get('/contact', root.contact);

module.exports = router;
