import React from 'react';

import { Link } from 'gatsby';

import Header from '../components/header';

const Home = (): JSX.Element => {
  return (
    <div style={{ margin: '3rem auto', maxWidth: 600 }}>
      <Link to='/contact/'>Contact</Link>
      <br />
      <Link to='/about/'>About</Link>
      <Header headerText='Hello Gatsby' />
      <p>What a world.</p>
      <img src='https://source.unsplash.com/random/400x200' alt='' />
    </div>
  );
};

export default Home;
