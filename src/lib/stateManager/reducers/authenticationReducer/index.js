import {
  SINGUP,
  GET_TOKEN,
  GET_USER,
} from '../../actions';

function authenticationReducer(state = {}, action = {}) {
  switch (action.type) {
    case (SINGUP): {
      return {
        ...state,
        singUp: action.payload,
      };
    }
    case (GET_TOKEN): {
      return {
        ...state,
        token: action.payload,
      };
    }
    case (GET_USER): {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
}

export default authenticationReducer;
