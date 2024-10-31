// Favorites.js
import React from 'react';
import './gallerybutton.css';

function Favorites({ favorites, removeFromFavorites }) {
  return (
    <div className='content'>
      <div className="favorites">
        {favorites.map(favRecipe => (
          <div className="recipe-gallery" key={favRecipe.id}>
            <div className='recipe-image'>
              <img src={favRecipe.image} alt={favRecipe.title} />
            </div>
            <div className='recipe-title'>
              <h3>{favRecipe.title}</h3>
            </div>
            <div className="filter">
              <button onClick={() => removeFromFavorites(favRecipe)}>Remove from Favorites</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
