import React from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Seo from '../components/Seo';

export const BackgroundQuery = graphql`
  query BackgroundQuery {
    file {
      childImageSharp {
        fixed(width: 1833) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;

const Home = ({ data }) => (
  <Box>
    <Seo title="Rick and Morty | Home Page" />
    <Box
      position="absolute"
      top="0"
      w="99vw"
      h="100vh"
      filter="auto"
      brightness="40%"
    >
      <Img
        fixed={data.file.childImageSharp.fixed}
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
