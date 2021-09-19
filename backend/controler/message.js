const Message = require("../model/modelMessage")

exports.postMessage =  (req,res) => {
    const obj = new Message ({
        ...req.body
    })
    obj.save()
    .then(response => res.json(response))
}

exports.getMessage =  (req,res) => {
    let obj = new Message( {
        name : "emery",
        age : "29"
    })
    obj.save()
    .then(response=> res.json(response))
}

exports.testMessage = (req,res) => {
    res.status(200).json({ message : "Je crois que sa marche...! " })
}