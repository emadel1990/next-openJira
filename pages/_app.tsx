import Head from 'next/head';
import { FC } from 'react';
import { EntriesProvider } from '../context/entries';
import { UIProvider } from '../context/ui';

import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';

import { DarkTheme, LightTheme } from '../themes';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
export default function MyApp<Props>(props: {
  Component: FC;
  emotionCache?: EmotionCache | undefined;
  pageProps: JSX.Element;
}) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <EntriesProvider entries={[]}>
      <UIProvider
        sideMenuOpen={false}
        addingTask={false}
        isDraggingTask={false}>
        <CacheProvider value={emotionCache}>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          <ThemeProvider theme={DarkTheme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </UIProvider>
    </EntriesProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired
};
