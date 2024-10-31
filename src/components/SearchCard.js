import './SearchCard.css';
import React from 'react';

const SearchCard = ({ inputValue, handleInputChange }) => {
  const isDisabled = !inputValue; 

  return (
    <form className="SearchCard">
      <input
        className="input-col"
        type="text"
        onChange={handleInputChange}
        value={inputValue}
        placeholder="Search recipes"
        size="30"
      />
      <button className={`search ${isDisabled ? 'disabled' : ''}`} type='submit'  disabled={isDisabled}>Search</button>
    </form>
  );
};

export default SearchCard;