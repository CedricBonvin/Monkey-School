
const Regulier = require("../model/modelRegulier")
const Events = require("../model/modelEvent")
const mongoose = require("mongoose")

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

exports.checkPlace = (req,res,next) => {
    let isEvent = false
    let tabDatesDesire = []

    // check si cours Events
    for (let item of req.body){
        if (item.infoCours.typeCours === "Event"){
            isEvent = true
            //injection des dates dans le tableau
            for (let date of item.infoCours.dateChoisie){
                tabDatesDesire.push(date)
            }
        }
    }

    if (isEvent){
        Events.find()
        .then(CoursEvent => {
            // comparaison des dates voulu avec les nombres de place restante
            let valid = true
            for (let coursBdd of CoursEvent){
                let NbrParticipants = coursBdd.nbr_participants
                for (let dateDesire of tabDatesDesire){
                    if (dateDesire === coursBdd.dateTypeDate){
                        NbrParticipants++
                    }
                    if (NbrParticipants > 8){
                        console.log("il n'y a pas asser de place suffisante pour le cours .....")
                        valid = false
                        let date = new Date(dateDesire).toLocaleDateString("fr-FR",{ weekday:"long" ,day:"numeric", month:"long", year:"numeric"} )
                        res.status(500).json({
                            error : "nbrPlaceRestante",
                            messageError : `Désolé mais pour la date du ${date} il ne reste plus que ${8 - coursBdd.nbr_participants} places.`
                        })
                    }
                }
            }
            if (valid){
                next()
            }
        })
        .catch(err =>res.status(500).json({error : err, message : "erreur dans findAll Events"}))
    } else next()
}