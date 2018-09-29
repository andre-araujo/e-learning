import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('Button component', () => {
  it('should match snapshot', () => {
    expect(shallow(<Button />)).toMatchSnapshot();
  });
});
