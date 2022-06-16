import React, { useState } from 'react';
import { navigate } from 'gatsby';
import { useQueryParam, NumberParam } from 'use-query-params';
import { useQuery } from '@apollo/client';
import { Box, Container, Flex, Image, Spacer, Text } from '@chakra-ui/react';
import ReactPaginate from 'react-paginate';
import { GET_CHARACTERS } from '@/queries';
import Loader from '../components/Loader';
import { statuses } from '../utils/statuses';
import DetailsButton from '../components/DetailsButton';
import '../paginationStyle.css';

const Home: React.FC = () => {
  const [pageParam] = useQueryParam('page', NumberParam);
  const [page, setPage] = useState(pageParam ?? 1);
  const { loading, data } = useQuery(GET_CHARACTERS, { variables: { page } });

  if (loading) return <Loader />;

  const handlePageClick = (e: { selected: number }) => {
    const selectedPage = e.selected + 1;
    setPage(selectedPage);
    navigate(`?page=${selectedPage}`);
  };

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
      <Flex justify="start">
        <ReactPaginate
          pageCount={data.characters.info.pages}
          initialPage={page - 1}
          previousLabel="<"
          nextLabel=">"
          pageLinkClassName="link"
          previousLinkClassName="link"
          nextLinkClassName="link"
          breakLabel="..."
          breakLinkClassName="link"
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          containerClassName="container"
          activeLinkClassName="active-link"
          onPageChange={handlePageClick}
        />
      </Flex>
    </Container>
  );
};

export default Home;
