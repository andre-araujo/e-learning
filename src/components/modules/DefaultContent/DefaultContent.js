import React from 'react';
import { string } from 'prop-types';

import {
  Container,
  Title,
  Description,
} from './DefaultContent.styles';
import { InternalLink } from '../../elements';

function DefaultContent({
  title,
  description,
  href,
  linkText,
}) {
  return (
    <Container>
      <Title>
        {title}
      </Title>
      <Description>
        {description}
      </Description>
      <InternalLink href={href}>
        {linkText}
      </InternalLink>
    </Container>
  );
}

DefaultContent.defaultProps = {
  title: '',
};

DefaultContent.propTypes = {
  title: string,
};

export default DefaultContent;
