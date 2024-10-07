var express = require('express');
var router = express.Router();

// Contrôleur des messages
const messages = require("../controllers/message.controller");

console.log('On passe dans routes/messages.js');

                // Lire les messages

// Afficher tous les messages sous forme d'un tableau (admin)
router.get('/', messages.readAll);

// Afficher tous les messages sous forme de liste (utilisateur)

router.get('/list', messages.list);

// Lire un seul message selon son id
router.get('/read/:id', messages.readById);

                // Création d'un message

// Afficher le formulaire d'ajout pour définir le message
router.get('/newmsg', messages.newmsg);

// Sauvegarder dans la DB le nouveau message

router.post('/create', messages.create);

// Mettre à jour un message
// afficher le formulaire avec les données existantes
router.get('/edit/:id', messages.updateById);

// Mise à jour dans la DB
router.post('/update/:id', messages.update);

                // Supprimer un message

//Affiche les données existantes attendre confirmation avant la suppression
router.get('/confirm/:id', messages.deleteById);

// Supprimer dans la DB après confirmation
router.post('/delete/:id', messages.delete);

module.exports = router;