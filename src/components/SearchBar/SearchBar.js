import React from 'react'
import './SearchBar.css'



const SearchBar = () => {
  const onInputChange = (value) => { console.log(value) };
  return (
    <div className="search-container">
      <input
        onChange={(e) => {
          onInputChange(e.target.value);
        }}
        type="search"
        placeholder="searh pokedex"
      />
    </div>
  )
}

export default SearchBar