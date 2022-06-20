import React from 'react';
import { graphql } from 'gatsby';
import { Box, Container, Text } from '@chakra-ui/react';
import { EpisodeDetailsProps } from '@/types';
import BackButton from '../components/BackButton';
import StyledLink from '../components/StyledLink';

export const EpisodeQuery = graphql`
  query EpisodeQuery($id: ID!) {
    rickAndMorty {
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
  }
`;

const EpisodeDetails: React.FC<EpisodeDetailsProps> = ({ data }) => {
  const { episode } = data.rickAndMorty;
  const seasonAndEpisode = episode.episode.split(/[A-Z]/);
  const seasonNumber = Number(seasonAndEpisode[1]);
  const episodeNumber = Number(seasonAndEpisode[2]);

  return (
    <Container>
      <Box
        mt="10"
        bg="gray"
        px="7"
        pt="3"
        pb="7"
        borderRadius="20"
        position="relative"
        boxShadow="dark-lg"
      >
        <Text fontSize="xl" fontWeight="bold" align="center">
          Episode name:
        </Text>
        <Text fontSize="xl" fontWeight="bold" align="center">
          {episode.name}
        </Text>
        <Text mt="10">Season: {seasonNumber}</Text>
        <Text mt="5">Episode: {episodeNumber}</Text>
        <Text mt="5">Air date: {episode.air_date}</Text>
        <Text mt="5">Characters: </Text>
        {episode.characters.map((character) => (
          <Text display="inline">
            <StyledLink
              name={character.name}
              to={`/characters/${character.id}`}
              isSecondary
            />
            ,&nbsp;
          </Text>
        ))}
        <BackButton />
      </Box>
    </Container>
  );
};

export default EpisodeDetails;
