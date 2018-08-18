import { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../lib';

const withAuthenticatedRoute = (InnerComponent) => {
  class WrappedComponent extends Component {
    async componentDidMount() {
      const { requestGetUser, logout } = this.props;
      try {
        const userResp = await requestGetUser();

        if (userResp.payload.status !== 200) {
          logout();
        }
      } catch (e) {
        logout();
      }
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
