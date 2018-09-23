import React from 'react';
import { mount } from 'enzyme';

import UsersReport from './UsersReport';

describe('UsersReport component', () => {
  it('should match snapshot', () => {
    expect(mount(<UsersReport />)).toMatchSnapshot();
  });
});
