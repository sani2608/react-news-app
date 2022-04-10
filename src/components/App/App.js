/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// import React from 'react'
import React, { useEffect, useState } from 'react'
import NewsContainer from '../NewsContainer/NewsContainer';
import SearchBar from '../SearchBar/SearchBar';
import Categories from '../Categories/Categories';
import './App.css';
import axios from "axios";
import { API_KEY } from '../../constants/Constant';
const categorieList = ["technology", "entertainment", "business", "health", "science", "sports"];

// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const App = () => {
  const [newsList, setNewsList] = useState([]);
  const [isIndexActive, setIsActive] = useState(0);

  const getData = async (index = 0) => {
    const SERVICE_URL = `/top-headlines?country=in&category=${categorieList[index]}&apiKey=${API_KEY}`;
    const response = await axios.get(SERVICE_URL);
    setNewsList(response.data.articles);
    console.log('news list', newsList);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleCategoryClick = (index) => { getData(index); setIsActive(index); };

  return (
    <div className="parent">
      <div className="App">
        <div>
          <div className='news-title'>
            News Today
          </div>
          <Categories isIndexActive={isIndexActive} categorieList={categorieList} handleCategoryClick={handleCategoryClick} />
          <div>
            <SearchBar />
          </div>
          {
            newsList.map((news, index) => {
              return <NewsContainer key={index} news={news} categorieList={categorieList} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App;



// useEffect(() => {
//   const serviceUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;
//   const fetchNews = async () => {
//     try {
//       const response = await fetch(serviceUrl);
//       const json = await response.json();
//       setNewsList(json.articles);
//       console.log(newsList);
//     } catch (error) {
//       console.log("error", error);
//     }
//   }
//   fetchNews();
// },[newsList]);