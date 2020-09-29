import React from 'react';

import { Helmet } from 'react-helmet';

const Title = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Passionate Software Engineer</title>
        <link rel='icon' href={'../assets/favicon/favicon.ico'} />
      </Helmet>
    </>
  );
};

export default Title;
