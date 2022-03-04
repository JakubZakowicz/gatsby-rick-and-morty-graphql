import React from 'react';
import { Link } from 'gatsby';
import { Flex, Button } from '@chakra-ui/react';

const seasons: number[] = [1, 2, 3, 4, 5];

const Seasons: React.FC = () => (
  <Flex gap="8" mt="8" mb="4">
    {seasons.map((number) => (
      <Button
        as={Link}
        to={`/episodes/season/${number}`}
        bg="gray"
        p="6"
        activeStyle={{
          background: '#FF9E0C',
        }}
      >
        Season {number}
      </Button>
    ))}
  </Flex>
);

export default Seasons;
