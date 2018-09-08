import { connect } from 'react-redux';

import CourseDetails from './CourseDetails';
import { actions } from '../../../lib';

const mapStateToProps = ({ courseDetail }) => ({
  courseDetail,
});

const mapDispatchToProps = dispatch => ({
  getCourseDetail: id => dispatch(actions.getCourseDetail(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetails);
