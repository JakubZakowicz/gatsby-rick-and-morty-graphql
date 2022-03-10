import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Box, Container, Flex, Spacer, Text } from '@chakra-ui/react';
import { BottomScrollListener } from 'react-bottom-scroll-listener';
import Loader from '../components/Loader';
import DetailsButton from '../components/DetailsButton';

const GET_LOCATIONS = gql`
  query getLocations($page: Int) {
    locations(page: $page) {
      info {
        next
      }
      results {
        id
        name
      }
    }
  }
`;

const Locations = () => {
  const { data, loading, fetchMore } = useQuery(GET_LOCATIONS);

  if (loading) return <Loader />;

  return (
    <Container mt="10">
      <BottomScrollListener
        onBottom={() => {
          const { next } = data.locations.info;
          if (next !== null)
            fetchMore({
              variables: { page: next },
              updateQuery: (prevResult, { fetchMoreResult }) => ({
                locations: {
                  ...fetchMoreResult.locations,
                  results: [
                    ...prevResult.locations.results,
                    ...fetchMoreResult.locations.results,
                  ],
                },
              }),
            });
        }}
      >
        {data?.locations?.results?.map((location, index) => (
          <Box
            key={location.id}
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
      </BottomScrollListener>
    </Container>
  );
};

export default Locations;
