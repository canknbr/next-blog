import React from 'react';
import MainNavigation from './mainNavigation';
const layout = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
};

export default layout;
