const axios = require('axios');

const getHotels = async (location) => {
    const apiKey = 'GOOGLE PLACES API KEY';
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=hotels+in+${location}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        return response.data.results;
    }   catch (error) {
        console.error(error);
        return [];
    }
};

module.exports = {getHotels };