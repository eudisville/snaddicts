import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css'

const SearchBar = () => {
    return (
        <div className='searchbar'>
            <FontAwesomeIcon icon={faSearch} className='search-icon' />
        </div>
    )
}

export default SearchBar