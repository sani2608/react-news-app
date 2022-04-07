import React from 'react'
import './NewsContainer.css'
// import { Paper } from '@mui/material';
import NewsCard from '../NewsCard/NewsCard';

const NewsContainer = () => {
  return (
    <div className='news-card' onClick={() => console.log('i was clicked')}>
      <NewsCard />
    </div>
  )
}

export default NewsContainer;



// <Paper
// elevation={0}
// style={{
//   margin: '1%',
//   border: "1px solid pink",
// }}>
// <NewsCard/>
// </Paper>