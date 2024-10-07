const mysql = require('mysql');
// Paramètres de connexion lus dans le fichier .env
require('dotenv').config();

// Création de la connexion avec la DB
const connection = mysql.createConnection({
    host : process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT

});

// Ouverture de la connexion
connection.connect(function (error){
    if (error) throw error;
    console.log('Connecté avec succès à la DB ' + process.env.DB_NAME);
});

module.exports = connection;