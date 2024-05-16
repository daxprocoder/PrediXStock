import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, CircularProgress, Alert } from '@mui/material';
import {StockList} from '../components/StockList';
import { fetchData } from '../components/Fetchdata';  // Adjust the path as necessary

const predefinedSymbols = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA'];

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const Stocks = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStocksData = async () => {
      setLoading(true);
      setError(null);

      const detailedStocks = [];
      let hasError = false;

      for (const symbol of predefinedSymbols) {
        try {
          const priceData = await fetchData(symbol);
          if (priceData && priceData['Time Series (5min)']) {
            const latestTimestamp = Object.keys(priceData['Time Series (5min)'])[0];
            const latestData = priceData['Time Series (5min)'][latestTimestamp];
            const open = latestData['1. open'];
            const high = latestData['2. high'];
            const low = latestData['3. low'];
            const close = latestData['4. close'];
            const volume = latestData['5. volume'];

            detailedStocks.push({
              symbol,
              open,
              high,
              low,
              close,
              volume
            });
          } else {
            hasError = true;
            break;
          }
        } catch (error) {
          console.error('Error fetching stock data for symbol:', symbol, error);
          setError('Error fetching stock data. Please try again later.');
          hasError = true;
          break;
        }
        await delay(1000); // Delay each request by 1 second to avoid rate limiting
      }

      if (!hasError) {
        setStocks(detailedStocks);
      }
      setLoading(false);
    };

    fetchStocksData();
  }, []);

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Finance Stocks
        </Typography>
      </Box>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <StockList stocks={stocks} />
      )}
    </Container>
  );
};
