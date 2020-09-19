import React from 'react';

import containerStyles from './container.module.css';

const Container = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return <div className={containerStyles.container}>{children}</div>;
};

export default Container;
