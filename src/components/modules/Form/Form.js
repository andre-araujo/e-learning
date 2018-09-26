import React, { createContext, Component } from 'react';
import { node, func, string } from 'prop-types';
import Field from './Field';

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
    const { fields } = this.state;
    const { onSubmit } = this.props;

    e.preventDefault();
    onSubmit(fields);
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
};

Form.propTypes = {
  children: node,
  onSubmit: func.isRequired,
  name: string.isRequired,
};

export default Form;
