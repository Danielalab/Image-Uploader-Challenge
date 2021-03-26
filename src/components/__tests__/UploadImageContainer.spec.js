import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import UploadImageContainer from '../UploadImageContainer';

test('renders Drag&Drop container and "Choose file" input', () => {
  const fileLoadHandler = jest.fn();
  render(<UploadImageContainer fileLoadHandler={fileLoadHandler} />);
  const dragAndDropConatinerText = screen.getByText('Drag & Drop your image here');
  const inputElement = screen.getByLabelText('Choose a file');

  expect(dragAndDropConatinerText).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
});

test('sends selected file data', () => {
  const fileLoadHandler = jest.fn();
  render(<UploadImageContainer fileLoadHandler={fileLoadHandler} />);
  const inputElement = screen.getByLabelText('Choose a file');
  const containerElement = screen.getByTestId('draganddrog-container');

  fireEvent.change(inputElement, {
    target: {
      files: [{ name: 'fake-img.png' }],
    },
  });

  expect(fileLoadHandler.mock.calls.length).toBe(1);
  expect(fileLoadHandler).toHaveBeenCalledWith({ name: 'fake-img.png' });

  fireEvent.drop(containerElement, {
    dataTransfer: {
      files: [{ name: 'fake-img-2.png' }],
    },
  });

  expect(fileLoadHandler.mock.calls.length).toBe(2);
  expect(fileLoadHandler).toHaveBeenLastCalledWith({ name: 'fake-img-2.png' });

  const dataTransfer = {};

  expect(dataTransfer.dropEffect).toBe(undefined);

  fireEvent.dragOver(containerElement, {
    dataTransfer,
  });

  expect(dataTransfer.dropEffect).toBe('copy');
});
