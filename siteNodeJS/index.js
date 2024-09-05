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

app.listen(8080);
console.log("En attente de la requête..");