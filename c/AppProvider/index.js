import PlausibleProvider from 'next-plausible';
import React from 'react';
import dynamic from 'next/dynamic';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import { Global } from '@emotion/react';

const DataProvider = dynamic(() => import('./components/DataProvider'));

const AppProvider = ({
  analytics = {},
  children,
  globalCss,
  hasData = false,
  seo = {},
  theme = {},
}) => (
  <>
    <DefaultSeo {...seo} />
    <Global styles={globalCss} />
    <PlausibleProvider {...analytics}>
      <ChakraProvider resetCSS theme={extendTheme(theme)}>
        {hasData ? <DataProvider>{children}</DataProvider> : children}
      </ChakraProvider>
    </PlausibleProvider>
  </>
);

export default AppProvider;
