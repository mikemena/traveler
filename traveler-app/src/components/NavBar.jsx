import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ navbarLinks }) => {
  // Determines if the "menu icon" was clicked or not. Note that this icon is only visible when the window width is small.
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
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
              <NavLink className="navbar_link" to={item.url}>
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
