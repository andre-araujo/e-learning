import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  border: 2px solid #27c2d5;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding : 0 20px;
  outline: none;
  cursor: pointer;
  transition:
    .2s color,
    .2s background,
    .2s transform;

  ${({ full }) => full && css`
    width: 100%;
  `}

  ${({ secondary }) => secondary && css`
    color: #27c2d5;
    background: white;
    :active,
    :hover {
      opacity: 0.9
    }
  `}

  ${({ secondary }) => !secondary && css`
    color: white;
    background: #27c2d5;
    :active,
    :hover {
      opacity: 0.9
    }
  `}

  :active {
    transform: translateY(-3px);
  }

  ${({ gap }) => gap && css`
    margin-right: ${gap}px;
  `};
`;

export const Text = styled.span`
  font-weight: 800;
  font-size: 12px;
  font-family: Roboto;

  :first-letter {
    text-transform: uppercase;
  }
`;
