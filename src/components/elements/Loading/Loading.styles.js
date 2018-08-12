import styled, { keyframes } from 'styled-components';

const animateDot = keyframes`
    0% {
        opacity: 0;
        transform: rotate(-90deg);
    }
    50% {
        opacity: 1;
        transform: rotate(0);
    }
`;

export const Container = styled.div`
    span {
        animation: ${animateDot} 1s infinite;
        background: #666;
        display: inline-flex;
        height: 1rem;
        margin: 0.5rem;
        opacity: 0;
        transform: rotate(90deg);
        width: 1rem;
    }
    span:nth-child(2) {
        animation-delay: 0.1s;
    }
    span:nth-child(3) {
        animation-delay: 0.2s;
    }
`;
