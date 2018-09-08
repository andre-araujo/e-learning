import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createRequestMiddleware } from 'redux-create-request';
import loadingMiddleware from 'redux-loading-middleware';

import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(loadingMiddleware, thunk, createRequestMiddleware),
  ),
);

export default store;
