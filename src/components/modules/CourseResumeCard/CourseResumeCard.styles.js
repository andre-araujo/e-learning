import styled, { css } from 'styled-components';

export const Container = styled.section`
  padding: 15px 0;
  border-top: 1px solid #eee;
  display: flex;
  position: relative;
  cursor: pointer;
  align-items: center;

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
`;

export const Thumbnail = styled.div`
  height: 120px;
  width: 200px;
  background: #666;

  ${({ src }) => css`
    background: url(${src}) cover;
  `}
`;

export const Content = styled.div`
  padding-left: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Description = styled.strong`
  flex: 1;
`;

export const Joined = styled.div`
  /* flex: 1; */
`;
