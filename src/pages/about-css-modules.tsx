import React from 'react';

import Container from '../components/container';

import styles from './about-css-modules.module.css';

console.log(styles);

const About = (): JSX.Element => {
  return (
    <Container>
      <h1>About CSS Modules</h1>
      <p>CSS Modules are cool</p>
    </Container>
  );
};

export default About;
