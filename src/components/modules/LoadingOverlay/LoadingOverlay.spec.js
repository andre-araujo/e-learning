import React from 'react';
import { mount } from 'enzyme';

import LoadingOverlay from './LoadingOverlay';

describe('LoadingOverlay component', () => {
  it('should match snapshot', () => {
    expect(mount(<LoadingOverlay />)).toMatchSnapshot();
  });
});
