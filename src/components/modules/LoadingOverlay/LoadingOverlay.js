import React from 'react';
import { connect } from 'react-redux';
import { boolean } from 'prop-types';

import { Loading } from '../..';

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
  loading: boolean,
};

const mapStateToProps = ({ globalLoading }) => ({ loading: globalLoading.loading });

export default connect(mapStateToProps)(LoadingOverlay);