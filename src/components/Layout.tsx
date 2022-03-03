import React from 'react';
import Menu from './Menu';

const Layout = ({ children }) => (
  <>
    <Menu />
    {children}
  </>
);

export default Layout;
