import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import './App.css';
import ExchangeRates from './ExchangeRates';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <ExchangeRates />
      </ApolloProvider>
    </div>
  );
}

export default App;
