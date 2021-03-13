import React from 'react';
import styles from './css/UploadImageContainer.module.css';

const UploadImageContainer = () => {
  return (
    <>
      <section className={"secondary-text-color text-center " + styles.section}>
        <div className={styles.dragAndDrogContainer}>
          <span className={"material-icons " + styles.iconFolderUpload}>
            drive_folder_upload
          </span>
          <p>Drag & Drop your image here</p>
        </div>
        <p>or</p>
        <button className={styles.buttonWrapper}>
          <label className={styles.labelButton}>Choose a file</label>
          <input type="file" className={styles.inputFile} />
        </button>
      </section>
    </>
  );
}

export default UploadImageContainer;
