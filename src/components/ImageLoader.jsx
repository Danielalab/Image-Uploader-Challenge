import React from 'react';
import PropTypes from 'prop-types';
import styles from './css/ImageLoader.module.css';

const ImageLoader = ({ imgName, classes }) => (
  <section className={`py-1 ${classes}`} data-testid="image-loader-element">
    <div className="d-flex align-items-center">
      <span className={`material-icons-round ${styles.iconFileUpload}`}>
        upload_file
      </span>
      <div className={styles.flexGrow}>
        <p className={`d-flex ${styles.nameFile}`}>
          {imgName}
          <span>0%</span>
        </p>
        <div className={styles.loaderBar} />
      </div>
    </div>
  </section>
);

export default ImageLoader;

ImageLoader.propTypes = {
  imgName: PropTypes.string,
  classes: PropTypes.string.isRequired,
};
