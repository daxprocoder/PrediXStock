import axios from 'axios';

const fetchData = async (symbol) => {
  const options = {
    method: 'GET',
    url: 'https://alpha-vantage.p.rapidapi.com/query',
    params: {
      interval: '5min',
      function: 'TIME_SERIES_INTRADAY',
      symbol: symbol,
      datatype: 'json',
      outputsize: 'compact'
    },
    headers: {
      'X-RapidAPI-Key': '283ccf52dbmsh2e7fc1927836a73p14ed12jsndb66c0eea525',
      'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { fetchData };
