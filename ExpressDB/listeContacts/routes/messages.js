var express = require('express');
var router = express.Router();

//Importation de la connexion DB via le modèle
const Message = require('../models/message.model');

/* Toutes les routes décrites dans ce fichier correspondent à des URL commençant par : localhost:3000/messages/... */

// route pour l'URL : localhost:3000/messages/
router.get('/', function (req, res){
    console.log("GET /messages/ pour lire tous les messages");
    res.send('Ici, on aura la lecture des messages');
});

// route pour l'URL : localhost:3000/messages/create

router.post('/create', function (req, res){
    console.log("POST /create pour écrire un message");
    let titrePage = "Formulaire reçu";
    let lenom = req.body.nom;
    let lemessage = req.body.msg;

    // Valider le contenu du formulaire
    if ((!req.body)||(lenom="")||(lemessage="")) {
        console.log("Le formulaire est incomplet !");
        res.redirect('/contact');   // retour vers le formulaire
    } else {
        console.log(req.body);

        // créer un message avec son modèle
        const unMsg = new Message({
            nom: req.body.nom,
            msg: req.body.msg
        });

        // utiliser la méthode create du modèle Message
        Message.create(unMsg, function(err,data){
            if (err) {
                res.status(500).send({
                    message: "Erreur pendant la création du message"
                });
            } else {
                res.render('confirmation.ejs',{title:titrePage,nom:unMsg.nom,msg:unMsg.msg});
            }
        });
    }
});

module.exports = router;