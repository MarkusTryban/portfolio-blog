import React from 'react';

import Header from '../components/header';

import Layout from '../components/layout';

const About = (): JSX.Element => {
  return (
    <Layout>
      <Header headerText='About Gatsby' />
      <p>Such wow. Very React.</p>
    </Layout>
  );
};

export default About;
