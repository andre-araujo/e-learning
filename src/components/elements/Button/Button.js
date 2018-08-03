import React from 'react';
import { node, number, bool } from 'prop-types';

import {
  StyledButton,
  Text,
} from './styles';

function Button({
  children,
  secondary,
  ...props
}) {
  return (
    <StyledButton secondary={secondary} {...props}>
      <Text>
        {children}
      </Text>
    </StyledButton>
  );
}

Button.defaultProps = {
  children: '',
  secondary: false,
  full: false,
  gap: 0,
};

Button.propTypes = {
  children: node,
  secondary: bool,
  full: bool,
  gap: number,
};

export default Button;
