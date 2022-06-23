import React from 'react';
import { graphql, navigate } from 'gatsby';
import { Box, Container, Flex, Spacer, Text } from '@chakra-ui/react';
import { LocationsPageProps } from '@/types';
import Pagination from '@/components/Pagination';
import DetailsButton from '../components/DetailsButton';
import Seo from '../components/Seo';

export const LocationsQuery = graphql`
  query LocationsQuery($page: Int) {
    rickAndMorty {
      locations(page: $page) {
        info {
          pages
        }
        results {
          id
          name
        }
      }
    }
  }
`;

const LocationsPage: React.FC<LocationsPageProps> = ({ data, pageContext }) => {
  const { page } = pageContext;
  const { locations } = data.rickAndMorty;

  const handlePageClick = (e: { selected: number }) => {
    const selectedPage = e.selected + 1;
    navigate(`/locations/${selectedPage}`);
  };

  return (
    <Container mt="10">
      <Seo title={`Locations | page ${page}`} />
      {locations?.results?.map((location) => (
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
            <Text fontSize="lg">{location.id}.</Text>
            <Spacer />
            <Text fontSize="lg">{location.name}</Text>
            <Spacer />
            <DetailsButton name="See More" to={`/location/${location.id}`} />
          </Flex>
        </Box>
      ))}
      <Box ml={{ base: '0', lg: '125px' }} pb="25px">
        <Pagination
          pageCount={locations.info.pages}
          page={page}
          handlePageClick={handlePageClick}
        />
      </Box>
    </Container>
  );
};

export default LocationsPage;
