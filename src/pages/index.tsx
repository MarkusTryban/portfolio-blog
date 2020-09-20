import React from 'react';

import Header from '../components/header';

import Layout from '../components/layout';

const Home = (): JSX.Element => {
  return (
    <Layout>
      <Header headerText='Hello Gatsby' />
    </Layout>
  );
};

export default Home;
