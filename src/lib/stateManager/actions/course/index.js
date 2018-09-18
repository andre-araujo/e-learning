import {
  createCourseService,
  getCourseService,
  getCourseDetailService,
  joinCourseService,
} from '../../../services/eLearningAPI';

export const requestCreateCourse = createCourseService.action;
export const getCourses = getCourseService.action;
export const getCourseDetail = getCourseDetailService.action;
export const joinCourse = joinCourseService.action;
