/*On importe le module standard http qui va gérer ce protocole */
const http = require('http');
// On crée un serveur web qui va écouter sur le port 8888
// On ajoute une fonction anonyme qui va générer une réponse à notre requête
http.createServer(function(request, response){
    // Création de l'entête qui renvoie notamment le code http
    // ainsi que le type de contenu (ici du html)
    response.writeHead(200, {"Content-type":"text/html; charset=utf-8"});
    // texte de la réponse avec un message
    response.write('<h1> Hello serveur3 NodeJS !</h1>')
    response.write('<p>Voici mon message en html </p>');
    // Fin de la réponse
    response.end();
}).listen(8888);