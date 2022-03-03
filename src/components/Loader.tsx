import React from 'react';
import { Box, Spinner, Text } from '@chakra-ui/react';

const Loader: React.FC = () => (
  <Box position="absolute" top="50%" left="50%">
    <Spinner thickness="5px" speed="0.65s" color="#40FB01" size="xl" />
    <Text>Loading...</Text>
  </Box>
);

export default Loader;
