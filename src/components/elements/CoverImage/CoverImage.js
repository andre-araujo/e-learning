import React from 'react';
import { string, node } from 'prop-types';

import {
  Container,
  Content,
} from './styles';

function CoverImage({
  imageUrl,
  children,
}) {
  return (
    <Container imageUrl={imageUrl}>
      <Content>
        {children}
      </Content>
    </Container>
  );
}

CoverImage.defaultProps = {
  imageUrl: '#',
  children: null,
};

CoverImage.propTypes = {
  imageUrl: string,
  children: node,
};

export default CoverImage;
