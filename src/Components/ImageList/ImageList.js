import React from 'react';
import styled from 'styled-components';

import Button from '../Common/Button';
import Image from '../Common/Image';

export default function ImageList({ pics, setPics, random, unsplash, query, page, setPage}) {
    const handleMoreSearchPhotos = () => {
        if (query) {
            unsplash.search.getPhotos({
                query: query,
                page: page,
                perPage: 10,
            })
            .then(result => {
                if (result.errors) {
                    console.log('error occurred: ', result.errors[0]);
                } else {
                    const photos = result.response.results;
                    setPics([...pics, ...photos]);
                }
            })
            .then(setPage(page + 1))
        };
    };

    const handleMoreSearchRandom = () => {
        unsplash.photos.getRandom({
            count: 10,
        })
        .then(result => {
            if (result.errors) {
                console.log('error occurred: ', result.errors[0]);
            } else {
                const photos = result.response;
                setPics([...pics, ...photos]);
            }
        })
        .then(setPage(page + 1))
    };
    
    return (
        <>    
            <ImageBoard>
                {pics.map((pic) => (
                    <ImageCard key={pic.id}>
                        <Image pic={pic} />
                    </ImageCard>
                ))}
            </ImageBoard> 
            {pics.length >= 10 && !random &&
                <LoadButton onClick={handleMoreSearchPhotos} data-testid='search-more-button'>
                    Load more...
                </LoadButton>
            }
            {pics.length >= 10 && random &&    
                <LoadButton onClick={handleMoreSearchRandom} secondary data-testid='random-search-more-button'>
                    Load more...
                </LoadButton>
            }
        </> 
    );
}

const LoadButton = styled(Button)`
    display: block;
    margin: 1rem auto auto auto;
`;

const ImageBoard = styled.div`
    display: flex;
	flex-wrap: wrap;
    margin-top: 1rem;
    justify-content: center;
`;

const ImageCard = styled.div`
    flex: 1 0 24rem;
	margin: 1rem;
	box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
    overflow: hidden;
    border-radius: 10px;
    position: relative;
`;
