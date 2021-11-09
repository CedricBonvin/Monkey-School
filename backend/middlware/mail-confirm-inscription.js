const hbs = require("nodemailer-express-handlebars")
const nodemailer = require("nodemailer")


exports.sendMail = (req,res) => {
    sendMail(req, res)
}


function sendMail(req, res){
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
    // Message client
    const messageFrom = "testdemalade@adf.com"
    const messageTo = req.body[0].paiement.mail

    let mailToClient = {
        from: messageFrom,
        to: messageTo,
        subject: "Monkey-School inscription",
        template : "inscription-confirm-client",
        context: {          
                item : req.body,  
                nomClient : req.body[0].paiement.nom,                                                  
                prenomClient : req.body[0].paiement.prenom,
                totalPrice : req.body[0].paiement.totalAPaye                                                
        },
        attachments: [
            // {           
            //     filename: 'monkey-logo.jpeg',
            //     path: __dirname +'/images-mail/monkey-logo.jpeg',
            //     cid: 'monkey-logo',
            // },
        ],
    };
    // INJECTION DES ATTACHEMENTS
    for ( let item of req.body){        
        if (item.infoCours.nomCours === "Mini-Spider"){
            let attach = {
                filename: 'Mini-Spider_2020_2021.pdf',
                path: __dirname +'/images-mail/Mini-Spider_2020_2021.pdf',
                content: 'Date cours Mini-Spider',
                contentType: 'text/plain' 
            }
            mailToClient.attachments.push(attach)
        }
        if (item.infoCours.nomCours === "Gecko"){
            let attach = {
                filename: 'Gecko_2020_2021.pdf',
                path: __dirname +'/images-mail/Gecko_2020_2021.pdf',
                content: 'Date cours Gecko',
                contentType: 'text/plain' 
            }
            mailToClient.attachments.push(attach)
        }
        if (item.infoCours.nomCours === "Monkey"){
            let attach = {
                filename: 'Monkey_2020_2021.pdf',
                path: __dirname +'/images-mail/Monkey_2020_2021.pdf',
                content: 'Date cours Monkey',
                contentType: 'text/plain' 
            }
            mailToClient.attachments.push(attach)
        }
        if (item.infoCours.nomCours === "Big-Monkey"){
            let attach = {
                filename: 'date-Big-Monkey.pdf',
                path: __dirname +'/images-mail/date-Big-Monkey.pdf',
                content: 'Date cours Big-Monkey',
                contentType: 'text/plain' 
            }
            mailToClient.attachments.push(attach)
        }
    }
    // MAIL TO ME
    // let mailToMe = {
    //     from: messageFrom,
    //     to: "cedric.bonv@gmail.com",
    //     subject: "Demande de renseignement",
    //     template : "contact-confirm-to-me",
    //     context: {          
    //             nom : req.body.nom,                   
    //             prenom: req.body.prenom,                   
    //             message : req.body.message,                      
    //         },
    //     attachments: [{
    //             filename: 'monkey-logo.jpeg',
    //             path: __dirname +'/images-mail/monkey-logo.jpeg',
    //             cid: 'monkey-logo',
    //         },
    //         {
    //             filename: 'monkey-logo.jpeg',
    //             path: __dirname +'/images-mail/monkey-logo.jpeg',
    //             content: 'le super logo',
    //             contentType: 'text/plain' 
    //         }
    //     ],    
    // };
    try {
          // envoie du mail
          transporter.sendMail(mailToClient, (err, info) => {
            if (err) {
                console.log('Error occurred. ' + err.message);
                res.status(500).json( {mesage : "impossible d'envoyer le mail au client", error : err})
                // return process.exit(1);
            } else{
                console.log("mail envoyé" + info)
                res.status(200).json("les mails ont été envoyé avec succès")
            }                
        })
    } catch (error) {
         res.status(500).json(error)
    }  
}