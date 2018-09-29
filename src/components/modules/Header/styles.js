import styled from 'styled-components';

import Wrapper from '../../elements/Wrapper';

export const Container = styled.nav`
  background: white;
  border-bottom: 1px solid #ccc;
`;

export const Content = styled(Wrapper)`
  display: flex;
  align-items: center;
  min-height: 70px;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: #27c2d5;
  font-weight: 600;
  font-size: 20px;
`;
