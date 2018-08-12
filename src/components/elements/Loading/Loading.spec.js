import React from 'react';
import { mount } from 'enzyme';

import Loading from './Loading';

describe('Loading component', () => {
  it('should match snapshot', () => {
    expect(mount(<Loading />)).toMatchSnapshot();
  });
});
