const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = expres();
const PORT = process.env.PORT || 3000;

// Middle Ware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// Views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Controlles
const hotelController = require('./controllers/hotelController');
app.use('/', hotelController);

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});