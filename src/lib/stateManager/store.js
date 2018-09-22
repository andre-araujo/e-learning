import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createRequestMiddleware } from 'redux-create-request';
import loadingMiddleware from 'redux-loading-middleware';

import rootReducer from './reducers';

const isProd = process.env.NODE_ENV === 'production';

const withDevTools = (middlewares) => {
  if (isProd) return middlewares;

  const { composeWithDevTools } = require('redux-devtools-extension');
  return composeWithDevTools(middlewares);
};

const store = createStore(
  rootReducer,
  withDevTools(
    applyMiddleware(loadingMiddleware, createRequestMiddleware, thunk),
  ),
);

export default store;
