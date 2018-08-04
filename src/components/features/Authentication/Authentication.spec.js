import React from 'react';
import { mount } from 'enzyme';

import Authentication from './Authentication';

describe('Authentication component', () => {
  it('should match snapshot', () => {
    expect(mount(<Authentication />)).toMatchSnapshot();
  });
});
