import React from 'react';
import { mount } from 'enzyme';

import Header from './Header';

describe('Header component', () => {
  it('should match snapshot', () => {
    expect(mount(<Header />)).toMatchSnapshot();
  });
});
