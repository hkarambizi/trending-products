import React, {useState, useEffect } from 'react'
import { FaSearch }from 'react-icons/fa'
import '../App.scss';

const SearchBar = ({}) => {

    const [term, setTerm] = useState('');

    return(
        <div className="search-container">
          <div className="search-group">
            <FaSearch className="search-icon left"></FaSearch>
            <input
              type="text"
              className="search"
              placeholder="Search"
            />
          </div>
        </div>
    )
}

export default SearchBar;
