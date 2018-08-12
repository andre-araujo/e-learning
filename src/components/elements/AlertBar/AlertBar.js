import React from 'react';
import { node } from 'prop-types';

import {
  Container,
} from './AlertBar.styles';

function AlertBar({
  children,
}) {
  if (!children) return null;

  return (
    <Container>
      {children}
    </Container>
  );
}

AlertBar.defaultProps = {
  children: null,
};

AlertBar.propTypes = {
  children: node,
};

export default AlertBar;
