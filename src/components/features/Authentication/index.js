import { connect } from 'react-redux';

import Authentication from './Authentication';
import { actions } from '../../../lib';

const mapStateToProps = ({ authentication }) => ({ authentication });

const mapDispatchToProps = dispatch => ({
  requestGetUser: () => dispatch(actions.requestGetUser()),
  requestGetToken: ({
    email,
    password,
  }) => dispatch(actions.requestGetToken({
    email,
    password,
  })),
  requestSingUp: ({
    name,
    email,
    password,
  }) => dispatch(actions.requestSingUp({
    name,
    email,
    password,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
