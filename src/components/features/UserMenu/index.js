import { connect } from 'react-redux';

import UserMenu from './UserMenu';
import { actions } from '../../../lib';

const mapStateToProps = ({ authentication }) => ({
  authentication,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actions.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
