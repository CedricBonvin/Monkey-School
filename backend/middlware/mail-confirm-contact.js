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

   

    // Message object
    const messageFrom = "testdemalade@adf.com"
    const messageTo = req.body.mail

    let mailToClient = {
        from: messageFrom,
        to: messageTo,
        subject: "Demande de renseignement",
        template : "contact-confirm-client",
        context: {          
                nom : req.body.nom,                   
                prenom: req.body.prenom,                   
                message : req.body.message,                      
        },
        attachments: [{           
            filename: 'monkey-logo.jpeg',
            path: __dirname +'/images-mail/monkey-logo.jpeg',
            cid: 'monkey-logo',
        },
        {
            filename: 'monkey-logo.jpeg',
            path: __dirname +'/images-mail/monkey-logo.jpeg',
            content: 'le super logo',
            contentType: 'text/plain' 
        }
    ],
        
    };

    let mailToMe = {
        from: messageFrom,
        to: "monkeystyle.school@gmail.com",
        subject: "Demande de renseignement",
        template : "contact-confirm-to-me",
        context: {          
                nom : req.body.nom,                   
                prenom: req.body.prenom,                   
                message : req.body.message,                      
            },
        attachments: [{
                filename: 'monkey-logo.jpeg',
                path: __dirname +'/images-mail/monkey-logo.jpeg',
                cid: 'monkey-logo',
            },
            {
                filename: 'monkey-logo.jpeg',
                path: __dirname +'/images-mail/monkey-logo.jpeg',
                content: 'le super logo',
                contentType: 'text/plain' 
            }
        ],
       
    };
    try {
          // envoie du mail
        transporter.sendMail(mailToMe, (err, info) => {
            if (err) {
                console.log('Error occurred. ' + err.message);
                res.status(500).json({ message : "impossible d'envoyer m'envoyer le mail de confimation..!", error : err})
            } else{
                console.log("mail envoyé" + info)               
                transporter.sendMail(mailToClient, (err, info) => {
                    if (err) {
                        console.log('Error occurred. ' + err.message);
                        res.status(500).json( {mesage : "impossible d'envoyer le mail au client", error : err})
                    } else{
                        console.log("mail envoyé" + info)
                        res.status(200).json("les mails ont été envoyé avec succès")
                    }                
                })
            } 
        })
    } catch (error) {
         res.status(500).json(error)
    }  
}