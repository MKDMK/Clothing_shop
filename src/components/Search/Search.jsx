import React from 'react';
import useStyles from './styles';


const SearchBar = () => (
    <form action="/" method="get">
        <input
            type="text"
            id="header-search"
            placeholder="Search Products"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;