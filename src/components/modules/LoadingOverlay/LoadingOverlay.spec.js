import React from 'react';
import { shallow } from 'enzyme';

import LoadingOverlay from './LoadingOverlay';

describe('LoadingOverlay component', () => {
  it('should match snapshot', () => {
    expect(shallow(<LoadingOverlay />)).toMatchSnapshot();
  });

  it('should match snapshot with loading', () => {
    expect(shallow(<LoadingOverlay loading />)).toMatchSnapshot();
  });
});
