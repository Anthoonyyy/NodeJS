const db = require("./db");
const sql = require("./db");

console.log('On passe dans models/user.model.js');

// Constructeur

const User = function (theuser) {
    this.nom = theuser.nom;
    this.motdepasse = theuser.motdepasse;
    this.email = theuser.email;
};

// Création de l'utilisateur
User.insertUser = (newUser, resultat) => {
    db.query("INSERT INTO users(nom,email,motdepasse) VALUES(?,?,?);", [newUser.nom, newUser.email, newUser.motdepasse], (err,res) =>{
        if (err) {
            console.log("Erreur d'insertion - User insertUser: " + err);
            resultat(err, null);
            return;
        }
        console.log('OK user.insertUser' + res);
        resultat(null,res);
    });
};

// Récupération de l'utilisateur sur base de son id
User.getUserById = (id,resultat) => {
    db.query("SELECT * FROM users WHERE id = ?", id, (err, res) => {
        if(err){
            console.log("Erreur User.getUserById : ", err);
            resultat(err,null);
            return;
        }
        if (res.length) {
            console.log("User.getUserById - user trouvé : ", res[0]);
            resultat(null, res[0]);
            return;
        }
        // Pas de message trouvé avec cet ID
        console.log("Pas d'user avec cet id");
        resultat({type: "ERR_NOT_FOUND"}, null);
    });
};

// Récupération de l'utilisateur sur base de son email

User.getUserByEmail = (email,resultat) => {
    db.query("SELECT * FROM users WHERE email = ?", email, (err, res) => {
        if(err){
            console.log("Erreur User.getUserByEmail : ", err);
            resultat(err,null);
            return;
        }
        if (res.length) {
            console.log("User.getUserByEmail - user trouvé : ", res[0]);
            resultat(null, res[0]);
            return;
        }
        // Pas de message trouvé avec cet email
        console.log("Pas d'user avec cet email");
        resultat({type: "ERR_NOT_FOUND"}, null);
    });
};