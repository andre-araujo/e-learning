import React from 'react';
import { shallow } from 'enzyme';

import InternalLink from './InternalLink';

describe('InternalLink component', () => {
  it('should match snapshot', () => {
    expect(shallow(<InternalLink />)).toMatchSnapshot();
  });

  it('should match snapshot with anchor', () => {
    expect(shallow(
      <InternalLink>
        content
      </InternalLink>,
    )).toMatchSnapshot();
  });

  it('should match snapshot with nect link', () => {
    expect(shallow(
      <InternalLink href="/test">
        content
      </InternalLink>,
    )).toMatchSnapshot();
  });
});
