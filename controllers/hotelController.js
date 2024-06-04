const db = require('../models');
const Hotel = db.Hotel;

//GET List the hotels
exports.getAllHotels = async (req, res) => {
    const hotels = await Hotel.findAll();
    res.render('index', { hotels });
};

//GET find the id for a specific hotel
exports.getHotel = async (req, res) => {
    const hotel = await Hotel.findByPk(req.params.id);
    res.render('hotel', { hotel });
};

//POST makes a new location for hotels
exports.creatHotel = async (req, res) => {
    const { name, location, description, rating } = req.body;
    await Hotel.create({ name, location, description, rating });
    res.redirect('/hotels');
};