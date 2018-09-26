import React from 'react';
import { shallow } from 'enzyme';

import Wrapper from './Wrapper';

describe('Wrapper component', () => {
  it('should match snapshot', () => {
    expect(shallow(<Wrapper />)).toMatchSnapshot();
  });
});
