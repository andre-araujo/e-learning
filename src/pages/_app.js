import App, { Container } from 'next/app';
import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import store from '../lib/stateManager/store';
import {
  LoadingOverlay,
  ModalProvider,
  Header,
  UserMenu,
} from '../components';


class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Fragment>
            <ModalProvider>
              <Header addOn={(
                <Fragment>
                  <UserMenu />
                </Fragment>
              )}
              />
              {
                router.pathname !== '/' && (
                  <LoadingOverlay />
                )
              }
              <Component {...pageProps} />
            </ModalProvider>
          </Fragment>
        </Provider>
      </Container>
    );
  }
}

export default MyApp;
