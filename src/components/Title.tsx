import React from 'react';

import { Helmet } from 'react-helmet';

import favicon from '../assets/favicon/favicon.ico';

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
