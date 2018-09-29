import styled from 'styled-components';

import Wrapper from '../../elements/Wrapper';

export const Container = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  height: calc(100vh - 72px);
  text-align: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 30px;
`;
