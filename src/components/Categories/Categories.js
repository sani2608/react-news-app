import React from 'react'
import './Categories.css';

const categorieList = ["business", "entertainment", "health", "technology", "science", "sports", "technology"];
const Categories = () => {
  return (
    <div className='categories'>
        {
          categorieList.map((category, index) => {
            return <button
              className='category-name-button'
              key={index}
              onClick={() => { console.log('I was clicked', index) }}>
              {category}
            </button>
          })
      }
    </div>
  )
}

export default Categories;