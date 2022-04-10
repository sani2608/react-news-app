import React, { useEffect, useState, useCallback } from 'react'
import NewsContainer from '../NewsContainer/NewsContainer';
import SearchBar from '../SearchBar/SearchBar';
import Categories from '../Categories/Categories';
import './App.css';
import axios from "axios";
import { API_KEY } from '../../constants/Constant';

import { TECHNOLOGY, ENTERTAINMENT, BUSINESS, HEALTH, SCIENCE, SPORTS, SAMPLE_NEWS } from '../../constants/News';






const categorieList = ["technology", "entertainment", "business", "health", "science", "sports"];


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

  const getData = async (index) => {
    // const SERVICE_URL = `https://newsapi.org/v2/top-headlines?country=in&category=${categorieList[index]}&apiKey=${API_KEY}`;
    // const response = await axios.get(SERVICE_URL);
    // setNewsList(response.data.articles);

    // setNewsList(category);
    switch (index) {
      case 0:
        setNewsList(TECHNOLOGY);
        break;
      case 1:
        setNewsList(ENTERTAINMENT);
        break;
      case 2:
        setNewsList(BUSINESS);
        break;
      case 3:
        setNewsList(SAMPLE_NEWS);
        break;
      case 4:
        setNewsList(SCIENCE);
        break;
      case 5:
        setNewsList(SPORTS);
        break;
      default: console.log('invalid category');
        console.log('news list', newsList);
    }
  };

  useEffect(() => {
    // getData();
    setNewsList(TECHNOLOGY);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCategoryClick = (index) => {


    getData(index);
    setIsActive(index);
  };

  const onSearch = async (value) => {
    console.log('GETTING DATA');
    // const SERVICE_URL = `https://newsapi.org/v2/everything?q=${value}&apiKey=${API_KEY}`;
    // const response = await axios.get(SERVICE_URL);
    // setNewsList(response.data.articles);
    setNewsList(SAMPLE_NEWS);
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