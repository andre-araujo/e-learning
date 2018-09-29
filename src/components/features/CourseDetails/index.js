import { connect } from 'react-redux';

import CourseDetails from './CourseDetails';
import { actions } from '../../../lib';

const mapStateToProps = ({ courseDetail, createLesson, authentication }) => ({
  courseDetail,
  createLesson,
  authentication,
});

const mapDispatchToProps = dispatch => ({
  getUserSubscription: data => dispatch(actions.getUserSubscription(data)),
  getCourseDetail: id => dispatch(actions.getCourseDetail(id)),
  joinCourse: (courseId) => {
    dispatch(actions.joinCourse(courseId))
      .then(() => dispatch(actions.requestGetUser()));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetails);
