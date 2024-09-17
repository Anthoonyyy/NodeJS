var express = require('express');
var router = express.Router();

// Définition des routes pour gérer les messages
// Toutes les routes définies dans ce router commencent par l'url : localhost:3000/messages

// Récupération de tous les messages : readAll
// URL => localhost:3000/messages/
router.get('/', function (req, res){
    console.log("GET Tous les messages");
    res.send('Lire tous les messages');
});

//Création d'un message : Create
// URL => localhost:3000/messages/create
router.post('/create', function (req, res){
    console.log("POST Créer un message");
});

module.exports = router;