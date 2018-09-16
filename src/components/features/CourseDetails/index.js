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
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetails);
