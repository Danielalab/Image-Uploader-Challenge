import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import UploadImageContainer from './components/UploadImageContainer';
import ImageLoader from './components/ImageLoader';
import saveImageInApi from './controllers/api-service';
import saveImageInFirebaseStorage from './controllers/firebase-storage-service';
import ImageUploaded from './components/ImageUploaded';

const uploadImage = (image) => Promise.all([
  saveImageInFirebaseStorage(image),
  saveImageInApi(image),
]);

const App = () => {
  const [fileData, setFileData] = useState(null);
  const [imageURLsUploaded, setImageURLsUploaded] = useState(null);
  let counter = 0;
  let intervalID;

  const stopInterval = () => {
    clearInterval(intervalID);
  };

  const startCounter = () => {
    intervalID = setInterval(() => {
      if (counter === 55 || counter === 100) {
        stopInterval();
      } else {
        counter += 1;
        document.querySelector('#load-counter').textContent = `${counter}%`;
      }
    }, 50);
  };

  useEffect(() => {
    if (fileData) {
      setImageURLsUploaded(null);
      startCounter();
      document.querySelector('#progress-bar').style.width = '55%';
      uploadImage(fileData)
        .then((data) => {
          counter += 1;
          startCounter();
          document.querySelector('#progress-bar').style.transitionDuration = '2.5s';
          document.querySelector('#progress-bar').style.width = '100%';
          setTimeout(() => {
            setFileData(null);
            setImageURLsUploaded(data);
            document.querySelector('#progress-bar').style.width = '0';
          }, 2800);
        });
    }
  }, [fileData]);

  return (
    <div className="container flex-column">
      <h1 className={styles.h1}>Upload your image</h1>
      <p className={styles.p}>File should be Jpg, Png ...</p>
      <div className="container flex-column section flex-row">
        <div className={`section w-50 ${styles.overflowHidden}`}>
          <UploadImageContainer fileLoadHandler={setFileData} />
          <ImageLoader
            classes={`${styles.loaderHide} ${fileData && styles.loaderShow}`}
            imgName={(fileData || {}).name}
          />
        </div>
        { imageURLsUploaded && <ImageUploaded images={imageURLsUploaded} />}
        { !imageURLsUploaded && <div className="container flex-column section w-50 minHeight"><p>Aún no hay una imagen subida</p></div>}
      </div>
    </div>
  );
};

export default App;
