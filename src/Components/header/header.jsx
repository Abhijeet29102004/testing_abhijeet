import React, { useState, useEffect, useRef } from 'react'; // Import useState, useEffect, useRef hooks
import { Link } from 'react-scroll';
import logo from '/assets/logo/lg.png';
import './header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu visibility
  const menuRef = useRef(null); // Reference for the menu (navbar)
  const toggleRef = useRef(null); // Reference for the hamburger menu icon

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu if clicked outside of it
  useEffect(() => {
    // Function to handle clicks outside the menu
    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) && 
        toggleRef.current && !toggleRef.current.contains(event.target)
      ) {
        setMenuOpen(false); // Close the menu if clicked outside
      }
    };

    // Add event listener for clicks outside
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // Empty dependency array to run only once when the component is mounted

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <nav className="navbar">
        {/* Hamburger icon */}
        <div className="menu-toggle" onClick={toggleMenu} ref={toggleRef}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navbar links */}
        <ul className={`nav-links ${menuOpen ? 'show' : ''}`} ref={menuRef}>
          <li>
            <Link to="home" smooth={true} duration={500} offset={-70}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} offset={-70}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="products" smooth={true} duration={500} offset={-70}>
              Products
            </Link>
          </li>
          <li>
            <Link to="events" smooth={true} duration={500} offset={-70}>
              Events
            </Link>
          </li>
          <li>
            <Link to="contact us" smooth={true} duration={500} offset={-70}>
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
