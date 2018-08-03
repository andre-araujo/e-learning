import React from 'react';
import { mount } from 'enzyme';

import Wrapper from './Wrapper';

describe('Wrapper component', () => {
  it('should match snapshot', () => {
    expect(mount(<Wrapper />)).toMatchSnapshot();
  });
});
