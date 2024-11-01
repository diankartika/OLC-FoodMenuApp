// Favorites.js
import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import './Gallery.css';

function Favorites({ favorites, removeFromFavorites }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className='content'>
      <div className="gallery">
        {favorites.map(favRecipe => (
          <div className="recipe-gallery" key={favRecipe.id}>
            <div className='recipe-image'>
              <img src={favRecipe.image} alt={favRecipe.title} />
            </div>
            <div className='recipe-title'>
              <h3 className={ theme === 'turqoise' ? 'h3-orange' : 'h3-turqoise' }>{favRecipe.title}</h3>
            </div>
            <div>
              <button className={ theme === 'turqoise' ? 'orange' : 'turqoise'} onClick={() => removeFromFavorites(favRecipe)}>Remove from Favorites</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
