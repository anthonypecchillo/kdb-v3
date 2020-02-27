/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { RetryLink } from 'apollo-link-retry';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './components/App';

// import sendToLogger from './logger';
// import logOutUser from './logout';

const cache = new InMemoryCache();

const requestLink = new HttpLink({
  uri: 'http://localhost:4000/',
});

// const errorLink = onError(({ graphqlErrors, networkError }) => {
//   if (graphqlErrors) sendToLogger(graphqlErrors);
//   if (networkError) logoutUser();
// });

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) console.log('GRAPHQL ERROR: ', graphqlErrors);
  if (networkError) console.log('NETWORK ERROR: ', networkError);
});

const retryLink = new RetryLink({
  max: 10,
  delay: 5000,
  interval: (delay, count) => (count > 5 ? 10000 : delay),
});

const link = ApolloLink.from([retryLink, errorLink, requestLink]);

const client = new ApolloClient({
  cache,
  link,
  defaultOptions: {
    query: {
      // fetchPolicy: 'network-only',
      errorPolicy: 'all',
      partialRefetch: true,
    },
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Route component={App} />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
