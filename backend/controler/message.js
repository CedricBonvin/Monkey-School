const Message = require("../model/modelMessage")

exports.postMessage =  (req,res,next) => {

    const obj = new Message ({
        ...req.body
    })
    console.log("exécution de controller messag...!")
    obj.save()
    .then( () => next())
    .catch(() => res.status(500).json({ message : "impossiblre d'enregistré le message dans la base de données"}))
}
