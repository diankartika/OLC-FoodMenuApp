import React from 'react';

const Header = ({ theme, handleToggleTheme }) => {
  return (
    <header>
      <button className="search" onClick={handleToggleTheme}>Change Theme</button>
    </header>
  );
};

export default Header;