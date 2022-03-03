import React from 'react';
import { Link } from 'gatsby';
import { Button } from '@chakra-ui/react';

type DetailsButtonProps = {
  name: string;
  to: string;
  width?: string;
};

const DetailsButton: React.FC<DetailsButtonProps> = ({ name, to, width }) => (
  <Button as={Link} to={to} bg="yellow" borderRadius="15" w={width}>
    {name}
  </Button>
);

export default DetailsButton;
