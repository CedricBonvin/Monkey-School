

const express = require("express")
const router = express.Router()
const ctrlAdmin = require("../controler/controlerAdmin")

router.post("/recherche", ctrlAdmin.getQuery)


module.exports = router