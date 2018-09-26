import React from 'react';
import { shallow } from 'enzyme';

import CourseResumeCard from './CourseResumeCard';

describe('CourseResumeCard component', () => {
  it('should match snapshot', () => {
    expect(shallow(<CourseResumeCard />)).toMatchSnapshot();
  });

  it('should match snapshot with keywords', () => {
    expect(shallow(<CourseResumeCard keyWords="keyword" />)).toMatchSnapshot();
  });

  it('should match snapshot with formatedUpdatedAt', () => {
    expect(shallow(<CourseResumeCard created_at="2017-12-13" updated_at="2017-12-14" />)).toMatchSnapshot();
  });

  it('should match snapshot with joined', () => {
    expect(shallow(<CourseResumeCard joined />)).toMatchSnapshot();
  });
});
