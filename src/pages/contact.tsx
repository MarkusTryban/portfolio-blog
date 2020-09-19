import React from 'react';

import { Link } from 'gatsby';

import Header from '../components/header';

import Layout from '../components/layout';

const Contact = (): JSX.Element => {
  return (
    <Layout>
      <Link to='/'>Home</Link>
      <Header headerText='Contact' />
      <p>Send us a message!</p>
    </Layout>
  );
};

export default Contact;
