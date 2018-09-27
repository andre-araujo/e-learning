import styled, { css } from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  bottom: 0;
  display: flex;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  justify-content: center;
  right: 0;
  top: 0;
  z-index: 100;
  transition: 0.1s opacity;
  ${({ active }) => active && css`
      opacity: 1;
      pointer-events: all;
  `}
`;
