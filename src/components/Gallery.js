// Gallery.js
import React from 'react';
import './gallerybutton.css';

function Gallery({ recipes, addToFavorites }) {
  return (
    <div className="gallery">
      {recipes.map(recipe => (
        <div className="recipe-gallery" key={recipe.id}>
          <div className='recipe-image'>
            {recipe.image && <img src={recipe.image} alt={recipe.title} />}
          </div>
          <div className='recipe-title'>
            <h3>{recipe.title}</h3>
          </div>
          <div className="filter">
            <button onClick={() => addToFavorites(recipe)}>Add to Favorites</button>
          </div>  
        </div>
      ))}
    </div>
  );
}

export default Gallery;
