/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import styles from './css/ImageUploaded.module.css';

const copy = (event) => {
  const input = event.target.previousSibling;
  input.select();
  document.execCommand('copy');
};

const ImageUploaded = ({ images }) => (
  <section className="container flex-column section w-50">
    <div>
      <span className={`material-icons-round ${styles.iconDone}`}>
        check_circle
      </span>
    </div>
    <h3>Uploaded Successfully!</h3>
    <figure className="my-1">
      <img
        className={`w100 ${styles.imgHeight}`}
        src={images[0].url}
        alt={images[0].name}
      />
    </figure>
    <form className="w100 ">
      { images.map((img, index) => (
        <div key={img._id}>
          <label className={styles.label}>
            Option
            {index + 1}
          </label>
          <div>
            <input
              className={styles.input}
              value={img.url}
              readOnly
            />
            <button
              type="button"
              className={styles.buttonCopyLink}
              onClick={copy}
            >
              Copy
            </button>
          </div>
        </div>
      )) }
    </form>
  </section>
);

export default ImageUploaded;

ImageUploaded.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    _id: PropTypes.number.isRequired,
  })).isRequired,
};
