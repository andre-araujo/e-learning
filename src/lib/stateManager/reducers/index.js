import { combineReducers } from 'redux';
import loadingReducer from 'redux-loading-middleware/loadingReducer';
import storage from 'redux-persist/lib/storage';
import { LOGOUT } from '../actions';

import authentication from './authenticationReducer';
import {
  createLessonService,
  createCourseService,
  getCourseService,
  getCourseDetailService,
  getUserSubscriptionService,
  joinCourseService,
  createActivityService,
  getUsersReportService,
} from '../../services/eLearningAPI';

const rootReducer = (state, action) => {
  let nextState = state;

  if (action.type === LOGOUT) {
    storage.removeItem('persist:root');
    nextState = undefined;
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
    usersReport: getUsersReportService.reducer,
    globalLoading: loadingReducer,
  })(nextState, action);
};

export default rootReducer;
