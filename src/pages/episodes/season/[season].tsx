import React from 'react';
import { useQuery } from '@apollo/client';
import { Box, Container, Flex, Text, Spacer } from '@chakra-ui/react';
import { SeasonProps } from '@/types';
import Loader from '../../../components/Loader';
import Seasons from '../../../components/Seasons';
import DetailsButton from '../../../components/DetailsButton';
import { GET_EPISODES } from '../../../queries/index';

const Season: React.FC<SeasonProps> = ({ season }) => {
  const { data, loading } = useQuery(GET_EPISODES, {
    variables: { season: `S0${season}` },
  });

  return (
    <Container centerContent>
      <Seasons />
      {loading ? (
        <Loader />
      ) : (
        <>
          {' '}
          {data?.episodes?.results.map((episode, index) => (
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
        </>
      )}
    </Container>
  );
};

export default Season;
