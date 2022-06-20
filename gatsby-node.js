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
          }
        }
      }
    }
  `);

  const charactersCount = charactersData.rickAndMorty.characters.info.count;
  for (let i = 1; i <= charactersCount; i += 1) {
    createPage({
      path: `/character/${i}`,
      component: path.resolve('src/templates/character-details.tsx'),
      context: { id: i },
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
          }
        }
      }
    }
  `);

  const locationsCount = locationsData.rickAndMorty.locations.info.count;
  for (let i = 1; i <= locationsCount; i += 1) {
    createPage({
      path: `/location/${i}`,
      component: path.resolve('src/templates/location-details.tsx'),
      context: { id: i },
    });
  }
};
