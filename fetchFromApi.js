const axios = require('axios');

async function fetchDataFromApi() {
    try{
        //const response = await axios.get("https://swapi.dev/api/people/1");
        const response = await axios.get("https://extern-api.com/data");
        return response.data;
    } catch (error) {
        console.error('Error fetching data from API:', error);
        throw error;
    }
}

module.exports = { fetchDataFromApi };