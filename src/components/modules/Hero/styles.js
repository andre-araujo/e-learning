import styled, { css } from 'styled-components';

import Wrapper from '../../elements/Wrapper';

export const Title = styled.div`
  color: white;
  font-weight: 500;
  font-size: 50px;
  flex: 1;
`;

export const Content = styled.div`
  flex: 1;
`;

export const Container = styled(Wrapper)`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 30px;
  flex-direction: column;

  ${({ minHeight }) => !minHeight && css`
    min-height: 400px;
    height: calc(50vh);
  `}

  ${({ minHeight }) => minHeight && css`
    min-height: ${minHeight};
    height: auto;
  `}

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
`;
