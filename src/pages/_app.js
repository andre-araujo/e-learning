import App, { Container } from 'next/app';
import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '../lib/stateManager/store';
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
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Fragment>
              <ModalProvider>
                <Header addOn={(
                  <Fragment>
                    <UserMenu />
                  </Fragment>
                )}
                />
                <Component {...pageProps} />
              </ModalProvider>
              <LoadingOverlay />
            </Fragment>
          </PersistGate>
        </Provider>
      </Container>
    );
  }
}

export default MyApp;
