const express = require("express")
const router = express.Router()
 const placeCtrl = require("../controler/controlerPlaceRestante")

router.post("/check-place-restante", placeCtrl.getPlaceRestante)


module.exports = router