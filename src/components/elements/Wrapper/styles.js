import styled, { css } from 'styled-components';

export const Container = styled.div`
    max-width: 980px;
    padding: 0 15px;
    margin: 0 auto;

    @media (min-width: 640px) {
      padding: 0 30px;
    }

    ${({ margin }) => margin && css`
      margin: ${margin};
    `}
`;
