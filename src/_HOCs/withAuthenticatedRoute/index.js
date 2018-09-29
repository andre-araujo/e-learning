import { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

import { actions } from '../../lib';

const withAuthenticatedRoute = (InnerComponent) => {
  class WrappedComponent extends Component {
    async componentDidMount() {
      const { requestGetUser } = this.props;

      try {
        const userResp = await requestGetUser();

        if (userResp.payload.status !== 200) {
          this.logout();
        }
      } catch (e) {
        this.logout();
      }
    }

    logout = () => {
      const { logout } = this.props;

      Router.push('/').then(logout);
    }

    render() {
      return (
        <InnerComponent {...this.props} />
      );
    }
  }

  const mapDispatchToProps = dispatch => ({
    requestGetUser: () => dispatch(actions.requestGetUser()),
    logout: () => dispatch(actions.logout()),
  });

  return connect(null, mapDispatchToProps)(WrappedComponent);
};

export default withAuthenticatedRoute;
