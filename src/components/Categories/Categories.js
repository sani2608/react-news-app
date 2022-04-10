import React from 'react'
import './Categories.css';

const Categories = ({ categorieList, handleCategoryClick }) => {
  return (
    <div className='categories'>
        {
          categorieList.map((category, index) => {
            return <button
              className='category-name-button'
              key={index}
              onClick={() => { handleCategoryClick(index) }}>
              {category}
            </button>
          })
      }
    </div>
  )
}

export default Categories;