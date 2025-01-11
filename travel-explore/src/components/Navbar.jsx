import React from 'react';
import './Navbar.css';

const Navbar = () => {

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); 
    }
  };

  return (
    <nav className="navbar">
     
      <h1 className="navbar-title">Travel Explorer</h1>
      <div className="navbar-links">
        <a href="#about" onClick={() => handleScroll('about')}>About</a>
        <a href="#home" onClick={() => handleScroll('home')}>Home</a>
        <a href="#contact" onClick={() => handleScroll('contact')}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
