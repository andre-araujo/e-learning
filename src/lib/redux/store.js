import { createStore, applyMiddleware } from 'redux';
import loadingMiddleware from 'redux-loading-middleware';
import loadingReducer from 'redux-loading-middleware/loadingReducer';
import thunk from 'redux-thunk';

const store = createStore(
  loadingReducer,
  applyMiddleware(loadingMiddleware, thunk),
);

export default store;
