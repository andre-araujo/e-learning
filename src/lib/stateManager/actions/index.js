import {
  createActivityService,
  submitUserActivityService,
  createLessonService,
  createCourseService,
  getCourseService,
  getCourseDetailService,
  joinCourseService,
  submitUserLessonService,
  getUserSubscriptionService,
  fileUploadService,
  getUsersReportService,
  getCertificationService,
} from '../../services/eLearningAPI';

export const getUsersReport = getUsersReportService.action;
export const createLesson = createLessonService.action;
export const createActivity = createActivityService.action;
export const submitUserActivity = submitUserActivityService.action;
export const submitUserLesson = submitUserLessonService.action;
export const getUserSubscription = getUserSubscriptionService.action;

export const requestCreateCourse = createCourseService.action;
export const getCourses = getCourseService.action;
export const getCourseDetail = getCourseDetailService.action;
export const joinCourse = joinCourseService.action;

export const fileUpload = fileUploadService.action;
export const getCertification = getCertificationService.action;

export * from './authentication'; // TODO: use redux-create-request API
