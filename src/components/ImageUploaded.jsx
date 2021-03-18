/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styles from './css/ImageUploaded.module.css';
import testImg from '../test.jpg';

const ImageUploaded = () => (
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
        src={testImg}
        alt="name"
      />
    </figure>
    <form className="w100 ">
      <div>
        <label className={styles.label}>Option 1</label>
        <div>
          <input
            className={styles.input}
            value="url image"
          />
          <button
            type="button"
            className={styles.buttonCopyLink}
          >
            Copy link
          </button>
        </div>
      </div>
      <div>
        <label className={styles.label}>Option 2</label>
        <div>
          <input
            className={styles.input}
            value="url image"
          />
          <button
            type="button"
            className={styles.buttonCopyLink}
          >
            Copy link
          </button>
        </div>
      </div>
    </form>
  </section>
);

export default ImageUploaded;
