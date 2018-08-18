import { combineReducers } from 'redux';
import loadingReducer from 'redux-loading-middleware/loadingReducer';

import authentication from './authenticationReducer';
import { LOGOUT } from '../actions';
import { IS_CLIENT } from '../../constants';

const rootReducer = (state, action) => {
  let nextState = state;

  if (action.type === LOGOUT) {
    nextState = undefined;

    if (IS_CLIENT) {
      window.localStorage.setItem('token', '');
    }
  }

  return combineReducers({ authentication, globalLoading: loadingReducer })(nextState, action);
};


export default rootReducer;
