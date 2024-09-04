/*On importe le module standard http qui va gérer ce protocole */
const Http = require('http');

function demarrageServeur() {

    const port = 8888;
    var monServeur;

// On crée un serveur web qui va écouter sur le port défini ci dessus
// On ajoute la fonction requeteRecue qui va générer une réponse à notre requete
    monServeur = Http.createServer(requeteRecue).listen(port);
    console.log("Démarrage du serveur sur le port" + port);

// Fonction de traitement des requêtes
    function requeteRecue(request, response) {
        console.log("Requete reçue : " + request.url);
        response.writeHead(200, {"Content-type": "text/html; charset=utf-8"});
        // texte de la réponse avec un message
        response.write('<h1> Hello serveur4 NodeJS !</h1>')
        response.write('<p>Voici mon message en html </p>');
        response.write('<p> la requete reçue est : ' + request.url + '</p>');
        // Fin de la réponse
        response.end();
    }

}
function test(){
    console.log('Ceci est un test');
}

// on exporte la fonction demarrageServeur() et on lui attribue un nom de méthode : demarrer
exports.demarrer = demarrageServeur;

exports.tester = test;