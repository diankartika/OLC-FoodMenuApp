import { useContext } from "react";
import './SearchCard.css';
import { ThemeContext } from '../App';

const SearchFavorite = ({ inputValue, handleInputChange }) => {
  const { theme } = useContext(ThemeContext);

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
      <button className={`search ${theme === 'turqoise' ? 'orange' : 'turqoise'} ${isDisabled ? 'disabled' : ''}`} type='submit' disabled={isDisabled}>Search</button>
      </form>
  );
};

export default SearchFavorite;