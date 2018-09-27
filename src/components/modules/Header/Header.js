import React from 'react';
import Link from 'next/link';
import { string, node } from 'prop-types';
import { Flex, Box } from 'grid-styled';

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
        <Flex width="100%" flexDirection={['column', 'row']} pt={25} pb={25}>
          <Box flex={1}>
            <Link href="/">
              <a href="/">
                <Title>
                  {title}
                </Title>
              </a>
            </Link>
          </Box>
          {addOn && (
            <Box width={['100%', 'auto']}>
              {addOn}
            </Box>
          )}
        </Flex>
      </Content>
    </Container>
  );
}

Header.defaultProps = {
  title: 'LearningShelf',
  addOn: null,
};

Header.propTypes = {
  title: string,
  addOn: node,
};

export default Header;
