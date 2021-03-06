import { connect } from 'react-redux';

import CourseList from './CourseList';
import { actions } from '../../../lib';

const mapStateToProps = ({ courses, authentication }) => ({
  courses,
  authentication,
});

const mapDispatchToProps = dispatch => ({
  getCourses: () => dispatch(actions.getCourses()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
