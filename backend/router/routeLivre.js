const express = require("express")
const router = express.Router()
const messageCtrl = require("../controler/controlerLivreMessage")

router.post("/post-livre-message", messageCtrl.postMessage)
router.get("/get-livre-message", messageCtrl.getMessage)


module.exports = router