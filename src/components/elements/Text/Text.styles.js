import styled, { css } from 'styled-components';

export const StyledText = tag => styled[tag]`
  font-family: Roboto;
  word-break: break-all;

  ${({ type }) => {
    if (type === 'title') {
      return css`
        font-size: 30px;
        font-weight: bolder;
        color: #333;
      `;
    }

    if (type === 'subtitle') {
      return css`
        font-weight: bold;
        font-size: 20px;
        color: #555;
      `;
    }

    if (type === 'paragraph') {
      return css`
        font-size: 0.875rem;
        font-weight: 400;
        color: #000;
    `;
    }

    if (type === 'small') {
      return css`
        font-size: 0.75rem;
        font-weight: 200;
        color: #888;
    `;
    }

    return null;
  }}

  ${({ margin }) => margin && css`
    margin: ${margin};
  `}

  ${({ color }) => color && css`
    color: ${color};
  `}
`;
