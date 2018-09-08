import styled, { css } from 'styled-components';

export const StyledText = tag => styled[tag]`
  font-family: Roboto;

  ${({ margin }) => margin && css`
    margin: ${margin};
  `}

  ${({ type }) => {
    if (type === 'title') {
      return css`
        font-weight: bolder;
      `;
    }

    if (type === 'subtitle') {
      return css`
        font-weight: bold;
        font-size: 20px;
      `;
    }

    if (type === 'paragraph') {
      return css`
        font-size: 0.875rem;
        font-weight: 400;
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
`;
