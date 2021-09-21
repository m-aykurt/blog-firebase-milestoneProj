import firebase from "firebase/app";
// import "firebase/compat/auth";

// Initialize Firebase

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDsR6qq8hm6dDzNRCDQ4i2eZimRuCBFCOQ",
  authDomain: "milestoneproj-blog.firebaseapp.com",
  projectId: "milestoneproj-blog",
  storageBucket: "milestoneproj-blog.appspot.com",
  messagingSenderId: "1014837752432",
  appId: "1:1014837752432:web:ae104df8a74eeb80f8bab5",
});

export const createUser = async (email, password, displayName) => {
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        // var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // ..
      });
    const currentUser = firebase.auth().currentUser;
    await currentUser.updateProfile({ displayName });
  } catch (error) {
    alert(
      "There exists an account with this email. Please login with your password or continue with Google!"
    );
  }
};

export const signUpProvider = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  firebase.auth().signInWithPopup(provider);
};

export default firebaseApp;
