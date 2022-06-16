import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int) {
    characters(page: $page) {
      info {
        pages
      }
      results {
        id
        name
        status
        species
        type
        gender
        image
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
      origin {
        id
        name
      }
      location {
        id
        name
      }
      episode {
        id
        name
        episode
      }
    }
  }
`;

export const GET_EPISODES = gql`
  query getEpisodes($season: String!) {
    episodes(filter: { episode: $season }) {
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;

export const GET_EPISODE = gql`
  query getEpisode($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        name
      }
    }
  }
`;

export const GET_LOCATIONS = gql`
  query getLocations($page: Int, $name: String) {
    locations(page: $page, filter: { name: $name }) {
      info {
        next
      }
      results {
        id
        name
      }
    }
  }
`;

export const GET_LOCATION = gql`
  query getLocation($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        name
      }
    }
  }
`;
