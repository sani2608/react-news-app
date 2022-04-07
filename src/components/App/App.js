// import React from 'react'
import React, { useEffect, useState } from 'react'
import NewsContainer from '../NewsContainer/NewsContainer';
import SearchBar from '../SearchBar/SearchBar';
import Categories from '../Categories/Categories';
import './App.css';
import { apiKey } from '../../constants/Constant';

const App = () => {
  const [newsList, setNewsList] = useState({});
  useEffect(() => {
    const serviceUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;
    const fetchNews = async () => {
      try {
        const response = await fetch(serviceUrl);
        const json = await response.json();
        setNewsList(json.articles);
        console.log(newsList);
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchNews();
  });

  return (
    <div className="parent">
      <div className="App">
        <div>
          <div className='news-title'>
            News Today
          </div>
          <Categories />
          <div>
            <SearchBar />
          </div>
          <NewsContainer />
          <NewsContainer />
          <NewsContainer />
          <NewsContainer />
          <NewsContainer />
          <NewsContainer />
          <NewsContainer />
          <NewsContainer />
          <NewsContainer />
          <NewsContainer />
          <NewsContainer />
          <NewsContainer />
          <NewsContainer />
          <NewsContainer />
          <NewsContainer />
          <NewsContainer />
          <NewsContainer />
          <NewsContainer />
          <NewsContainer />
          <NewsContainer />
          <NewsContainer />
          <NewsContainer />
          <NewsContainer />
          <NewsContainer />
          <NewsContainer />
          <NewsContainer />
          <NewsContainer />
          <NewsContainer />
          <NewsContainer />
        </div>
      </div>
    </div>
  )
}

export default App;




// <AppBar position="static">
//           <Toolbar
//             variant="dense"
//               sx={{ justifyContent: "center" }}>
//             <Typography
//               variant="h6"
//               color="inherit"
//               component="div"
//               align="center">
//               News App
//             </Typography>
//           </Toolbar>
//         </AppBar>