import { createCourseService, getCourseService } from '../../../services/eLearningAPI';

export const requestCreateCourse = createCourseService.action;
export const getCourses = getCourseService.action;
