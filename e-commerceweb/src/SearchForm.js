import React from 'react';

function SearchForm(){
  return (
    <form className="search-form">
      <input className="search-text" type="search" />
      <input className='submit' type="submit" value="Search" />
    </form>
  );
}

export default SearchForm