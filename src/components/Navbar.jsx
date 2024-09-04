import React, { useState, useRef, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const isTabletOrSmaller = useMediaQuery('(max-width: 768px)');

  const toggleMenu = (event) => {
    event.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const renderDesktopNavbar = () => (
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

  const renderMobileNavbar = () => (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', fontFamily: 'Playfair Display, serif' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleMenu}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Playfair Display, serif' }}>
          Large
        </Typography>
        <Link to="/signup" style={{ color: 'black', textDecoration: 'none', fontFamily: 'Playfair Display, serif' }}>Sign up</Link>
      </Toolbar>
      <Drawer anchor="left" open={isMenuOpen} onClose={closeMenu}>
        <List ref={menuRef} sx={{ fontFamily: 'Playfair Display, serif' }}>
          <ListItem button component={Link} to="/" onClick={closeMenu}>
            <ListItemText primary="World" />
          </ListItem>
          <ListItem button component={Link} to="/" onClick={closeMenu}>
            <ListItemText primary="U.S." />
          </ListItem>
          <ListItem button component={Link} to="/" onClick={closeMenu}>
            <ListItemText primary="Technology" />
          </ListItem>
          <ListItem button component={Link} to="/" onClick={closeMenu}>
            <ListItemText primary="Design" />
          </ListItem>
          <ListItem button component={Link} to="/" onClick={closeMenu}>
            <ListItemText primary="Culture" />
          </ListItem>
          <ListItem button component={Link} to="/" onClick={closeMenu}>
            <ListItemText primary="Business" />
          </ListItem>
          <ListItem button component={Link} to="/" onClick={closeMenu}>
            <ListItemText primary="Politics" />
          </ListItem>
          <ListItem button component={Link} to="/" onClick={closeMenu}>
            <ListItemText primary="Opinion" />
          </ListItem>
          <ListItem button component={Link} to="/" onClick={closeMenu}>
            <ListItemText primary="Science" />
          </ListItem>
          <ListItem button component={Link} to="/" onClick={closeMenu}>
            <ListItemText primary="Health" />
          </ListItem>
          <ListItem button component={Link} to="/" onClick={closeMenu}>
            <ListItemText primary="Style" />
          </ListItem>
          <ListItem button component={Link} to="/" onClick={closeMenu}>
            <ListItemText primary="Travel" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );

  return isTabletOrSmaller ? renderMobileNavbar() : renderDesktopNavbar();
};

export default Navbar;
