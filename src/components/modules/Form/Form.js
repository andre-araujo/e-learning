import React, { createContext, Component } from 'react';
import { node, func, string } from 'prop-types';
import Field from './components/Field';

export const FormContext = createContext();

class Form extends Component {
  static Field = props => (
    <FormContext.Consumer>
      {
        context => <Field context={context} {...props} />
      }
    </FormContext.Consumer>
  )

  state = {
    fields: {},
  }

  setFieldValue = (name, value) => {
    this.setState(({ fields }) => ({
      fields: {
        ...fields,
        [name]: value,
      },
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  render() {
    const {
      children,
      name,
      onSubmit,
      ...props
    } = this.props;
    const { fields } = this.state;

    const providerValue = {
      fields,
      setFieldValue: this.setFieldValue,
    };

    return (
      <form onSubmit={this.handleSubmit} name={name} {...props}>
        <FormContext.Provider value={providerValue}>
          {children}
        </FormContext.Provider>
      </form>
    );
  }
}

Form.defaultProps = {
  children: null,
  onSubmit: null,
};

Form.propTypes = {
  children: node,
  onSubmit: func,
  name: string.isRequired,
};

export default Form;
