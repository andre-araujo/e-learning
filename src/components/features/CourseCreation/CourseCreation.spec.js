import React from 'react';
import { mount } from 'enzyme';

import CourseCreation from './CourseCreation';

describe('CourseCreation component', () => {
  it('should match snapshot', () => {
    expect(mount(<CourseCreation />)).toMatchSnapshot();
  });
});
