const saveImageInApi = (file) => {
  const formData = new FormData();
  formData.append('image', file, file.name);

  return fetch('https://frozen-wildwood-40744.herokuapp.com/images', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .catch(() => new Error('There was an error, try again'));
};

export default saveImageInApi;
