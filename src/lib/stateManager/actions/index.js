import {
  createActivityService,
  submitUserActivityService,
  createLessonService,
  createCourseService,
  getCourseService,
  getCourseDetailService,
  joinCourseService,
} from '../../services/eLearningAPI';


export const createActivity = createActivityService.action;
export const submitUserActivity = submitUserActivityService.action;

export const requestCreateCourse = createCourseService.action;
export const getCourses = getCourseService.action;
export const getCourseDetail = getCourseDetailService.action;
export const joinCourse = joinCourseService.action;

export const createLesson = createLessonService.action;

export * from './authentication'; // TODO: use redux-create-request API
