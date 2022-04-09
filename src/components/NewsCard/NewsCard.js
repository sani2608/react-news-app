import React from 'react'
import './NewsCard.css'

const NewsCard = ({ news }) => {

  return (
    <div className='news-container'>
      <div className='first-section'>
        <div className='headline'>{news.title}</div>

        <div className='author'>
          {
            news.author !== null ? <span className='author-name'><b>author:</b> {news.author}</span> : ''
          }
          <span className='publish-date'><b>published on:</b> {news.publishedAt}</span>
        </div>

        <div> {news.content}<br />  {news.description}
        </div>
      </div>
      <div className='second-section'>
        <img
          src={news.urlToImage}
          className='image'
          alt="headerImage" />
      </div>
    </div>
  )
}

export default NewsCard;