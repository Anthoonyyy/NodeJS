var express = require('express');
var router = express.Router();

// Importation du contrôleur des utilisateurs
let users = require('../controllers/user.controller.js');

// Aller sur la page d'accueil de l'utilisateur connecté
router.get('/', users.home);

// Affichage du formulaire d'enregistrement
router.get('/register',users.registerform);

// Sauvegarder les données d'enregistrement du nouvel user
router.post('/register', users.register);

// Affichage du formulaire de connexion
router.get('/login', users.loginform);

// Connexion de l'user
router.post('/login', users.login);

// Déconnexion de l'user
router.get('/logout', users.logout);




module.exports = router;
