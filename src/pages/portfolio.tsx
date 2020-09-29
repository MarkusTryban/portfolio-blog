import React from 'react';

import Title from '../components/Title';

import Footer from '../components/Footer';

import Header from '../components/header';

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
                title='Pomodoro Clock'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='caption'>
                  <span className='caption-content'>
                    <h2>Pomodoro Clock</h2>
                    <p>
                      Typescript | React | html | css | Jest | React testing
                      library.
                    </p>
                  </span>
                </span>
                <img
                  className='img-fluid'
                  src={'../assets/images/image_part_001.jpg'}
                  alt=''
                />
              </a>
            </div>
            <div className='col-lg'>
              <a
                className='portfolio-item'
                href='https://kind-lalande-7168be.netlify.app/'
                title='Drum Machine'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='caption'>
                  <span className='caption-content'>
                    <h2>Drum Machine</h2>
                    <p>
                      Typescript | React | html | css | Jest | React testing
                      library.
                    </p>
                  </span>
                </span>
                <img
                  className='img-fluid'
                  src={'../assets/images/image_part_002.jpg'}
                  alt=''
                />
              </a>
            </div>
            <div className='col-lg'>
              <a
                className='portfolio-item'
                href='https://sharp-colden-e41c9e.netlify.app/'
                title='Random Quote'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='caption'>
                  <span className='caption-content'>
                    <h2>Random Quote</h2>
                    <p>
                      Typescript | React | html | css | Jest | React testing
                      library.
                    </p>
                  </span>
                </span>
                <img
                  className='img-fluid'
                  src={'../assets/images/image_part_003.jpg'}
                  alt=''
                />
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
                      Typescript | React | Gatsby | scss | html | Jest | React
                      testing library .
                    </p>
                  </span>
                </span>
                <img
                  className='img-fluid'
                  src={'../assets/images/image_part_004.jpg'}
                  alt=''
                />
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
