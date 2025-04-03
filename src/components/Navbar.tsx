import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__container">
        <img src={logo} alt="Gecko Accountancy" className="navbar__logo" />

        <nav className={`navbar__nav ${isMobileMenuOpen ? 'is-open' : ''}`}>
          <ul>
            <li className="active">Services</li>
            <li>About us</li>
            <li>Blogs</li>
            <li>Case Studies</li>
          </ul>
        </nav>

        <button className="navbar__cta">CONTACT US</button>

        <div
          className="navbar__toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
