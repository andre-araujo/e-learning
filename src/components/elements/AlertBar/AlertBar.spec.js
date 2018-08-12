import React from 'react';
import { mount } from 'enzyme';

import AlertBar from './AlertBar';

describe('AlertBar component', () => {
  it('should match snapshot', () => {
    expect(mount(<AlertBar />)).toMatchSnapshot();
  });
});
