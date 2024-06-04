const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');

//Routes to the Hotels
router.get('/hotel', hotelController.getAllHotels);
router.get('/hotels/:id', hotelController.getHotel);
router.get('/hotels', hotelController.createHotel);

module.exports = router;