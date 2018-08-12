import { combineReducers } from 'redux';
import loadingReducer from 'redux-loading-middleware/loadingReducer';

import authentication from './authenticationReducer';

const rootReducer = combineReducers({ authentication, globalLoading: loadingReducer });

export default rootReducer;
