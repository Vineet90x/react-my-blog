import React, { useState, useRef, useEffect } from 'react';
import "../styles/Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-left">
          <Link to="/">Subscribe</Link>
        </div>
        <div className="nav-center">
        <Link to="/">
          <h1>Large</h1>
          </Link>
        </div>
        <div className="nav-right">
          <Link to="/">
            <i className="fas fa-search fa-lg"></i>
          </Link>
          <Link to="/signup" className="sign-up">Sign up</Link>
          <button className="hamburger" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
        <Link to="/">World</Link>
        <Link to="/">U.S.</Link>
        <Link to="/">Technology</Link>
        <Link to="/">Design</Link>
        <Link to="/">Culture</Link>
        <Link to="/">Business</Link>
        <Link to="/">Politics</Link>
        <Link to="/">Opinion</Link>
        <Link to="/">Science</Link>
        <Link to="/">Health</Link>
        <Link to="/">Style</Link>
        <Link to="/">Travel</Link>
      </div>
    </>
  );
};

export default Navbar;