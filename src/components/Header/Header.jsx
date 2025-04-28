import React, { useState } from 'react';
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='HeaderDiv'>
      <div className="icon">
        <a href="/">SHEFO</a>
      </div>
      <div className="burger" onClick={toggleMenu}>
        ☰
      </div>
      <div className={`navbar ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Work">Work</a></li>
          <li><a href="/Blog">Blog</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;