import React from 'react';
import { shallow, mount } from 'enzyme';

import ModalProvider from './ModalProvider';
import { Button } from './styles';

describe('ModalProvider component', () => {
  it('should match snapshot', () => {
    expect(shallow(
      <ModalProvider>
        <div>
          children
        </div>
      </ModalProvider>,
    )).toMatchSnapshot();
  });

  it('should render content on toggle', () => {
    const modal = mount(
      <ModalProvider>
        <div>
          children
        </div>
        <ModalProvider.Toggle render={() => (
          <div id="rendered">
            rendered content
          </div>
        )}
        >
          Toggle
        </ModalProvider.Toggle>
      </ModalProvider>,
    );

    modal.find(Button).simulate('click');
    expect(modal.find('#rendered').text()).toEqual('rendered content');
  });

  it('should not render content toggle is not clicked', () => {
    const modal = mount(
      <ModalProvider>
        <div>
          children
        </div>
        <ModalProvider.Toggle render={() => (
          <div id="rendered">
            rendered content
          </div>
        )}
        >
          Toggle
        </ModalProvider.Toggle>
      </ModalProvider>,
    );

    expect(modal.find('#rendered').length).toEqual(0);
  });
});
