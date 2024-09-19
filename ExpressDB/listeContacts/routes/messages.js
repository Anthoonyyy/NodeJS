var express = require('express');
var router = express.Router();

//Import du controller message
const messages = require('../controllers/message.controller.js');

/* Toutes les routes décrites dans ce fichier correspondent à des URL commençant par : localhost:3000/messages/... */

// route pour l'URL: localhost:3000/messages/
router.get('/', messages.readAll);

// route pour l'URL : localhost:3000/messages/create
router.post('/create', messages.create);

module.exports = router;