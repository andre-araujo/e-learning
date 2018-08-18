import React from 'react';
import Link from 'next/link';
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
        <Link href="/">
          <a href="/">
            <Title>
              {title}
            </Title>
          </a>
        </Link>
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
