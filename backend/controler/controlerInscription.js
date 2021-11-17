
const stripe = require('stripe')(`${process.env.STRIPE_KEY}`);

const Regulier = require("../model/modelRegulier")
const Events = require("../model/modelEvent")
const mongoose = require("mongoose")

// ! pour l'envoie du mail activer next() et désactiver la réponse...!
exports.inscription =  (req,res,next) => {
    for (let item of req.body){
        // REGULIER 
        if (item.infoCours.typeCours ==='regulier'){
            let newEleve = {
                _id : mongoose.Types.ObjectId(),
                ...item,
            } 
            Regulier.updateOne(
                {clef : item.infoCours.nomCours},
                {  
                    $inc : {nbr_participants : +1},
                    $push: { participants: newEleve },
                },
                {upsert : true}     
            )
            .then(() => console.log("cours régulier updater ou créer"))
            .catch(err => console.log(err))     
        }

        // EVENT 
        if (item.infoCours.typeCours ==='Event'){  
                 
            for (let date of item.infoCours.dateChoisie){ 
                let newEleve = {
                    _id : mongoose.Types.ObjectId(),
                    ...item,
                } 
                Events.updateOne(
                    { clef : item.infoCours.nomCours,  dateTypeDate : date },
                    {   
                        $inc : { nbr_participants : +1},
                        $push : { participants : newEleve},                      
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
    next()
   // res.status(200).json({ message : "ok pour la route inscription..."})  
   
}

exports.checkPlace = (req,res,next) => {
    let isEvent = false
    let tabDatesDesire = []

    // création d'un tableau avec toutes les datesChoisie de tous les items du panier ( si cours Event )
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
            // comparaison des dates voulu avec le nombres de place restante des cours de la BDD
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

exports.paiementCarte = async (req,res,next) => {
    let tabLine = []
    for (let item of req.body){
        // Price
        let price = null
        item.infoCours.rabais === 0 ? price = item.infoCours.prixNormal : null
        item.infoCours.rabais === 10 ? price = item.infoCours.prixRabais_10 : null
        item.infoCours.rabais === 15 ? price = item.infoCours.prixRabais_15 : null
        item.infoCours.rabais === 20? price = item.infoCours.prixRabais_20 : null

        //quantite
        let quant = 1
        item.infoCours.dateChoisie ? quant = item.infoCours.dateChoisie.length : null

        const line = {
            price : price,
            quantity : quant
        }
        tabLine.push(line)
    }
    const session = await stripe.checkout.sessions.create({
        line_items: tabLine,
        payment_method_types: [
          'card',
        ],
        mode: 'payment',
        success_url: `${process.env.HOST}/succes`,
        cancel_url: `${process.env.HOST}/paiement`,
        // success_url: `${process.env.HOST}/success.html`,
        // cancel_url: `${YOUR_DOMAIN}/cancel.html`,
        });

    res.status(200).json({
        message : "ok pour la route paiemnt par carte", 
        session : session.url,
        payment_intent : session.payment_intent
    })
}