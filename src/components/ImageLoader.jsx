import React from 'react';
import styles from "./css/ImageLoader.module.css";

const ImageLoader = () => {
  return (
    <section>
      <div className="d-flex align-items-center">
        <span className={"material-icons-round " + styles.iconFileUpload}>
          upload_file
        </span>
        <div className={styles.flexGrow}>
          <p className={"d-flex " + styles.nameFile}>name file <span>0%</span></p>
          <div className={styles.loaderBar}></div>
        </div>
      </div>
    </section>
  );
}

export default ImageLoader;
