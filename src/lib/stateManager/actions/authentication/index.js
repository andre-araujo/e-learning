import * as AuthAPI from '../../../services/AuthAPI';

export const SINGUP = 'SINGUP';
export const GET_TOKEN = 'GET_TOKEN';
export const GET_USER = 'GET_USER';
export const LOGOUT = 'LOGOUT';

export function requestSingUp(data) {
  return dispatch => AuthAPI.singUp(data)
    .then(payload => dispatch({
      type: SINGUP,
      payload,
    }));
}

export function requestGetToken(data) {
  return dispatch => AuthAPI.getToken(data)
    .then(payload => dispatch({
      type: GET_TOKEN,
      payload,
    }));
}

export function requestGetUser() {
  return dispatch => AuthAPI.getUser()
    .then(payload => dispatch({
      type: GET_USER,
      payload,
    }));
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
