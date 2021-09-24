const mongoose = require("mongoose");


const MessageSchema = mongoose.Schema({


    adresse: { type : String, required : true},
    ageCours: { type : Array, required : true},
    ageEleve: { type : Number, required : true},
    mail: { type : String, required : true},
    nomCours: { type : String, required : true},
    nomEleve: { type : String, required : true},
    npa: { type : String, required : true},
    phone: { type : String, required : true},
    prenom: { type : String, required : true},

})



module.exports = mongoose.model("inscription",MessageSchema)