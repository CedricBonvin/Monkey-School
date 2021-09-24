

const Eleve = require("../model/modelInscription")


exports.newInscription = (req, res ) => {
    
    const eleve = new Eleve({
        ...req.body
    })
    console.log("c'est bon ")
    eleve.save()
    .then(() => res.status(200).json({ message : "eleve enregistré..!"}))
    .catch(error => res.status(500).json(error))
}