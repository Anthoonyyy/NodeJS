const express = require('express');
const app = express();


const path = require('path');
app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(requete,reponse){
    reponse.render('accueil.ejs',{title:"Bruxelles - Accueil"});
});

app.get('/geographie',function(requete,reponse){
    reponse.render('geographie.ejs',{title:"Bruxelles - Géographie"});
});

app.get('/histoire',function(requete,reponse){
    reponse.render('histoire.ejs',{title:"Bruxelles - Histoire"});
});


app.get('/culture',function(requete,reponse){
    reponse.render('culture.ejs',{title:"Bruxelles - Culture"});
});

app.get('/galerie',function(requete,reponse){
    reponse.render('galerie.ejs',{title:"Bruxelles - Galerie"});
});

app.get('/contact',function(requete,reponse){
    reponse.render('contact.ejs',{title:"Bruxelles - Contact"});
});

app.get('/liens',function(requete,reponse){
    reponse.render('liens.ejs',{title:"Bruxelles - Liens"});
});

let urlencodedParser = express.urlencoded({extended:false});

app.post('/traitement', urlencodedParser,function (req, res, next){
    let lenom = req.body.nom;
    let leprenom = req.body.prenom;
    let laville = req.body.ville;
    let lemail = req.body.email;
    let lemessage = req.body.msg;

    res.render('traitementForm.ejs',{ nom: lenom, prenom: leprenom,
    ville: laville, email: lemail, msg: lemessage});
});

app.listen(8080);
console.log("En attente de la requête..");