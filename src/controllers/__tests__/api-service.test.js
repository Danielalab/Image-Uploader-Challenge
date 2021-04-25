import saveImage from '../api-service';

const myFetchMock = jest.fn();
global.fetch = myFetchMock;

describe('saveImage', () => {
  it('Should return an error mesage', async () => {
    myFetchMock.mockImplementationOnce(() => Promise.reject(new Error('error')));
    try {
      const img = new File(['foo'], 'fake-image.png', {
        type: 'image/png',
      });
      await saveImage(img);
    } catch (error) {
      expect(error).toMatch('error');
      expect(error.message).toBe('There was an error, try again');
    }
  });

  it('Should return an object with the images urls', async () => {
    const img = new File(['foo'], 'fake-image.png', {
      type: 'image/png',
    });
    const fakeResponse = {
      json() {
        return ({
          name: 'fake-image.png',
          url: 'uploads/fake-image.png',
          _id: 1,
        });
      },
    };

    myFetchMock.mockImplementationOnce(() => Promise.resolve(fakeResponse));

    const response = await saveImage(img);
    expect(response).toEqual({
      name: 'fake-image.png',
      url: 'uploads/fake-image.png',
      _id: 1,
    });
  });
});
