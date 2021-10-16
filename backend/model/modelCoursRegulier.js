const mongoose = require("mongoose");


const MessageSchema = mongoose.Schema({

    contact : {
        adresseContact: { type : String, required : true},
        mailContact:{ type : String, required : true},
        nomContact:{ type : String, required : true},
        phoneContact:{ type : String, required : true},
        prenomContact:{ type : String, required : true},
        villeContact:{ type : String, required : true},
    },
    eleve : {
        adresseEleve: { type : String, required : true},
        ageEleve: { type : String, required : true},
        nomEleve: { type : String, required : true},
        npaEleve: { type : String, required : true},
        prenomEleve: { type : String, required : true},
        villeEleve: { type : String, required : true},
        fraterie : { type : Array , default : null},
        remarqueEleve: { type : String, required : false},
    },
    infoCours : {   
        typeCours: { type : String, required : true},
        nomCours: { type : String, required : true},
        prix: { type : Number, required : true},
        prixAPaye: { type : Number, required : true},
        rabais: { type : Number, default : null},
        dateInscription: { type : Date, required : true},
    }
})

module.exports = mongoose.model("inscription-Regulier",MessageSchema)







    // typeCours : { type : String, required : true},
    // nomCours :  { type : String, required : true},
    // nomEleve :  { type : String, required : true},
    // prenomEleve :  { type : String, required : true},
    // adresseEleve :  { type : String, required : true},
    // ageEleve :  { type : Number, required : true},
    // mail :  { type : String, required : true},
    // npa :  { type : Number, required : true},
    // phone :  { type : String, required : true},
    // prixCours : { type : Number, required : true},
    // prixPaye : { type : Number, required : true},
    // rabais : { type : Number, required : false},
    // ville :  { type : String, required : true},
    // remarque : { type : String, required : false}