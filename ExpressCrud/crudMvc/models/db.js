const mysql = require('mysql');
// Fichier de configuration de la DB
const dbConfig = require("../config/dbconfig");

// Création de la connexion avec la DB
const connection = mysql.createConnection({
    host : dbConfig.DB_HOST,
    user: dbConfig.DB_USER,
    password: dbConfig.DB_PASSWORD,
    database: dbConfig.DB_NAME,
    port: dbConfig.DB_PORT

});

// Ouverture de la connexion
connection.connect(function (error){
    if (error) throw error;
    console.log('Connecté avec succès à la DB');
});

module.exports = connection;