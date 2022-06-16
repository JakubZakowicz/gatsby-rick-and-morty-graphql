import React from 'react';
import { Link } from 'gatsby';
import { Button } from '@chakra-ui/react';
import { DetailsButtonProps } from '@/types';

const DetailsButton: React.FC<DetailsButtonProps> = ({ name, to, width }) => (
  <Button as={Link} to={to} bg="yellow" borderRadius="15" w={width} zIndex={0}>
    {name}
  </Button>
);

export default DetailsButton;
