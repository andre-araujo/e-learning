import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  overflow-x: hidden;
  overflow-y: auto;
  transform: translate(0,0);
  display: none;

  ${({ isOpen }) => isOpen && css`
    display: block;
  `}

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.4);
    cursor: pointer;
    padding: 0;
    display: block;
    width: 100vw;
    height: 100vh;
    border: 0;
  }
`;

export const Outer = styled.section`
  position: relative;
  transform: translate(0,0);
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  min-height: calc(100% - 60px);
  flex-direction: column;
  padding: 30px;
`;

export const Inner = styled.div`
  position: relative;
  z-index: 2;
`;

export const Header = styled.header`
  line-height: 1;
  height: 50px;
  background: #eee;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  padding-right: 40px;
  border-radius: 10px 10px 0 0;
  position: relative;
  font-size: 20px;
`;

export const Content = styled.div`
  z-index: 1;
  line-height: 1;
  width: 100%;
  background: #fafafa;
  padding: 15px;
  border-radius: 0 0 10px 10px;
`;

export const Button = styled.span`
  cursor: pointer;
  background: none;
  border: none;
`;

export const Close = styled.i`
  color: #333;
  position: absolute;
  right: 5px;
  top: 50%;
  padding: 5px;
  font-size: 20px;
  transform: translateY(-50%);

  :hover {
    color: orange;
  }
`;

export const Children = styled.div`
  transition: .2s filter;

  ${({ isOpen }) => isOpen && css`
    filter: blur(2px);
  `}
`;
