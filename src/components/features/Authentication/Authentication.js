import Router from 'next/router';

import AuthForm from './AuthForm';

import { Button } from '../../elements';
import { ModalProvider } from '../../modules';

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

export default Authentication;
