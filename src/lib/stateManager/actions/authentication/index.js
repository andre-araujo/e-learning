import * as AuthAPI from '../../../services/AuthAPI';

export const SINGUP = 'SINGUP';
export const GET_TOKEN = 'GET_TOKEN';
export const GET_USER = 'GET_USER';

export function singUp(data) {
  return dispatch => AuthAPI.singUp(data)
    .then(resp => resp.json())
    .then(payload => dispatch({
      type: SINGUP,
      payload,
    }));
}

export function getToken(data) {
  return dispatch => AuthAPI.getToken(data)
    .then(resp => resp.json())
    .then(payload => dispatch({
      type: GET_TOKEN,
      payload,
    }));
}

export function getUser(data) {
  return dispatch => AuthAPI.getUser(data)
    .then(resp => resp.json())
    .then(payload => dispatch({
      type: GET_USER,
      payload,
    }));
}
