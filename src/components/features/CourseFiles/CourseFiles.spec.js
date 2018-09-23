import React from 'react';
import { mount } from 'enzyme';

import CourseFiles from './CourseFiles';

describe('CourseFiles component', () => {
  it('should match snapshot', () => {
    expect(mount(<CourseFiles />)).toMatchSnapshot();
  });
});
