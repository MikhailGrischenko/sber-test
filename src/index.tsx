import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "@apollo/react-hooks";
import App from './App';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql&',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
