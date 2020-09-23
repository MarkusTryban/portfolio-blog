import React from 'react';

import Footer from '../components/Footer';

import Header from '../components/header';

import p1 from '../images/portfolio-1.jpg';
import p2 from '../images/portfolio-2.jpg';
import p3 from '../images/portfolio-3.jpg';
import p4 from '../images/portfolio-4.jpg';

import './portfolio.scss';

const Portfolio = (): JSX.Element => {
  return (
    <>
      <Header />
      <section className='content-section'>
        <div className='content-container'>
          <div className='content-section-heading'>
            <h3 className='text-secondary'>Portfolio</h3>
            <h2>Recent Projects</h2>
          </div>
          <div className='row'>
            <div className='col-lg'>
              <a
                className='portfolio-item'
                href='https://distracted-noyce-12dc43.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='caption'>
                  <span className='caption-content'>
                    <h2>Pomodoro Clock</h2>
                    <p>
                      A yellow pencil with envelopes on a clean, blue backdrop!
                    </p>
                  </span>
                </span>
                <img className='img-fluid' src={p1} alt='' />
              </a>
            </div>
            <div className='col-lg'>
              <a
                className='portfolio-item'
                href='https://kind-lalande-7168be.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='caption'>
                  <span className='caption-content'>
                    <h2>Drum Machine</h2>
                    <p>
                      A dark blue background with a colored pencil, a clip, and
                      a tiny ice cream cone!
                    </p>
                  </span>
                </span>
                <img className='img-fluid' src={p2} alt='' />
              </a>
            </div>
            <div className='col-lg'>
              <a
                className='portfolio-item'
                href='https://5f6ab7e69cc57a533bcf6d6b--sharp-colden-e41c9e.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='caption'>
                  <span className='caption-content'>
                    <h2>Random Quote Generator</h2>
                    <p>
                      Strawberries are such a tasty snack, especially with a
                      little sugar on top!
                    </p>
                  </span>
                </span>
                <img className='img-fluid' src={p3} alt='' />
              </a>
            </div>
            <div className='col-lg'>
              <a
                className='portfolio-item'
                href='https://github.com/MarkusTryban/portfolio-blog'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='caption'>
                  <span className='caption-content'>
                    <h2>Portfolio</h2>
                    <p>
                      A yellow workspace with some scissors, pencils, and other
                      objects.
                    </p>
                  </span>
                </span>
                <img className='img-fluid' src={p4} alt='' />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Portfolio;
