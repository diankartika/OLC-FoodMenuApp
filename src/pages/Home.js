import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeList from '../components/RecipeList';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch recipes from the API when the component mounts
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&apiKey=YOUR_API_KEY`);
        setRecipes(response.data.results);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };
    
    fetchRecipes();
  }, [searchQuery]);

  return (
    <div>
      <h2>Favorites</h2>
      <input 
        type="text" 
        placeholder="Search recipes" 
        onChange={(e) => setSearchQuery(e.target.value)} 
      />
      <button onClick={() => setSearchQuery(searchQuery)}>Search</button>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default Home;
