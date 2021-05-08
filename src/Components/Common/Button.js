import styled from 'styled-components';

const Button = styled.button`
    background-color: ${props => props.secondary ? '#1d7656' : 'rgba(0, 0, 0, 0.75)'};

    color: white;
    padding: 1rem 2rem;
    border: 1px solid rgba(0, 0, 0, 0.75);
    border-radius: 20px;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 250ms;
    margin: 0.5rem 0.5rem 0.5rem 0.5rem;
    outline: 0;

    &:hover {
        background-color: ${props => props.secondary ? '#1d7656' : 'rgba(0, 0, 0, 0.95)'};
    }
`;

export default Button;

