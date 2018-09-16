import styled, { css } from 'styled-components';

import Wrapper from '../../elements/Wrapper';

export const Container = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ minHeight }) => !minHeight && css`
    min-height: 400px;
    height: calc(50vh);
  `}

  ${({ minHeight }) => minHeight && css`
    min-height: ${minHeight};
    height: auto;
  `}
`;

export const Title = styled.h1`
  color: white;
  font-weight: 500;
  font-size: 50px;
`;

export const Content = styled.div`
  font-size: 1rem;
`;
