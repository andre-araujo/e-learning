import styled, { css } from 'styled-components';

export const StyledAnchor = styled.a`
  cursor: pointer;
  text-decoration: underline;
  user-select: none;
  display: inline-block;
  font-size: 0.8em;

  :hover {
    color: orange;
  }

  ${({ gap }) => gap && css`
    margin-right: ${gap / 2}px;

    @media (min-width: 640px) {
      margin-right: ${gap}px;
    }
  `};

  ${({ margin }) => margin && css`
    margin: ${margin};
  `};

  @media (min-width: 640px) {
    font-size: 1em;
  }
`;
