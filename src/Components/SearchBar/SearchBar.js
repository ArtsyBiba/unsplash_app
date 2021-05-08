import React, { useEffect } from 'react';
import styled from 'styled-components';

import Button from '../Common/Button';
import Label from '../Common/Label';

export default function SearchBar({ query, setQuery, setLoading, setRandom, setPics, unsplash, setPage, page }) {
    useEffect(() => {
        setPage(1);
    }, [query, setPage]);
    
    const handleSearchPhotos = () => {
        if (query) {
            setLoading(true);
            setRandom(false);
            
            setTimeout(() => 
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
                        setPics(photos);
                    }
                })
                .then(setPage(page + 1))
                .then(setLoading(false)) 
            , 500)
        };
    };

    const handleSearchRandom = () => {
        setLoading(true);
        setRandom(true);
        
        setTimeout(() => 
            unsplash.photos.getRandom({
                count: 10,
            })
            .then(result => {
                if (result.errors) {
                    console.log('error occurred: ', result.errors[0]);
                } else {
                    const photos = result.response;
                    setPics(photos);
                }
            })
            .then(setPage(page + 1))
            .then(setLoading(false)) 
        , 500)
    };

    return (
        <>
            <SearchBox>
                <Label> 📷 </Label>
                <SearchInput
                    type='text'
                    data-testid='search-input'
                    name='query'
                    className='input'
                    placeholder={`What photos are you looking for?`}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Button data-testid='search-button' onClick={handleSearchPhotos}>
                    Search
                </Button>
                <Button data-testid='random-search-button' secondary onClick={handleSearchRandom}>
                    Random Search
                </Button>
            </SearchBox>
        </>
    );
}

const SearchBox = styled.div`
	justify-content: space-around;
	margin-bottom: 1rem;
    display: flex;
    flex-wrap: wrap;
`;

const SearchInput = styled.input`
	flex: 2;
	font-size: 1rem;
	padding: 0.5rem 1rem;
	line-height: 1rem;
	border-radius: 20px;
	background-color: white;
	margin: 0.5rem 0.5rem 0.5rem 0.5rem;
    outline: 0;
`;