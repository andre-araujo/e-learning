import React from 'react';
import { mount } from 'enzyme';

import Rating from './Rating';

describe('Rating component', () => {
  it('should match snapshot', () => {
    expect(mount(<Rating />)).toMatchSnapshot();
  });
});
