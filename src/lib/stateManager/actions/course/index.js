import * as eLearningAPI from '../../../services/eLearningAPI';

export const CREATE_COURSE = 'CREATE_COURSE';
export const GET_COURSES = 'GET_COURSES';

export function requestCreateCourse(data) {
  return dispatch => eLearningAPI.createCourse(data)
    .then(payload => dispatch({
      type: CREATE_COURSE,
      payload,
    }));
}

export function getCourses(data) {
  return dispatch => eLearningAPI.getCourses(data)
    .then(payload => dispatch({
      type: GET_COURSES,
      payload,
    }));
}
