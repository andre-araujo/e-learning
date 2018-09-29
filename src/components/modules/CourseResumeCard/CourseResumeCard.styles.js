import styled, { css } from 'styled-components';

export const Thumbnail = styled.div`
  padding-bottom :66%;
  width: 100%;
  background: #666;

  ${({ imageURL }) => css`
    background-size:  cover;
    background-image: url(${imageURL});
  `}

  @media (min-width: 640px) {
    height: 120px;
    width: 200px;
    padding-bottom: 0;
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  margin-top: 20px;

  @media (min-width: 640px) {
    padding-left: 20px;
    width: auto;
    margin-top: 0;
  }
`;

export const Description = styled.strong`
  flex: 1;
`;

export const Joined = styled.div`
  /* flex: 1; */
`;


export const Container = styled.section`
  padding: 15px 0;
  border-top: 1px solid #eee;
  display: flex;
  position: relative;
  cursor: pointer;
  align-items: center;
  flex-direction: column;

  &:hover:after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100vw;
    background: rgba(0, 0, 0, 0.03);
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;
