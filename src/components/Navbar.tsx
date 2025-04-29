
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex space-x-8">
          <Link to="/" className="nav-link">HOME</Link>
          <a 
            href="#artists" 
            className="nav-link cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('artists');
            }}
          >
            ARTISTS
          </a>
          <a 
            href="#music" 
            className="nav-link cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('music');
            }}
          >
            MUSIC
          </a>
          <a 
            href="#about" 
            className="nav-link cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('about');
            }}
          >
            ABOUT
          </a>
          <a 
            href="#contact" 
            className="nav-link cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('contact');
            }}
          >
            CONTACT
          </a>
        </div>
        <div className="text-gold">@thunbzzrr</div>
      </div>
    </nav>
  );
};

export default Navbar;
