import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import ImageLoader from '../ImageLoader';

test('render "test-image.jpg" as image name in <p/>', () => {
  const imgFake = 'test-image.jpg';
  const fakeClasses = 'test-class';

  render(<ImageLoader imgName={imgFake} classes={fakeClasses} />);

  const pElement = screen.getByText('test-image.jpg');
  expect(pElement).toBeInTheDocument();

  const imageLoader = screen.getByTestId('image-loader-element');
  expect(imageLoader.classList.contains('test-class')).toBeTruthy();
});
