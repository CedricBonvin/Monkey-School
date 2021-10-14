

 const Regulier = require("../model/modelCoursRegulier")
 const Inititation = require("../model/modelCoursInititation")


exports.newInscription = (req, res ) => {

    for (let i = 0; i <req.body.length; i++){
        let cours = req.body[i]

        // REGULIER
        if (cours.typeCours === "regulier"){
             registerBDD(req, res, Regulier, cours, i)
        } 

        // INITIATION
        else if (cours.typeCours === "initiation"){
            registerBDD(req , res, Inititation, cours, i)
        }
    }    
} 

exports.allCours = (req, res) => {
    console.log(req.body)

    if (req.body){
        Regulier.find(req.body)
        .then(response => res.status(200).json(response))
    }else 
        Regulier.find()
        .then(response => res.status(200).json(response))

}

// *****************************
// ********* FUNCTION **********
// *****************************

// enregistrer BDD
function registerBDD(req, res, ModelUse, cours, i){
    let lastIndex = req.body.length -1
    let newEleve = new ModelUse({
        ...cours
    })
    newEleve.save()
    .then(() => console.log("objet enregistré"))
    .catch( error => res.status(500).json( { message : "impossible d'enregistré l'élève dans la base de donnée", err : error } ))

    // envoie la *** REPONSE *** au dernier index
    if (req.body[lastIndex] === req.body[i]){
        let cours = req.body[i]
        let newEleve = new ModelUse({
            ...cours
        })
        newEleve.save()
        .then(() => res.status(200).json({message : "les élèves ont à bien été enregistré...!"})) 
        .catch(() => res.status(500).json( {message : "Impossible d'enregistré le dernier élève...!"} ))
    }
 }


    
