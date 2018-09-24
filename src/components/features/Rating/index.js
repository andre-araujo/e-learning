import { connect } from 'react-redux';

import Rating from './Rating';
import { actions } from '../../../lib';

const mapStateToProps = ({ courseDetail, userSubscription }) => ({
  courseDetail,
  userSubscription,
});

const mapDispatchToProps = dispatch => ({
  submitRating: data => dispatch(actions.submitRating(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rating);
