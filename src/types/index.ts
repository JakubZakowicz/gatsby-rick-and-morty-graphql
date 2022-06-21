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

export type PaginationProps = {
  pageCount: number;
  page: number;
  handlePageClick: (selectedItem: { selected: number }) => void;
};

export type CharactersPageProps = {
  data: {
    rickAndMorty: {
      characters: {
        info: {
          pages: number;
        };
        results: {
          id: number;
          name: string;
          status: string;
          species: string;
          type: string;
          gender: string;
          image: string;
        }[];
      };
    };
  };
  pageContext: {
    page: number;
  };
};

export type CharacterDetailsProps = {
  data: {
    rickAndMorty: {
      character: {
        id: number;
        name: string;
        status: string;
        species: string;
        type: string;
        gender: string;
        image: string;
        origin: {
          id: number;
          name: string;
        };
        location: {
          id: number;
          name: string;
        };
        episode: {
          id: number;
          name: string;
          episode: string;
        }[];
      };
    };
  };
};

export type EpisodesSeasonProps = {
  data: {
    rickAndMorty: {
      episodes: {
        results: {
          id: number;
          name: string;
          air_date: string;
          episode: string;
        }[];
      };
    };
  };
};

export type EpisodeDetailsProps = {
  data: {
    rickAndMorty: {
      episode: {
        id: number;
        name: string;
        air_date: string;
        episode: string;
        characters: {
          id: number;
          name: string;
        }[];
      };
    };
  };
};

export type LocationsPageProps = {
  data: {
    rickAndMorty: {
      locations: {
        info: {
          pages: number;
        };
        results: {
          id: number;
          name: string;
        }[];
      };
    };
  };
  pageContext: {
    page: number;
  };
};

export type LocationDetailsProps = {
  data: {
    rickAndMorty: {
      location: {
        id: number;
        name: string;
        type: string;
        dimension: string;
        residents: {
          id;
          name;
        }[];
      };
    };
  };
};
