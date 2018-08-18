import { connect } from 'react-redux';

import CourseCreation from './CourseCreation';

const mapStateToProps = ({ authentication }) => ({
  authentication,
});

export default connect(mapStateToProps)(CourseCreation);
