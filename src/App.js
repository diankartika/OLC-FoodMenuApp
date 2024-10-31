import React, { createContext, useState, useEffect } from 'react';
import './App.css';
import SearchCard from './components/SearchCard';
import SearchFavorite from './components/SearchFavorite';
import ContextComponent from './ContextComponent';
import Favorites from './components/Favorites';
import Gallery from './components/Gallery';
import Header from './components/Header'

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('#fa6400');
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [favoritesInputValue, setFavoritesInputValue] = useState(''); // New state for filtering favorites

  const handleToggleTheme = () => {
    setTheme(theme === '#f76301' ? 'dark' : '#f76301');
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  const handleFavoritesInputChange = (e) => {
    setFavoritesInputValue(e.target.value.toLowerCase());
  };

  useEffect(() => {
    fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=6ed5b6ff75f84bdc83a577c296d0b96d")
      .then(response => {
        if (!response.ok) {
          throw new Error("Error fetching the recipes");
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setRecipes(data.results);
      })
      .catch(err => {
        console.error(err.message);
      });
  }, []);

  const addToFavorites = (recipe) => {
    setFavorites([...favorites, recipe]);
    setRecipes(recipes.filter(item => item.id !== recipe.id));
  };

  const removeFromFavorites = (recipe) => {
    setFavorites(favorites.filter(item => item.id !== recipe.id));
    setRecipes([...recipes, recipe]);
  };

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(inputValue)
  );

  const filteredFavorites = favorites.filter(recipe =>
    recipe.title.toLowerCase().includes(favoritesInputValue)
  );

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <Header theme={theme} handleToggleTheme={handleToggleTheme} />
        
        <h1 className="App-header">Favorites</h1>

        {favorites.length > 0 && (
          <>
            <SearchFavorite inputValue={favoritesInputValue} handleInputChange={handleFavoritesInputChange} />
            <Favorites favorites={filteredFavorites} removeFromFavorites={removeFromFavorites} />
          </>
        )}

        <ContextComponent />

        <SearchCard inputValue={inputValue} handleInputChange={handleInputChange} />
        {recipes.length > 0 && (
          <Gallery recipes={filteredRecipes} addToFavorites={addToFavorites} />
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
