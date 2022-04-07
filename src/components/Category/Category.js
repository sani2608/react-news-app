import React from 'react'
import './Category.css'

const categorieList = ["TechCrunch", "Business", "wall streeet journal", "technology", "climate", "daily soaps"];
const Category = () => {
  return (
    <div >
      {
        categorieList.map((category,index) => {
          return <p className='category-name' key={index}>{category}</p>
        })
      }
    </div>
  )
}

export default Category;