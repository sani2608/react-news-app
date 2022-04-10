import React from 'react'
import './Category.css'

const Category = ({ categorieList, handleCategoryClick, isIndexActive }) => {
  return (
    <>
      {
        categorieList.map((category, index) => {
          return <button
            className={
              isIndexActive === index ? 'category-name-button-active' : 'category-name-button'
            }
            key={index}
            onClick={() => {
              handleCategoryClick(index);
            }}>
            {category}
          </button>
        })
      }
    </>
  )
}

export default Category;