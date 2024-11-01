import { useContext, useState } from "react";
import './SearchCard.css';
import { ThemeContext } from '../App';

const SearchFavorite = ({ inputValue, handleInputChange }) => {
  const { theme } = useContext(ThemeContext);
  const [searchResult, setSearchResult] = useState("");

  const isDisabled = !inputValue; 

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchResult(inputValue); 
  };

  return (
    <form className="SearchCard" onSubmit={handleSubmit}>
      <input
        className="input-col"
        type="text"
        onChange={handleInputChange}
        value={inputValue}
        placeholder="Search recipes"
        size="30"
      />
      <button className={`search ${theme === 'turqoise' ? 'orange' : 'turqoise'} ${isDisabled ? 'disabled' : ''}`} type='submit' disabled={isDisabled}>Search</button>
      </form>
  );
};

export default SearchFavorite;