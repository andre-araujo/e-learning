import { connect } from 'react-redux';

import Certificate from './Certificate';
import { actions } from '../../../lib';

const mapStateToProps = ({ courseDetail }) => ({
  courseDetail,
});

const mapDispatchToProps = dispatch => ({
  getCertification: data => dispatch(actions.getCertification(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Certificate);
