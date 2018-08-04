import { AUTHENTICATION } from '../../actions';

function authenticationReducer(state = {}, action = {}) {
  switch (action.type) {
    case (AUTHENTICATION): {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}

export default authenticationReducer;
