import React, { Component } from 'react';

import './header.css';

export default class Header extends Component {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = {
      openMenu: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = (value: any) => {
    this.setState({ openMenu: value });
  };

  render(): JSX.Element {
    const { openMenu } = this.state;

    return (
      <>
        <a
          onClick={(_) => this.toggleMenu(!openMenu)}
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
  }
}
