import React from 'react';
import { render, screen } from '@testing-library/react';
import ImageUploaded from '../ImageUploaded';

test('renders the image uploaded and show urls', () => {
  const fakeUrls = [
    { _id: '1', name: 'fake-1', url: 'fakeurl.com' },
    { _id: '2', name: 'fake-2', url: 'fakeurl.net' },
  ];

  render(<ImageUploaded images={fakeUrls} />);

  const imgElement = screen.getByAltText(fakeUrls[0].name);
  expect(imgElement).toBeInTheDocument();

  const inputElementOption1 = screen.getByDisplayValue(fakeUrls[0].url);
  const inputElementOption2 = screen.getByDisplayValue(fakeUrls[0].url);

  expect(inputElementOption1).toBeInTheDocument();
  expect(inputElementOption2).toBeInTheDocument();
});
