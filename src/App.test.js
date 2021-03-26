import React from 'react';
import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import App from './App';

test('renders "Upload your image title" title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Upload your image/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders ImageLoader component', async () => {
  render(<App />);
  const imageNameElement = screen.queryByText('test-file.jpg');
  const imageLoaderInitial = screen.getByTestId('image-loader-element');

  expect(imageNameElement).toBeNull();
  expect(imageLoaderInitial.classList.contains('loaderShow')).toBeFalsy();

  const inputNode = screen.getByLabelText('Choose a file', { selector: 'input' });
  const files = [{ name: 'test-file.jpg' }];
  const changeInputValue = {
    target: { files },
  };

  fireEvent.change(inputNode, changeInputValue);

  await waitFor(() => {
    const pElement = screen.queryByText('test-file.jpg');
    expect(pElement).toBeInTheDocument();
    const imageLoader = screen.getByTestId('image-loader-element');
    expect(imageLoader.classList.contains('loaderShow')).toBeTruthy();
  });
});
