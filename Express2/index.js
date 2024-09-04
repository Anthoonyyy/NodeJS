// ajouter (importer) le module Express
const express = require('express');

// créer une application
const app = express();

// définir une route vers la page d'accueil (la racine du site)
app.get('/',function(requete,reponse){
    // définir l'entête HTTP avec son type MIME
    reponse.setHeader('Content-Type','text/plain');
    // définir le texte à afficher
    reponse.write("Hello World : Express, vous êtes sur la page d'accueil");
    // signifier la fin de la réponse pour qu'elle soit envoyée
    reponse.end();
});

// définir une route vers la page d'accueil (la racine du site)
app.get('/contact',function(requete,reponse){
    // définir l'entête HTTP avec son type MIME
    reponse.setHeader('Content-Type','text/plain');
    // définir le texte à afficher
    reponse.write("Ceci est la page de contacts");
    // signifier la fin de la réponse pour qu'elle soit envoyée
    reponse.end();
});

// Définir une route dynamique (dans laquelle je transmets un paramètre)
app.get('/page=:numero',function(requete,reponse){
    // je récupère la valeur de mon paramètre passé dans l'URL
     let numeroPage = requete.params.numero;

     // définir l'entête HTTP avec son type MIME
     reponse.setHeader('Content-Type','text/plain');

     // Vérification que la valeur transmise est acceptable
     //NB: je suppose que les numéros de page vont de 1 à 10
     // Si oui, j'affiche, si non, j'indique une erreur
     
     if( (Number.isInteger(Number(numeroPage))) && (numeroPage>0) && (numeroPage<=10) ){
        
        // définir le texte à afficher
        reponse.write(`Ceci est la page numéro ${numeroPage}`);
        // signifier la fin de la réponse pour qu'elle soit envoyée
        reponse.end();

     }else{
        reponse.status(404).send("Le numéro transmis n'est pas valide !");
     }


});

// définir une "page" gérant l'erreur 404
app.use(function(requete,reponse,next){
    reponse.setHeader('Content-Type','text/plain');
    reponse.status(404).send('Page introuvable !');
});

app.listen(8080);       // le serveur web écoute sur le port 8080
console.log("Express est démarré et attend vos requêtes...");