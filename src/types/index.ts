import { ReactNode } from 'react';

export interface BaseComponentProps {
  children?: ReactNode;
}

export type linkType = {
  name: string;
  to: string;
};
