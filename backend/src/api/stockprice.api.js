import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://alpha-vantage.p.rapidapi.com/query',
    params: {
        interval: '5min',
        function: 'TIME_SERIES_INTRADAY',
        symbol: 'MSFT',
        datatype: 'json',
        outputsize: 'compact' // Corrected parameter name
    },
    headers: {
        'X-RapidAPI-Key': '283ccf52dbmsh2e7fc1927836a73p14ed12jsndb66c0eea525',
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
    }
};

async function fetchData() {
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();
