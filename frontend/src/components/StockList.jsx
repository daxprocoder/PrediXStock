import React from 'react';
import { List, ListItem, ListItemText, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export const StockList = ({ stocks }) => {
  const navigate  = useNavigate();

  // If stocks array is empty, display "No Data" message
  if (stocks.length === 0) {
    return <h1>No Data</h1>;
  }
  return (
    <Paper elevation={3}>
      <List>
        {stocks.map((stock, index) => (
          <ListItem key={index} onClick={
            () => {
              navigate(`https://in.tradingview.com/chart/?symbol=NASDAQ%3${stock.symbol}`);
            }
          } style={{cursor: 'pointer'}
          }>
            <ListItemText style={{display: 'flex',alignItems: 'center',columnGap: '13rem'}}
              primary={`${stock.symbol}`}
              secondary={
                <>
                <div style={{display:"flex",justifyContent:"space-between",width:"150%"}}>
                  <div>Open: {stock.open}</div>
                  <div>High: {stock.high}</div>
                  <div>Low: {stock.low}</div>
                  <div>Close: {stock.close}</div>
                  <div>Volume: {stock.volume}</div>
                </div>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

