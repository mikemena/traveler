import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ navbarLinks }) => {
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  // This function will be called when a NavLink is clicked
  const handleNavLinkClick = () => {
    // If the menu is open (in mobile view), close it upon clicking a link
    if (menuClicked) {
      toggleMenuClick();
    }
  };

  return (
    <nav className="navbar">
      <span className="navbar_logo">traveler</span>
      {menuClicked ? (
        <FiX size={25} className={'navbar_menu'} onClick={toggleMenuClick} />
      ) : (
        <FiMenu size={25} className={'navbar_menu'} onClick={toggleMenuClick} />
      )}
      <ul
        className={
          menuClicked ? 'navbar_list navbar_list--active' : 'navbar_list'
        }
      >
        {navbarLinks.map((item, index) => {
          return (
            <li className="navbar_item" key={index}>
              <NavLink
                className="navbar_link"
                to={item.url}
                onClick={handleNavLinkClick}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
