const serveurHTTP = require('./httpServeur.js');

console.log('Démarrage du serveur..');
serveurHTTP.demarrer();

console.log("Faisons un test..");
serveurHTTP.tester();
