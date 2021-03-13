import logo from './logo.svg';
import styles from './App.module.css';
import UploadImageContainer from './components/UploadImageContainer';
import ImageLoader from './components/ImageLoader';
import ImageUploaded from './components/ImageUploaded';

function App() {
  return (
    <div className="container">
      <h1 className={styles.h1}>Upload your image</h1>
      <p className={styles.p}>File should be Jpg, Png ...</p>
      <UploadImageContainer />
      <ImageLoader />
      <ImageUploaded />
    </div>
  );
}

export default App;
