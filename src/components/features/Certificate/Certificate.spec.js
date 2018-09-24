import React from 'react';
import { mount } from 'enzyme';

import Certificate from './Certificate';

describe('Certificate component', () => {
  it('should match snapshot', () => {
    expect(mount(<Certificate />)).toMatchSnapshot();
  });
});
