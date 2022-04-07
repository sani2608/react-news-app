import React from 'react'
import './NewsCard.css'

const NewsCard = () => {
  return (
    <div className='news-container'>
      <div className='first-section'>
        <div className='headline'>
          Leap Finance raises $55 million to help Indian students study abroad,
          plans international expansion Hundreds of thousands of teenagers and young
        </div>
        <div className='author'>Manish Singh  2021-09-08 5:34 PM</div>
        <div>
          Hundreds of thousands of teenagers and young adults get on flights each
          year from India to a foreign land to
          pursue higher education. Upon landing, they face myriad challenges.
          One big one: They dont have a local credit history,
          so they cant avail a range
        </div>
      </div>
      <div className='second-section'>
        <img
          src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
          className='image'
          alt="headerImage" />
      </div>
    </div>
  )
}

export default NewsCard