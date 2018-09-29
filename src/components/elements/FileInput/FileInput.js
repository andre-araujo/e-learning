import { Component } from 'react';
import { string, func } from 'prop-types';
import {
  FaFile,
} from 'react-icons/fa';

import Text from '../Text';

import {
  Label,
} from './FileInput.styles';

class FileInput extends Component {
  state = {
    fileName: 'Clique para adicionar uma mídia',
  }

  onChange = (e) => {
    const {
      onChange,
    } = this.props;

    this.setState({
      fileName: e.target.files[0].name,
    });

    if (onChange) onChange(e.target.files[0]);
  }

  render() {
    const {
      label,
      name,
      ...inputProps
    } = this.props;
    const {
      fileName,
    } = this.state;

    return (
      <Label>
        <input {...inputProps} name={name} type="file" onChange={this.onChange} />
        <FaFile />
        <Text.Small margin="10px">
          {fileName}
        </Text.Small>
      </Label>
    );
  }
}

FileInput.defaultProps = {
  label: null,
  onChange: null,
};

FileInput.propTypes = {
  name: string.isRequired,
  label: string,
  onChange: func,
};

export default FileInput;
