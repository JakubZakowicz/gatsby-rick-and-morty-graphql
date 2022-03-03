import React from 'react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { Link } from 'gatsby';

type BackButtonProps = {
  to: string;
};

const BackButton: React.FC<BackButtonProps> = ({ to }) => (
  <Button
    as={Link}
    to={`${to}`}
    position="absolute"
    left="5"
    top="4"
    bg="yellow"
    px="3"
    borderRadius="20"
  >
    <ArrowBackIcon boxSize="7" />
  </Button>
);

export default BackButton;
