import React from 'react'
import Category from '../Category/Category';
import './Categories.css';

const Categories = ({ categorieList, handleCategoryClick, isIndexActive }) => {

  return (
    <div className='categories'>
      <Category isIndexActive={isIndexActive} categorieList={categorieList} handleCategoryClick={handleCategoryClick} />
    </div>
  )
}

export default Categories;