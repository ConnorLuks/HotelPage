const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const hotelRoutes = require('./routes/hotelRoutes');
const db = require('./models');

const app = express();

//SET view to Express
app.set('view.engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes 
app.use('/', hotelRoutes);

// Start the Server and Sync to the Database
db.sequelize.sync().then(() => {
 app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
 });
});