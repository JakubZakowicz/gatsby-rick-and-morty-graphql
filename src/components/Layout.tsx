import React from 'react';
import Menu from './Menu';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Menu />
    {children}
  </>
);

export default Layout;
