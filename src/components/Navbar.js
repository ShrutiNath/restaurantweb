import React, { useState, useContext } from 'react';
import "./Navbar.css";
import { LoginContext } from "../context/LoginContext";
import { FaMapMarker } from 'react-icons/fa';

const Navbar = () => {
  // State to manage the mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const restaurant = useContext(LoginContext);

  return (
    <nav className="navbar">
      <div className="max-width">
        
        <div className="logo">
          <div className='ResName'>{restaurant?.name}</div>
          
        </div>
        <ul className={`menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#projects" className="menu-btn"><strong>Menu</strong></a></li>
          <li>
          <div><a
                    href={`https://www.google.com/maps/@${restaurant.location.latitude},${restaurant.location.longitude},18z?entry=ttu`}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <strong>Location</strong>
                    <FaMapMarker/>
                </a>
            </div>
          </li>
        </ul>
        <div className="menu-btn" onClick={toggleMobileMenu}>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
