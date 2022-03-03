import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Box, Container, Text } from '@chakra-ui/react';
import BackButton from '@/components/BackButton';
import Loader from '@/components/Loader';
import StyledLink from '@/components/StyledLink';

const GET_LOCATION = gql`
  query getLocation($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        name
      }
    }
  }
`;

const Location = ({ id }) => {
  const { data, loading } = useQuery(GET_LOCATION, { variables: { id } });

  if (loading) return <Loader />;

  const { location } = data;

  return (
    <Container>
      <Box
        mt="10"
        bg="gray"
        px="7"
        pt="3"
        pb="7"
        borderRadius="20"
        position="relative"
        boxShadow="dark-lg"
      >
        <Text fontSize="xl" fontWeight="bold" align="center">
          Location name:
        </Text>
        <Text fontSize="xl" fontWeight="bold" align="center">
          {location.name}
        </Text>
        <Text mt="10">Type: {location.type}</Text>
        <Text mt="5">Dimension: {location.dimension}</Text>
        <Text mt="5">Characters: </Text>
        {location?.residents?.map((character) => (
          <Text display="inline">
            <StyledLink
              name={character.name}
              to={`/characters/${character.id}`}
              isSecondary
            />
            ,&nbsp;
          </Text>
        ))}
        <BackButton to="/locations" />
      </Box>
    </Container>
  );
};

export default Location;
