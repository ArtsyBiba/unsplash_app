import styled, { keyframes } from 'styled-components';

const wobble = keyframes`
    25% {
        transform: rotate(15deg);
    }
    50% {
        transform: rotate(-30deg);
    }
    75% {
        transform: rotate(5deg);
    }
    100% {
        transform: rotate(0deg);
    }
`;

const Label = styled.div`
    font-size: 3rem;
    margin: 0.2rem 0.5rem 0.5rem 0.5rem;

    &:hover {
        animation: ${wobble} 1s 1;
    }

    @media(max-width: 650px) {
        display: none;
    }
`;

export default Label;