const saveImageInApi = (file) => {
  const formData = new FormData();
  formData.append('image', file, file.name);

  return fetch('http://localhost:8080/images', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .catch(() => new Error('There was an error, try again'));
};

export default saveImageInApi;
