const express = require('express');

const app = express();

// Définition du middleware
const middleware = function(req,resp,next){
    console.log("Middleware, la requête est  : " +  req.url);
    next();
};

// Utilisation du middleware
app.use(middleware);


app.get('/', function (requete,reponse){
    console.log("Requete reçue");
    reponse.send("<h1>Hello World : middlewares</h1>");

});

app.listen(8080, function(){
    console.log("Express : serveur en attente...");
});