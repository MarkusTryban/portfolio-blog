import React from 'react';

import p1 from '../images/portfolio-1.jpg';
import p2 from '../images/portfolio-2.jpg';
import p3 from '../images/portfolio-3.jpg';
import p4 from '../images/portfolio-4.jpg';

import './portfolio.css';

const Portfolio = (): JSX.Element => {
  return (
    <>
      <section className='content-section'>
        <div className='container'>
          <div className='content-section-heading'>
            <h3 className='text-secondary'>Portfolio</h3>
            <h2>Recent Projects</h2>
          </div>
          <div className='row'>
            <div className='col-lg'>
              <a className='portfolio-item' href='/#'>
                <span className='caption'>
                  <span className='caption-content'>
                    <h2>Stationary</h2>
                    <p>
                      A yellow pencil with envelopes on a clean, blue backdrop!
                    </p>
                  </span>
                </span>
                <img className='img-fluid' src={p1} alt='' />
              </a>
            </div>
            <div className='col-lg'>
              <a className='portfolio-item' href='/#'>
                <span className='caption'>
                  <span className='caption-content'>
                    <h2>Ice Cream</h2>
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
              <a className='portfolio-item' href='/#'>
                <span className='caption'>
                  <span className='caption-content'>
                    <h2>Strawberries</h2>
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
              <a className='portfolio-item' href='/#'>
                <span className='caption'>
                  <span className='caption-content'>
                    <h2>Workspace</h2>
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
    </>
  );
};

export default Portfolio;
