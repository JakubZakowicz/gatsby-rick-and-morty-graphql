import React, { MouseEventHandler } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';

type MenuBarProps = {
  toggleDisplayed: MouseEventHandler<HTMLButtonElement>;
};

const MenuBar: React.FC<MenuBarProps> = ({ toggleDisplayed }) => (
  <button type="button" onClick={toggleDisplayed}>
    <HamburgerIcon
      marginTop="4"
      marginLeft="4"
      width="41"
      height="41"
      color="yellow"
    />
  </button>
);

export default MenuBar;
