const express = require("express")
const router = express.Router()
const messageCtrl = require("../controler/controlerLivreMessage")

router.post("/postMessage", messageCtrl.postMessage)
router.get("/getMessage", messageCtrl.getMessage)


module.exports = router





