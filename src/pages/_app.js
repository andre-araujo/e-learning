import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';

import store from '../lib/stateManager/store';
import ModalProvider from '../components/modules/ModalProvider';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <ModalProvider>
            <Component {...pageProps} />
          </ModalProvider>
        </Provider>
      </Container>
    );
  }
}

export default MyApp;
