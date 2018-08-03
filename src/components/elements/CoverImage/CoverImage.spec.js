import React from 'react';
import { mount } from 'enzyme';

import CoverImage from './CoverImage';

describe('CoverImage component', () => {
  it('should match snapshot', () => {
    expect(mount(<CoverImage />)).toMatchSnapshot();
  });
});
