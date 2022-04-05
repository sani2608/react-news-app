import React from 'react'
import './NewsContainer.css'
import { Paper } from '@mui/material';
import SearchBar from '../SearchBar/SearchBar'

const NewsContainer = () => {
  return (
    <div className='news-container'>
      <Paper
        elevation={0}
        style={{
          padding: 8,
          border: "1px solid black"
        }}>
        <SearchBar />
      </Paper>
    </div>
  )
}

export default NewsContainer