import React from 'react';
import { shallow, mount } from 'enzyme';

import Form from './Form';

describe('Form component', () => {
  it('should match snapshot', () => {
    const onSubmit = jest.fn();
    expect(shallow(<Form name="form" onSubmit={onSubmit} />)).toMatchSnapshot();
  });

  it('should call onSubmit', () => {
    const onSubmit = jest.fn();
    const form = mount(<Form name="form" onSubmit={onSubmit} />);

    form.simulate('submit');
    expect(onSubmit).toHaveBeenCalled();
  });

  it('should call onSubmit with input field values', () => {
    const onSubmit = jest.fn();
    const form = mount(
      <Form name="form" onSubmit={onSubmit}>
        <Form.Field
          name="input"
          initialValue="test"
          render={(...props) => <input {...props} />}
        />
      </Form>,
    );

    form.simulate('submit');
    expect(onSubmit).toHaveBeenCalledWith({ input: 'test' });
  });

  it('should change form fields value', () => {
    const onSubmit = jest.fn();
    const form = mount(
      <Form name="form" onSubmit={onSubmit}>
        <Form.Field
          name="input"
          initialValue="test"
          render={({ onChange }) => (
            <input onChange={() => {
              onChange({
                target: {
                  value: 'new value',
                },
              });
            }}
            />
          )}
        />
      </Form>,
    );

    form.find('input').simulate('change');
    form.simulate('submit');
    expect(onSubmit).toHaveBeenCalledWith({ input: 'new value' });
  });
});
