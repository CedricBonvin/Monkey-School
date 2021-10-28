
const Event = require("../model/modelEvent")

exports.getPlaceRestante = (req,res) => {
    Event.find({ clef : "Noel"})
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err))
    
}