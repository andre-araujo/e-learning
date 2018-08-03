import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1.25rem 0;
  font-family: Roboto;
`;

export const Content = styled.div`
  position: relative;
  border-bottom: 2px solid #333;
`;

export const Label = styled.label`
  color: #333;
  font-size: 1rem;
  left: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.2s top, 0.2s transform, 0.2s font-size;
  pointer-events: none;
`;

export const Field = styled.input`
  background: none;
  border: none;
  box-shadow: none;
  color: #333;
  font-size: 1rem;
  outline: none;
  width: 100%;

  :focus ~ ${Label},
  :valid ~ ${Label} {
    font-size: 0.8rem;
    top: 0;
    transform: translateY(-100%);
  }
`;
