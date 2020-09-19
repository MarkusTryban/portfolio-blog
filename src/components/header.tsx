import React from 'react';

const Header = (props: { headerText: React.ReactNode }): JSX.Element => {
  return <h1>{props.headerText}</h1>;
};

export default Header;
