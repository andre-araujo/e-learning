import { createCourseService, getCourseService, getCourseDetailService } from '../../../services/eLearningAPI';

export const requestCreateCourse = createCourseService.action;
export const getCourses = getCourseService.action;
export const getCourseDetail = getCourseDetailService.action;
