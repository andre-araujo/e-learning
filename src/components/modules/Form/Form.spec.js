import React from 'react';
import { mount } from 'enzyme';

import Form from './Form';

describe('Form component', () => {
  it('should match snapshot', () => {
    expect(mount(<Form />)).toMatchSnapshot();
  });
});
