import React from 'react'
import './SearchForm.scss'
const SearchForm = () => {
  return (
    <div className="search-bar">
      <input className='input-bar' type="text" placeholder='search here...'/>
      <button type='submit' className="search-btn">search</button>
    </div>
  )
}

export default SearchForm