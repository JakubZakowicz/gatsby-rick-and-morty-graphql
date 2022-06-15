import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Box, Container, Flex, Spacer, Text, Input } from '@chakra-ui/react';
import { BottomScrollListener } from 'react-bottom-scroll-listener';
import Loader from '../components/Loader';
import DetailsButton from '../components/DetailsButton';

const GET_LOCATIONS = gql`
  query getLocations($page: Int, $name: String) {
    locations(page: $page, filter: { name: $name }) {
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
  const [search, setSearch] = useState('');
  const { data, loading, fetchMore } = useQuery(GET_LOCATIONS, {
    variables: { name: search },
  });

  const addMoreResults = () => {
    const { next } = data.locations.info;
    if (next !== null)
      fetchMore({
        variables: { page: next },
        updateQuery: (prevResult: any, { fetchMoreResult }: any) => ({
          locations: {
            ...fetchMoreResult.locations,
            results: [
              ...prevResult.locations.results,
              ...fetchMoreResult.locations.results,
            ],
          },
        }),
      });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Container mt="10">
      <Input
        bg="white"
        color="black"
        placeholder="Search locations"
        value={search}
        onChange={handleChange}
      />
      {loading ? (
        <Loader />
      ) : (
        <BottomScrollListener onBottom={addMoreResults}>
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
                <DetailsButton
                  name="See More"
                  to={`/locations/${location.id}`}
                />
              </Flex>
            </Box>
          ))}
        </BottomScrollListener>
      )}
    </Container>
  );
};

export default Locations;
