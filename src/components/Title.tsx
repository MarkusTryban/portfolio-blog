import React from 'react';

import favicon from '../assets/favicon/favicon.ico';

import { Helmet } from 'react-helmet';

const Title = (): JSX.Element => {
  return (
    <Helmet>
      <meta charSet='utf-8' />
      <title>Passionate Software Engineer</title>
      <link rel='icon' href={favicon} />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='../assets/favicon/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='../assets/favicon/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='../assets/favicon/favicon-16x16.png'
      />
      <link rel='manifest' href='../assets/favicon/site.webmanifest' />
    </Helmet>
  );
};

export default Title;
