import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import App from '../../App';

// ensure that search more photos button renders and works
describe('search more buttons', () => {
  it('search more button renders & works correctly', () => {
    const handleMoreSearchPhotos = jest.fn(); 
    const { queryByTestId, queryByPlaceholderText } = render(<App handleMoreSearchPhotos={handleMoreSearchPhotos()} />);
    const searchInput = queryByPlaceholderText('What photos are you looking for?');
    
    fireEvent.change(searchInput, { target: { value: 'cars' }});
    fireEvent.click(queryByTestId('search-button'));
    setTimeout(() => {
      fireEvent.click(queryByTestId('search-more-button'));

      expect(queryByTestId('search-more-button')).toBeTruthy();
      expect(handleMoreSearchPhotos).toHaveBeenCalled();
    }, 1000);
  });
});

// ensure that random search more button works
describe('search more random button', () => {
  it('does trigger handleMoreSearchRandom function', () => {
    const handleMoreSearchRandom = jest.fn();
    const { queryByTestId } = render(<App handleMoreSearchRandom={handleMoreSearchRandom()} />);

    fireEvent.click(queryByTestId('random-search-button'));

    setTimeout(() => {
      fireEvent.click(queryByTestId('random-search-more-button'));
      
      expect(queryByTestId('random-search-more-button')).toBeTruthy();
      expect(handleMoreSearchRandom).toHaveBeenCalled();
    }, 1000);
  });
});
