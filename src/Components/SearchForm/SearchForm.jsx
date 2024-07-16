import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../Context';
import './SearchForm.scss';

const SearchForm = () => {
  return (
    <div className="search">
      <div className="container">
        <div className="search-form-div">
          <form className="search-form">
            <div className="search-form-elements flex flex-sb bg-white">
              <input className="input-bar" type="text" placeholder="search here..." />
              <button type="submit" className="search-btn">search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
