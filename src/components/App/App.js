import React from 'react'
import './App.css';
import { Typography, Paper, Toolbar, AppBar } from '@mui/material';
import NewsContainer from '../NewsContainer/NewsContainer';

const url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-03-05&sortBy=publishedAt&apiKey=a5cf886a8dd84801a01c8b5bd0da1b0d';
const App = () => {
  const fetchNews = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data))
  };
  fetchNews();

  return (
    <div className="App">
      <header>
        <AppBar position="static">
          <Toolbar
            variant="dense"
            sx={{ justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              align="center">
              News App
            </Typography>
          </Toolbar>
        </AppBar>
      </header>

      <div>
        <NewsContainer />
      </div>
    </div>
  )
}

export default App;