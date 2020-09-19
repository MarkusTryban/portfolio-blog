import React from 'react';

const Container = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return <div>{children}</div>;
};

export default Container;
