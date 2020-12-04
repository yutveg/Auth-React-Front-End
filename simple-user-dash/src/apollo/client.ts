import { getAccessToken, setAccessToken } from '../accessToken';
import jwtDecode from 'jwt-decode';
import { TokenRefreshLink } from 'apollo-link-token-refresh';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloLink,
} from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const accessToken = getAccessToken();
  operation.setContext({
    headers: {
      authorization: accessToken ? `bearer ${accessToken}` : '',
    },
  });

  return forward(operation);
});

export const client = new ApolloClient({
  credentials: 'include',
  cache: new InMemoryCache(),
  link: ApolloLink.from([
    new TokenRefreshLink({
      accessTokenField: 'accessToken',
      isTokenValidOrUndefined: () => {
        const token = getAccessToken();
        if (!token) {
          return true;
        }

        try {
          const { exp } = jwtDecode<any>(token);
          if (Date.now() >= exp * 1000) {
            return false;
          } else {
            return true;
          }
        } catch {
          return false;
        }
      },
      fetchAccessToken: () => {
        return fetch('http://localhost:4000/refresh_token', {
          method: 'POST',
          credentials: 'include',
        });
      },
      handleFetch: (accessToken) => {
        setAccessToken(accessToken);
      },
      handleResponse: (operation, accessTokenField) => (response: any) => {
        // here you can parse response, handle errors, prepare returned token to
        // further operations

        // returned object should be like this:
        // {
        //    access_token: 'token string here'
        // }
        console.log('response from handleResponse', response);
      },
      handleError: (err) => {
        // full control over handling token fetch Error
        console.warn('Your refresh token is invalid. Try to relogin');
        console.error(err);
      },
    }),
    authMiddleware,
    httpLink,
  ]),
});
