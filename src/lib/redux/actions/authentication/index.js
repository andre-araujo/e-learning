import * as AuthAPI from '../../../services/AuthAPI';

export const AUTHENTICATION = 'AUTHENTICATION';

export function authenticate(login, password) {
  return dispatch => AuthAPI.authenticate(login, password)
    .then(resp => resp.json())
    .then(payload => dispatch({
      type: AUTHENTICATION,
      payload,
    }));
}
