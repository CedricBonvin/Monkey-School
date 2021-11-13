
exports.getQuery =  (req,res) => {

    let ModelUse = null
    req.body.typeCours === 'Event' ? ModelUse = require("../model/modelEvent") : null
    req.body.typeCours === 'regulier' ? ModelUse = require("../model/modelRegulier") : null

    let query = {
        clef : req.body.nomCours
    }
    req.body.nomCours === "null" ? query = undefined : null
    
    ModelUse.find(query)
    .then(response => res.status(200).json(response))
    .catch(error => res.status(500).json(error))
 }