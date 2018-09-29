import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createRequestMiddleware } from 'redux-create-request';
import loadingMiddleware from 'redux-loading-middleware';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const isProd = process.env.NODE_ENV === 'production';

const withDevTools = (middlewares) => {
  if (isProd) return middlewares;

  const { composeWithDevTools } = require('redux-devtools-extension');
  return composeWithDevTools(middlewares);
};

export const store = createStore(
  persistedReducer,
  withDevTools(
    applyMiddleware(loadingMiddleware, createRequestMiddleware, thunk),
  ),
);

export const persistor = persistStore(store);
