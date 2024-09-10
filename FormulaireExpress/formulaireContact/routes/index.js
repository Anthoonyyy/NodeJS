var express = require('express');
const {urlencoded} = require("express");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('index', { title: 'Express' });
});

//Afficher le formulaire de contact qui enverra les données (contactForm.ejs)

router.get('/contact', function (req,res,next){
    res.render('contactForm',{titre: "Contact"});
});

//Définition du middleware qui va analyser la requête POST
let urlencodedParser = express.urlencoded({extended:false});

// Recevoir les données et afficher la page
router.post('/traitement', urlencodedParser,function (req, res, next){
    let lenom = req.body.nom;
    let lemessage = req.body.msg;

     res.render('traitementForm',{titre: "Formulaire reçu", nom: lenom, msg: lemessage});
});


module.exports = router;
