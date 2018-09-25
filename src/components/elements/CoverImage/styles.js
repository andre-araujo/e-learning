import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ imageUrl }) => imageUrl && css`
    background-image: url(${imageUrl});
    background-size: cover;
    background-position: center;
  `}

  position: relative;

  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, .4)
  }
`;

export const Content = styled.div`
  position: relative;
`;
