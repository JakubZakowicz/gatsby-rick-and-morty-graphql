import React from 'react';
import { graphql, navigate } from 'gatsby';
import { Box, Container, Flex, Image, Spacer, Text } from '@chakra-ui/react';
import { CharactersPageProps } from '@/types';
import Pagination from '@/components/Pagination';
import DetailsButton from '../components/DetailsButton';
import { statuses } from '../utils/statuses';

export const CharactersQuery = graphql`
  query CharactersQuery($page: Int) {
    rickAndMorty {
      characters(page: $page) {
        info {
          pages
        }
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
  }
`;

const CharactersPage: React.FC<CharactersPageProps> = ({
  data,
  pageContext,
}) => {
  const { page } = pageContext;
  const charactersData = data?.rickAndMorty?.characters;

  const handlePageClick = (e: { selected: number }) => {
    const selectedPage = e.selected + 1;
    navigate(`/characters/${selectedPage}`);
  };

  return (
    <Container>
      {charactersData?.results.map((character) => (
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
                    as="span"
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
                to={`/character/${character.id}`}
                width="172px"
              />
            </Flex>
          </Flex>
        </Box>
      ))}
      <Flex justify="start">
        <Pagination
          pageCount={charactersData.info.pages}
          page={page}
          handlePageClick={handlePageClick}
        />
      </Flex>
    </Container>
  );
};

export default CharactersPage;
