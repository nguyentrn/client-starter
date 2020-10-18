/* eslint-disable react/jsx-props-no-spreading */
import { Provider as ReduxProvider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

import store from '../redux';
import { useApollo } from '../apollo';
import GlobalStyle, { theme } from '../styles';

const MyApp = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ReduxProvider store={store}>
      <Head>
        <title>Client Starter</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ApolloProvider client={apolloClient}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </ReduxProvider>
  );
};

export default MyApp;
