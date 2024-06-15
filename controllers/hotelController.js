const express = require('express');
const router = express.Router();
const { getHotels } = require('../models/hotelModel');

router.post('/search', async (req, res) => {
    const location = req.body.location;
    console.log(`Searching for hotels in: ${location}`); // logs the search location
    const hotels = await getHotels(location);
    console.log(hotels); // logs the hotels
    res.json(hotels);
});

module.exports = router;