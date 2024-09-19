// on importe le modèle Message qui contient la connexion
const Message = require('../models/message.model.js');

// on importe le module "moment.js" pour gérer  les dates et heures
const moment = require('moment');

console.log("Je passe dans controllers/message.controller.js");

// Créer et sauver un nouveau message
exports.create = (req, res) => {
    console.log('POST /create pour écrire un message');
    let titrePage = "Formulaire reçu";
    let lenom = req.body.nom;
    let lemessage = req.body.msg;

    // Valider le contenu du formulaire
    if ((!req.body)||(lenom="")||(lemessage=="")) {
        console.log("Le formulaire est incomplet ! ");
        res.redirect('/contact'); // retour vers le formulaire
    } else {
        console.log(req.body);

        // créer un message avec son modèle
        const unMsg = new Message({
            nom: lenom,
            msg: lemessage
        });

        // Utiliser la méthode create du modèle Message
        Message.create(unMsg, function (err,data){
            if (err) {
                res.status(500).send({
                    message: "Erreur pendant la création du message"
                });
            } else {
                res.render('confirmation.ejs', {title:titrePage,nom:unMsg.nom,msg:unMsg.msg});

            }
        });
    }
};

// Lire tous les messages
exports.readAll = (req, res) => {
    console.log('GET /messages/ pour lire tous les messages');
    Message.readAll(function (err,data){
        if (err){
            res.status(500).send({
                message: "Erreur pendant la lecture de tous les messages"
            });
        } else {
            console.log('Data : ',data);
            const titrePage = "Liste des messages";
            moment.locale('fr'); // pour transformer les dates et heures en français
            res.render('listeMessages.ejs',{title:titrePage, donnees:data,moment: moment});
        }
    });
};

