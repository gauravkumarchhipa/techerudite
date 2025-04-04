import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__container">
        <img src={logo} alt="Gecko Accountancy" className="navbar__logo" />

        <nav className={`navbar__nav ${isMobileMenuOpen ? "is-open" : ""}`}>
          <ul>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#aboutus">About us</a>
            </li>
            <li>
              <a href="#blog">Blogs</a>
            </li>
            <li>
              <a href="#cashstudy">Case Studies</a>
            </li>
            <button className="navbar__cta">CONTACT US</button>
          </ul>
        </nav>

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
