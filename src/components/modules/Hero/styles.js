import styled, { css } from 'styled-components';

import Wrapper from '../../elements/Wrapper';

export const Container = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 30px;

  ${({ minHeight }) => !minHeight && css`
    min-height: 400px;
    height: calc(50vh);
  `}

  ${({ minHeight }) => minHeight && css`
    min-height: ${minHeight};
    height: auto;
  `}
`;

export const Title = styled.div`
  color: white;
  font-weight: 500;
  font-size: 50px;
  flex: 1;
`;

export const Content = styled.div`
  flex: 1;
`;
