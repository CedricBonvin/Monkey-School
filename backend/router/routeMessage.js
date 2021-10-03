const express = require("express")
const router = express.Router()
const messageCtrl = require("../controler/message")
const sendMailConfirm = require("../middlware/mail-confirm-contact")

router.post("/postMessage", messageCtrl.postMessage, sendMailConfirm.sendMail)


module.exports = router





