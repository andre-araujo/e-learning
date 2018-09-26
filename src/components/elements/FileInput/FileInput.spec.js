import React from 'react';
import { shallow, mount } from 'enzyme';

import FileInput from './FileInput';

describe('FileInput component', () => {
  it('should match snapshot', () => {
    const onChange = jest.fn();
    expect(shallow(<FileInput name="file" onChange={onChange} />)).toMatchSnapshot();
  });

  it('should should call onChange prop', () => {
    const onChange = jest.fn();
    const fileInput = shallow(<FileInput name="file" onChange={onChange} />);
    fileInput.find('input').simulate('change', { target: { files: [{ name: 'sample' }] } });

    expect(onChange).toHaveBeenCalledWith({ name: 'sample' });
  });

  it('should set file state on change', () => {
    const fileInput = mount(<FileInput name="file" />);
    fileInput.find('input').simulate('change', { target: { files: [{ name: 'sample' }] } });

    expect(fileInput.state('fileName')).toEqual('sample');
  });
});
