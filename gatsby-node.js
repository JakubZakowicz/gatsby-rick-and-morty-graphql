const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { data: charactersData } = await graphql(`
    query CharactersCountQuery {
      rickAndMorty {
        characters {
          info {
            count
            pages
          }
        }
      }
    }
  `);

  const charactersInfo = charactersData.rickAndMorty.characters.info;

  const charactersPages = charactersInfo.pages;
  for (let i = 1; i <= charactersPages; i += 1) {
    createPage({
      path: `/characters/${i}`,
      component: path.resolve('src/templates/characters-page.tsx'),
      context: { page: i },
    });
  }

  const charactersCount = charactersInfo.count;
  for (let i = 1; i <= charactersCount; i += 1) {
    createPage({
      path: `/character/${i}`,
      component: path.resolve('src/templates/character-details.tsx'),
      context: { id: i },
    });
  }

  const seasons = 5;
  for (let i = 1; i <= seasons; i += 1) {
    createPage({
      path: `/episodes/season/${i}`,
      component: path.resolve('src/templates/episodes-season.tsx'),
      context: { season: i.toString() },
    });
  }

  const { data: episodesData } = await graphql(`
    query EpisodesCountQuery {
      rickAndMorty {
        episodes {
          info {
            count
          }
        }
      }
    }
  `);

  const episodesCount = episodesData.rickAndMorty.episodes.info.count;
  for (let i = 1; i <= episodesCount; i += 1) {
    createPage({
      path: `/episode/${i}`,
      component: path.resolve('src/templates/episode-details.tsx'),
      context: { id: i },
    });
  }

  const { data: locationsData } = await graphql(`
    query LocationsCountQuery {
      rickAndMorty {
        locations {
          info {
            count
            pages
          }
        }
      }
    }
  `);

  const locationsInfo = locationsData.rickAndMorty.locations.info;

  const locationsPages = locationsInfo.pages;
  for (let i = 1; i <= locationsPages; i += 1) {
    createPage({
      path: `/locations/${i}`,
      component: path.resolve('src/templates/locations-page.tsx'),
      context: { page: i },
    });
  }

  const locationsCount = locationsInfo.count;
  for (let i = 1; i <= locationsCount; i += 1) {
    createPage({
      path: `/location/${i}`,
      component: path.resolve('src/templates/location-details.tsx'),
      context: { id: i },
    });
  }
};
