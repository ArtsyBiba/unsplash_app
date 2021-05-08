import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import App from '../../App';

// ensure that all components render correctly
it('renders correctly', () => {
  const { queryByTestId, queryByPlaceholderText } = render(<App />);

  expect(queryByTestId('search-button')).toBeTruthy();
  expect(queryByTestId('random-search-button')).toBeTruthy();
  expect(queryByPlaceholderText('What photos are you looking for?')).toBeTruthy();
});

// ensure that input value updates on change
describe('Input Value', () => {
  it('updates on change', () => {
    const { queryByPlaceholderText } = render(<App />);
    const searchInput = queryByPlaceholderText('What photos are you looking for?');

    fireEvent.change(searchInput, { target: { value: 'test' }});

    expect(searchInput.value).toBe('test');
  });
});

// ensure that search photos button works
describe('search photos button', () => {
    it('triggers handleSearchPhotos function', () => {
      const handleSearchPhotos = jest.fn();  
      const { queryByTestId } = render(<App handleSearchPhotos={handleSearchPhotos()} />);    

      fireEvent.click(queryByTestId('search-button'));

      expect(handleSearchPhotos).toHaveBeenCalled();
    });
});

// ensure that random search button works
describe('search random button', () => {
  it('does trigger handleSearchRandom function', () => {
    const handleSearchRandom = jest.fn();
    const { queryByTestId } = render(<App handleSearchRandom={handleSearchRandom()} />);

    fireEvent.click(queryByTestId('random-search-button'));

    expect(handleSearchRandom).toHaveBeenCalled();
  });
});
