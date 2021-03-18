import React from 'react';
import styles from './css/UploadImageContainer.module.css';

const UploadImageContainer = () => {
  const dragOverHandler = (event) => {
    event.stopPropagation();
    event.preventDefault();
    // Style the drag-and-drop as a "copy file" operation.
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
  }

  return (
    <>
      <section className="secondary-text-color text-center ">
        <div
          className={styles.dragAndDrogContainer}
          onDragOver={dragOverHandler}
          onDrop={dropHandler}
        >
          <span className={"material-icons " + styles.iconFolderUpload}>
            drive_folder_upload
          </span>
          <p>Drag & Drop your image here</p>
        </div>
        <p>or</p>
        <button className={styles.buttonWrapper}>
          <label className={styles.labelButton}>Choose a file</label>
          <input
            type="file"
            className={styles.inputFile}
            onChange={changeInputFileHandler}
          />
        </button>
      </section>
    </>
  );
}

export default UploadImageContainer;
