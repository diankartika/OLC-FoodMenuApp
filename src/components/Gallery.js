// Gallery.js
import React, { useContext } from 'react';
import './gallerybutton.css';
import { ThemeContext } from '../App';

function Gallery({ recipes, addToFavorites }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="content">
      <div className="gallery">
        {recipes.map(recipe => (
          <div
            className="recipe-gallery"
            key={recipe.id}
            style={{
              backgroundColor: theme === 'dark' ? '#444' : '#fff',
              border: theme === 'dark' ? '2px solid #777' : '2px solid #fa6400'
            }}
          >
            <div className="recipe-image">
              {recipe.image && <img src={recipe.image} alt={recipe.title} />}
            </div>
            <div className="recipe-title">
              <h3>{recipe.title}</h3>
            </div>
            <div className="filter">
              <button
                onClick={() => addToFavorites(recipe)}
                style={{
                  backgroundColor: theme === 'dark' ? '#777' : '#fa6400',
                  color: theme === 'dark' ? '#fff' : '#000'
                }}
              >
                Add to Favorites
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
