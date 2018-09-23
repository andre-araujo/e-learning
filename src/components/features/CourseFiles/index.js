import { connect } from 'react-redux';

import CourseFiles from './CourseFiles';
import { actions } from '../../../lib';

const mapStateToProps = ({ courseDetail, createLesson, authentication }) => ({
  courseDetail,
  createLesson,
  authentication,
});

const mapDispatchToProps = dispatch => ({
  fileUpload: data => dispatch(actions.fileUpload(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseFiles);
