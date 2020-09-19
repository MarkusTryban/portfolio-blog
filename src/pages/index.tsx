import React from 'react';

import { Link } from 'gatsby';

import Header from '../components/header';

import Layout from '../components/layout';

const Home = (): JSX.Element => {
  return (
    <Layout>
      <Link to='/contact/'>Contact</Link>
      <br />
      <Link to='/about/'>About</Link>
      <Header headerText='Hello Gatsby' />
      <p>What a world.</p>
      <img src='https://source.unsplash.com/random/400x200' alt='' />
    </Layout>
  );
};

export default Home;
