/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
// import { Helmet } from "react-helmet";
import whyDidYouRender from "@welldone-software/why-did-you-render";

import store from "../redux";
import { useApollo } from "../apollo";
import GlobalStyle, { theme } from "../styles";

if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    trackHooks: true,
    // eslint-disable-next-line global-require
    trackExtraHooks: [[require("react-redux/lib"), "useSelector"]],
  });
}

const MyApp = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ReduxProvider store={store}>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>Nguyen&apos;s Client Starter</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap"
          rel="stylesheet"
        />
      </Helmet> */}
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </ReduxProvider>
  );
};

export default MyApp;
