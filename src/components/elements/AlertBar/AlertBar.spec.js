import React from 'react';
import { shallow } from 'enzyme';

import AlertBar from './AlertBar';

describe('AlertBar component', () => {
  it('should match snapshot', () => {
    expect(shallow(<AlertBar />)).toMatchSnapshot();
  });

  it('should render it\'s children', () => {
    const rendered = shallow(
      <AlertBar>
        <p>
          children
        </p>
      </AlertBar>,
    );

    expect(rendered.find('p').text()).toEqual('children');

    expect(rendered).toMatchSnapshot();
  });
});
