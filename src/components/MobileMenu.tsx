import React from 'react';
import { Link } from 'gatsby';
import {
  List,
  ListItem,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { links } from '../utils/links';
import MenuBar from './MenuBar';

const MobileMenu: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <MenuBar onOpen={onOpen} />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <List bg="gray" h="full" py="5" px="10" lineHeight="10" fontSize="xl">
            {links.map((link) => (
              <ListItem key={link.name}>
                <Link
                  to={link.to}
                  style={{
                    padding: '10px 60px',
                  }}
                  activeStyle={{
                    color: '#FF9E0C',
                    background: '#24282F',
                    borderRadius: '10px',
                  }}
                  onClick={onClose}
                >
                  {link.name}
                </Link>
              </ListItem>
            ))}
          </List>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
