import React from 'react';
import { string, node } from 'prop-types';

import CoverImage from '../../elements/CoverImage';

import {
  Title,
  Container,
  Content,
} from './styles';

function Hero({
  title,
  children,
  imageUrl,
  minHeight,
}) {
  return (
    <CoverImage imageUrl={imageUrl}>
      <Container minHeight={minHeight}>
        {
          title && (
            <Title>
              {title}
            </Title>
          )
        }
        {
          children && (
            <Content>
              {children}
            </Content>
          )
        }
      </Container>
    </CoverImage>
  );
}

Hero.defaultProps = {
  title: null,
  children: null,
  imageUrl: null,
  minHeight: null,
};

Hero.propTypes = {
  title: string,
  children: node,
  imageUrl: string,
  minHeight: string,
};

export default Hero;
