import React from 'react';

import { Link } from 'gatsby';

const ListLink = (props: { to: string; children: React.ReactNode }) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to='/' style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>This is my H3</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to='/'>Home</ListLink>
          <ListLink to='/about/'>About</ListLink>
          <ListLink to='/contact/'>Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
  );
};

export default Layout;
