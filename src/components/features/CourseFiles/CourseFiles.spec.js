import React from 'react';
import { shallow } from 'enzyme';

import CourseFiles from './CourseFiles';

describe('CourseFiles component', () => {
  it('should match snapshot', () => {
    expect(shallow(<CourseFiles />)).toMatchSnapshot();
  });
});
