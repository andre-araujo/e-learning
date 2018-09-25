import { connect } from 'react-redux';
import Router from 'next/router';

import AuthForm from './components/AuthForm';

import {
  Button,
  ModalProvider,
} from '../..';

import {
  AuthButtons,
} from './Authentication.styles';

function Authentication({
  requestGetToken,
  requestSingUp,
}) {
  const goToDashboard = (resp) => {
    if (resp.payload.status === 200 && resp.payload.token) {
      const isAdmin = JSON.parse(window.atob(resp.payload.token.split('.')[1])).admin;
      Router.push(isAdmin ? '/instructor-panel' : '/courses');
    }
    return resp;
  };

  return (
    <AuthButtons>
      <ModalProvider.Toggle
        title="Login"
        render={(
          <AuthForm
            login
            onSubmit={data => requestGetToken(data).then(goToDashboard)}
          />
        )}
      >
        <Button gap={15} minWidth="100px">
          Entrar
        </Button>
      </ModalProvider.Toggle>
      <ModalProvider.Toggle
        title="Cadastrar"
        render={(
          <AuthForm
            onSubmit={data => requestSingUp(data).then(goToDashboard)}
          />)}
      >
        <Button minWidth="100px">
          cadastrar
        </Button>
      </ModalProvider.Toggle>
    </AuthButtons>
  );
}

const mapStateToProps = ({ authentication }) => ({ authentication });

export default connect(mapStateToProps)(Authentication);
