import { Component } from 'react';

import Button from '../../elements/Button';
import Input from '../../elements/TextInput';
import ModalProvider from '../../modules/ModalProvider';

import {
  AuthButtons,
} from './styles';

class Authentication extends Component {
  state = {
    authenticated: false,
  }

  renderForm = () => (
    <form>
      <Input label="E-mail" />
      <Input label="Senha" />
      <Button secondary full>
                Entrar
      </Button>
    </form>
  )

  render() {
    const { authenticated } = this.state;

    return (
      <div>
        {
          !authenticated && (
            <AuthButtons>
              <ModalProvider.Toggle title="Login" render={this.renderForm}>
                <Button secondary gap={15}>
                Entrar
                </Button>
              </ModalProvider.Toggle>
              <ModalProvider.Toggle render={() => null}>
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

export default Authentication;
