import React from 'react'
import { FaSearch }from 'react-icons/fa'
import '../App.scss';

const SearchBar = ({handleSearch}) => {


    return(
        <div className="search-container">
          <div className="search-group">
            <FaSearch className="search-icon left"></FaSearch>
            <input
              type="text"
              name="search"
              id="search"
              onChange={handleSearch}
              className="search"
              placeholder="Search"
            />
          </div>
        </div>
    )
}

export default SearchBar;
