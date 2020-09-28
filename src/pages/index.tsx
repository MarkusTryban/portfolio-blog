import React from 'react';

import { Helmet } from 'react-helmet';

import Footer from '../components/Footer';

import Header from '../components/header';

import './index.scss';

const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <Helmet>
        <title>Passionate Software Engineer</title>
      </Helmet>
      <header className='masthead'>
        <div className='container'>
          <h1>Markus Tryban</h1>
          <h3>
            <em>Allways be the best you!</em>
          </h3>
          <a className='btn btn-transition' href='/portfolio/'>
            Portfolio
          </a>
        </div>
      </header>
      <Footer />
    </>
  );
};

export default Home;
