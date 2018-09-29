import React from 'react';
import { shallow } from 'enzyme';

import DefaultContent from './DefaultContent';

describe('DefaultContent component', () => {
  it('should match snapshot', () => {
    expect(shallow(<DefaultContent />)).toMatchSnapshot();
  });
});
