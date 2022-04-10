import React, { useEffect, useState, useCallback } from 'react'
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

  const debounce = (func) => {
    let timer = null;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 3000);
    }
  }

  const getData = async (index = 0) => {
    const SERVICE_URL = `/top-headlines?country=in&category=${categorieList[index]}&apiKey=${API_KEY}`;
    const response = await axios.get(SERVICE_URL);
    setNewsList(response.data.articles);
    console.log('news list', newsList);
  };

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCategoryClick = (index) => { getData(index); setIsActive(index); };

  const onSearch = async (value) => {
    console.log('GETTING DATA');
    const SERVICE_URL = `/everything?q=${value}&apiKey=${API_KEY}`;
    const response = await axios.get(SERVICE_URL);
    setNewsList(response.data.articles);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceSearch = useCallback(debounce(onSearch), []);

  return (
    <div className="parent">
      <div className="App">
        <div>
          <div className='news-title'>
            News Today
          </div>
          <Categories isIndexActive={isIndexActive} categorieList={categorieList} handleCategoryClick={handleCategoryClick} />
          <div>
            <SearchBar onSearch={debounceSearch} />
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