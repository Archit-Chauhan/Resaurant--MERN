const express = require("express");
const router = express.Router();
const {sendReservation} = require('../controllers/reservation')

router.post('/send',sendReservation);


module.exports = router;