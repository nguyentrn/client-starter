/* eslint-disable react/jsx-props-no-spreading */
import { Provider as ReduxProvider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";

import store from "../redux";
import { useApollo } from "../apollo";
import GlobalStyle, { theme } from "../styles";

const MyApp = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ReduxProvider store={store}>
      <ApolloProvider client={apolloClient}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <Component {...pageProps}  />
        </ThemeProvider>
      </ApolloProvider>
    </ReduxProvider>
  );
};

export default MyApp;
