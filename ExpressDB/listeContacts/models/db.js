const mysql = require("mysql");
// Fichier de configuration de la DB
const dbConfig = require("../config/dbconfig");

// Création de la connexion à la DB
// 1. Chargement de la configuration pour la connexion
const connection = mysql.createConnection({
    host : dbConfig.DB_HOST,
    user : dbConfig.DB_USER,
    password : dbConfig.DB_PASSWORD,
    database : dbConfig.DB_NAME,
    port : dbConfig.DB_PORT
});

//2. Ouverture de la connexion
connection.connect(function (error){
    if (error) throw error; //Si erreur de connexion, ça s'arrête ici
    console.log("Connecté avec succès à la base de données ! ");
});

//On exporte pour les autres modules, la connexion à la base de données
module.exports = connection;