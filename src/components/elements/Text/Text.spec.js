import React from 'react';
import { mount } from 'enzyme';

import Text from './Text';

describe('Text component', () => {
  it('should match snapshot', () => {
    expect(mount(<Text />)).toMatchSnapshot();
  });
});
