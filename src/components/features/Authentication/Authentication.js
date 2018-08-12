import { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

import AuthForm from './components/AuthForm';

import Button from '../../elements/Button';
import ModalProvider from '../../modules/ModalProvider';

import * as actions from '../../../lib/stateManager/actions';

import {
  AuthButtons,
} from './Authentication.styles';

class Authentication extends Component {
  state = {
    authenticated: false,
  }

  render() {
    const { authenticated } = this.state;
    const {
      requestGetToken,
      requestSingUp,
      authentication,
    } = this.props;

    if (authentication.token) {
      Router.push('/dashboard');
    }

    return (
      <div>
        {
          !authenticated && (
            <AuthButtons>
              <ModalProvider.Toggle
                title="Login"
                render={(
                  <AuthForm
                    login
                    onSubmit={requestGetToken}
                  />
                )}
              >
                <Button secondary gap={15}>
                Entrar
                </Button>
              </ModalProvider.Toggle>
              <ModalProvider.Toggle
                title="Cadastrar"
                render={(
                  <AuthForm
                    onSubmit={requestSingUp}
                  />)}
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
  requestGetToken: ({
    email,
    password,
  }) => dispatch(actions.requestGetToken({
    email,
    password,
  })),
  requestGetUser: () => dispatch(actions.requestGetUser()),
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
