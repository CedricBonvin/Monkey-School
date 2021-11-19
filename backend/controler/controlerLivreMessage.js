// const Message = require("../model/modelLivreMessage")
 const Message = require("../model/modelLivreMessage")
const nodemailer = require("nodemailer")
const hbs = require("nodemailer-express-handlebars")

exports.postMessage =  (req,res) => {
    const obj = new Message ({
        ...req.body
    })
    obj.save()   
    .then(()=> {
        sendMail(req)
        res.status(200).json({message : "message enrengistré avec succès...!"})
    })
    .catch( err => res.status(500).json({error : err}))
}

exports.getMessage =  (req,res) => {
   
   Message.find()
   .then(response => res.status(200).json(response))
   .catch(error => res.status(500).json(error))
}



// *********************
// SEND EMAIL ***********
// **********************
function sendMail(req){

    
    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
        // host: "smtp-relay.gmail.com",
         host: "devise.o2switch.net",
        //  port: 465,
        port: 587,
        secure: false,
         service: "o2switch",
        auth: {
            
            user: "info@monkey-school.ch",
            pass: process.env.MAIL_PW
            // pass: process.env.MAIL_PW
            // user: "mailtestmonkey@gmail.com",
            // pass: process.env.MAIL_PW
        },
        debug: false,
        logger: true 
    });
    // POUR LE TEMPLATE
    transporter.use("compile", hbs({
        viewEngine : "express-handlebars",
        viewPath : "mail-template",
        extName: ".hbs"
        })
    )

    // Message object
    const messageFrom = "info@monkey-school.ch"
    const messageTo = "info@monkey-school.ch"

    let message = {
        from: messageFrom,
        to: messageTo,
        subject: "Livre d'or -- nouveau message",
        template : "livre-confirm-to-me",
        context: {          
                nom : req.body.nom,                   
                message : req.body.message,
        },
    };

    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log('Error occurred. ' + err.message);
            return process.exit(1);
        } else console.log("mail envoyé" + info)
    })
}

