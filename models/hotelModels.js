const axios = require('axios');

const getHotels = async (location) => {
    const apiKey = 'AIzaSyCN3TP93F6l75a2qIh9ba7uUGbaLJ1zG3M';
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=hotels+in+${location}&key=${apikey}`;

    try {
        const response = await axios.get(url);
        // check for issues and logs them
        if (response.data.status !== 'OK') {
            console.error('Error fetching data from Google Places API', response.data.status);
            return [];
        }
        return response.data.results;
    }   catch (error) {
        console.error('Error occured during API request:', error.message);
        return [];
    }
};

module.exports = { getHotels };