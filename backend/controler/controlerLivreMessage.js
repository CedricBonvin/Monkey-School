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
        res.status(200).json({message : "tout ok pour le post du message."})
    })
    .catch(() => res.status(500).json({message : "comprend pas"}))
}

exports.getMessage =  (req,res) => {
   Message.find()
   .then(response => res.status(200).json(response))
}

exports.testMessage = (req,res) => {
    res.status(200).json({ message : "Je crois que sa marche...! " })
}


// *********************
// SEND EMAIL ***********
// **********************
function sendMail(req){

    
    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
        host: "smtp-relay.gmail.com",
        port: 587,
        secure: false,
        service: "gmail",
        auth: {
            user: "mailtestmonkey@gmail.com",
            pass: process.env.MAIL_PW
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
    const messageFrom = "<testdemalade@adf.com>"
    const messageTo = "monkeystyle.school@gmail.com"

    let message = {
        from: messageFrom,
        to: messageTo,
        subject: "Livre d'or -- nouveau message",
        template : "livre-message",
        context: {          
                nom : req.body.nom,                   
                message : req.body.message,
                date : req.body.date                       
            }
    };

    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log('Error occurred. ' + err.message);
            return process.exit(1);
        } else console.log("mail envoyé" + info)
    })
}

