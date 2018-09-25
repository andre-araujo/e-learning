import styled, { css } from 'styled-components';

export const StyledText = tag => styled[tag]`
  font-family: Roboto;

  ${({ type }) => {
    if (type === 'title') {
      return css`
        font-size: 1.5rem;
        font-weight: bolder;
        color: #333;

        @media (min-width: 768px) {
          font-size: 2rem;
        }
      `;
    }

    if (type === 'subtitle') {
      return css`
        font-weight: bold;
        font-size: 1rem;
        color: #555;

        @media (min-width: 768px) {
          font-size: 1.2rem;
        }
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

    if (type === 'big') {
      return css`
        font-size: 2.5rem;
        font-weight: bolder;
        color: #888;

        @media (min-width: 768px) {
          font-size: 4rem;
        }
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
