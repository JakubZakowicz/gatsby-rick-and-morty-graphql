import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Box, Container, Flex, Image, Spacer, Text } from '@chakra-ui/react';
import Loader from '../components/Loader';
import { statuses } from '../utils/statuses';
import DetailsButton from '../components/DetailsButton';

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        status
        species
        type
        gender
        image
      }
    }
  }
`;

const Home: React.FC = () => {
  const { loading, data } = useQuery(GET_CHARACTERS);

  if (loading) return <Loader />;

  return (
    <Container>
      {data?.characters?.results.map((character) => (
        <Box
          key={character.id}
          w={{ xl: '857px', base: 'auto' }}
          bg="gray"
          borderRadius={20}
          p={6}
          mt={7}
          boxShadow="dark-lg"
        >
          <Flex>
            <Image
              src={character.image}
              borderRadius={20}
              w={{ base: '100px', lg: '150px', xl: '250px' }}
              h={{ base: '100px', lg: '150px', xl: '250px' }}
            />
            <Flex direction="column" ml={10}>
              <Box lineHeight="10">
                <Text fontSize="3xl" fontWeight="bold">
                  {character.name}
                </Text>
                <Text fontSize="1xl">
                  Status:{' '}
                  <Box
                    bg={statuses[character.status]}
                    w="10px"
                    h="10px"
                    borderRadius="full"
                    display="inline-block"
                    mx={1}
                  />
                  {character.status}
                </Text>
                <Text fontSize="1xl">Species: {character.species}</Text>
                {character.type && (
                  <Text fontSize="1xl">Type: {character.type}</Text>
                )}
                <Text fontSize="1xl">Gender: {character.gender}</Text>
              </Box>
              <Spacer />
              <DetailsButton
                name="See more details"
                to={`/characters/${character.id}`}
                width="172px"
              />
            </Flex>
          </Flex>
        </Box>
      ))}
    </Container>
  );
};

export default Home;
