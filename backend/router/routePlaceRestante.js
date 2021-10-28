const express = require("express")
const router = express.Router()
 const placeCtrl = require("../controler/controlerPlaceRestante")

router.get("/check-place-restante", placeCtrl.getPlaceRestante)


module.exports = router