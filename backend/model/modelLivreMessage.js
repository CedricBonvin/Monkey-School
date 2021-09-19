const mongoose = require("mongoose");


const MessageSchema = mongoose.Schema({
    nom : { type : String, required : true},
    message : { type : String, required : true},
    date : { type : String, required : true},
})



module.exports = mongoose.model("livre-messages",MessageSchema)