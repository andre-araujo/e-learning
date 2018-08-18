import React from 'react';
import { mount } from 'enzyme';

import InternalLink from './InternalLink';

describe('InternalLink component', () => {
  it('should match snapshot', () => {
    expect(mount(<InternalLink />)).toMatchSnapshot();
  });
});
