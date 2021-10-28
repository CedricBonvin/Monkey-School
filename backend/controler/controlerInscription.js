
const Regulier = require("../model/modelRegulier")
const Events = require("../model/modelEvent")
const mongoose = require("mongoose")


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
           
            console.log(item.infoCours.dateChoisie)
            for (let date of item.infoCours.dateChoisie){
                let key = item.infoCours.nomCours
                let dateChoisie = ""
                // NOEL
                date === '2021-12-23T05:00:00.000Z' ? dateChoisie = "23/12" : null
                date === '2021-12-24T05:00:00.000Z' ? dateChoisie = "24/12" : null
                date === '2021-12-25T05:00:00.000Z' ? dateChoisie = "25/12" : null

                Events.updateOne({ clef : key,  date : dateChoisie },
                    {   
                       $inc : { nbr_participants : +1},
                       $push : { participants : item},                      
                    },     
                )
                .catch(err => console.log(err))                   
            }  
        }
    }
    next()
    // res.status(200).json({ message : "ok pour la route inscription..."})  
   
}