import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import {
  Box,
  Container,
  Flex,
  Spacer,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { BottomScrollListener } from 'react-bottom-scroll-listener';
import { GET_LOCATIONS } from '@/queries';
import Loader from '../components/Loader';
import DetailsButton from '../components/DetailsButton';

const Locations: React.FC = () => {
  const [search, setSearch] = useState<string>('');
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
      <InputGroup w={{ base: 'auto', lg: '741px' }}>
        <InputLeftElement zIndex="1">
          <SearchIcon color="gray.300" w="20px" h="20px" ml="4px" mt="5px" />
        </InputLeftElement>
        <Input
          bg="white"
          color="black"
          placeholder="Search locations"
          value={search}
          size="lg"
          w="100%"
          borderRadius="15px"
          onChange={handleChange}
        />
      </InputGroup>

      {loading ? (
        <Loader />
      ) : (
        <BottomScrollListener onBottom={addMoreResults}>
          {data?.locations?.results?.map((location, index) => (
            <Box
              key={location.id}
              mt="5"
              bg="gray"
              w={{ base: 'auto', lg: '741px' }}
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
