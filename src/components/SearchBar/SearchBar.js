import React from 'react'
import './SearchBar.css'



const SearchBar = () => {
  const onInputChange = (value) => { console.log(value) };
  return (
    <div>
      <input
        onChange={(e) => {
          onInputChange(e.target.value);
        }}
        className="search"
        type="search"
        placeholder="searh pokedex"
      />
    </div>
  )
}

export default SearchBar