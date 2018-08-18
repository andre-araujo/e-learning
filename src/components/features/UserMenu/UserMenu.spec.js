import React from 'react';
import { mount } from 'enzyme';

import UserMenu from './UserMenu';

describe('UserMenu component', () => {
  it('should match snapshot', () => {
    expect(mount(<UserMenu />)).toMatchSnapshot();
  });
});
