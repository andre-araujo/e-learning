import styled from 'styled-components';

export const Section = styled.section`
  padding: 30px 0;
  border-top: 1px dashed #ccc;
`;

export const Card = styled.div`
  padding: 15px 15px 0;
  background: #fff;
  border: 1px solid #eee;
  margin-bottom: 20px;
  box-shadow: 0 2px 3px 0px rgba(0, 0, 0, .2);
`;

export const CardItem = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;
  position: relative;

  svg {
    font-size: 18px;
    margin-right: 15px;
  }
`;
