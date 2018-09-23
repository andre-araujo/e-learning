import React from 'react';
import { node, number, bool } from 'prop-types';

import {
  StyledButton,
  Text,
} from './styles';

function Button({
  children,
  secondary,
  disabled,
  ...props
}) {
  return (
    <StyledButton disabled={disabled} secondary={secondary} {...props}>
      <Text>
        {children}
      </Text>
    </StyledButton>
  );
}

Button.defaultProps = {
  children: '',
  secondary: false,
  disabled: false,
  full: false,
  gap: 0,
};

Button.propTypes = {
  children: node,
  secondary: bool,
  disabled: bool,
  full: bool,
  gap: number,
};

export default Button;
