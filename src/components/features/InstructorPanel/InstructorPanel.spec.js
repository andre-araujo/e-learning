import React from 'react';
import { mount } from 'enzyme';

import InstructorPanel from './InstructorPanel';

describe('InstructorPanel component', () => {
  it('should match snapshot', () => {
    expect(mount(<InstructorPanel />)).toMatchSnapshot();
  });
});
