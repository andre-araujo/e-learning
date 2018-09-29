import React from 'react';
import { shallow } from 'enzyme';

import Text from './Text';

describe('Text component', () => {
  it('should match snapshot', () => {
    expect(shallow(<Text />)).toMatchSnapshot();
  });
  it('should match snapshot for Big', () => {
    expect(shallow(<Text.Big />)).toMatchSnapshot();
  });
  it('should match snapshot for Title', () => {
    expect(shallow(<Text.Title />)).toMatchSnapshot();
  });
  it('should match snapshot for Subtitle', () => {
    expect(shallow(<Text.Subtitle />)).toMatchSnapshot();
  });
  it('should match snapshot for Paragraph', () => {
    expect(shallow(<Text.Paragraph />)).toMatchSnapshot();
  });
  it('should match snapshot for Small', () => {
    expect(shallow(<Text.Small />)).toMatchSnapshot();
  });
});
