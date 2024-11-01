// Header.js
import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import './Header.css';

function Header() {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  return (
    <div className='header'>
      <button
        className={`theme-toggle-button ${theme === 'turqoise' ? 'orange' : 'turqoise'}`}
        onClick={handleToggleTheme}
      >
        Change Theme
      </button>      
    </div>
  );
}

export default Header;
