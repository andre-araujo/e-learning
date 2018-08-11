import { Component } from 'react';
import { connect } from 'react-redux';

import AuthForm from './components/AuthForm';

import Button from '../../elements/Button';
import ModalProvider from '../../modules/ModalProvider';

import * as actions from '../../../lib/stateManager/actions';

import {
  AuthButtons,
} from './styles';

class Authentication extends Component {
  state = {
    authenticated: false,
  }

  render() {
    const { authenticated } = this.state;
    const {
      getToken,
      singUp,
    } = this.props;

    return (
      <div>
        {
          !authenticated && (
            <AuthButtons>
              <ModalProvider.Toggle
                title="Login"
                render={() => (
                  <AuthForm login onSubmit={getToken} />)}
              >
                <Button secondary gap={15}>
                Entrar
                </Button>
              </ModalProvider.Toggle>
              <ModalProvider.Toggle
                title="Login"
                render={() => (
                  <AuthForm onSubmit={singUp} />)}
              >
                <Button>
                cadastrar
                </Button>
              </ModalProvider.Toggle>
            </AuthButtons>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = ({ authentication }) => ({ authentication });

const mapDispatchToProps = dispatch => ({
  getToken: ({
    email,
    password,
  }) => dispatch(actions.getToken({
    email,
    password,
  })),
  getUser: () => dispatch(actions.getUser()),
  singUp: ({
    name,
    email,
    password,
  }) => dispatch(actions.singUp({
    name,
    email,
    password,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
