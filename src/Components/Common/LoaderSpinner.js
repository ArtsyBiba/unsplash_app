import styled from 'styled-components';
import Loader from 'react-loader-spinner';

export default function LoaderSpinner() {
    return (
        <StyledLoader 
            type='ThreeDots'
            color='black'
            height={100} 
            width={100} 
            data-testid='loader-spinner'
        />
    )
};

const StyledLoader = styled(Loader)`
  text-align: center;
`;