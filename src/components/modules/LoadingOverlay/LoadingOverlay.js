import React from 'react';
import { bool } from 'prop-types';

import Loading from '../../elements/Loading';

import {
  Container,
} from './LoadingOverlay.styles';

function LoadingOverlay({
  loading,
}) {
  return (
    <Container active={loading}>
      <Loading />
    </Container>
  );
}

LoadingOverlay.defaultProps = {
  loading: false,
};

LoadingOverlay.propTypes = {
  loading: bool,
};

export default LoadingOverlay;
