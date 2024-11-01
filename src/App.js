import React, { createContext, useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Gallery from './components/RecipeGallery';
import Favorites from './components/RecipeFavorites';
import SearchCard from './components/SearchCard';
import SearchFavorite from './components/SearchFavorite';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('turqoise');
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [favoritesInputValue, setFavoritesInputValue] = useState('');

  useEffect(() => {
    fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=19d778171ab448a8ae980e15c891f54d")
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

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  const handleFavoritesInputChange = (e) => {
    setFavoritesInputValue(e.target.value.toLowerCase());
  };

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

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--background-color',
      theme === 'turqoise' ? '#12333A' : '#FEB300'
    );
  }, [theme]);

  const themeStyles = {
    orange: {
      backgroundColor: '#FEB300',
      color: '#12333A',
    },
    turqoise: {
      backgroundColor: '#12333A',
      color: '#FA6400',
    },
  };

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'turqoise' ? 'orange' : 'turqoise'));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme, themeStyles }}>
      <div className="App" style={themeStyles[theme]}>
        <Header theme={theme} handleToggleTheme={handleToggleTheme} />

        <h1 className={ theme === 'turqoise' ? 'h1-turqoise' : 'h1-orange' }>Favorites</h1>

        {favorites.length > 0 && (
        <>
          <SearchFavorite inputValue={favoritesInputValue} handleInputChange={handleFavoritesInputChange} />
          <Favorites favorites={filteredFavorites} removeFromFavorites={removeFromFavorites} />
        </>
      )}

      {recipes.length > 0 && (
        <>
          <SearchCard inputValue={inputValue} handleInputChange={handleInputChange}  />
          <Gallery recipes={filteredRecipes} addToFavorites={addToFavorites}  />
        </>
    )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
