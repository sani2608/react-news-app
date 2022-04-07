import React from 'react'
import './Categories.css';

const categorieList = ["TechCrunch", "Business", "wall streeet journal", "technology", "climate", "daily soaps"];
const Categories = () => {
  return (
    <div>
      <div className='categories'>
        {
          categorieList.map((category, index) => {
            return <button className='category-name-button' key={index}>{category}</button>
          })
        }
      </div>
    </div>

  )
}

export default Categories;