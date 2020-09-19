import React from 'react';
import Header from '../components/header';

const About = (): JSX.Element => {
  return (
    <div style={{ color: `teal` }}>
      <Header headerText='About Gatsby' />
      <p>Such wow. Very React.</p>
    </div>
  );
};

export default About;
