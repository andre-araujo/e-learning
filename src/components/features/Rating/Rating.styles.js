import styled, { css } from 'styled-components';
import { FaStar } from 'react-icons/fa';

export const Star = styled(FaStar)`
  font-size: 1rem;

  ${({ active }) => active && css`
    color: gold;
  `}
`;

export const StarContainer = styled.div`
  display: inline-flex;
  :hover ${Star} {
    color: gold;

    :hover,
      :active {
        cursor: pointer;
        color: gold;
        ~ svg {
          color: #fafafa;
        }
      }
  }
`;


export const Container = styled.div`
  user-select: none;

  hr {
    margin: 10px 0;
  }
`;
