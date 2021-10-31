
const Event = require("../model/modelEvent")

exports.getPlaceRestante = (req,res) => {
    Event.find({ clef : req.body.nomCours})  /* ! la c'est de la merde faut récupérer noel autrement pas d'autre cours comme carnaval*/ 
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err))
    
}