import React from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/Seo';

const Home: React.FC = () => (
  <Box>
    <Seo title="Rick and Morty | Home Page" />
    <Box position="absolute" top="0" filter="auto" brightness="40%">
      <StaticImage
        src="../images/rick_and_morty.webp"
        layout="fixed"
        width={1848}
        height={948}
        alt="Rick and Morty background"
      />
    </Box>
    <Flex
      position="absolute"
      top="0"
      w="100%"
      h="100%"
      justify="center"
      align="center"
      direction="column"
    >
      <Text fontSize="6xl" fontWeight="semibold" textAlign="center">
        Welcome to my Rick and Morty website
      </Text>
      <Button
        as={Link}
        to="/characters/1"
        bg="yellow"
        p="30px 100px"
        fontSize="xl"
        mt="8"
        borderRadius="20px"
      >
        See more here
      </Button>
    </Flex>
  </Box>
);
export default Home;
