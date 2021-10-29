
const Regulier = require("../model/modelRegulier")
const Events = require("../model/modelEvent")
const mongoose = require("mongoose")
const { deleteOne } = require("../model/modelEvent")

// ! pour l'envoie du mail activer next() et désactiver la réponse...!
exports.inscription =  (req,res,next) => {
    
    for (let item of req.body){
        // REGULIER 
        if (item.infoCours.typeCours ==='regulier'){
            let key = ""
            item.infoCours.nomCours === "Mini-Spider" ? key = "Mini-Spider" : null
            item.infoCours.nomCours === "Gecko" ? key = "Gecko" : null
            item.infoCours.nomCours === "Monkey" ? key = "Monkey" : null

            Regulier.updateOne(
                {clef : key},
                {  
                    $push: { participants: item },
                },     
            )
            .catch(err => console.log(err))     
        }

        // EVENT 
        if (item.infoCours.typeCours ==='Event'){        
            for (let date of item.infoCours.dateChoisie){ 
                Events.updateOne(
                    { clef : item.infoCours.nomCours,  dateTypeDate : date },
                    {   
                        $inc : { nbr_participants : +1},
                        $push : { participants : item},                      
                    },
                    // {$set : { nbr_participants : 201}},
                    {upsert : true}
                )
                .then(() => console.log("Le cours à bien été updater ou créer"))
                .catch(err => res.status(500).json(err))
             }  
        }
    }
    // ! attention a changer pour envoyer le mail...
   // next()
     res.status(200).json({ message : "ok pour la route inscription..."})  
   
}