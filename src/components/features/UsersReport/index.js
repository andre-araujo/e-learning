import { connect } from 'react-redux';

import UsersReport from './UsersReport';
import { actions } from '../../../lib';

const mapStateToProps = ({ usersReport }) => ({
  usersReport,
});

const mapDispatchToProps = dispatch => ({
  getUsersReport: data => dispatch(actions.getUsersReport(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersReport);
