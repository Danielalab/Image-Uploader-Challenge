import firebase from 'firebase/app';
import firebaseConfig from '../firebase-config';

import 'firebase/storage';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const saveImageInFirebaseStorage = (file) => {
  const storageRef = firebase.storage().ref();
  const imageRef = storageRef.child(`images/${file.name}`);

  return imageRef.put(file)
    .then((snapshot) => snapshot.ref.getDownloadURL())
    .then((resp) => ({
      name: file.name,
      url: resp,
      _id: 2,
    }));
};

export default saveImageInFirebaseStorage;
