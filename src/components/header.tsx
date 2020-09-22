import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

import './header.scss';

const Header = (): JSX.Element => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = (value: boolean) => {
    setOpenMenu(value);
  };

  return (
    <>
      <a
        onClick={() => toggleMenu(!openMenu)}
        className={`menu-toggle rounded ${openMenu ? 'active' : ''}`}
        href='/#'
      >
        {openMenu ? (
          <FontAwesomeIcon icon={faTimes} className='fas fa-times' />
        ) : (
          <FontAwesomeIcon icon={faBars} className='fas fa-bars' />
        )}
      </a>
      <nav id='sidebar-wrapper' className={` ${openMenu ? 'active' : ''}`}>
        <ul className='sidebar-nav'>
          <li className='sidebar'>Markus Tryban</li>
          <li className='sidebar-nav-item'>
            <a href='#page-top'>Home</a>
          </li>
          <li className='sidebar-nav-item'>
            <a href='#about'>Portfolio</a>
          </li>
          <li className='sidebar-nav-item'>
            <a href='#services'>Github</a>
          </li>
          <li className='sidebar-nav-item'>
            <a href='#portfolio'>Linkedin</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
