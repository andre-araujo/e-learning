import React from 'react';
import { shallow } from 'enzyme';

import Hero from './Hero';

describe('Hero component', () => {
  it('should match snapshot', () => {
    expect(shallow(<Hero />)).toMatchSnapshot();
  });

  it('should match snapshot with title', () => {
    expect(shallow(<Hero title="Title" />)).toMatchSnapshot();
  });

  it('should match snapshot with children', () => {
    expect(shallow(
      <Hero>
        children
      </Hero>,
    )).toMatchSnapshot();
  });
});
