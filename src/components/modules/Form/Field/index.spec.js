import React from 'react';
import { shallow } from 'enzyme';

import Field from '.';

describe('Field component', () => {
  it('should match snapshot', () => {
    const context = {
      fields: {},
      setFieldValue: jest.fn(),
    };
    expect(shallow(<Field
      name="field"
      render={(...props) => <input {...props} />}
      context={context}
    />)).toMatchSnapshot();
  });
});
