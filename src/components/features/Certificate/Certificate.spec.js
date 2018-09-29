import React from 'react';
import { shallow } from 'enzyme';

import Certificate from './Certificate';

describe('Certificate component', () => {
  it('should match snapshot', () => {
    expect(shallow(<Certificate />)).toMatchSnapshot();
  });
});
