import React from 'react';
import { string, node } from 'prop-types';

import {
  Title,
  Container,
  Content,
} from './styles';

function Header({
  title,
  addOn,
}) {
  return (
    <Container>
      <Content>
        <Title>
          {title}
        </Title>
        {addOn}
      </Content>
    </Container>
  );
}

Header.defaultProps = {
  title: 'E-learning',
  addOn: null,
};

Header.propTypes = {
  title: string,
  addOn: node,
};

export default Header;
