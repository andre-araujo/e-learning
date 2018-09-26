import { Component } from 'react';

import { AlertBar, Button, TextInput } from '../../../elements';

class AuthForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    status: undefined,
  };

  render() {
    const {
      onSubmit,
      login,
    } = this.props;

    const {
      name,
      email,
      password,
      status,
    } = this.state;

    // TODO: move to constants
    const error = (status >= 400) && 'Email ou senha inválidos';

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({ ...this.state })
            .then((resp) => {
              this.setState({ status: resp.payload.status });
              return resp;
            });
        }}
      >
        <AlertBar>
          {error}
        </AlertBar>

        {
          !login && (
            <TextInput
              label="Usuário"
              name="name"
              value={name}
              onChange={e => this.setState({
                name: e.target.value,
              })}
            />
          )
        }

        <TextInput
          label={login ? 'E-mail ou usuário' : 'E-mail'}
          name="email"
          type={login ? 'text' : 'email'}
          value={email}
          onChange={e => this.setState({
            email: e.target.value,
          })}
        />
        <TextInput
          label="Senha"
          name="password"
          value={password}
          type="password"
          onChange={e => this.setState({
            password: e.target.value,
          })}
        />
        <Button secondary full>
          Entrar
        </Button>
      </form>
    );
  }
}

export default AuthForm;
