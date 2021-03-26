import React from 'react';
import PropTypes from 'prop-types';
import styles from './css/UploadImageContainer.module.css';

const UploadImageContainer = ({ fileLoadHandler }) => {
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
    fileLoadHandler(fileObject);
  };

  const changeInputFileHandler = (event) => {
    const fileList = event.target.files;
    const fileObject = fileList[0];
    fileLoadHandler(fileObject);
  };

  return (
    <>
      <section className="secondary-text-color text-center py-1">
        <div
          className={styles.dragAndDrogContainer}
          onDragOver={dragOverHandler}
          onDrop={dropHandler}
          data-testid="draganddrog-container"
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

UploadImageContainer.propTypes = {
  fileLoadHandler: PropTypes.func.isRequired,
};
