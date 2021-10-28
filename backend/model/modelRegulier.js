const mongoose = require("mongoose");


const RegulierSchema = mongoose.Schema({
    clef : {type : String},
    participants : { type : Array},
})



module.exports = mongoose.model("reguliers",RegulierSchema)