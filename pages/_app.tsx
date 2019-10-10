import App from "next/app";
import Head from "next/head";
import React from "react";
import { ApolloProvider } from "react-apollo";
import "bootstrap/dist/css/bootstrap.min.css";
import withApollo from "../lib/withApollo";

type AppProps = {
  apolloClient: any;
};

class MyApp extends App<AppProps> {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <>
        <Head>
          <title>Incode test</title>
        </Head>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </>
    );
  }
}

export default withApollo(MyApp);
