import styled from 'styled-components';

export const Label = styled.label`
  height: 100px;
  width: 100%;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px dashed #aaa;
  cursor: pointer;
  flex-direction: column;
  text-align: center;

  input {
    display: none;
  }
`;
