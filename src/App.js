import { useState } from 'react';
import { createApi } from 'unsplash-js';
import styled from 'styled-components';

import SearchBar from './Components/SearchBar/SearchBar';
import ImageList from './Components/ImageList/ImageList';
import LoaderSpinner from './Components/Common/LoaderSpinner';

const unsplash = createApi({ accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY });

export default function App() {
  const [query, setQuery] = useState('');
  const [pics, setPics] = useState([]);
  const [page, setPage] = useState(null);
  const [random, setRandom] = useState(false);
  const [loading, setLoading] = useState(false);
  
  return (
    <AppWrapper>
      <Container>
        <Title>Unsplash Photos Search</Title>
        <SearchBar 
          query={query} 
          setQuery={setQuery}
          setLoading={setLoading} 
          pics={pics}
          setPics={setPics} 
          random={random}
          unsplash={unsplash}
          setRandom={setRandom} 
          page={page} 
          setPage={setPage} 
        />
        {!loading && !pics.length && 
          <>
            <Placeholder>
              Search Unsplash photos for inspiration!
            </Placeholder>
            <Placeholder secondary>
              You can copy the image url to your clipboard by simply clicking on it.
            </Placeholder>
          </>
        }
        {loading 
          ? <LoaderSpinner />
          : <ImageList 
              pics={pics} 
              setPics={setPics} 
              unsplash={unsplash} 
              random={random}
              query={query} 
              page={page} 
              setPage={setPage} 
              data-testid='image-list'
            />
        }
      </Container>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
	margin: 0;
	padding: 0;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  padding: 40px;
  padding-top: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;  
  text-align: center;
  margin-bottom: 3rem;
`;

const Placeholder = styled.div`
  font-weight: ${props => props.secondary ? '400' : '600'};
  
  margin: auto;
  margin-top: 3rem;
  font-size: 1.2rem;  
  text-align: center;
  max-width: 80%;
`;