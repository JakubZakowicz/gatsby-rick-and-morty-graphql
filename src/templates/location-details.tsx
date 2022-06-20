import React from 'react';
import { graphql } from 'gatsby';
import { Box, Container, Text } from '@chakra-ui/react';
import BackButton from '@/components/BackButton';
import { LocationDetailsProps } from '@/types';
import StyledLink from '@/components/StyledLink';

export const LocationQuery = graphql`
  query LocationQuery($id: ID!) {
    rickAndMorty {
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
  }
`;

const Location: React.FC<LocationDetailsProps> = ({ data }) => {
  const { location } = data.rickAndMorty;

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
              to={`/character/${character.id}`}
              isSecondary
            />
            ,&nbsp;
          </Text>
        ))}
        <BackButton />
      </Box>
    </Container>
  );
};

export default Location;
