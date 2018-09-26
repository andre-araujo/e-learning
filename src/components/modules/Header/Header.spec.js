import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('Header component', () => {
  it('should match snapshot', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
  });
});
