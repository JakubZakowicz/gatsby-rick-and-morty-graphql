import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Box, Container, Flex, Spacer, Text } from '@chakra-ui/react';
import Loader from '../components/Loader';
import DetailsButton from '../components/DetailsButton';

const GET_LOCATIONS = gql`
  query getLocations {
    locations {
      results {
        id
        name
      }
    }
  }
`;

const Locations = () => {
  const { data, loading } = useQuery(GET_LOCATIONS);

  if (loading) return <Loader />;

  return (
    <Container mt="10">
      {data?.locations?.results?.map((location, index) => (
        <Box
          mt="5"
          bg="gray"
          w="741px"
          p="5"
          borderRadius="15"
          boxShadow="dark-lg"
        >
          <Flex align="center">
            <Text fontSize="lg">{index + 1}.</Text>
            <Spacer />
            <Text fontSize="lg">{location.name}</Text>
            <Spacer />
            <DetailsButton name="See More" to={`/locations/${location.id}`} />
          </Flex>
        </Box>
      ))}
    </Container>
  );
};

export default Locations;
