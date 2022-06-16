import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Slide, Fade, Box, List, ListItem } from '@chakra-ui/react';
import MenuBar from './MenuBar';
import { links } from '../utils/links';

const MobileMenu: React.FC = () => {
  const [displayed, setDisplayed] = useState(false);

  const toggleDisplayed = () => {
    setDisplayed((prevState) => !prevState);
  };
  return (
    <Box display={{ base: 'block', md: 'none' }}>
      <Fade in={displayed}>
        <Box
          position="fixed"
          bg="rgba(0, 0, 0, .5)"
          top="0"
          left="0"
          right="0"
          bottom="0"
          display={{ base: displayed ? 'block' : 'none', md: 'none' }}
          onClick={toggleDisplayed}
          zIndex={1}
        />
      </Fade>
      <Slide
        in={displayed}
        direction="left"
        style={{ width: '173px', zIndex: '2' }}
      >
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
                onClick={toggleDisplayed}
              >
                {link.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </Slide>
      <MenuBar toggleDisplayed={toggleDisplayed} />
    </Box>
  );
};

export default MobileMenu;
