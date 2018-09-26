import { Component } from 'react';
import {
  func,
  string,
  shape,
  object,
} from 'prop-types';

class Field extends Component {
  componentDidMount() {
    const {
      name,
      initialValue,
      context,
    } = this.props;

    if (!context.fields[name]) {
      context.setFieldValue(name, initialValue);
    }
  }

  render() {
    const {
      render,
      name,
      initialValue = '',
      context,
      ...props
    } = this.props;

    let value = context.fields[name];

    if (value === undefined) {
      value = initialValue;
    }

    return render({
      ...props,
      name,
      value,
      onChange: e => context.setFieldValue(name, e.target.value),
    });
  }
}

Field.defaultProps = {
  initialValue: '',
};

Field.propTypes = {
  render: func.isRequired,
  name: string.isRequired,
  initialValue: string,
  context: shape({
    fields: object.isRequired,
    setFieldValue: func.isRequired,
  }).isRequired,
};

export default Field;
