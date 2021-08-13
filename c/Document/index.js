import React from 'react';
import { ColorModeScript } from '@chakra-ui/react';
import { Head, Html, Main, NextScript } from 'next/document';
import AuthRedirectScript from './components/AuthRedirectScript';

const Document = ({
  __NEXT_DATA__: {
    props: {
      pageProps: { isPrivateRoute, isPublicRoute },
    },
  },
  initialColorMode,
  privateRouteRedirect,
  publicRouteRedirect,
}) => (
  <Html lang="en">
    <Head />
    <body>
      {!!privateRouteRedirect && !!publicRouteRedirect && (
        <AuthRedirectScript
          isPrivateRoute={isPrivateRoute}
          isPublicRoute={isPublicRoute}
          privateRouteRedirect={privateRouteRedirect}
          publicRouteRedirect={publicRouteRedirect}
        />
      )}
      {initialColorMode && (
        <ColorModeScript initialColorMode={initialColorMode} />
      )}
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
