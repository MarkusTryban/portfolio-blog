import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      {children}
    </div>
  );
};

export default Layout;
