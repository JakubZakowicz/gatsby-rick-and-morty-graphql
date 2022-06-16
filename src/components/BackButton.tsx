import React from 'react';
import { navigate } from 'gatsby';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

const BackButton: React.FC = () => (
  <Button
    position="absolute"
    left="5"
    top="4"
    bg="yellow"
    px="3"
    borderRadius="20"
    onClick={() => navigate(-1)}
  >
    <ArrowBackIcon boxSize="7" />
  </Button>
);

export default BackButton;
