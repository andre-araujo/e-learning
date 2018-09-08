import React from 'react';
import { mount } from 'enzyme';

import CourseResumeCard from './CourseResumeCard';

describe('CourseResumeCard component', () => {
  it('should match snapshot', () => {
    expect(mount(<CourseResumeCard />)).toMatchSnapshot();
  });
});
