import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Link } from '@chakra-ui/react';
import { StyledLinkProps } from '@/types';

const StyledLink: React.FC<StyledLinkProps> = ({
  name,
  to,
  children = null,
  fontSize = 'md',
}) => (
  <Link
    as={GatsbyLink}
    to={to}
    _hover={{ color: 'white' }}
    fontSize={fontSize}
    color="yellow"
  >
    {name}
    {children}
  </Link>
);

export default StyledLink;
