import styled, { css } from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 1);
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
  ${({ active }) => active && css`
      opacity: 1;
      pointer-events: all;
  `}
`;
