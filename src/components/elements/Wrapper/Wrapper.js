import React from 'react';
import { node, string } from 'prop-types';

import {
  Container,
} from './styles';

function Wrapper({
  children,
  className,
}) {
  return (
    <Container className={className}>
      {children}
    </Container>
  );
}

Wrapper.defaultProps = {
  children: null,
  className: null,
};

Wrapper.propTypes = {
  children: node,
  className: string,
};

export default Wrapper;
