/*On importe le module standard http qui va gérer ce protocole */
const Http = require('http');
/*On importe le module standard url, uniquement la classe URL */
const Url = require('url').URL;

function demarrageServeur() {
    const serveur = 'http//localhost';
    const port = 8888;
    var monServeur;



// Fonction de traitement des requêtes
    function requeteRecue(request, response) {
      let laRequete = request.url;
      console.log('La requête est :' + laRequete);

      let urlComplete = new Url(laRequete, serveur + ':' + port);
      // Différentes parties de l'url qui m'intéresse
      let laPageComplete = urlComplete.href;
      let laQueryString = urlComplete.search;
      let leChemin = urlComplete.pathname;
      let lePort = urlComplete.port;
      let leHost = urlComplete.hostname;

      response.writeHead(200, {"Content-type":"text/html; charset=utf-8"});
      response.write(
          `
          <!DOCTYPE html>
          <html lang="fr">
          <head>
          <meta charset="utf-8">
          <title>Une page avec NodeJs</title>
          </head>
    <h1>Lecture de la requête</h1>
    <p>La requete complète est : ${urlComplete}</p>
    <ul>
        <li>La page complète : ${laPageComplete} </li>
        <li>La Query String : ${laQueryString}</li>
        <li>Le chemin : ${leChemin}</li>
        <li>Le port : ${lePort}</li>
        <li>Le hostname : ${leHost}</li>
    </ul>
</html>
          `
      );
      response.end();
    }



    // On crée un serveur web qui va écouter sur le port défini ci dessus
    monServeur = Http.createServer(requeteRecue).listen(port);
    console.log("Démarrage du serveur sur le port" + port);
}

// on exporte la fonction demarrageServeur() et on lui attribue un nom de méthode : demarrer
exports.demarrer = demarrageServeur;

