const express = require('express');
const router = express.Router();
const { getHotels } = require('../models/hotelModel');

router.post('/search', async (req, res) => {
    const location = req.body.location;
    const hotels = await getHotels(location);
    res.json(hotels);
});

module.exports = router;