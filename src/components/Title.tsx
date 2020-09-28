import React from 'react';

import favicon from '../assets/favicon/favicon.ico';

import { Helmet } from 'react-helmet';

const Title = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Passionate Software Engineer</title>
        <link rel='icon' href={favicon} />
      </Helmet>
    </>
  );
};

export default Title;
