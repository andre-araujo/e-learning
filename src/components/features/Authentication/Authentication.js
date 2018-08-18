import { connect } from 'react-redux';

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
  authentication,
}) {
  if (authentication.token) return null;

  return (
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
  );
}

const mapStateToProps = ({ authentication }) => ({ authentication });

export default connect(mapStateToProps)(Authentication);
