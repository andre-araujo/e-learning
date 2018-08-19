import React from 'react';
import { mount } from 'enzyme';

import CourseList from './CourseList';

describe('CourseList component', () => {
  it('should match snapshot', () => {
    expect(mount(<CourseList />)).toMatchSnapshot();
  });
});
