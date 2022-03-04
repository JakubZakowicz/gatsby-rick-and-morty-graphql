import React from 'react';
import { Link } from 'gatsby';
import { List, ListItem } from '@chakra-ui/react';

type linkType = {
  name: string;
  to: string;
};

const links: Array<linkType> = [
  {
    name: 'Characters',
    to: '/',
  },
  {
    name: 'Episodes',
    to: '/episodes/season/1',
  },
  {
    name: 'Locations',
    to: '/locations',
  },
];

const Menu = () => (
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
  >
    {links.map((link) => (
      <ListItem>
        <Link
          to={link.to}
          style={{
            padding: '5px 20px',
          }}
          activeStyle={{
            color: '#FF9E0C',
            background: '#24282F',
            borderRadius: '10px',
          }}
        >
          {link.name}
        </Link>
      </ListItem>
    ))}
  </List>
);

export default Menu;
