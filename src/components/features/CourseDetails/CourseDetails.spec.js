import React from 'react';
import { mount } from 'enzyme';

import CourseDetails from './CourseDetails';

describe('CourseDetails component', () => {
    it('should match snapshot', () => {
        expect(mount(<CourseDetails />)).toMatchSnapshot();
    });
});
