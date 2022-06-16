import React from 'react';
import { Link } from 'gatsby';
import { List, ListItem } from '@chakra-ui/react';
import { links } from '@/utils/links';
import { activeLinkStyle, linkStyle } from '@/styles/menuStyles';
import MobileMenu from './MobileMenu';

const Menu: React.FC = () => (
  <>
    <List
      position="fixed"
      h="100vh"
      bg="#3C3E44"
      top="0"
      left="0"
      py="5"
      px="5"
      lineHeight="10"
      fontSize="xl"
      display={{ base: 'none', md: 'block' }}
    >
      {links.map((link) => (
        <ListItem key={link.name}>
          <Link to={link.to} style={linkStyle} activeStyle={activeLinkStyle}>
            {link.name}
          </Link>
        </ListItem>
      ))}
    </List>
    <MobileMenu />
  </>
);

export default Menu;
