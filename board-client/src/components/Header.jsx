import React from 'react';
import { NavLink } from 'react-router-dom';
import '../cmpntStyle/header.css';

const Header = () => {
  const activeMenuStyle = {
    fontWeight: 'bold',
  };
  return (
    <>
      <header className="fixed_header">
        <div className="container">
          <div className="header_menu">
            <ul>
              <li>
                <NavLink exact to="/" activeStyle={activeMenuStyle}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeStyle={activeMenuStyle}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/posts" activeStyle={activeMenuStyle}>
                  Board
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="right_menu">
            <ul>
              <li>
                <NavLink to="/auth">ACC</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
