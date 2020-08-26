/* eslint-disable react/jsx-props-no-spreading */
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";

import { useApollo } from "../apollo";
import store from "../redux";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

const MyApp = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
  );
};

export default MyApp;
