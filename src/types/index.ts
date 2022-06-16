import { MouseEventHandler, ReactNode } from 'react';

export interface BaseComponentProps {
  children?: ReactNode;
}

export type linkType = {
  name: string;
  to: string;
};

export type CharacterType = {
  id: number;
};

export type LocationProps = {
  id: number;
};

export type EpisodeProps = { id: number };

export type SeasonProps = {
  season: number;
};

export type DetailsButtonProps = {
  name: string;
  to: string;
  width?: string;
};

export type LayoutProps = {
  children: React.ReactNode;
};

export type MenuBarProps = {
  toggleDisplayed: MouseEventHandler<HTMLButtonElement>;
};

export type StyledLinkProps = {
  name?: string;
  to: string;
  fontSize?: string;
  children?: JSX.Element;
  isSecondary?: boolean;
};
