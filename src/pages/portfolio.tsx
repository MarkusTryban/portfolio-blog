import React from 'react';

import Title from '../components/Title';

import Footer from '../components/Footer';

import Header from '../components/Header';

import p1 from '../images/image_part_001.jpg';
import p2 from '../images/image_part_002.jpg';
import p3 from '../images/image_part_003.jpg';
import p4 from '../images/image_part_004.jpg';

import './portfolio.scss';

const Portfolio = (): JSX.Element => {
  return (
    <>
      <Header />
      <Title />
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
                      Typescript, React, html, css, Jest, and React testing
                      library.
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
                    <p>Built with Typescript, React, html, and css.</p>
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
                    <h2>Random Quote</h2>
                    <p>Built with Typescript, React, html, and css.</p>
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
                    <p>Built with Typescript, React, Gatsby, scss, and html.</p>
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
