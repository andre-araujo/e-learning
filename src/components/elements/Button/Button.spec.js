import React from 'react';
import { mount } from 'enzyme';

import Button from './Button';

describe('Button component', () => {
  it('should match snapshot', () => {
    expect(mount(<Button />)).toMatchSnapshot();
  });
});
