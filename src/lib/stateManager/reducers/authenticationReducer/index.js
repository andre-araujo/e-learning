import { IS_CLIENT } from '../../../constants';
import {
  SINGUP,
  GET_TOKEN,
  GET_USER,
} from '../../actions';

const initialState = {
  singUp: {},
  getToken: {},
  getUser: {},
  token: IS_CLIENT && window.localStorage.getItem('token'),
};

function authenticationReducer(state = initialState, action = {}) {
  switch (action.type) {
    case (SINGUP): {
      return {
        ...state,
        singUp: action.payload,
        token: action.payload.status && action.payload.token,
      };
    }
    case (GET_TOKEN): {
      return {
        ...state,
        getToken: action.payload,
        token: action.payload.status && action.payload.token,
      };
    }
    case (GET_USER): {
      return {
        ...state,
        getUser: action.payload,
      };
    }
    default:
      return state;
  }
}

export default authenticationReducer;
