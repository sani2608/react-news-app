import React from 'react'
import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
  // const onInputChange = (value) => { console.log(value) };
  return (
    <div className="search-container">
      <input
        className="search-input"
        onChange={(e) => {
          if (e.target.value) {
            onSearch(e.target.value);
          }
        }}
        type="search"
        placeholder="searh news"
      />
    </div>
  )
}

export default SearchBar;