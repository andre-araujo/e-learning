import React from 'react';
import { mount } from 'enzyme';

import ModalProvider from './ModalProvider';

describe('ModalProvider component', () => {
  it('should match snapshot', () => {
    expect(mount(<ModalProvider />)).toMatchSnapshot();
  });
});
