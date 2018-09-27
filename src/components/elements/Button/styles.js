import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  border: 2px solid #27c2d5;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding : 0 20px;
  outline: none;
  user-select: none;
  cursor: pointer;

  transition:
    .2s color,
    .2s background,
    .2s transform;

  &:disabled,
  &:disabled:hover {
    opacity: 0.4;
    cursor: default;
  }

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

  ${({ margin }) => margin && css`
    margin: 0;

    @media (min-width: 640px) {
      margin: ${margin};
    }
  `};

  ${({ minWidth }) => minWidth && css`
    min-width: ${minWidth};
    width: 100%;
    margin: 0 auto;
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
