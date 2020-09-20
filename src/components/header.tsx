import React, { useState } from 'react';

import './header.css';

const Header = (): JSX.Element => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = (value: boolean) => {
    setOpenMenu(value);
  };

  return (
    <>
      <a
        onClick={(_) => toggleMenu(!openMenu)}
        className={`menu-toggle rounded ${openMenu ? 'active' : ''}`}
        href='/#'
      >
        {openMenu ? (
          <i className='fas fa-times' />
        ) : (
          <i className='fas fa-bars' />
        )}
      </a>
      <nav id='sidebar-wrapper' className={` ${openMenu ? 'active' : ''}`}>
        <ul className='sidebar-nav'>
          <li className='sidebar-brand'>
            <a href='#page-top'>Gatsby Starter</a>
          </li>
          <li className='sidebar-nav-item'>
            <a href='#page-top'>Home</a>
          </li>
          <li className='sidebar-nav-item'>
            <a href='#about'>About</a>
          </li>
          <li className='sidebar-nav-item'>
            <a href='#services'>Services</a>
          </li>
          <li className='sidebar-nav-item'>
            <a href='#portfolio'>Portfolio</a>
          </li>
          <li className='sidebar-nav-item'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
