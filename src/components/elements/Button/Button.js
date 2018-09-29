import React from 'react';
import {
  node, number, bool, string,
} from 'prop-types';

import {
  StyledButton,
  Text,
} from './styles';

function Button({
  children,
  secondary,
  disabled,
  minWidth,
  ...props
}) {
  return (
    <StyledButton disabled={disabled} secondary={secondary} minWidth={minWidth} {...props}>
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
  minWidth: null,
  gap: 0,
};

Button.propTypes = {
  children: node,
  secondary: bool,
  disabled: bool,
  full: bool,
  minWidth: string,
  gap: number,
};

export default Button;
