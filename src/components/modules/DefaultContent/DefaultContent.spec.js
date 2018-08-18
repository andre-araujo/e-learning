import React from 'react';
import { mount } from 'enzyme';

import DefaultContent from './DefaultContent';

describe('DefaultContent component', () => {
  it('should match snapshot', () => {
    expect(mount(<DefaultContent />)).toMatchSnapshot();
  });
});
