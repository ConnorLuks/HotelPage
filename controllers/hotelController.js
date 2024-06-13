const express = require('express');
const router = express.Router();
const { getHotels } = require('../models/hotelModel');

router.get('/', (req, res) => {
    res.render('index', { hotels: null});
});

router.post('/search', async (req, res) => {
    const location = req.body.location;
    const hotels = await getHotels(location);
    res.render('index', { hotels });
});

module.exports = router;