import styled, { css } from 'styled-components';

export const CourseModule = styled.section`
  padding: 15px 15px 0;
  background: #fff;
  border: 1px solid #eee;
  margin-bottom: 20px;
  box-shadow: 0 2px 3px 0px rgba(0, 0, 0, .2);
`;

export const LessonList = styled.ol`
  margin-top: 15px;
`;

export const LessonItem = styled.li`
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


export const RightIcon = styled.i`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  padding: 0;
  outline: none;
  font-size: 18px;

  ${({ color }) => color && css`
    color: ${color};
  `}
`;

export const Actions = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  flex-direction: column;

  @media (max-width: 639px) {
    button {
      width: 100%;
      margin-top: 15px;
    }
  }

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
`;
