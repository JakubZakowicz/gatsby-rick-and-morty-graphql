const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: 'Rick and Morty',
    description:
      'This is a "Rick and Morty Website", where you can see all the details about all characters, locations and episodes from one of the most popular and beloved TV show called "Rick and Morty"',
    author: 'Jakub Zakowicz',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    '@chakra-ui/gatsby-plugin',
    'gatsby-plugin-use-query-params',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'RMAPI',
        fieldName: 'rickAndMorty',
        url: 'https://rickandmortyapi.com/graphql',
      },
    },
  ],
};
