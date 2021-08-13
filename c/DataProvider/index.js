import * as A from '@apollo/client';
import React from 'react';
import { createAuthLink } from 'aws-appsync-auth-link';
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';
import { setContext } from '@apollo/client/link/context';
import Auth from '../Auth';

const appsyncLinkConfig = {
  auth: {
    credentials: Auth.currentCredentials,
    type: process.env.apiAuthenticationType,
  },
  region: process.env.apiRegion,
  url: process.env.apiGraphqlEndpoint,
};

const DataProvider = ({ children }) => (
  <A.ApolloProvider
    client={
      new A.ApolloClient({
        cache: new A.InMemoryCache(),
        link: A.from([
          setContext(async () => ({
            headers: {
              jwt: (await Auth.currentAuthenticatedUser())?.signInUserSession
                ?.accessToken?.jwtToken,
            },
          })),
          createAuthLink(appsyncLinkConfig),
          createSubscriptionHandshakeLink(appsyncLinkConfig),
        ]),
      })
    }
  >
    {children}
  </A.ApolloProvider>
);

export default DataProvider;
