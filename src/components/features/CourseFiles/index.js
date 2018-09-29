import { connect } from 'react-redux';

import CourseFiles from './CourseFiles';
import { actions } from '../../../lib';

const mapStateToProps = ({ courseDetail }) => ({
  courseDetail,
});

const mapDispatchToProps = dispatch => ({
  fileDelete: data => dispatch(actions.fileDelete(data)),
  fileUpload: data => dispatch(actions.fileUpload(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseFiles);
