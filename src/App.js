import React, { useState } from 'react';
import styles from './App.module.css';
import UploadImageContainer from './components/UploadImageContainer';
import ImageLoader from './components/ImageLoader';
import ImageUploaded from './components/ImageUploaded';

function App() {
  const [fileData, setFileData] = useState(null);

  return (
    <div className="container flex-column">
      <h1 className={styles.h1}>Upload your image</h1>
      <p className={styles.p}>File should be Jpg, Png ...</p>
      <div className="container flex-column section flex-row">
        <div className="section w-50">
          <UploadImageContainer fileLoadHandler={setFileData} />
          <ImageLoader imgName={(fileData || {}).name} />
        </div>
        <ImageUploaded />
      </div>
    </div>
  );
}

export default App;
