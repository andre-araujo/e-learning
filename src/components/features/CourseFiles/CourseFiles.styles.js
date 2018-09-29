import styled from 'styled-components';

export const FileItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;

  button {
    height: 20px;
    width: 20px;
    margin-right: 10px;

    :hover {
      color: orange;
    }
  }
`;

export const Container = styled.div`
  margin-bottom: 10px;
`;
