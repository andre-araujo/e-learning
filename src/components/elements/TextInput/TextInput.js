import { string, func } from 'prop-types';

import {
  Wrapper,
  Content,
  Label,
  Field,
} from './styles';

function TextInput({
  label,
  ...inputProps
}) {
  return (
    <Wrapper>
      <Content>
        <Field
          {...inputProps}
          required
          name={inputProps.name}
        />
        {
          label && (
            <Label htmlFor={inputProps.name}>
              {label}
            </Label>
          )
        }
      </Content>
    </Wrapper>
  );
}

TextInput.defaultProps = {
  label: null,
};

TextInput.propTypes = {
  name: string.isRequired,
  label: string,
  onChange: func.isRequired,
};

export default TextInput;
