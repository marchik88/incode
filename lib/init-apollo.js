import { ApolloClient, InMemoryCache } from "apollo-boost";
import { createHttpLink } from "apollo-link-http";

import fetch from "isomorphic-unfetch";

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

const GRAPHQL_URL = "https://apollo-server.sse.codesandbox.io/";

function create(initialState) {
  const httpLink = createHttpLink({
    uri: GRAPHQL_URL
  });

  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link: httpLink,
    resolvers: {},
    cache: new InMemoryCache().restore({ initialState } || {}),
    defaultOptions: {
      watchQuery: {
        errorPolicy: "all"
      },
      query: {
        errorPolicy: "all"
      },
      mutate: {
        errorPolicy: "all"
      }
    }
  });
}

export default function initApollo(initialState, options) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState, options);
  }

  // Reuse client on the client-side, but only if there is not a possibility of token change
  if (!apolloClient || options.getToken) {
    apolloClient = create(initialState, options);
  }

  return apolloClient;
}
