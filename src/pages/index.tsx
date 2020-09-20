import React from 'react';
import Header from '../components/header';

import './index.css';

const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <header className='masthead'>
        <div className='container text-center my-auto'>
          <h1 className='mb-1'>Firstname Lastname</h1>
          <h3 className='mb-5'>
            <em>Lorem ipsum</em>
          </h3>
          <a className='btn btn-transition' href='#about'>
            About
          </a>
        </div>
        <div className='overlay'></div>
      </header>
    </>
  );
};

export default Home;
