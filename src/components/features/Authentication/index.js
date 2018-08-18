import { connect } from 'react-redux';
import Router from 'next/router';

import Authentication from './Authentication';
import { actions } from '../../../lib';

const mapStateToProps = ({ authentication }) => ({ authentication });

const goToDashboard = (resp) => {
  if (resp.payload.status === 200) {
    Router.push('/my-courses');
  }
  return resp;
};

const mapDispatchToProps = dispatch => ({
  requestGetUser: () => dispatch(actions.requestGetUser()),
  requestGetToken: ({
    email,
    password,
  }) => dispatch(actions.requestGetToken({
    email,
    password,
  })).then(goToDashboard),
  requestSingUp: ({
    name,
    email,
    password,
  }) => dispatch(actions.requestSingUp({
    name,
    email,
    password,
  })).then(goToDashboard),
});

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
