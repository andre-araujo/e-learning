import styled, { css } from 'styled-components';

export const Container = styled.div`
    max-width: 980px;
    padding: 0 30px;
    margin: 0 auto;

    ${({ margin }) => margin && css`
      margin: ${margin};
    `}
`;
