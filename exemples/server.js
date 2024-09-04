/*On importe le module standard http qui va gérer ce protocole */
const http = require('http');
// On crée un serveur web qui va écouter sur le port 8888
// On ajoute une fonction anonyme qui va générer une réponse à notre requête
http.createServer(function(request, response){
    // Création de l'entête qui renvoie notamment le code http
    response.writeHead(200);
    // Fin de la réponse avec un message
    response.end('Hello World NodeJS !');
}).listen(8888);