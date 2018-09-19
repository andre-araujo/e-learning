import { connect } from 'react-redux';

import CourseDetails from './CourseDetails';
import { actions } from '../../../lib';

const mapStateToProps = ({ courseDetail, createLesson, authentication }) => ({
  courseDetail,
  createLesson,
  authentication,
});

const mapDispatchToProps = dispatch => ({
  getCourseDetail: id => dispatch(actions.getCourseDetail(id)),
  createLesson: data => dispatch(actions.createLesson(data)),
  createActivity: data => dispatch(actions.createActivity(data)),
  joinCourse: (courseId) => {
    dispatch(actions.joinCourse(courseId))
      .then(() => dispatch(actions.requestGetUser()));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetails);
