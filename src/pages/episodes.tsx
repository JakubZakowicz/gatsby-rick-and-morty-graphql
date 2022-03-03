import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Box, Container, Flex, Text, Spacer } from '@chakra-ui/react';
import Loader from '../components/Loader';
import DetailsButton from '../components/DetailsButton';

const GET_EPISODES = gql`
  query getEpisodes {
    episodes {
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;

const Episodes = () => {
  const { data, loading } = useQuery(GET_EPISODES);

  if (loading) return <Loader />;

  return (
    <Container centerContent>
      {data?.episodes?.results.map((episode, index) => (
        <Box
          bg="gray"
          w="1000px"
          p="5"
          mt="5"
          borderRadius="15"
          boxShadow="dark-lg"
        >
          <Flex align="center">
            <Text>{index + 1}.</Text>
            <Text ml="5" w="300px">
              {episode.name}
            </Text>
            <Spacer />
            <Text>{episode.air_date}</Text>
            <Spacer />
            <DetailsButton name="See More" to={`/episodes/${episode.id}`} />
          </Flex>
        </Box>
      ))}
    </Container>
  );
};

export default Episodes;
