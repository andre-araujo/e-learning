import { connect } from 'react-redux';

import InstructorPanel from './InstructorPanel';
import { actions } from '../../../lib';

const mapStateToProps = ({ courses }) => ({
  courses,
});

const mapDispatchToProps = dispatch => ({
  getCourses: () => dispatch(actions.getCourses()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InstructorPanel);
