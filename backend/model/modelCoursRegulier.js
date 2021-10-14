const mongoose = require("mongoose");


const MessageSchema = mongoose.Schema({

    typeCours : { type : String, required : true},
    nomCours :  { type : String, required : true},
    nomEleve :  { type : String, required : true},
    prenomEleve :  { type : String, required : true},
    adresseEleve :  { type : String, required : true},
    ageEleve :  { type : Number, required : true},
    mail :  { type : String, required : true},
    npa :  { type : Number, required : true},
    phone :  { type : String, required : true},
    prixCours : { type : Number, required : true},
    prixPaye : { type : Number, required : true},
    rabais : { type : Number, required : false},
    ville :  { type : String, required : true},
    remarque : { type : String, required : false}

})

module.exports = mongoose.model("inscription-Regulier",MessageSchema)