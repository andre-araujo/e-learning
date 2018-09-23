import { combineReducers } from 'redux';
import loadingReducer from 'redux-loading-middleware/loadingReducer';

import authentication from './authenticationReducer';
import {
  createLessonService,
  createCourseService,
  getCourseService,
  getCourseDetailService,
  getUserSubscriptionService,
  joinCourseService,
  createActivityService,
} from '../../services/eLearningAPI';

import { LOGOUT } from '../actions';
import { IS_CLIENT } from '../../constants';

const rootReducer = (state, action) => {
  let nextState = state;

  if (action.type === LOGOUT) {
    nextState = undefined;

    if (IS_CLIENT && window.localStorage.getItem('token')) {
      window.location.href = '/';
      window.localStorage.removeItem('token');
    }
  }

  return combineReducers({
    authentication,
    userSubscription: getUserSubscriptionService.reducer,
    createCourse: createCourseService.reducer,
    courses: getCourseService.reducer,
    joinCourse: joinCourseService.reducer,
    courseDetail: getCourseDetailService.reducer,
    createLesson: createLessonService.reducer,
    createActivity: createActivityService.reducer,
    globalLoading: loadingReducer,
  })(nextState, action);
};

export default rootReducer;
