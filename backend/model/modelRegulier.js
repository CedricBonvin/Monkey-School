const mongoose = require("mongoose");


const RegulierSchema = mongoose.Schema({
    clef : {type : String},
    nbr_participants : { type: Number, default : 0},
    participants : { type : Array},
})



module.exports = mongoose.model("reguliers",RegulierSchema)