import { useState } from 'react';
import styled from 'styled-components';

export default function Image({ pic }) {
    const [selected, setSelected] = useState(false);
    
    const handleClick = () => {
        navigator.clipboard.writeText(pic.urls.regular);
        setSelected(true);
        setTimeout(() => {
            setSelected(false);
        }, 1000)
    }
    
    return (
        <>
            <StyledImage 
                alt={pic.alt_description}
                src={pic.urls.regular}
                onClick={handleClick}
            />
            {selected &&
                <Overlay>
                    <Text>
                        Copied to Clipboard!
                    </Text>
                </Overlay>
            }
        </>
    )
}

const StyledImage = styled.img`
    display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
    transition: transform 400ms ease-out;
    cursor: pointer;
    
    &:hover {
	    transform: scale(1.15);
    }
`;

const Overlay = styled.div`
    transition: .5s ease;
    opacity: 0.8;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    background-color: black;
`;

const Text = styled.div`
    background-color: #1d211e;
    color: white;
    font-size: 16px;
    font-weight: 600;
    padding: 16px 32px;
`;
