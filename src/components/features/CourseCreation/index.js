import Router from 'next/router';
import { connect } from 'react-redux';

import CourseCreation from './CourseCreation';
import { actions } from '../../../lib';

const mapStateToProps = ({ authentication }) => ({
  authentication,
});

const mapDispatchToProps = dispatch => ({
  requestCreateCourse: data => dispatch(actions.requestCreateCourse(data)).then(() => Router.push('/instructor-panel')),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseCreation);
