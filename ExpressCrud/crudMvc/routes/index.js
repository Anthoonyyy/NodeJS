var express = require('express');
var router = express.Router();

// Contrôleur root
const root = require("../controllers/root.controller");

console.log("On passe dans routes/index.js");

// Homepage
router.get('/', root.home);

// Afficher le formulaire
router.get('/contact', root.form);

// Afficher les données entrées dans le formulaire
router.post('/traitement', root.traitement);

module.exports = router;
