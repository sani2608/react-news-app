import React from 'react'
import './NewsContainer.css'
import NewsCard from '../NewsCard/NewsCard';

const NewsContainer = ({ news }) => {
  
  const navToNewsPage  = (url) => {
    console.log('I was clicked')
   window.open(url);
  };
  return (
    <div className='news-card' onClick={() => navToNewsPage(news.url)}>
      <NewsCard news={news}/>
    </div>
  )
}

export default NewsContainer;
