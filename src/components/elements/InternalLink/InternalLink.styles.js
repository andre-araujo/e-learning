import styled, { css } from 'styled-components';

export const StyledAnchor = styled.a`
  cursor: pointer;
  text-decoration: underline;
  user-select: none;
  display: inline-block;

  :hover {
    color: orange;
  }

  ${({ gap }) => gap && css`
    margin-right: ${gap}px;
  `};

  ${({ margin }) => margin && css`
    margin: ${margin};
  `};
`;
