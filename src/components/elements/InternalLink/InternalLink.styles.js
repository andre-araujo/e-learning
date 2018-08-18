import styled, { css } from 'styled-components';

export const StyledAnchor = styled.a`
  cursor: pointer;

  :hover {
    color: orange;
  }

  ${({ gap }) => gap && css`
    margin-right: ${gap}px;
  `};
`;
