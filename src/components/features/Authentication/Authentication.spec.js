import React from 'react';
import { shallow } from 'enzyme';

import Authentication from './Authentication';

describe('Authentication component', () => {
  it('should match snapshot', () => {
    expect(shallow(<Authentication />)).toMatchSnapshot();
  });
});
