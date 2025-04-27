
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex space-x-8">
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/artists" className="nav-link">ARTISTS</Link>
          <Link to="/music" className="nav-link">MUSIC</Link>
          <Link to="/about" className="nav-link">ABOUT</Link>
          <Link to="/contact" className="nav-link">CONTACT</Link>
        </div>
        <div className="text-gold">@thunbzzrr</div>
      </div>
    </nav>
  );
};

export default Navbar;
