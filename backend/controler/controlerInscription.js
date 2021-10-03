

const { response } = require("express")
const Eleve = require("../model/modelInscription")


exports.newInscription = (req, res ) => {
    
    for (let i in req.body){
        let cours = req.body[i]
        let newEleve = new Eleve({
            ...cours
        })
        newEleve.save()
        .then(() => res.status(200).json({message : "l'élève à bien été enregistré...!"})) 
        .catch(error => res.status(500).json( {error }))
    }    
} 

exports.allCours = (req, res) => {
    console.log(req.body)

    if (req.body){
        Eleve.find(req.body)
        .then(response => res.status(200).json(response))
    }else 
        Eleve.find()
        .then(response => res.status(200).json(response))

}
       

    
