// App.js
import React, { createContext, useState, useEffect } from 'react';
import './App.css';
import SearchCard from './components/SearchCard';
import SearchFavorite from './components/SearchFavorite';
import ContextComponent from './context/ContextComponent';
import Favorites from './components/Favorites';
import Gallery from './components/Gallery';
import Header from './components/Header';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light'); // Use 'light' as the default theme
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [favoritesInputValue, setFavoritesInputValue] = useState('');

  const themeStyles = {
    light: {
      backgroundColor: '#FDF0E0',
      color: '#333333',
    },
    dark: {
      backgroundColor: '#333333',
      color: '#ffffff',
    },
  };

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
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
    <ThemeContext.Provider value={{ theme, handleToggleTheme, themeStyles }}>
      <div className="App" style={themeStyles[theme]}>
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
