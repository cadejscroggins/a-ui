import PlausibleProvider from 'next-plausible';
import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import { Global } from '@emotion/react';

const PageProvider = ({
  analytics = {},
  children,
  globalCss,
  seo = {},
  theme = {},
}) => (
  <>
    <DefaultSeo {...seo} />
    <Global styles={globalCss} />
    <PlausibleProvider {...analytics}>
      <ChakraProvider resetCSS theme={extendTheme(theme)}>
        {children}
      </ChakraProvider>
    </PlausibleProvider>
  </>
);

export default PageProvider;
