import { Component } from 'react';

import Button from '../../../elements/Button';
import Input from '../../../elements/TextInput';

class AuthForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  render() {
    const { onSubmit, login } = this.props;
    const {
      name,
      email,
      password,
    } = this.state;

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({ ...this.state });
        }}
      >
        {
          !login && (
            <Input
              label="Nome"
              name="name"
              value={name}
              onChange={e => this.setState({
                name: e.target.value,
              })}
            />
          )
        }
        <Input
          label="E-mail"
          name="email"
          value={email}
          onChange={e => this.setState({
            email: e.target.value,
          })}
        />
        <Input
          label="Senha"
          name="password"
          value={password}
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
