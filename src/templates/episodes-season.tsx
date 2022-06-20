import React from 'react';
import { Box, Container, Flex, Text, Spacer } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import { EpisodesSeasonProps } from '@/types';
import Seasons from '../components/Seasons';
import DetailsButton from '../components/DetailsButton';

export const EpisodesQuery = graphql`
  query EpisodesQuery($season: String!) {
    rickAndMorty {
      episodes(filter: { episode: $season }) {
        results {
          id
          name
          air_date
          episode
        }
      }
    }
  }
`;

const EpisodesSeason: React.FC<EpisodesSeasonProps> = ({ data }) => {
  const { episodes } = data.rickAndMorty;
  return (
    <Container centerContent>
      <Seasons />
      {episodes?.results.map((episode, index) => (
        <Box
          key={episode.name}
          bg="gray"
          w={{ base: 'auto', md: '500px', xl: '1000px' }}
          p="5"
          mt="5"
          borderRadius="15"
          boxShadow="dark-lg"
        >
          <Flex align="center" flexWrap="wrap">
            <Text>{index + 1}.</Text>
            <Text ml="5" w="300px">
              {episode.name}
            </Text>
            <Spacer />
            <Text>{episode.air_date}</Text>
            <Spacer />
            <DetailsButton name="See More" to={`/episode/${episode.id}`} />
          </Flex>
        </Box>
      ))}
    </Container>
  );
};

export default EpisodesSeason;
