const express = require("express")
const router = express.Router()
const inscriptionCtrl = require("../controler/controlerInscription")
const mailCtrl = require("../middlware/mail-confirm-inscription")

router.post("/paiement",inscriptionCtrl.checkPlace, inscriptionCtrl.paiementCarte)
router.post("/new-inscription", inscriptionCtrl.checkPlace, inscriptionCtrl.inscription, mailCtrl.sendMail)

module.exports = router
