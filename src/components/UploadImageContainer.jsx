import React from 'react';
import styles from './css/UploadImageContainer.module.css';

const UploadImageContainer = () => {
  const dragOverHandler = (event) => {
    event.stopPropagation();
    event.preventDefault();
    // Style the drag-and-drop as a "copy file" operation.
    // eslint-disable-next-line no-param-reassign
    event.dataTransfer.dropEffect = 'copy';
  };

  const dropHandler = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const fileList = event.dataTransfer.files;
    const fileObject = fileList[0];
    console.log(fileObject);
  };

  const changeInputFileHandler = (event) => {
    const fileList = event.target.files;
    const fileObject = fileList[0];
    console.log(fileObject);
  };

  return (
    <>
      <section className="secondary-text-color text-center ">
        <div
          className={styles.dragAndDrogContainer}
          onDragOver={dragOverHandler}
          onDrop={dropHandler}
        >
          <span className={`material-icons ${styles.iconFolderUpload}`}>
            drive_folder_upload
          </span>
          <p>Drag & Drop your image here</p>
        </div>
        <p>or</p>
        <button
          type="button"
          className={styles.buttonWrapper}
        >
          <label htmlFor="input-file" className={styles.labelButton}>
            Choose a file
            <input
              type="file"
              id="input-file"
              className={styles.inputFile}
              onChange={changeInputFileHandler}
            />
          </label>
        </button>
      </section>
    </>
  );
};

export default UploadImageContainer;
