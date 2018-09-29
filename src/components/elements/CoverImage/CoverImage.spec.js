import React from 'react';
import { shallow } from 'enzyme';

import CoverImage from './CoverImage';

describe('CoverImage component', () => {
  it('should match snapshot', () => {
    expect(shallow(<CoverImage />)).toMatchSnapshot();
  });
});
