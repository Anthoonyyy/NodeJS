// ajouter (importer) le module Express
const express = require('express');

// créer une application
const app = express();

// définir une route vers la page d'accueil (la racine du site)
app.get('/',function(requete,reponse){
   reponse.render('accueil.ejs');
});

// définir une route vers la page d'accueil (la racine du site)
app.get('/contact',function(requete,reponse){
   reponse.render('contact.ejs');
});

// Définir une route dynamique (dans laquelle je transmets un paramètre)
app.get('/page=:numero',function(requete,reponse){
    // je récupère la valeur de mon paramètre passé dans l'URL
     let numeroPage = requete.params.numero;


     // Vérification que la valeur transmise est acceptable
     //NB: je suppose que les numéros de page vont de 1 à 10
     // Si oui, j'affiche, si non, j'indique une erreur
     
     if( (Number.isInteger(Number(numeroPage))) && (numeroPage>0) && (numeroPage<=10) ){
        
       reponse.render('page.ejs',{num:numeroPage});

     }else{
        reponse.status(404).render('404.ejs',{msg:"Ce numéro de page n'est pas valide"});
     }


});

// définir une "page" gérant l'erreur 404
app.use(function(requete,reponse,next){
    reponse.status(404).render('404.ejs',{msg:"La page demandée n'existe pas"});
});

app.listen(8080);       // le serveur web écoute sur le port 8080
console.log("Express est démarré et attend vos requêtes...");