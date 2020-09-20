import React from 'react';

import Header from '../components/header';

import './index.css';

const Home = (): JSX.Element => {
  return (
    <>
      <Header />
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
    </>
  );
};

export default Home;
