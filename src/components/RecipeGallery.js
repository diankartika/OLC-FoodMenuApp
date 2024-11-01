// Gallery.js
import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import './Gallery.css';

function Gallery({ recipes, addToFavorites }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className='content'>
      <div className="gallery">
      {recipes.map(recipe => (
        <div className="recipe-gallery" key={recipe.id}>
          <div className='recipe-image'>
            {recipe.image && <img src={recipe.image} alt={recipe.title} />}
          </div>
          <div className="recipe-title">
            <h3 className={ theme === 'turqoise' ? 'h3-orange' : 'h3-turqoise' }>{recipe.title}</h3>
          </div>
          <div>
            <button className={ theme === 'turqoise' ? 'orange' : 'turqoise'} onClick={() => addToFavorites(recipe) }>Add to Favorites</button>
          </div>  
        </div>
      ))}
    </div>
    </div>
  );
}

export default Gallery;
