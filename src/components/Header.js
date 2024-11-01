// Header.js
import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import './Header.css';

function Header() {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <button
        className={`theme-toggle-button ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}
        onClick={handleToggleTheme}
      >
        Change Theme To {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
}

export default Header;
