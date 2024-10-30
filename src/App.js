import React, { createContext, useState, useEffect } from 'react';
import './App.css';
import SearchCard from './components/SearchCard';
import ContextComponent from './ContextComponent';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('#f76301');
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  
  const handleToggleTheme = () => {
    setTheme(theme === '#f76301' ? 'dark' : '#f76301');
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

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <button onClick={handleToggleTheme}>Change Theme</button>
        
        <h1 className="App-header">Favorites</h1>

        <SearchCard />
        <div className="favorites">
          {favorites.map(favRecipe => (
            <div className="recipe-gallery" key={favRecipe.id}>
              <img src={favRecipe.image} alt={favRecipe.title} />
              <h3>{favRecipe.title}</h3>
              <button onClick={() => removeFromFavorites(favRecipe)}>Remove from Favorites</button>
            </div>
          ))}
        </div>
        <ContextComponent />
        
        {recipes.length > 0 && (
          <div className="gallery">
            {recipes.map((recipe) => (
              <div className="recipe-gallery" key={recipe.id}>
                {recipe.image && <img src={recipe.image} alt={recipe.title} />}
                <h3>{recipe.title}</h3>
                <button onClick={() => addToFavorites(recipe)}>Add to Favorites</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
