import React from 'react';
import { LayoutProps } from '@/types';
import Menu from './Menu';

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Menu />
    {children}
  </>
);

export default Layout;
