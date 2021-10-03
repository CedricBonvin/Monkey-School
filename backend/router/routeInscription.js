const express = require("express")
const router = express.Router()
const inscriptionCtrl = require("../controler/controlerInscription")

router.post("/new-inscription", inscriptionCtrl.newInscription)
router.post("/all-cours", inscriptionCtrl.allCours)


module.exports = router