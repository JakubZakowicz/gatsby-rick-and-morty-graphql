import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Link } from '@chakra-ui/react';

type StyledLinkProps = {
  name?: string;
  to: string;
  fontSize?: string;
  children?: JSX.Element;
  isSecondary?: boolean;
};

const StyledLink: React.FC<StyledLinkProps> = ({
  name,
  to,
  children = null,
  fontSize = 'md',
  isSecondary = false,
}) => (
  <Link
    as={GatsbyLink}
    to={to}
    _hover={{ color: isSecondary ? 'white' : 'yellow' }}
    fontSize={fontSize}
    color={`${isSecondary ? 'yellow' : 'white'}`}
  >
    {name}
    {children}
  </Link>
);

export default StyledLink;
