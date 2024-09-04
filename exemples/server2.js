/*On importe le module standard http qui va gérer ce protocole */
const http = require('http');
// On crée un serveur web qui va écouter sur le port 8888
// On ajoute une fonction anonyme qui va générer une réponse à notre requête
http.createServer(function(request, response){
    // Création de l'entête qui renvoie notamment le code http
    // ainsi que le type de contenu
    response.writeHead(200, {"Content-type":"text/plain"});
    // texte de la réponse avec un message
    response.write('Hello World2 NodeJS !\n')
    response.write("Voici mon message");
    // Fin de la réponse
    response.end();
}).listen(8888);