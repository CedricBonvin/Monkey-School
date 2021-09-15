const express = require("express")
const router = express.Router();

const testCtrl = require("../controler/test")

router.get("/test", testCtrl.testMessage)

module.exports = router