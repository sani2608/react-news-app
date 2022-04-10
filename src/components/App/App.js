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

// const SERVICE_URL = `https://newsapi.org/v2/`;
// top-headlines?country=us&category=business&apiKey=${API_KEY}
// axios.defaults.baseURL = SERVICE_URL
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const SERVICE_URL = `/top-headlines?country=in&category=technology&apiKey=${API_KEY}`;

// const fetchNews = async () => {

//   fetch(SERVICE_URL).then(
//     response => response.json()).then(data => {
//       console.log('SUCCESS:', data);
//       // setNewsList(data.articles);
//       return data;
//     });
// };

/** categories
https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0da5b3f275b64cc6a28c733cc27deea9
https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=0da5b3f275b64cc6a28c733cc27deea9
https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=0da5b3f275b64cc6a28c733cc27deea9
https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=0da5b3f275b64cc6a28c733cc27deea9
https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=0da5b3f275b64cc6a28c733cc27deea9
https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=0da5b3f275b64cc6a28c733cc27deea9

*/

const App = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(SERVICE_URL);
      setNewsList(response.data.articles); 
      console.log('news list', newsList);
    };
    getData();
  }, []);

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
          {
            newsList.map((news, index) => {
              return <NewsContainer key={index} news={news} />
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