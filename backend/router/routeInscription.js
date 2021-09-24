const express = require("express")
const router = express.Router()
const inscriptionCtrl = require("../controler/controlerInscription")

router.post("/new-inscription", inscriptionCtrl.newInscription)


module.exports = router