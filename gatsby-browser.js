const React = require('react');
const { ChakraProvider } = require('@chakra-ui/react');
const {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} = require('@apollo/client');
const Layout = require('./src/components/Layout').default;

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

exports.wrapRootElement = ({ element }) => (
  <ChakraProvider resetCSS>
    <ApolloProvider client={client}>{element}</ApolloProvider>
  </ChakraProvider>
);

exports.wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
